import { Request, Response } from 'express';
import { InsertQuestions } from '../repositories/questionRepository';
import { insertQuestion, showQuestions, showQuestionByid } from '../services/questionService';
import { InsertAnswers } from '../repositories/answerRepository';
import { insertAnswer } from '../services/answerService';

export async function createQuestion(req: Request, res: Response) {
  const questions : InsertQuestions  = req.body;
  await insertQuestion(questions);
  res.sendStatus(201);
}

export async function createAnswer(req: Request, res: Response) {
  const answers : InsertAnswers = req.body;
  const questionId = parseInt(req.params.id);
  await insertAnswer(answers, questionId);
  res.sendStatus(201);
}

export async function get(req: Request, res: Response) {
  const questions = await showQuestions();
  res.status(200).send(questions);
}

export async function getById(req: Request, res: Response) {
  const questionId = parseInt(req.params.id);
  console.log(questionId);
  const questions = await showQuestionByid(questionId);
  res.status(200).send(questions)
}
