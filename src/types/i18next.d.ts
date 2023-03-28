import "i18next"
import { resources } from "i18n/i18n.config"

declare module "i18next" {
  export interface CustomTypeOptions {
    resources: typeof resources.en;
    returnNull: false;
  }
}
