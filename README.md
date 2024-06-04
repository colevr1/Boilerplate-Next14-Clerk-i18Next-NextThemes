# Next.js 14.2.3 with APP Routing Boilerplate with Clerk, i18n, Radix-UI Themes, and Next-themes for Light and Dark Theme

This project is a boilerplate template designed to help developers quickly set up Next.js 14 projects with integrated features such as Clerk authentication, internationalization (i18n), and theming.

The project utilizes **TypeScript**.

The level of code is according to my experience level, so feel free to contribute if you want to improve it.

If you find this project useful, please consider giving it a ⭐ on GitHub.

Guides that helped in creating this project are credited at the bottom of this document.

This is a Next.js project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Main Features

- **Translations:** Detects the browser language, stores it in a cookie, and updates/stores the cookie when the application language is changed.
- **Combined Middleware:** Not perfect, but works for both Clerk and i18n when using App Routing. It also handles the situation when you manually delete the language cookies and then log out from Clerk. The API route is protected, so you can visit http://localhost:3000/api/test only after logging in. The API path is not internationalized.
- **Clerk Internationalization and Theming:** Clerk now respects the language and theme of the application.
- **Server-side and Client-Side Translations:** Working!
-**Theme:** I added a couple of Radix-UI primitive components in case you don't want to use the entire Radix-UI Theming System. In this case, just uninstall **@radix-ui/themes** and keep the other primitives.
- **Hydration errors:** The setup aims to avoid hydration errors without using suppressHydrationWarning.
- **Next.js 14.2.3:** Utilizes version 14.2.3 for enhanced performance and developer experience.
- **Clerk Authentication:** Integrates user authentication and authorization using Clerk v5.1.3.
- **Internationalization (i18n):** Supports multiple languages with i18n v23.11.5 and react-i18next v14.1.2, making your application accessible globally.
- **Theming:** Provides light and dark themes using Radix UI Themes v3.0.5.
- **Tailwind CSS:** Enables rapid UI development and easy customization.
- **React Hook Form:** Simplifies form handling with React Hook Form v7.51.5, providing efficient and flexible form validation.
- **React Hot Toast:** Adds toast notifications for better user feedback.
- **Linting and TypeScript Support:** Includes ESLint with TypeScript support for maintaining code quality and consistency.

## Dependencies

```bash
{
  "name": "next14.i18ext.clerk.next-themes.boilerplate",
  "version": "0.1.0",
  "private": true,
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "next lint"
  },
  "dependencies": {
    "@clerk/localizations": "^2.4.3",
    "@clerk/nextjs": "^5.1.3",
    "@clerk/themes": "^2.1.8",
    "@hookform/resolvers": "^3.4.2",
    "@radix-ui/react-label": "^2.0.2",
    "@radix-ui/react-slot": "^1.0.2",
    "@radix-ui/themes": "^3.0.5",
    "accept-language": "^3.0.18",
    "axios": "^1.7.2",
    "class-variance-authority": "^0.7.0",
    "clsx": "^2.1.1",
    "i18next": "^23.11.5",
    "i18next-browser-languagedetector": "^8.0.0",
    "i18next-resources-to-backend": "^1.2.1",
    "lucide-react": "^0.383.0",
    "next": "14.2.3",
    "next-i18n-router": "^5.5.0",
    "next-themes": "^0.3.0",
    "react": "^18",
    "react-cookie": "^7.1.4",
    "react-dom": "^18",
    "react-hook-form": "^7.51.5",
    "react-hot-toast": "^2.4.1",
    "react-i18next": "^14.1.2",
    "tailwind-merge": "^2.3.0",
    "tailwindcss-animate": "^1.0.7",
    "zod": "^3.23.8"
  },
  "devDependencies": {
    "@types/node": "^20",
    "@types/react": "^18",
    "@types/react-dom": "^18",
    "eslint": "^8",
    "eslint-config-next": "14.2.3",
    "postcss": "^8",
    "prisma": "^5.14.0",
    "tailwindcss": "^3.4.3",
    "typescript": "^5"
  }
}
```

## Getting Started

To get started with this boilerplate:

1. Clone the repository to your local machine.
2. Create a Clerk account.
3. Configure the `.env` file as shown below.
4. Install dependencies using `npm install`.
5. Start the development server with `npm run dev`.

## Prerequisites

This project was developed using Node.js v21.1.0 and npm.

## Usage

This boilerplate provides a starting template for building Next.js applications with advanced features out of the box. You can easily extend and modify the code to add additional functionality or customize the appearance according to your project requirements.

## Contributing

Contributions are welcome! Feel free to submit pull requests or open issues for any improvements, bug fixes, or feature requests.

## License

This project is licensed under the [MIT License](LICENSE).

## Credits

Guide to use i18n with App Router:
https://locize.com/blog/next-app-dir-i18n/

Clerk documentation to combine middlewares
https://clerk.com/docs/references/nextjs/clerk-middleware

Helping with the APP Router:
https://www.codewithantonio.com/projects/lms-platform

A thank to OpenAi for creating ChatGpt which also helped a lot. 


## Configuring Your Environment Variables

Create an account with Clerk and ensure your `.env` file includes the following:

```bash
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=Your Clerk Public Key
CLERK_SECRET_KEY=Your Clerk Private Key
NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
```


