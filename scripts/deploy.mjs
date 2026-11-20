import { execSync } from 'node:child_process'

process.env.VITE_BASE = '/pink-clean/'
execSync('npm run build', { stdio: 'inherit', env: process.env })
execSync('npx gh-pages -d dist -m "Deploy Pink Clean site"', {
  stdio: 'inherit',
  env: process.env,
})
