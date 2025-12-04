import { FastifyInstance, FastifyRequest, FastifyReply } from "fastify";
import { ChatController } from "../controller/ChatController";
import { ChatService } from "../service/ChatService";

const chatService = new ChatService()
const controller = new ChatController(chatService);

export function chatRoutes(app: FastifyInstance) {
  
  app.get("/list-chats", (request: FastifyRequest, reply: FastifyReply) => {
    controller.getAllChats(request, reply)
  })

    app.post("/create", (request: FastifyRequest, reply: FastifyReply) => {
    controller.createProduto(request, reply);
  });

}
