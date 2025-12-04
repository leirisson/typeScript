import { FastifyInstance, FastifyReply, FastifyRequest } from "fastify"
import { chatRoutes } from "./chatRoutes";




export function indexRoutes(app: FastifyInstance){
    /**
     *    rota raiz
     */
    app.get('/', (request :FastifyRequest, reply: FastifyReply) => {
        reply.send({status: 200, message:"api funcionando."})
    })


    // Conectando outro plugin dentro deste
    app.register(chatRoutes, { prefix: "/chat" });

}