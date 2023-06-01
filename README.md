This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app) and tailwind.

[Click here to use the app](https://retli-f-tnec-s-htiw-noitcello-c-eldnu-b.vercel.app/)

## Deployed on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js. Just a few clicks and you can deploy your webapp for free.


## Getting Started

First, run the development server:

```bash
yarn
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Repo Structure

- `components` - All React [components](https://reactjs.org/docs/components-and-props.html)
  - `util` - Functional utility components
  - `types` - a file to place types when they are used across the app
- `pageComponents` - Page-specific components that aren't reused by other pages
- `hooks` - Commonly used React [hooks](https://reactjs.org/docs/hooks-overview.html) (component-specific hooks belong in its corresponding `components` file) 
- `lib` - Library of utility functions and types
- `pages` - All Nexty pages, which create nexty.com pathnames from the directory structure any getServerSideProps goes here
  - Should only include the `Page` util component and a component from `components/pageComponents`
- `public` - Public images and icons