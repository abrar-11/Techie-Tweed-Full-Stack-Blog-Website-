import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";
import { Home, Login, Register, Post } from "./pages/index";
const router = createBrowserRouter([
   {
      path: "/",
      element: <Home/>,
   },
]);

function App() {
   return (
      <>
         <RouterProvider router={router} />
      </>
   );
}

export default App;
