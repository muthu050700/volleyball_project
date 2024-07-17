import Body from "./component/Body";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./component/Home";
import About from "./component/About";
import Teams from "./component/Teams";
import Tournaments from "./component/Tournaments";
function App() {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Body />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/about",
          element: <About />,
        },
        {
          path: "/teams",
          element: <Teams />,
        },
        {
          path: "/tournaments",
          element: <Tournaments />,
        },
      ],
    },
  ]);
  return (
    <div>
      <RouterProvider router={appRouter}></RouterProvider>
    </div>
  );
}
export default App;
