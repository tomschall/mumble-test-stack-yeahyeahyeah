import type { NextApiRequest, NextApiResponse } from 'next';

type Data = {
  name: string;
};

export default function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  const { method, query } = req;
  console.info({ method, query });

  switch (method) {
    case 'GET':
      // Get data
      res.status(200).json({ name: `Profile view ${query.id}` });
      break;

    case 'POST':
      // Post data
      res.status(200).json({ name: 'POST successful' });
      break;

    default:
      res.setHeader('Allow', ['GET', 'POST']);
      res.status(405).end(`Method ${method} Not Allowed`);
  }
}
