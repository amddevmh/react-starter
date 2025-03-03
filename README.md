# Modern React Starter Template

A clean React starter template with TypeScript, Tailwind CSS, and a responsive layout system including a collapsible sidebar and Darkmode toggle. This template provides a solid foundation for building modern web applications with best practices.

## Features

- ⚡️ **Vite** 
- 🔥 **React 19** 
- 🔒 **TypeScript** 
- 💅 **Tailwind CSS**
- 🌓 **Dark Mode** 
- 📱 **Mobile First Responsive Design** 
- 🧩 **Schadcn Configured** 
- 📁 **Clean Project Structure** 
- 🔄 **Path Aliases** - Import components using `@/` prefix

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm, yarn or better pnpm

### Installation

1. Clone the repository:

```bash
git clone https://github.com/amddevmh/react-starter.git my-app
cd my-app
```

2. Install dependencies:

```bash
npm install
# or
yarn
```

3. Start the development server:

```bash
npm run dev
# or
yarn dev
```

4. Open your browser and visit `http://localhost:3000`

## Project Structure

```
├── public/              # Static assets
├── src/
│   ├── components/      # Reusable components
│   ├── App.tsx          # Main application component
│   ├── main.tsx         # Application entry point
│   └── index.css        # Global styles and Tailwind directives
├── .gitignore           # Git ignore file
├── index.html           # HTML template
├── package.json         # Project dependencies and scripts
├── tsconfig.json        # TypeScript configuration
├── vite.config.ts       # Vite configuration
└── README.md            # Project documentation
```

## Customization

### Changing the Theme

The template comes with a built-in theme system. You can customize the colors in `src/index.css` by modifying the CSS variables in the `:root` and `.dark` selectors.

### Adding New Components

Place new components in the `src/components` directory. For UI components that are part of your design system, add them to `src/components/ui/`.

### Configuring Path Aliases

Path aliases are configured in `tsconfig.json` and `vite.config.ts`. You can import components using the `@/` prefix:

```tsx
import { Button } from "@/components/ui/button";
```

## Available Scripts

- `npm run dev` - Start the development server
- `npm run build` - Build for production
- `npm run preview` - Preview the production build locally

## Browser Support

The template supports all modern browsers, including:

- Chrome
- Firefox
- Safari
- Edge

## License

This project is licensed under the MIT License.

## Acknowledgments

- [Vite](https://vitejs.dev/)
- [React](https://reactjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)

---

Made with ❤️ by [Ahmed Mouelhi](https://github.com/amddevmh)
