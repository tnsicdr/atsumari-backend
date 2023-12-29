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

  @Column({ nullable: true })
  manufacturer: string | null;

  @Column({ nullable: true })
  publisher: string | null;

  @Column({ nullable: true })
  productCode: string | null;

  @Column({ default: 0 })
  qty: number;

  @Column({ default: 0 })
  qty_pending: number;

  @Column({ type: 'enum', enum: ItemType, default: ItemType.ITEM })
  type: ItemType;
}
