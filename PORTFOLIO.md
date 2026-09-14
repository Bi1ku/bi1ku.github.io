# Owen Shi — A personal shell

An interactive terminal portfolio, built with React, TypeScript, and vinext.

## Development

Run `npm ci`, then `npm run dev`. Run `npm run build` for the deployment build and `npm test` for the server-rendering smoke test.

## Content

The biography, experience, education, and skill details come from Owen_Shi_Resume.pdf. Featured repositories were checked against https://github.com/Bi1ku on September 14, 2026. Edit `app/page.tsx` to update content and commands, and `app/globals.css` to change the theme. Replace `public/Owen_Shi_Resume.pdf` to update the download.

## Commands

`help`, `about`, `projects`, `experience`, `education`, `skills`, `contact`, `resume`, `github`, `clear`, `neofetch`, `theme`, `history`, `ls`, `pwd`, and `whoami`. Use up/down arrows for history and Tab for completion. Ctrl+L clears the terminal while the input is focused. This is a simulated shell; input is never executed on the server.

## GitHub Pages

The public website is https://bi1ku.github.io/. `npm run dev:pages` starts the static development server; `npm run build:pages` creates `dist-pages/`. GitHub Actions builds and deploys each push to `main`. Select **GitHub Actions** under **Settings → Pages → Source** in the repository.

This build reuses the same portfolio component and stylesheet without requiring a server. The original vinext/Sites build remains available through `npm run build`.
