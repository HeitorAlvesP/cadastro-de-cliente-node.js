import prismaClient from "../prisma";

interface CreatCustemerProps{
    name: string;
    email: string
}

class CreateCustumesServices{
    async execute({ name, email}: CreatCustemerProps){

        if(!name || !email){
            throw new Error("Preencha Todos os campos")
        }

        const customer = await prismaClient.customer.create({
            data:{
                name,
                email,
                status: true
            }
        })

        return customer
    }

}

export {CreateCustumesServices}

