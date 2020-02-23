import { Request, Response } from "express";

export let allArticles = (req: Request, res: Response) => {
  res.send("Returns all articles");
};

export let getArticle = (req: Request, res: Response) => {
  res.send("Returns one article");
};

export let deleteArticle = (req: Request, res: Response) => {
  res.send("Returns one article");
};

export let updateArticle = (req: Request, res: Response) => {
  res.send("Returns one article");
};

export let addArticle = (req: Request, res: Response) => {
  res.send("Returns one article");
};

