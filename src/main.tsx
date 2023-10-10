// import React from "react";
// import ReactDOM from "react-dom/client";
// import App from "./App.tsx";
// import "./index.css";

// ReactDOM.createRoot(document.getElementById("root")!).render(
//   <>
//     <App />
//   </>
// );

import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import PokemonDetail from "./PokemonDetail";
import Login from "./Login";
import LoginInfo from "./LoginInfo";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: ":name",
    element: <PokemonDetail />,
  },
  {
    path: "Login",
    element: <Login />,
  },
  {
    path: "LoginInfo",
    element: <LoginInfo />,
  },
]);

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Login />,
//   },
//   {
//     path: ":name",
//     element: <PokemonDetail />,
//   },
//   {
//     path: "App",
//     element: <App />,
//   },
//   {
//     path: "LoginInfo",
//     element: <LoginInfo />,
//   },
// ]);

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(<RouterProvider router={router} />);
