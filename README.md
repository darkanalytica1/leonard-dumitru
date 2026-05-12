# Leonard Dumitru CV / Portfolio Site

Static CV/portfolio page served by a minimal Next.js shell.

## Local development

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Deploy to Vercel

Recommended settings:

```txt
Framework: Next.js
Root Directory: ./
Install Command: npm install
Build Command: npm run build
Node.js: 22.x or any >=20.9
```

The app redirects `/` to `/index.html`, which is stored in `public/index.html`.

## Profile image

Upload your profile photo to the GitHub repository under `public/` using one of these names:

```txt
public/profile.jpg
public/profile.png
public/profile.webp
```

The site automatically tries these paths in order:

```txt
/profile.webp
/profile.jpg
/profile.png
/avatar.webp
/avatar.jpg
/avatar.png
/profile-placeholder.svg
```

So the safest option is:

```txt
public/profile.jpg
```

Then commit and push:

```bash
git add public/profile.jpg
git commit -m "Add profile image"
git push
```

Vercel will redeploy automatically.

## Dependency notes

- No `package-lock.json` is included to avoid environment-specific registry locks.
- `.npmrc` forces the public npm registry.
- No external fonts or icon CDNs are required for the page design.
