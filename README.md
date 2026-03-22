# Lokesh Portfolio

A modern developer portfolio built with React, TypeScript, Vite, and Tailwind CSS.

This site highlights my work in AI, ML, and full-stack development through dedicated sections for projects, skills, experience, education, certifications, and contact.

## Live Overview

- Single-page, section-based layout with smooth navigation
- Responsive design for desktop and mobile
- Animated UI interactions and reveal effects
- Theme toggle support
- Contact form integration using EmailJS

## Tech Stack

- React 18
- TypeScript
- Vite 5
- Tailwind CSS 3
- Framer Motion
- React Icons

## Project Structure

```text
.
|-- public/
|-- src/
|   |-- components/
|   |-- data/
|   |-- hooks/
|   |-- sections/
|   |-- App.tsx
|   |-- index.css
|   `-- main.tsx
|-- index.html
|-- package.json
|-- tailwind.config.js
|-- postcss.config.js
|-- tsconfig.json
`-- vite.config.ts
```

## Getting Started

### 1. Install dependencies

```bash
npm install
```

### 2. Configure environment variables

Create a `.env` file in the project root and add:

```env
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

These values are used by the contact form in the Contact section.

### 3. Start development server

```bash
npm run dev
```

App runs at:

- http://localhost:3000

## Available Scripts

- `npm run dev` - Start local dev server
- `npm run build` - Type-check and create production build
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint

## Sections Included

- Hero
- About
- Skills
- Projects
- Experience
- Education
- Certifications
- Contact

## Customization

Main content can be edited from:

- `src/data/index.ts`

You can update:

- Personal profile details
- Skills and grouped expertise
- Project list and categories
- Education and experience
- Certifications and social links

## Build for Production

```bash
npm run build
```

The output is generated in the `dist/` folder.

## Deployment

You can deploy the `dist/` output using platforms like:

- Vercel
- Netlify
- GitHub Pages
- Any static hosting service

## License

This project is for personal portfolio use.
