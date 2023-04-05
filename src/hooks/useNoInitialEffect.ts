// implementation found here: https://www.thearmchaircritic.org/tech-journal/prevent-useeffects-callback-firing-during-initial-render
import { DependencyList, EffectCallback, useEffect, useRef } from "react"

export const useNoInitialEffect = (
  effect: EffectCallback,
  deps?: DependencyList
) => {
  const initialRender = useRef(true)

  useEffect(() => {
    let effectReturns: ReturnType<EffectCallback> | null = null

    if (initialRender.current) {
      initialRender.current = false
    } else {
      effectReturns = effect()
    }

    if (typeof effectReturns === "function") {
      return effectReturns
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps)
}
