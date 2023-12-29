import { Body, Controller, Get, Param, Post, Req } from '@nestjs/common';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { Request } from 'express';
import { ItemsService } from './items.service';
import { CreateItemDto } from 'src/shared/types/dtos';

@ApiTags('items')
@Controller('items')
export class ItemsController {
  constructor(private readonly itemsService: ItemsService) {}

  @Get()
  @ApiResponse({ status: 200, description: 'All items' })
  // eslint-disable-next-line @typescript-eslint/no-unused-vars -- WIP
  findAll(@Req() request: Request) {
    return this.itemsService.findAll();
  }

  @Get(':id')
  findOne(@Param() params: { id: number }) {
    return this.itemsService.findOne(params.id);
  }

  @Post()
  createOne(@Body() body: CreateItemDto) {
    return this.itemsService.createOne(body);
  }
}
