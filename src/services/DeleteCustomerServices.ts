import prismaClient from "../prisma";

interface DeleCustomersProps{
    id: string;
}

class DeleteCustomerServices{
    async execute({ id }: DeleCustomersProps){

        if(!id){
            throw new Error('Solicição Invalida')
        }

        const findCustomer = await prismaClient.customer.findFirst({
            where:{
                id: id
            }
        })

        if(!findCustomer){
            throw new Error('Cliente não existe')
        }

        await prismaClient.customer.delete({
            where:{
                id: findCustomer.id
            }
        })

        return { message: 'Deletado com sucesso' }
    }

}

export { DeleteCustomerServices }