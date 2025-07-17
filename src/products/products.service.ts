import { Injectable, NotFoundException, ForbiddenException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Product, ProductDocument } from './product.schema';
import { CreateProductDto, UpdateProductDto } from './dto/product.dto';

@Injectable()
export class ProductsService {
  constructor(@InjectModel(Product.name) private productModel: Model<ProductDocument>) {
  }

  async create(createProductDto: CreateProductDto, userId: string): Promise<Product> {
    const product = new this.productModel({ ...createProductDto, userId });
    return product.save();
  }

  async findAll(userId: string): Promise<Product[]> {
    return this.productModel.find({ userId }).exec();
  }

  async findOne(id: string, userId: string): Promise<Product> {
    const product = await this.productModel.findOne({ _id: id, userId }).exec();
    if (!product) {
      throw new NotFoundException('Produit non trouvé');
    }
    return product;
  }

  async update(id: string, updateProductDto: UpdateProductDto, userId: string): Promise<Product> {
    const product = await this.productModel.findOneAndUpdate(
      { _id: id, userId },
      updateProductDto,
      { new: true }
    ).exec();
    if (!product) {
      throw new NotFoundException('Produit non trouvé');
    }
    return product;
  }

  async remove(id: string, userId: string): Promise<Product> {
    const product = await this.productModel.findOneAndDelete({ _id: id, userId }).exec();
    if (!product) {
      throw new NotFoundException('Produit non trouvé');
    }
    return product;
  }

  async deleteAllByUserId(userId: string): Promise<void> {
    await this.productModel.deleteMany({ userId }).exec();
  }
} 