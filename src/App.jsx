import React from "react";
import routes from "./routes/routes";
import { Toaster } from "react-hot-toast";
import { RouterProvider } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'

const App = () => {
  return (
    <>
      <RouterProvider router={routes}>
        
      </RouterProvider>
      <Toaster />
    </>
  );
};

export default App;
