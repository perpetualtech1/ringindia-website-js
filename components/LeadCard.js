import Link from 'next/link'

export default function LeadCard({ title, href, body }) {
  return (
    <li className="lead-card">
      <h3>
        <Link href={href}>{title}</Link>
      </h3>
      <p>{body}</p>
      <span className="lead-card__cta" aria-hidden="true">
        Get a free quote →
      </span>
    </li>
  )
}
