import { AUDIENCES, PROBLEMS, STEPS } from '../data/content.js'
import CtaBand from '../components/CtaBand.jsx'

export default function ForWhom() {
  return (
    <>
      <section className="section page-head">
        <div className="container">
          <div className="section-tag">Для кого</div>
          <h2>Работаем с объектами любого масштаба</h2>
          <p className="lead">
            Берём на себя весь процесс. Вы сдаёте объект без переделок и задержек.
          </p>
          <div className="grid grid-3">
            {AUDIENCES.map((a) => (
              <div className="card" key={a.idx}>
                <div className="idx">{a.idx}</div>
                <h3>{a.title}</h3>
                <p>{a.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-tag">Знакомо?</div>
          <h2>Почему возникают проблемы с лифтами</h2>
          <div className="split">
            <div className="panel">
              <ul className="cross-list">
                {PROBLEMS.map((p) => (
                  <li key={p}>{p}</li>
                ))}
              </ul>
            </div>
            <div>
              <h3 style={{ fontSize: 24, marginBottom: 12 }}>Решение</h3>
              <p className="lead">
                Мы берём этот процесс на себя и доводим до результата.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-tag">Как мы работаем</div>
          <h2>Монтаж лифтов под ключ без срывов сроков</h2>
          <p className="lead">
            Вы видите сроки и результат на каждом этапе.
          </p>
          <div className="steps">
            {STEPS.map((s) => (
              <div className="step" key={s.n}>
                <div className="n">{s.n}</div>
                <div>
                  <h3>{s.title}</h3>
                  <p>{s.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaBand title="Рассчитаем сроки и стоимость по объекту" />
    </>
  )
}
