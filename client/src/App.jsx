// using Link from react-router-dom to create a link to the /thoughts route
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./layout";
import Profiles from "./routes/profiles";
import Thoughts from "./routes/thoughts";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/profiles",
        element: <Profiles />,
      },
      {
        path: "/thoughts",
        element: <Thoughts />,
      },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
