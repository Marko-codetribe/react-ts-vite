import { Dashboard } from "@/layout/Dashboard"
import { lazy } from "react"
import { createBrowserRouter } from "react-router-dom"
import { PageGuard } from "@/router/PageGuard"

const HomePage = lazy(() => import("@/pages/HomePage"))
const UsersPage = lazy(() => import("@/pages/UsersPage"))
const ErrorPage = lazy(() => import("@/pages/ErrorPage"))

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Dashboard />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <PageGuard element={<HomePage />} />,
      },
      {
        path: "/users",
        element: <PageGuard element={<UsersPage />} />,
      },
    ],
  },
])
