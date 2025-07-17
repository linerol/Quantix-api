import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, UploadedFile, UseInterceptors } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse, ApiBody, ApiParam, ApiBearerAuth, ApiConsumes } from '@nestjs/swagger';
import { FileInterceptor } from '@nestjs/platform-express';
import { ProductsService } from './products.service';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { CreateProductDto, UpdateProductDto, ProductResponseDto } from './dto/product.dto';
import { CurrentUser } from '../auth/decorators/current-user.decorator';
import { UploadService } from '../upload/upload.service';
import { Express } from 'express';
import { CreateProductWithImageDto } from './dto/create-product-with-image.dto';

@ApiTags('Produits')
@ApiBearerAuth()
@Controller('products')
@UseGuards(JwtAuthGuard)
export class ProductsController {
  constructor(
    private readonly productsService: ProductsService,
    private readonly uploadService: UploadService,
  ) {}

  @Post()
  @ApiOperation({ summary: "Créer un nouveau produit pour l'utilisateur connecté" })
  @ApiConsumes('multipart/form-data')
  @ApiBody({ type: CreateProductWithImageDto })
  @UseInterceptors(FileInterceptor('image'))
  async create(
    @Body() createProductDto: CreateProductDto,
    @UploadedFile() file: Express.Multer.File,
    @CurrentUser() user: any,
  ) {
    console.log('user:', user);
    let imageUrl: string | undefined = undefined;
    if (file) {
      imageUrl = await this.uploadService.uploadImage(file);
    }
    return this.productsService.create({ ...createProductDto, imageUrl }, user.userId);
  }

  @Get()
  @ApiOperation({ summary: 'Récupérer tous les produits de l\'utilisateur connecté' })
  @ApiResponse({
    status: 200,
    description: 'Liste des produits récupérée',
    type: [ProductResponseDto]
  })
  @ApiResponse({
    status: 401,
    description: 'Non autorisé - Token JWT requis'
  })
  findAll(@CurrentUser() user: any) {
    return this.productsService.findAll(user.userId);
  }

  @Get(':id')
  @ApiOperation({ summary: 'Récupérer un produit par ID (appartenant à l\'utilisateur connecté)' })
  @ApiParam({ name: 'id', description: 'ID du produit', example: '507f7786d799439011' })
  @ApiResponse({
    status: 200,
    description: 'Produit trouvé',
    type: ProductResponseDto
  })
  @ApiResponse({
    status: 404,
    description: 'Produit non trouvé'
  })
  @ApiResponse({
    status: 401,
    description: 'Non autorisé - Token JWT requis'
  })
  findOne(@Param('id') id: string, @CurrentUser() user: any) {
    return this.productsService.findOne(id, user.userId);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Mettre à jour un produit (appartenant à l\'utilisateur connecté)' })
  @ApiParam({ name: 'id', description: 'ID du produit', example: '507f7786d79943911' })
  @ApiBody({ type: UpdateProductDto })
  @ApiResponse({
    status: 200,
    description: 'Produit mis à jour avec succès',
    type: ProductResponseDto
  })
  @ApiResponse({
    status: 404,
    description: 'Produit non trouvé'
  })
  @ApiResponse({
    status: 401,
    description: 'Non autorisé - Token JWT requis'
  })
  update(@Param('id') id: string, @Body() updateProductDto: UpdateProductDto, @CurrentUser() user: any) {
    return this.productsService.update(id, updateProductDto, user.userId);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Supprimer un produit (appartenant à l\'utilisateur connecté)' })
  @ApiParam({ name: 'id', description: 'ID du produit', example: '507f7786d799439011' })
  @ApiResponse({
    status: 200,
    description: 'Produit supprimé avec succès',
    type: ProductResponseDto
  })
  @ApiResponse({
    status: 404,
    description: 'Produit non trouvé'
  })
  @ApiResponse({
    status: 401,
    description: 'Non autorisé - Token JWT requis'
  })
  remove(@Param('id') id: string, @CurrentUser() user: any) {
    return this.productsService.remove(id, user.userId);
  }
} 