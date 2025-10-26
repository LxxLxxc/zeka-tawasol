let projects = [];
let apps = [];

export default function handler(req, res) {
  switch (req.method) {
    case 'GET':
      return res.status(200).json(projects);

    case 'POST': {
      const { user, name, status, features = ['Chat', 'Notifications'], icon = '🧠' } = req.body;

      if (
        !user || typeof user !== 'string' ||
        !name || typeof name !== 'string' ||
        !status || typeof status !== 'string'
      ) {
        return res.status(400).json({ error: 'Missing or invalid fields' });
      }

      const newProject = {
        user,
        name,
        status,
        createdAt: new Date().toISOString()
      };

      const newApp = {
        projectName: name,
        user,
        features,
        icon,
        status,
        createdAt: newProject.createdAt
      };

      projects.push(newProject);
      apps.push(newApp);

      return res.status(201).json({ project: newProject, app: newApp });
    }

    default:
      return res.status(405).json({ error: 'Method not allowed' });
  }
}
