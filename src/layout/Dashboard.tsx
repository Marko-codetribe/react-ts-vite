import ActiveLink from "@/router/ActiveLink"
import { useTranslation } from "react-i18next"
import { Outlet } from "react-router-dom"

export const Dashboard = () => {
  const { t } = useTranslation()
  return (
    <div>
      <header className="">
        <ActiveLink to="/"
          activeClassName="active">
          Home
        </ActiveLink>

        <ActiveLink to="/users"
          activeClassName="active">
          Users
        </ActiveLink>
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  )
}
