import { FastifyRequest, FastifyReply } from "fastify";
import { CreateCustumesServices } from '../services/CreateCustumesServices'


class CreatCustemeControllers {
    async handle(request: FastifyRequest, reply: FastifyReply){
        const { name, email } = request.body as { name: string, email: string}
        console.log(name)
        console.log(email)

        const customerService = new CreateCustumesServices()

        const customer = await customerService.execute({ name, email })

        reply.send(customer)
    }
}

export { CreatCustemeControllers }
