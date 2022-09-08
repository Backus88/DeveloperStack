import { Questions } from '@prisma/client'
import client from '../config/database'

export type InsertQuestions = Omit<Questions, "id">


export async function creatQuestion (question : InsertQuestions){
    const questionCallback = await client.questions.create(
        {data:question}
    );
    return questionCallback;
}
