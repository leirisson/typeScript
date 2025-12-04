import { FastifyReply, FastifyRequest } from "fastify";
import { ChatService } from "../service/ChatService";

export class ChatController {
  constructor(private chatService: ChatService) {}

  getAllChats(_: FastifyRequest, reply: FastifyReply){
    return reply.send(this.chatService.getAllChats())
  }
  
  createProduto(resquest: FastifyRequest, reply: FastifyReply) {
    const { message } = resquest.body as { message: string };
    reply.send({ message });
  }
}
