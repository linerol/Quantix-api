import { ApiProperty } from '@nestjs/swagger';

export class CreateProductWithImageDto {
  @ApiProperty({ type: 'string', format: 'binary', required: false, description: 'Image du produit' })
  image?: any;

  @ApiProperty()
  name: string;

  @ApiProperty()
  price: number;

  @ApiProperty()
  quantity: number;
} 