import { Controller, Get, Param, Req } from '@nestjs/common';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { Request } from 'express';

@ApiTags('items')
@Controller('items')
export class ItemsController {
  @Get()
  @ApiResponse({ status: 200, description: 'All items' })
  // eslint-disable-next-line @typescript-eslint/no-unused-vars -- WIP
  findAll(@Req() request: Request): string {
    return 'return all items';
  }

  @Get(':id')
  findOne(@Param() params: { id: string }) {
    return `return an item with id of ${params.id}`;
  }
}
