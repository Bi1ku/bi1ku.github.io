# Owen Shi — Engineering & Projects

A project-focused portfolio, built with React, TypeScript, and vinext. Projects, experience, and background are visible on a single page.

## Development

Run `npm ci`, then `npm run dev`. Run `npm run build` for the deployment build and `npm test` for the server-rendering smoke test.

## Content

The biography, experience, education, and skill details come from Owen_Shi_Resume.pdf, with current Harvard club roles supplied directly by Owen in October 2026. Featured repositories were checked against https://github.com/Bi1ku on September 14, 2026. Edit `app/page.tsx` to update project and experience content, and `app/globals.css` to change the theme. Replace `public/Owen_Shi_Resume.pdf` to update the download.

The third project is Owen’s C6-5 model rocket, with project details and media supplied in October 2026. Its Onshape CAD image and browser-compatible H.264/AAC launch video live in `public/projects/rocket/`; the project section includes an inline CAD preview and a playable launch video.

## GitHub Pages

The public website is https://bi1ku.github.io/. `npm run dev:pages` starts the static development server; `npm run build:pages` creates `dist-pages/`. GitHub Actions builds and deploys each push to `main`. Select **GitHub Actions** under **Settings → Pages → Source** in the repository.

This build reuses the same portfolio component and stylesheet without requiring a server. The original vinext/Sites build remains available through `npm run build`.
