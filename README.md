# kissy24.github.io

![GitHub package.json prod dependency version](https://img.shields.io/github/package-json/dependency-version/kissy24/kissy24.github.io/react)
![GitHub package.json prod dependency version](https://img.shields.io/github/package-json/dependency-version/kissy24/kissy24.github.io/tailwindcss)
![](https://img.shields.io/github/license/kissy24/kissy24.github.io)

My profile page.

## Usage

```txt
src/
├── components/
│ ├── SocialLinks.tsx
│ ├── ArticleLinks.tsx
│ └── ProfileContents.tsx
├── data/
│ ├── links.ts
│ ├── articleLinks.ts
│ └── profileContents.ts
└── App.tsx
```

- **components/**: Defines various components.
  - `SocialLinks.tsx`: Component to display a list of social links.
  - `ArticleLinks.tsx`: Component to display a list of article links.
  - `ProfileContents.tsx`: Component to display profile text.
- **data/**: Contains data files.
  - `links.ts`: Data for social links.
  - `articleLinks.ts`: Data for article links.
  - `profileContents.ts`: Data for profile text.

1. **Adding Link Data**: Add new links in `src/data/links.ts` or `src/data/articleLinks.ts`.

    ```typescript
    export const links = [
      {
        href: "https://example.com",
        imageSrc: exampleImage,
        imageAlt: "Example",
        label: "Example"
      },
      // Other links...
    ];
    ```

2. **Editing Profile Contents**: Edit the profile text in `src/data/profileContents.ts`.

    ```typescript
    export const profile = {
      title: "New Profile Text"
    };
    ```

3. **Using Components**: Import and use the necessary components in `App.tsx` or other components.

## Libraries Used

This project utilizes the following libraries and tools:

### 1. React
- **Libraries**: `react`, `react-dom`
- **Version**: `^18.3.1`

### 2. Tailwind CSS
- **Library**: `tailwindcss`
- **Version**: `^3.4.4`

### 3. TypeScript
- **Library**: `typescript`
- **Version**: `^5.2.2`

### 4. Vite
- **Library**: `vite`
- **Version**: `^5.3.1`

### 5. ESLint
- **Libraries**: `eslint`, `@typescript-eslint/eslint-plugin`, `@typescript-eslint/parser`, `eslint-plugin-react-hooks`, `eslint-plugin-react-refresh`
- **Versions**: Various

### 6. SWC (Speedy Web Compiler)
- **Library**: `@vitejs/plugin-react-swc`
- **Version**: `^3.5.0`

## Author

kissy24