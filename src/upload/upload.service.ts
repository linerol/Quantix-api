import { Injectable, BadRequestException } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { BlobServiceClient } from '@azure/storage-blob';
import { extname } from 'path';

@Injectable()
export class UploadService {
  private blobServiceClient: BlobServiceClient;
  private containerName: string;
  private accountName: string;

  constructor(private configService: ConfigService) {
    const account = this.configService.get<string>('AZURE_STORAGE_ACCOUNT_NAME')!;
    const key = this.configService.get<string>('AZURE_STORAGE_ACCOUNT_KEY')!;
    this.containerName = this.configService.get<string>('AZURE_BLOB_CONTAINER_NAME') || 'images';
    this.accountName = account;
    if (!account || !key) {
      throw new Error('Azure Storage account name/key manquants dans .env');
    }
    const connStr = `DefaultEndpointsProtocol=https;AccountName=${account};AccountKey=${key};EndpointSuffix=core.windows.net`;
    this.blobServiceClient = BlobServiceClient.fromConnectionString(connStr);
  }

  async uploadImage(file: any): Promise<string> {
    if (!file) throw new BadRequestException('Aucun fichier fourni');
    const ext = extname(file.originalname);
    const blobName = `${Date.now()}-${Math.round(Math.random() * 1e9)}${ext}`;
    const containerClient = this.blobServiceClient.getContainerClient(this.containerName);
    const blockBlobClient = containerClient.getBlockBlobClient(blobName);
    await blockBlobClient.uploadData(file.buffer, {
      blobHTTPHeaders: { blobContentType: file.mimetype },
    });
    // URL publique
    return `https://${this.accountName}.blob.core.windows.net/${this.containerName}/${blobName}`;
  }
} 