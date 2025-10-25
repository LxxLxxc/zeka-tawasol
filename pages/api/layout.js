let layout = [...defaultLayout];

export default function handler(req, res) {
  if (req.method === 'GET') {
    res.status(200).json(layout);
  } else if (req.method === 'POST') {
    layout = req.body;
    res.status(200).json({ success: true });
  } else if (req.method === 'DELETE') {
    layout = [...defaultLayout];
    res.status(200).json({ reset: true });
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}

const defaultLayout = [
  'الرئيسية', 'المتجر', 'المشاريع', 'المجموعات', 'المحادثات', 'البريد'
];
