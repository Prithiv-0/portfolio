import { Link } from 'react-router-dom'

export default function NotFoundPage() {
  return (
    <div className="container not-found-page">
      <h1 className="page-title">Page Not Found</h1>
      <p className="page-subtitle">The page you requested doesn’t exist.</p>
      <Link to="/" className="btn">
        Go to Home
      </Link>
    </div>
  )
}
