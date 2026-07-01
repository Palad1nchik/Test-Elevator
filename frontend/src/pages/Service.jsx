import { SERVICE_POINTS, ADVANTAGES } from '../data/content.js'
import CtaBand from '../components/CtaBand.jsx'

export default function Service() {
  return (
    <>
      <section className="section page-head">
        <div className="container">
          <div className="section-tag">Сервис</div>
          <h2>Сервис и поддержка после запуска</h2>
          <div className="split">
            <div>
              <p className="lead">
                Мы не завершаем работу после монтажа. Сопровождаем объект и отвечаем за работу
                лифтов.
              </p>
              <ul className="checks">
                {SERVICE_POINTS.map((p) => (
                  <li key={p}>{p}</li>
                ))}
              </ul>
            </div>
            <div className="media-frame">
              <img
                src="/photos/service-cabin.jpg"
                alt="Специалисты KASPER в кабине лифта"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-tag">Почему мы</div>
          <h2>Ключевые преимущества</h2>
          <div className="grid grid-3">
            {ADVANTAGES.map((a) => (
              <div className="card" key={a.idx}>
                <div className="idx">{a.idx}</div>
                <h3>{a.title}</h3>
                <p>{a.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaBand title="Возьмём ваши лифты на обслуживание" />
    </>
  )
}
