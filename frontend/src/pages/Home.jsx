import { Link } from 'react-router-dom'
import { STATS, AUDIENCES, COMPANY } from '../data/content.js'
import CtaBand from '../components/CtaBand.jsx'

export default function Home() {
  return (
    <>
      <section className="hero">
        <div className="container hero-grid">
          <div>
            <span className="eyebrow">
              <span className="dot" />
              Официальный представитель KASPER в Казахстане
            </span>
            <h1>Лифты под ключ для ЖК и коммерческих объектов. Сдаём в срок.</h1>
            <p className="lead">
              Поставка, монтаж и запуск под ключ — без срывов сроков. Собственный склад
              оборудования и запчастей в Казахстане: оперативная замена без ожидания поставок.
            </p>
            <div className="hero-actions">
              <Link to="/kontakty" className="btn btn-primary">
                Получить расчёт
              </Link>
              <Link to="/kontakty" className="btn btn-ghost">
                Назначить встречу
              </Link>
            </div>
          </div>

          <div className="hero-photo">
            <img
              src="/photos/hero-towers.jpg"
              alt="Жилой комплекс с лифтами KASPER в Астане"
              loading="eager"
            />
          </div>
        </div>

        <div className="container">
          <div className="stats">
            {STATS.map((s) => (
              <div className="stat" key={s.label}>
                <div className="num">{s.num}</div>
                <div className="label">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-tag">Для кого</div>
          <h2>Работаем с объектами любого масштаба</h2>
          <div className="grid grid-3">
            {AUDIENCES.map((a) => (
              <div className="card" key={a.idx}>
                <div className="idx">{a.idx}</div>
                <h3>{a.title}</h3>
                <p>{a.text}</p>
              </div>
            ))}
          </div>
          <p className="lead" style={{ marginTop: 28 }}>
            Фиксируем сроки и доводим до запуска.{' '}
            <Link to="/dlya-kogo" style={{ color: 'var(--accent-bright)' }}>
              Как мы работаем →
            </Link>
          </p>
        </div>
      </section>

      <CtaBand />
    </>
  )
}
