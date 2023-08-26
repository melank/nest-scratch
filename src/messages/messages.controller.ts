import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { CreateMessageDto } from './dtos/create-message.dto';
import { MessagesService } from './messages.service';

@Controller('messages')
export class MessagesController {
  messagesService: MessagesService;

  constructor() {
    // 一時的にDIを使わずに依存関係を作り実装
    // 後で削除する
    this.messagesService = new MessagesService();
  }

  @Get('/')
  listMessages() {
    return this.messagesService.findAll();
  }

  @Post('/')
  createMessage(@Body() body: CreateMessageDto) {
    return this.messagesService.create(body.content);
  }

  @Get('/:id')
  GetMessage(@Param() id: string) {
    return this.messagesService.findOne(id);
  }
}
