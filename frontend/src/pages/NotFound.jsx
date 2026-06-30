import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <section className="section page-head">
      <div className="container" style={{ textAlign: 'center', padding: '60px 0' }}>
        <div className="section-tag">404</div>
        <h2>Страница не найдена</h2>
        <p className="lead" style={{ margin: '12px auto 28px' }}>
          Возможно, ссылка устарела или страница была перемещена.
        </p>
        <Link to="/" className="btn btn-primary">
          На главную
        </Link>
      </div>
    </section>
  )
}
