import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

export enum ItemType {
  BOOK = 'book',
  ITEM = 'item',
}

@Entity()
export class Item {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  manufacturer: string | null;

  @Column()
  publisher: string | null;

  @Column()
  productCode: string | null;

  @Column()
  qty: number;

  @Column()
  qty_pending: number;

  @Column({ type: 'enum', enum: ItemType, default: ItemType.ITEM })
  type: ItemType;
}
