let apps = [];

export default function handler(req, res) {
  if (req.method === 'GET') {
    res.status(200).json(apps);
  } else if (req.method === 'POST') {
    const { projectName, user, features } = req.body;
    if (!projectName || !user || !features) {
      return res.status(400).json({ error: 'Missing fields' });
    }
    const newApp = { projectName, user, features, createdAt: new Date().toISOString() };
    apps.push(newApp);
    res.status(201).json(newApp);
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}
