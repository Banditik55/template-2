import React from "react"
import ReactDOM from "react-dom/client"
import MainPage from "./App.jsx"
import Country from "./country.jsx"
import "./index.css"
import { createBrowserRouter, RouterProvider } from "react-router-dom"

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainPage />
  },
  {
    path: "/:country",
    element: <Country />
  }
])

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
)
