# 3D Portfolio

A modern personal portfolio built with React, TypeScript, Three.js, and GSAP.

This project combines a 3D character scene, interactive tech stack visualization, scroll-based animations, and a clean single-page layout for showcasing work and profile information.

Live site: https://atharvasoundankar.netlify.app/

## What Is Included

- 3D character canvas with encrypted model loading and custom lighting
- Interactive tech stack section rendered with React Three Fiber and Rapier physics
- Smooth GSAP transitions and text/scroll animation effects
- Portfolio sections for landing, about, work, career, and contact
- Responsive layout for desktop and mobile

## Tech Stack

Core:
- React 18
- TypeScript
- Vite

Animation and 3D:
- GSAP
- Three.js
- @react-three/fiber
- @react-three/drei
- @react-three/postprocessing
- @react-three/rapier

UI and utilities:
- react-icons
- react-fast-marquee
- @vercel/analytics

## Project Structure

```text
.
|- public/
|  |- draco/
|  |- images/
|  |- models/
|- src/
|  |- components/
|  |  |- Character/
|  |  |- styles/
|  |  |- About.tsx
|  |  |- Career.tsx
|  |  |- Contact.tsx
|  |  |- Landing.tsx
|  |  |- MainContainer.tsx
|  |  |- Navbar.tsx
|  |  |- TechStack.tsx
|  |  |- WhatIDo.tsx
|  |  |- Work.tsx
|  |- context/
|  |- data/
|  |- types/
|  |- App.tsx
|  |- main.tsx
|- package.json
|- vite.config.ts
```

## Getting Started

Prerequisites:
- Node.js 18 or newer
- npm 9 or newer

Installation:

```bash
git clone https://github.com/mercydeez/3D-Portfolio.git
cd 3D-Portfolio
npm install
```

Run development server:

```bash
npm run dev
```

Build production bundle:

```bash
npm run build
```

Preview production build locally:

```bash
npm run preview
```

## Available Scripts

- npm run dev: Starts Vite dev server
- npm run build: Runs TypeScript build then Vite production build
- npm run preview: Serves the built app from dist
- npm run lint: Runs ESLint checks

## Customization Guide

- Update content sections in src/components (About, Career, Work, Contact, etc.)
- Update work items and links in src/components/Work.tsx
- Update social links in src/components/SocialIcons.tsx and src/components/Contact.tsx
- Update styles in src/components/styles and src/index.css
- Update 3D assets in public/models and public/images

## Notes

- Character model is loaded from encrypted assets in public/models
- Draco decoder files are in public/draco
- Some build output chunks are large due to 3D/animation dependencies

## Deployment

Deploy the dist folder to any static host such as Netlify, Vercel, or Cloudflare Pages.

Typical flow:

```bash
npm run build
```

Then publish the generated dist directory from your hosting provider.

## License

This project is licensed under the MIT License. See the LICENSE file for details.
