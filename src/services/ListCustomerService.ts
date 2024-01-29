import prismaClient from "../prisma";

class ListCustomerService{
    async execute(){
        const custumes = await prismaClient.customer.findMany()
        return custumes;
    }

}

export { ListCustomerService }