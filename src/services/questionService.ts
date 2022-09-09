import { InsertQuestions, creatQuestion, getQuestions, getQuestion } from "../repositories/questionRepository";


export async function insertQuestion (questions : InsertQuestions){
    await creatQuestion(questions);
}

export async function showQuestions (){
    return await getQuestions();
}

export async function showQuestionByid (questionId: number){
    return await getQuestion(questionId);
}