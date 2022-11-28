import { NextApiRequest, NextApiResponse } from "next";
import project from "../../public/projects.json";

export type Data = {
  name: string;
  id: number;
  url: string;
  description: string;
};

export default function projects(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const data: any = project;
  res.status(200).json(data);
}
