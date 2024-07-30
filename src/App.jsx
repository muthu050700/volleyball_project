import Body from "./component/Body";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./component/Home";
import Teams from "./component/Teams";
import Tournaments from "./component/Tournaments";
import PlayerPosition from "./component/PlayerPosition";
import PlayerPositionInfo from "./component/PlayerPositionInfo";
import About from "./component/About_us/About";

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
        {
          path: "/positioninfo/:positionid",
          element: <PlayerPositionInfo />,
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
