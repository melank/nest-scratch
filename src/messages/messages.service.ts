import { MessagesRepository } from './messages.repository';

export class MessagesService {
  messagesRepository: MessagesRepository;

  constructor() {
    // 一時的にDIを使わずに依存関係を作り実装
    // 後で削除する
    this.messagesRepository = new MessagesRepository();
  }

  findOne(id: string) {
    return this.messagesRepository.findOne(id);
  }

  findAll() {
    return this.messagesRepository.findAll();
  }

  create(content: string) {
    return this.messagesRepository.create(content);
  }
}
