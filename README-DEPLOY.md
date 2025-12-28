Deployment instructions

Quick client-only deploy to Vercel

1. Push this repo to GitHub.
2. On Vercel, import the project and set:
   - Root Directory: (leave blank)
   - Build Command: `npm run vercel-build`
   - Output Directory: `dist`
3. (Optional) Set environment variable `VITE_API_BASE` to your API URL if you host the API separately.

Notes
- `npm run vercel-build` runs `vite build` to produce client assets in `dist`.
- The frontend will call `${import.meta.env.VITE_API_BASE || ''}/api/...` for API requests.

Hosting the server/API

If you want the API available (projects and contact endpoints), host the server separately (Render, Railway, Fly, etc.) and set `VITE_API_BASE` in Vercel to point to it.

Example: Render
1. Create a Web Service on Render linked to this repo.
2. Set Build Command: `npm run build`
3. Set Start Command: `node dist/index.cjs`
4. Set environment variables if needed.

After the server is deployed, set `VITE_API_BASE=https://your-server.example.com` in Vercel environment variables and redeploy the frontend.
