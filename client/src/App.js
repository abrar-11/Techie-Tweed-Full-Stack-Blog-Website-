import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";
import Layout from "./layouts/Layout";
import { Home, Login, Register, Post } from "./pages/index";

const router = createBrowserRouter([
   {
      path: "/",
      element: (
         <Layout>
            <Home />
         </Layout>
      ),
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
