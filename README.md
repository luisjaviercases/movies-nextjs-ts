Important: December 13, 2023: Optimized for Google Chrome. We are working on adapting it completely to other browsers.

# First steps

This is the front-end part of the Movies project. For its operation it is necessary to download and launch the REST API created and which can be viewed at the following link:

https://github.com/luisjaviercases/movies-nodejs-mongodb-api

# NextJS appp with JWT auth using Typescript

NextJS application with JWT auth that shows movies and navigation between them, showing each details. Fully responsive and adaptable to different device sizes

Make API requests and cache them using Redux Toolkit.

CSS Modules and SASS is used for the styles.

In this document you will be able to see the structure of the folders and some of the libraries that have been used to develop the project.

## User test to do login request

To log in to the application you must launch backend part of the project and then, use the following user data:

User: test@test.com
Password: test

## Development scripts

### Install dependencies

```shell
npm install
```

### Compiles and hot-reloads for development

```shell
npm run dev
```

### Compiles and minifies for production

```shell
npm run build
```

### Run your unit tests

```shell
npm run test
```

## Folder structure

```
<project-root>
├─ 📁 .husky
│   ├─ pre-commit
│   └─ pre-push
├─ 📁 node_modules
├─ 📁 public
│   ├─ 📂 icons
│   ├─ 📂 images
├─ 📂 src
│   ├─ 📂 app
│   │   └─ 📁 pageName
│   │      └─ page.tsx
│   │   └─ layout.tsx
│   ├─ 📂 components
│   │   └─ 📁 ComponentName
│   │      └─ ComponentName.module.scss
│   │      └─ ComponentName.tsx
│   │      └─ ComponentName.test.tsx
│   ├─ 📂 constants
│   ├─ 📂 context
│   ├─ 📂 hooks
│   │   └─ useCustom.ts
│   ├─ 📂 models
│   ├─ 📁 routes
│   ├─ 📁 services
│   ├─ 📁 store
│   ├─ 📁 styles
│   ├─ 📂 tests
│   └─   └─ setup.js
│   └─ middleware.ts
├─ .env
├─ .eslintrc.json
├─ .gitignore
├─ .lintstagedrc
├─ .prettierrc
├─ next.config.js
├─ package.json
├─ vitest.config.mts
└─ <more project root files>
```

## Architecture

### React

React version 18

### Next

Next version 14.0.3

### Typescript

Typescript version 5

### Redux

Redux version 9.0.2
Redux Toolkit version 2.0.1

### Testing

We use Vitest and React testing library to do unit tests

### Husky & Lint-Staged

Husky Version 8.0.3
Lint-staged Version 15.2.0

Improved the development flow using Git Hooks that will be executed before commits and push. It will check if
the linter passes correctly and tests give OK

This ensure that the code you upload to repository has a minimum quality
