import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNumber, IsOptional, Min } from 'class-validator';

export class CreateProductDto {
  @ApiProperty({
    description: 'Nom du produit',
    example: 'Laptop Gaming',
  })
  @IsString()
  name: string;

  @ApiProperty({
    description: 'Prix du produit',
    example: 999.99,
    minimum: 0,
  })
  @IsNumber()
  @Min(0)
  price: number;

  @ApiProperty({
    description: 'Quantité en stock',
    example: 50,
    minimum: 0,
  })
  @IsNumber()
  @Min(0)
  quantity: number;

  @ApiProperty({
    description: 'URL de l\'image du produit (optionnel)',
    example: 'https://example.com/images/laptop.jpg',
    required: false,
  })
  @IsOptional()
  @IsString()
  imageUrl?: string;
}

export class UpdateProductDto {
  @ApiProperty({
    description: 'Nom du produit',
    example: 'Laptop Gaming Pro',
    required: false,
  })
  @IsOptional()
  @IsString()
  name?: string;

  @ApiProperty({
    description: 'Prix du produit',
    example: 1299.99,
    minimum: 0,
    required: false,
  })
  @IsOptional()
  @IsNumber()
  @Min(0)
  price?: number;

  @ApiProperty({
    description: 'Quantité en stock',
    example: 75,
    minimum: 0,
    required: false,
  })
  @IsOptional()
  @IsNumber()
  @Min(0)
  quantity?: number;

  @ApiProperty({
    description: 'URL de l\'image du produit',
    example: 'https://example.com/images/laptop-pro.jpg',
    required: false,
  })
  @IsOptional()
  @IsString()
  imageUrl?: string;
}

export class ProductResponseDto {
  @ApiProperty({
    description: 'ID unique du produit',
    example: '507f77cf86cd799439011',
  })
  _id: string;

  @ApiProperty({
    description: 'Nom du produit',
    example: 'Laptop Gaming',
  })
  name: string;

  @ApiProperty({
    description: 'Prix du produit',
    example: 9990.99,
  })
  price: number;

  @ApiProperty({
    description: 'Quantité en stock',
    example: 50,
  })
  quantity: number;

  @ApiProperty({
    description: 'URL de l\'image du produit',
    example: 'https://example.com/images/laptop.jpg',
    required: false,
  })
  imageUrl?: string;

  @ApiProperty({
    description: 'ID de l\'utilisateur propriétaire',
    example: '507f778639012',
  })
  userId: string;

  @ApiProperty({
    description: 'Date de création',
    example: '2024-01-15T10:30',
  })
  createdAt: Date;

  @ApiProperty({
    description: 'Date de dernière modification',
    example: '2024-01-15T10:30Z',
  })
  updatedAt: Date;
} 