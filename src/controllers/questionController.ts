import { Request, Response } from 'express';

export async function createQuestion(req: Request, res: Response) {
  const {askedBy, question} = req.body;
}

export async function createAnswer(req: Request, res: Response) {
  // TODO
}

export async function get(req: Request, res: Response) {
  // TODO
}

export async function getById(req: Request, res: Response) {
  // TODO
}
