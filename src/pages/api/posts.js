let posts = [];

export default function handler(req, res) {
  switch (req.method) {
    case 'GET':
      return res.status(200).json(posts);

    case 'POST': {
      const { author, content, role = 'user' } = req.body;

      if (
        !author || typeof author !== 'string' ||
        !content || typeof content !== 'string'
      ) {
        return res.status(400).json({ error: 'Missing or invalid fields' });
      }

      const newPost = {
        author,
        role,
        content,
        createdAt: new Date().toISOString()
      };

      posts.unshift(newPost);
      return res.status(201).json(newPost);
    }

    default:
      return res.status(405).json({ error: 'Method not allowed' });
  }
}
