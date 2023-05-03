import React from "react";
import { RouterProvider } from "react-router-dom";


import router from "./routes/router.jsx";
import { AppContext } from "./store/AppContext.jsx";
const App = () => {

  return (
    <div>
      <AppContext>
        <RouterProvider router={router}>
        </RouterProvider>
      </AppContext>
    </div>
  );
};

export default App;
