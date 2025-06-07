import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/Home.jsx";
import AddPost from "./components/AddPost.jsx";
import Posts from "./components/Posts.jsx";
import PageNotFound from "./components/PageNotFound.jsx";
import Post from "./components/Post.jsx";
import { Provider } from "react-redux";
import { store } from "./app/store.js";
const routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "create",
        element: <AddPost />,
      },
      {
        path: "post",
        element: <Posts />,
      },
    ],
  },
  {
    path: "*",
    element: <PageNotFound />,
  },
  {
    path: "/post/:postid",
    element: <Post />,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={routes}>
        <App />
      </RouterProvider>
    </Provider>
  </StrictMode>
);
