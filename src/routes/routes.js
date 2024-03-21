import { createBrowserRouter, } from "react-router-dom";
import App from './../App';

export const router = createBrowserRouter([
  {
    path: "/",
    element:<App/>,
  },
  {
    path: "/about",
    element: <div>This is a about page</div>,
  },
  {
    path: "/address",
    element: <div>This is a address page</div>,
  },
  {
    path: "/contact",
    element: <div>This is a contact page</div>,
  },
]);
