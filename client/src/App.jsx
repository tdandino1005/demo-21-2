import Profiles from ".routes/Profiles";
import Thoughts from ".routes/Thoughts";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/profiles",
    element: <Profiles />,
  },
  {
    path: "/thoughts",
    element: <Thoughts />,
  },
]);

export default function App() {
  return (
    <RouterProvider router={router}>
      <nav>
        <ul>
          <li>
            <link to="/profiles">Profiles</link>
          </li>
          <li>
            <link to="/thoughts">Thoughts</link>
          </li>
        </ul>
      </nav>
      ;
    </RouterProvider>
  );
}
