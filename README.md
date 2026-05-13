# Leonard Dumitru — CV / Portfolio Site

Modern high-tech CV site built with Next.js App Router.

## Profile image

Upload your image to one of these paths:

```txt
public/profile.webp
public/profile.jpg
public/profile.png
public/avatar.webp
public/avatar.jpg
public/avatar.png
```

The site automatically falls back to `public/profile-placeholder.svg` if no profile image is found.

Recommended:

```bash
cp ~/Desktop/profile.jpg public/profile.jpg
git add public/profile.jpg
git commit -m "Add profile image"
git push
```

## Deploy on Vercel

Recommended settings:

```txt
Framework: Next.js
Root Directory: ./
Install Command: npm install
Build Command: npm run build
Node.js: >=20.9.0
```

This repo intentionally does not include `package-lock.json` and uses `.npmrc` with the public npm registry.
