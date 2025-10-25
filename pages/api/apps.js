let apps = [];

export default function handler(req, res) {
  switch (req.method) {
    case 'GET':
      return res.status(200).json(apps);

    case 'POST': {
      const { projectName, user, features, icon = '🧠', status = 'Draft' } = req.body;

      if (
        !projectName ||
        typeof projectName !== 'string' ||
        !user ||
        typeof user !== 'string' ||
        !Array.isArray(features)
      ) {
        return res.status(400).json({ error: 'Missing or invalid fields' });
      }

      const newApp = {
        projectName,
        user,
        features,
        icon,
        status,
        createdAt: new Date().toISOString()
      };

      apps.push(newApp);
      return res.status(201).json(newApp);
    }

    default:
      return res.status(405).json({ error: 'Method not allowed' });
  }
}
