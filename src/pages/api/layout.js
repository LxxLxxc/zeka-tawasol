const defaultLayout = [
  'الرئيسية', 'المتجر', 'المشاريع', 'المجموعات', 'المحادثات', 'البريد'
];

let layout = [...defaultLayout];

export default function handler(req, res) {
  switch (req.method) {
    case 'GET':
      return res.status(200).json(layout);

    case 'POST': {
      if (!Array.isArray(req.body) || req.body.some((item) => typeof item !== 'string')) {
        return res.status(400).json({ error: 'Invalid layout format' });
      }
      layout = [...req.body];
      return res.status(200).json({ success: true });
    }

    case 'DELETE':
      layout = [...defaultLayout];
      return res.status(200).json({ reset: true });

    default:
      return res.status(405).json({ error: 'Method not allowed' });
  }
}
