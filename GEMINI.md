# GEMINI.md - my-link Project Context

This document provides foundational context and instructions for the `my-link` project, specifically for AI agents like Gemini CLI.

## Project Overview

**my-link** is a modern web application built with **Next.js 16.2.1** and **React 19.2.4**. It uses **Tailwind CSS 4** for styling and is written in **TypeScript**.

### Key Technologies
- **Framework:** [Next.js 16](https://nextjs.org) (App Router)
- **Library:** [React 19](https://react.dev)
- **Styling:** [Tailwind CSS 4](https://tailwindcss.com)
- **Language:** [TypeScript](https://www.typescriptlang.org)
- **Linting:** [ESLint](https://eslint.org)

### Architecture
The repository structure is as follows:
- `C:\Users\lucas\Documents\my-link/` (Root)
  - `my-link/`: The core project directory.
    - `app/`: Next.js App Router directory (Pages, Layouts, Components).
    - `public/`: Static assets.
    - `package.json`: Project dependencies and scripts.
    - `tsconfig.json`: TypeScript configuration.
    - `next.config.ts`: Next.js configuration.
    - `eslint.config.mjs`: ESLint configuration.

## Critical Instructions (from AGENTS.md)

⚠️ **This version of Next.js (16.2.1) is NOT the standard version you may be familiar with.**
- It contains breaking changes in APIs, conventions, and file structure.
- Always check for deprecation notices.
- Refer to `my-link/node_modules/next/dist/docs/` for the relevant guides before writing code.

## Building and Running

Commands should be executed within the `my-link` subdirectory.

- **Development Server:** `npm run dev` (starts at http://localhost:3000)
- **Production Build:** `npm run build`
- **Production Start:** `npm run start`
- **Linting:** `npm run lint`

## Development Conventions

- **App Router:** All pages and layouts should be placed within the `my-link/app` directory.
- **Styling:** Use Tailwind CSS 4 utility classes. Global styles are managed in `my-link/app/globals.css`.
- **Fonts:** Uses `next/font` with Geist Sans and Geist Mono (configured in `my-link/app/layout.tsx`).
- **Components:** Server components are preferred by default (standard Next.js behavior).
- **TypeScript:** Strict typing is encouraged as per `tsconfig.json`.
- **Linting:** Adhere to the ESLint rules defined in `my-link/eslint.config.mjs`.

## Key Files

- `my-link/app/layout.tsx`: Root layout defining the HTML structure and global fonts.
- `my-link/app/page.tsx`: The main landing page.
- `my-link/package.json`: Contains project metadata, dependencies, and scripts.
- `my-link/AGENTS.md`: Contains critical warnings for AI agents.
