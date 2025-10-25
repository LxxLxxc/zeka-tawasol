let posts = [];

export default function handler(req, res) {
  if (req.method === 'GET') {
    res.status(200).json(posts);
  } else if (req.method === 'POST') {
    const { author, content } = req.body;
    if (!author || !content) {
      return res.status(400).json({ error: 'Missing fields' });
    }
    const newPost = { author, content };
    posts.unshift(newPost);
    res.status(201).json(newPost);
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}
