import { Questions } from '@prisma/client'
import client from '../config/database'

export type InsertQuestions = Omit<Questions, "id">


export async function creatQuestion (question : InsertQuestions){
     await client.questions.create(
        {data:question}
    );
}

export async function getQuestions (){
    return await client.questions.findMany()
}

export async function getQuestion(questionId: number){
    return await client.questions.findUnique({
        where:{
            id:questionId
        },
        include :{
            answer: {
                select:{
                    answeredBy:true,
                    answer:true
                }
            }
        }
    })
}