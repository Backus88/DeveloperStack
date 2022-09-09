import client from '../config/database'
import { Answers } from '@prisma/client';

export type InsertAnswers = Omit<Answers, "id"| "questionId">


export async function creatAnswer (answer : InsertAnswers, questionId: number){
     await client.answers.create(
        {data:{ ... answer, questionId}}
    );
}

