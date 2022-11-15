import { Request, Response } from "express";
import { Category } from "../../models/Category";

export const listCategories = async (req: Request, res: Response) => {
  const categories = await Category.find();

  res.json(categories);
};
