import { useTranslation } from "react-i18next"

export default function UsersPage() {
  const { t } = useTranslation()

  return <h1>{t("user_page.title")}</h1>
}
