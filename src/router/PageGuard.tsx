import { ReactElement, Suspense } from "react"

type Props = {
  element: ReactElement;
};

export const PageGuard = ({ element }: Props) => {
  // TODO add page guard validation based on business logic
  return <Suspense fallback={<></>}>{element}</Suspense>
}
