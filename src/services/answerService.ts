import { creatAnswer, InsertAnswers } from "../repositories/answerRepository";

export async function insertAnswer (answer : InsertAnswers, questionId :number){
    await creatAnswer(answer, questionId);
}
