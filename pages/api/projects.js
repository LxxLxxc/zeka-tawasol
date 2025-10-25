let projects = [];

export default function handler(req, res) {
  if (req.method === 'GET') {
    res.status(200).json(projects);
  } else if (req.method === 'POST') {
    const { user, name, status } = req.body;
    if (!user || !name || !status) {
      return res.status(400).json({ error: 'Missing fields' });
    }
    const newProject = { user, name, status };
    projects.push(newProject);
    res.status(201).json(newProject);
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}
