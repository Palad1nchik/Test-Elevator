// Central content store for the site. Keeping copy here makes it easy to
// later move to a CMS or fetch from the Go backend without touching components.

export const COMPANY = {
  name: 'KASPER',
  tagline: 'LIFT SOLUTIONS',
  region: 'KZ',
  phone: '+7 702 230-22-38',
  phoneHref: 'tel:+77022302238',
  email: 'V_Spichkin@mail.ru',
  emailHref: 'mailto:V_Spichkin@mail.ru',
  site: 'eurasialift.kz',
  siteHref: 'https://eurasialift.kz',
  whatsapp: 'https://wa.me/77022302238',
  address: 'г. Астана, ул. Аманжол Болекпаева, дом-12, ЖК «Юпитер», офис-9',
  contactPerson: {
    role: 'Заместитель директора',
    name: 'Спичкин Владимир Владимирович',
    phone: '+7 702 230-22-38',
  },
  year: 2026,
}

export const NAV = [
  { to: '/', label: 'Главная' },
  { to: '/dlya-kogo', label: 'Для кого' },
  { to: '/obyekty', label: 'Объекты' },
  { to: '/servis', label: 'Сервис' },
  { to: '/kontakty', label: 'Контакты' },
]

export const STATS = [
  { num: '100+', label: 'объектов' },
  { num: '300+', label: 'лифтов' },
  { num: '80', label: 'лет технологий' },
]

export const AUDIENCES = [
  {
    idx: '01',
    title: 'Жилые комплексы',
    text: 'Сдача дома без задержек из-за лифтов.',
  },
  {
    idx: '02',
    title: 'Бизнес-центры / ТРЦ',
    text: 'Стабильная работа без простоев.',
  },
  {
    idx: '03',
    title: 'Девелоперы',
    text: 'Закрываем лифтовую часть проекта полностью.',
  },
]

export const PROBLEMS = [
  'Срыв сроков монтажа',
  'Лифты не проходят приёмку',
  'Постоянные доработки',
  'Подрядчик пропадает',
]

export const STEPS = [
  { n: 1, title: 'Подбор и поставка', text: 'Подбираем оборудование и поставляем со склада в РК.' },
  { n: 2, title: 'Монтаж на объекте', text: 'Монтируем по графику объекта.' },
  { n: 3, title: 'Настройка и запуск', text: 'Пусконаладка и проверка.' },
  { n: 4, title: 'Подготовка к приёмке', text: 'Готовим лифты к сдаче без доработок.' },
  { n: 5, title: 'Сопровождение', text: 'Остаёмся на связи после запуска.' },
]

export const OBJECTS = [
  {
    name: 'ЖК Prime Park',
    lifts: 4,
    term: '24 дня',
    note: 'Приёмка с первого раза',
    img: '/photos/object-towers.jpg',
  },
  {
    name: 'ЖК Toronto',
    lifts: 6,
    term: 'в срок',
    note: 'Доработки: нет',
    img: '/photos/object-blue.jpg',
  },
  {
    name: 'Жилой квартал бизнес-класса',
    lifts: 8,
    term: 'в срок',
    note: 'Премиальная отделка кабин',
    img: '/photos/object-facade.jpg',
  },
]

export const PRODUCTION_POINTS = [
  'Международное производство',
  'Реальные объекты в Казахстане',
  'Стабильная работа оборудования',
  'Энергоэффективность до 40%',
]

export const SERVICE_POINTS = [
  'Собственный склад запчастей в Казахстане',
  'Быстрый выезд и устранение вопросов',
  'Обслуживание после сдачи объекта',
  'Не зависим от поставок',
]

export const ADVANTAGES = [
  { idx: '01', title: 'Эксклюзивный представитель KASPER', text: 'Работаем напрямую с заводом.' },
  { idx: '02', title: 'Собственный склад в Казахстане', text: 'Оборудование уже в стране. Не срываем сроки из-за логистики.' },
  { idx: '03', title: 'Полный цикл под ключ', text: 'Поставка, монтаж, запуск и сервис — в одной зоне ответственности.' },
  { idx: '04', title: 'Контроль сроков', text: 'Фиксируем сроки и выстраиваем процесс под график объекта.' },
  { idx: '05', title: 'Безопасность и соответствие', text: 'Контролируем монтаж и подготовку к приёмке — без доработок.' },
  { idx: '06', title: 'Сервис после запуска', text: 'Остаёмся после сдачи и берём лифты на обслуживание.' },
]

export const OBJECT_TYPES = [
  'Жилой комплекс (ЖК)',
  'Бизнес-центр',
  'ТРЦ',
  'Девелоперский проект',
  'Другое',
]
