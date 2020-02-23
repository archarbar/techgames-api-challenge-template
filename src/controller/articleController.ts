import { Request, Response } from "express";
import Article from "./../server";

export let allArticles = (req: Request, res: Response) => {
  res.send("Returns all articles");
};

export let getArticle = (req: Request, res: Response) => {
  res.send("Returns one article");
};

export let deleteArticle = (req: Request, res: Response) => {
    let article = Article.deleteOne({ _id: req.params.id }, (err: any) => {
        if (err) {
          res.send(err);
        } else {
          res.send("Successfully Deleted Article");
        }
      });
};

export let updateArticle = (req: Request, res: Response) => {
  console.log(req.body);
  let article = Article.findByIdAndUpdate(
    req.params.id,
    req.body,
    (err: any, book: any) => {
      if (err) {
        res.send(err);
      } else {
        res.send("Successfully updated article!");
      }
    }
  );
};

export let addArticle = (req: Request, res: Response) => {
    var article = new Article(req.body);

    article.save((err: any) => {
      if (err) {
        res.send(err);
      } else {
        res.send(article);
      }
    });
};

