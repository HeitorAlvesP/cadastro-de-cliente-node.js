import { FastifyInstance, FastifyPluginOptions, FastifyRequest, FastifyReply } from "fastify";
import { CreatCustemeControllers } from "./controllers/CreatCustemeControllers";
import { ListCustomerControllers } from './controllers/ListCustomerControllers'


export async function routes(fastify: FastifyInstance, options: FastifyPluginOptions) {
    
    fastify.get("/teste", async(request: FastifyRequest, reply: FastifyReply) => {
        return { ok: true }
    })

    fastify.post("/customer", async (request: FastifyRequest, replay: FastifyReply) => {
        return new CreatCustemeControllers().handle(request, replay)
    })

    fastify.get("/customers", async (request: FastifyRequest, replay: FastifyReply) => {
        return new ListCustomerControllers().handle(request, replay)
    })

}