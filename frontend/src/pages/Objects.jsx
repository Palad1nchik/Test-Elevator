import { OBJECTS, PRODUCTION_POINTS } from '../data/content.js'
import CtaBand from '../components/CtaBand.jsx'

export default function Objects() {
  return (
    <>
      <section className="section page-head">
        <div className="container">
          <div className="section-tag">Опыт</div>
          <h2>Реализованные объекты</h2>
          <p className="lead">95% объектов сдаём без замечаний по лифтам.</p>

          <div className="grid grid-3">
            {OBJECTS.map((o) => (
              <article className="card photo-card" key={o.name}>
                <div className="photo-card-img">
                  <img src={o.img} alt={o.name} loading="lazy" />
                </div>
                <h3>{o.name}</h3>
                <p style={{ marginTop: 10 }}>
                  Лифтов: <strong>{o.lifts}</strong>
                  <br />
                  Срок: <strong>{o.term}</strong>
                  <br />
                  {o.note}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-tag">Производство и надёжность</div>
          <h2>Производитель с 80-летней историей</h2>
          <div className="split">
            <div>
              <p className="lead">
                Используем решения KASPER, которые проходят приёмку без проблем.
              </p>
              <ul className="checks">
                {PRODUCTION_POINTS.map((p) => (
                  <li key={p}>{p}</li>
                ))}
              </ul>
            </div>
            <div className="media-frame">
              <img src="/photos/production-glass.jpg" alt="Современный фасад жилого комплекса" loading="lazy" />
            </div>
          </div>
        </div>
      </section>

      <CtaBand title="Хотите такой же результат на своём объекте?" />
    </>
  )
}
