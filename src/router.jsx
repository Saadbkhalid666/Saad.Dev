import { createBrowserRouter } from "react-router-dom";
import { NotFound } from "./pages/NotFound/NotFound";
import App from "./App";

export const router = createBrowserRouter([
    {path:"/*",element:<NotFound   />},
    {path:"/",element:<App   />},

])