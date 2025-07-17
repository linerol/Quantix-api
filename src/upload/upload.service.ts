import { Injectable, BadRequestException } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { BlobServiceClient } from '@azure/storage-blob';
import { extname } from 'path';
import { generateBlobSASQueryParameters, BlobSASPermissions, SASProtocol, StorageSharedKeyCredential } from '@azure/storage-blob';

@Injectable()
export class UploadService {
  private blobServiceClient: BlobServiceClient;
  private containerName: string;
  private accountName: string;
  private accountKey: string;

  constructor(private configService: ConfigService) {
    const account = this.configService.get<string>('AZURE_STORAGE_ACCOUNT_NAME')!;
    const key = this.configService.get<string>('AZURE_STORAGE_ACCOUNT_KEY')!;
    this.containerName = this.configService.get<string>('AZURE_BLOB_CONTAINER_NAME') || 'images';
    this.accountName = account;
    this.accountKey = key;
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

  /**
   * Génère une URL SAS temporaire pour un blob (lecture seule)
   * @param blobName Nom du blob (fichier)
   * @param expiresInMinutes Durée de validité en minutes (défaut 60)
   */
  generateSasUrl(blobName: string, expiresInMinutes = 60): string {
    const sharedKeyCredential = new StorageSharedKeyCredential(this.accountName, this.accountKey);
    const containerClient = this.blobServiceClient.getContainerClient(this.containerName);
    const blobClient = containerClient.getBlobClient(blobName);
    const expiresOn = new Date(new Date().valueOf() + expiresInMinutes * 60 * 1000);
    const sas = generateBlobSASQueryParameters({
      containerName: this.containerName,
      blobName,
      permissions: BlobSASPermissions.parse('r'),
      startsOn: new Date(),
      expiresOn,
      protocol: SASProtocol.Https,
    }, sharedKeyCredential).toString();
    return `${blobClient.url}?${sas}`;
  }
} 