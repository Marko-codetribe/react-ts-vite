import { useTranslation } from "react-i18next"
import reactLogo from "@/assets/react.svg"
import viteLogo from "@/public/vite.svg"

export default function HomePage() {
  const { t } = useTranslation()

  return (
    <div>
      <h1>{t("home_page.title")}</h1>
      <div>
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
        <p>
          Vite, React, TypeScript, ESLint, Husky, TailwindCSS, React Router V6,
          i18n, Axios, React Query
        </p>
      </div>
    </div>
  )
}
