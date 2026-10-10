# Anjana KK Portfolio

A responsive personal portfolio built with React, Vite, JavaScript, CSS, and Lucide icons.

## Run locally

1. Install Node.js from [nodejs.org](https://nodejs.org/) if it is not installed.
2. Open this folder in VS Code.
3. Install dependencies with `npm install`.
4. Start the development server with `npm run dev`.
5. Open the local URL shown in the terminal.

## Customize

- Add a profile photo at `public/anjana.jpg`. The site shows the `AK` fallback until a valid image is present.
- Update the content arrays and section copy in `src/App.jsx`.
- Add real projects by reusing the `ProjectCard` component in the projects section.
- Add certificates and achievements only when there are genuine items to include.

## Build and publish

Run `npm run build` to create the production files in `dist/`. The site can be published as a static site through GitHub Pages, Netlify, Vercel, or another static hosting service. For GitHub Pages, configure the repository to deploy the `dist` output using a Pages action or a static-site deployment tool.