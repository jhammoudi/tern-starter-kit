# TERN Starter Kit

The TERN stack contains popular technologies for building a modern single-page application.

- **React**: A JavaScript front-end library for building user interfaces.
- **Node.js**: JavaScript run-time environment that executes JavaScript code outside of a browser (such as a server).
- **Express**: A web application framework for Node.js.
- **Typescript**: Strict syntactical superset of JavaScript and adds optional static typing

## Getting Started

### Installing

Clone repository:
```
git clone https://github.com/jhammoudi/tern-starter-kit.git
cd tern-starter-kit
```

## Configure Environment variables
To create your `.env` file, copy the `.env.example` file to `.env`. 

To do this, run the following command in the root project folder, as well as the `frontend` folder.

```
cp .env.example .env
```

When adding variables to your `.env` file, make sure to also add the variable names to your `.env.example`, since your `.env` file will be ignored by git.

## Run locally

1. Install the backend npm dependencies

    ```
    npm install
    ```
    Install the frontend npm dependencies
    ```
    npm install --prefix frontend
    ```
2. Run the below command to create build artifacts from your frontend and backend source files.
    ```
    npm run build
    ```
3. Run the below command to start application.
    ```
    npm start
    ```

## Start Developing!
Note: Before developing, make sure to clean out the unnessasary code within the `frontend` directory. You can remove any unused lines within `App.tsx`, `index.css`, as well as deletion of the `logo.svg` file.
