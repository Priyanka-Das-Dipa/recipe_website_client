import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home/Home";
import Recipes from "../pages/Recipes/Recipes";
import AddRecipe from "../pages/AddRecipe/AddRecipe";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/recipes",
        element: <Recipes></Recipes>,
      },
      {
        path: "/addRecipe",
        element : <AddRecipe></AddRecipe>
      }
    ],
  },
]);

export default router;
