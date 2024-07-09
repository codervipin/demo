# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

**Do not touch the package.json and package-lock.json**

**Steps to get the project to your local system**

1. Clone the repository
2. Pull the changes by running `git pull origin main` if already cloned
3. Run `npm install or npm i` to install all the dependencies
4. Run `npm run dev` to start the development server
5. Open `http://localhost:5173` in your browser to view the app , your port can be be different 
6. Run `npm run build` to build the app for production
7. Run `npm run preview` to serve the production build locally.

**Possible errors that you can encounter**
1. vite is not recognized , run the below command to install vite as global
    `npm install -g vite`
2. dependency errors  
    `npm install` after that you can use the run command `npm run dev`
3. If the dependency issues not resolved with `npm install` try deleting the node modules folder and package.json file **not**  (package-lock.json) and again run `npm install` to redownload all the dependencies.           