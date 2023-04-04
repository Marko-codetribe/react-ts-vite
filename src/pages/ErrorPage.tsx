import ActiveLink from "@/router/ActiveLink"

export default function ErrorPage() {
  return (
    <div>
      <div>
        <h1>Oops! 404</h1>
        <p>Page Not Found!</p>
        <ActiveLink to="/"
          activeClassName="active">
          Home
        </ActiveLink>
      </div>
    </div>
  )
}
