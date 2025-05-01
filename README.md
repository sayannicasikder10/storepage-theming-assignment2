# Storepage Theming Assignment 2

This project is a multi-theme medical platform that supports different specialties like Organ Transplant and Cosmetic Surgery. It uses React, Zustand for theme state, Tailwind for styling, and Caddy for subdomain-based local routing.
> This is a sample pull request for assignment submission.


## ✅ Features Implemented
- Multi-theme support (`default`, `organ-transplant`, `cosmetic-surgery`)
- Zustand store with localStorage persistence
- Tailwind theming per specialty
- ThemeSwitcher component
- Docker + Caddy for local subdomain routing

## 🚀 Run Locally
```bash
npm install
npm run dev
```

Or use Docker:
```bash
docker-compose up
```

## 📁 Folder Structure
- `src/themes` - theme provider + Zustand store
- `src/components` - theme switcher
- `index.html` - root HTML
- `tailwind.config.cjs` - Tailwind setup
