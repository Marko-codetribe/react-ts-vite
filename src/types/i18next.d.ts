import { resources } from "../i18n/i18n.config"

declare module "react-i18next" {
  interface CustomTypeOptions {
    resources: (typeof resources)["en" | "de"];
  }
}
