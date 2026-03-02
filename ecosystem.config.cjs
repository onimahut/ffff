module.exports = {
  apps: [
    {
      name: 'football-frontend',
      script: 'npx',
      args: 'vite preview --host 0.0.0.0 --port 3000',
      cwd: '/home/user/webapp/frontend',
      env: {
        NODE_ENV: 'production',
        PORT: 3000,
      },
      watch: false,
      instances: 1,
      exec_mode: 'fork',
    },
  ],
};
