import "./App.css"
import "./i18n/i18n.config"
import { RouterProvider } from "react-router-dom"
import { router } from "./router/router"

function App() {
  return <RouterProvider router={router}></RouterProvider>
}

export default App
