import './App.css'

const services = [
  {
    title: 'Precision Haircuts',
    detail: 'Modern fades, classic scissor cuts, and shape-ups tailored to face shape and hair texture.',
  },
  {
    title: 'Beard Architecture',
    detail: 'Sharp lines, steam-towel detailing, and balanced beard sculpting for a cleaner finish.',
  },
  {
    title: 'Grooming Extras',
    detail: 'Eyebrows, skin refresh, and hand-care touches that make the visit feel complete.',
  },
]

const hours = [
  ['Monday', '10:00–20:00'],
  ['Tuesday', '10:00–20:00'],
  ['Wednesday', '10:00–20:00'],
  ['Thursday', '10:00–20:00'],
  ['Friday', '10:00–20:00'],
  ['Saturday', '10:00–20:00'],
  ['Sunday', 'Closed'],
] as const

const testimonials = [
  {
    quote:
      'Clean fade, calm atmosphere, and people who actually listen. It feels premium without trying too hard.',
    author: 'Regular client',
  },
  {
    quote:
      'One of the few places where beard work feels deliberate instead of rushed. Strong attention to detail.',
    author: 'Walk-in guest',
  },
]

function App() {
  return (
    <div className="site-shell">
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>

      <header className="hero" aria-label="Sarko's Barbershop introduction">
        <nav className="topbar" aria-label="Primary navigation">
          <div className="brand-lockup">
            <span className="brand-kicker">Sarko&apos;s</span>
            <span className="brand-name">Barbershop Nürnberg</span>
          </div>
          <div className="topbar-actions">
            <a href="tel:+4991198931666" className="nav-link">
              Call now
            </a>
            <a href="#visit" className="nav-button">
              Visit the shop
            </a>
          </div>
        </nav>

        <div className="hero-grid">
          <section className="hero-copy" aria-labelledby="hero-title">
            <p className="eyebrow">Refined men&apos;s grooming • Nürnberg</p>
            <h1 id="hero-title">
              A sharper barbershop landing page with more confidence, clarity, and mobile polish.
            </h1>
            <p className="lede">
              This redesign turns the current directory-style page into a stronger brand experience: bold first impression,
              easier actions, better readability, and a premium feel that matches the service.
            </p>
            <div className="hero-actions">
              <a className="primary-cta" href="tel:+4991198931666">
                Book by phone
              </a>
              <a
                className="secondary-cta"
                href="https://maps.google.com/?cid=2561888576050913615"
                target="_blank"
                rel="noreferrer"
              >
                Open in Maps
              </a>
            </div>
            <ul className="hero-points" aria-label="Key shop highlights">
              <li>Walk-in friendly atmosphere</li>
              <li>Modern fades & classic cuts</li>
              <li>Beard styling and grooming extras</li>
            </ul>
          </section>

          <aside className="hero-card" aria-label="Shop snapshot">
            <div className="card-accent" aria-hidden="true"></div>
            <p className="card-label">Now serving</p>
            <h2>Bayreuther Str. 13a</h2>
            <p className="card-subtle">90409 Nürnberg, Germany</p>
            <dl className="fact-list">
              <div>
                <dt>Phone</dt>
                <dd>
                  <a href="tel:+4991198931666">0911 98931666</a>
                </dd>
              </div>
              <div>
                <dt>Hours</dt>
                <dd>Mon–Sat · 10:00–20:00</dd>
              </div>
              <div>
                <dt>Style</dt>
                <dd>Urban, polished, welcoming</dd>
              </div>
            </dl>
          </aside>
        </div>
      </header>

      <main id="main-content">
        <section className="section statement">
          <div className="section-heading">
            <p className="eyebrow">Why this version works better</p>
            <h2>Less directory listing. More brand.</h2>
          </div>
          <div className="statement-grid">
            <article>
              <h3>Immediate hierarchy</h3>
              <p>
                Visitors understand the shop, the vibe, and the next action in seconds instead of parsing a plain block of text.
              </p>
            </article>
            <article>
              <h3>Better mobile behavior</h3>
              <p>
                The layout collapses cleanly, touch targets stay comfortable, and the most important contact actions stay easy to reach.
              </p>
            </article>
            <article>
              <h3>Stronger trust signals</h3>
              <p>
                Address, hours, services, and testimonials are structured into sections that feel intentional and premium.
              </p>
            </article>
          </div>
        </section>

        <section className="section services" aria-labelledby="services-title">
          <div className="section-heading">
            <p className="eyebrow">Core offerings</p>
            <h2 id="services-title">Services presented with more precision</h2>
          </div>
          <div className="service-grid">
            {services.map((service) => (
              <article className="service-card" key={service.title}>
                <h3>{service.title}</h3>
                <p>{service.detail}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section split" id="visit">
          <div className="hours-panel" aria-labelledby="hours-title">
            <p className="eyebrow">Opening hours</p>
            <h2 id="hours-title">Simple, readable, accessible</h2>
            <ul className="hours-list">
              {hours.map(([day, value]) => (
                <li key={day}>
                  <span>{day}</span>
                  <strong>{value}</strong>
                </li>
              ))}
            </ul>
          </div>

          <div className="visit-panel">
            <p className="eyebrow">Make the first step easy</p>
            <h2>Fast contact, strong conversion</h2>
            <p>
              Instead of burying the essentials, this version surfaces call, location, and hours in a cleaner booking-oriented flow.
            </p>
            <div className="visit-actions">
              <a className="primary-cta" href="tel:+4991198931666">
                Call the shop
              </a>
              <a
                className="secondary-cta"
                href="https://www.google.com/maps/search/?api=1&query=Bayreuther+Str.+13a,+90409+N%C3%BCrnberg"
                target="_blank"
                rel="noreferrer"
              >
                Route guidance
              </a>
            </div>
          </div>
        </section>

        <section className="section testimonials" aria-labelledby="testimonials-title">
          <div className="section-heading">
            <p className="eyebrow">Social proof</p>
            <h2 id="testimonials-title">Customer quotes deserve better presentation</h2>
          </div>
          <div className="testimonial-grid">
            {testimonials.map((item) => (
              <figure className="quote-card" key={item.author}>
                <blockquote>{item.quote}</blockquote>
                <figcaption>{item.author}</figcaption>
              </figure>
            ))}
          </div>
        </section>
      </main>

      <footer className="footer">
        <p>Sarko&apos;s Barbershop Nürnberg · Reimagined landing page concept</p>
        <p className="footer-note">Built with responsive layout, keyboard focus states, semantic structure, and reduced-motion support.</p>
      </footer>
    </div>
  )
}

export default App
