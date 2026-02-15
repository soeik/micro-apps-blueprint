import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, redirect } from "react-router";
import { RouterProvider } from "react-router/dom";

import { App } from "./App.tsx";
import { Deals } from "./Deals.tsx";
import { Tasks } from "./Tasks.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    loader: () => redirect("/app"),
  },
  {
    path: "/app",
    Component: App,
  },
  {
    path: "/app/dealsList",
    Component: Deals,
  },
  {
    path: "/app/tasksList",
    Component: Tasks,
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
