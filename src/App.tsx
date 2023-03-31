import { useState } from "react"
import reactLogo from "./assets/react.svg"
import viteLogo from "/vite.svg"
import "./App.css"
import "./i18n/i18n.config"
import { useTranslation } from "react-i18next"

function App() {
  const [count, setCount] = useState(0)
  const { t } = useTranslation()
  return (
    <div className="App">
      <div>
        <a href="https://vitejs.dev"
          target="_blank"
          rel="noreferrer">
          <img src={viteLogo}
            className="logo"
            alt="Vite logo" />
        </a>
        <a href="https://reactjs.org"
          target="_blank"
          rel="noreferrer">
          <img src={reactLogo}
            className="logo react"
            alt="React logo" />
        </a>
      </div>
      <h1 className="text-3xl font-bold underline">
        {t("title")} Vite + React
      </h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  )
}

export default App
