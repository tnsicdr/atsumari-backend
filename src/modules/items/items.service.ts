import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Item } from 'src/entities/item.entity';
import { CreateItemDto } from 'src/shared/types/dtos';
import { DataSource, Repository } from 'typeorm';

@Injectable()
export class ItemsService {
  constructor(
    private dataSource: DataSource,
    @InjectRepository(Item) private itemsRepository: Repository<Item>,
  ) {}

  findAll(): Promise<Item[]> {
    return this.itemsRepository.find();
  }

  findOne(id: number): Promise<Item | null> {
    return this.itemsRepository.findOneBy({ id });
  }

  async remove(id: number): Promise<void> {
    await this.itemsRepository.delete(id);
  }

  async createOne(createItemDto: CreateItemDto): Promise<Item> {
    const item = new Item();

    item.name = createItemDto.name;

    const queryRunner = this.dataSource.createQueryRunner();

    await queryRunner.connect();
    await queryRunner.startTransaction();

    try {
      await queryRunner.manager.save(item);

      await queryRunner.commitTransaction();

      return item;
    } catch (err) {
      console.error(err);
      await queryRunner.rollbackTransaction();
    } finally {
      await queryRunner.release();
    }
  }
}
