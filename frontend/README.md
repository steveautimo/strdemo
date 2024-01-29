# frontend

## Scaffolding notes (How we got here)

1. Install Vue 3

Reference: https://vuejs.org/guide/quick-start

```sh
npm create vue@latest
```

2. Add TailwindCSS

Reference: https://v2.tailwindcss.com/docs/guides/vue-3-vite

```sh
npm install -D tailwindcss@latest postcss@latest autoprefixer@latest
npx tailwindcss init -p
```

Optional: add purge/content config to tailwind.config.js.

```ts
content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
```

See [Vite Configuration Reference](https://vitejs.dev/config/).

Add Tailwind imports to `assets/main.css`:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Type-Check, Compile and Minify for Production

```sh
npm run build
```

### Run Unit Tests with [Vitest](https://vitest.dev/)

```sh
npm run test:unit
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```
