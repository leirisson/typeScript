import { fastify, FastifyReply, FastifyRequest } from "fastify";
import { indexRoutes } from "./routes";
import { chatRoutes } from "./routes/chatRoutes";

const app = fastify()




// registra rotas
app.register(indexRoutes)
app.register(chatRoutes, {prefix: "api"})

async function startBuildApp(){
    try {
        app.listen({port: 3334})
        console.log(`http://localhost:3334`)
    } catch (error) {
        console.log(`Deu um erro: ${error}`)
    }
}


startBuildApp()