import { PropsWithoutRef, RefAttributes } from "react"
import { NavLink, LinkProps, useMatch } from "react-router-dom"

type Props = {
  /** Add active class only where route matches the exact url. Defaults to `false`. */
  exact?: boolean;
  activeClassName?: string;
} & PropsWithoutRef<LinkProps> &
  RefAttributes<HTMLAnchorElement>;

export default function ActiveLink({
  className = "",
  exact = false,
  activeClassName = "active",
  ...rest
}: Props) {
  const exactMatch = useMatch(rest.to.toString())
  const partiallyMatch = useMatch(rest.to.toString() + "/*")

  const exactMatchClassName = exact && exactMatch ? activeClassName : ""
  const partialMatchClassName = !exact && partiallyMatch ? activeClassName : ""

  return (
    <NavLink
      {...rest}
      className={() => {
        return ` ${className} ${exactMatchClassName} ${partialMatchClassName}`
      }} />
  )
}
