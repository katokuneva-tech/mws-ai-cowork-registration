import RegistrationForm from "./registration-form";

export default function Home() {
  return (
    <div className="site-shell">
      <header className="site-header">
        <a href={import.meta.env.BASE_URL} aria-label="MWS AI Cowork — главная" className="brand">
          <img src={`${import.meta.env.BASE_URL}brand/mws-ai.svg`} alt="MWS AI" width="86" height="50" />
          <span className="brand-divider" />
          <span className="brand-product">Cowork</span>
        </a>
        <a className="header-link" href="https://mts.ai/product/mws-ai-cowork/" target="_blank" rel="noopener noreferrer">
          О продукте <span aria-hidden="true">↗</span>
        </a>
      </header>
      <main>
        <section className="hero" aria-labelledby="hero-title">
          <div className="hero-copy">
            <p className="eyebrow">Регистрация</p>
            <h1 id="hero-title">MWS AI COWORK</h1>
            <p className="hero-description">Общая цифровая рабочая среда<br className="desktop-break" /> для сотрудников и ИИ-исполнителей</p>
            <img className="hero-artwork" src={`${import.meta.env.BASE_URL}brand/cowork-hero.webp`} alt="Cowork: работа с документами, таблицами и презентациями вместе с ИИ" width="2580" height="2700" fetchPriority="high" />
          </div>
          <div className="form-panel" id="registration">
            <h2>Получить доступ</h2>
            <RegistrationForm />
          </div>
        </section>
        <section className="steps" aria-label="Как получить доступ">
          <div className="step"><span className="step-number">01</span><div><h3>Оставьте заявку</h3><p>Имя, фамилия, компания и email.</p></div></div>
          <div className="step"><span className="step-number">02</span><div><h3>Дождитесь доступа</h3><p>Выдадим его на следующий день.</p></div></div>
          <div className="step"><span className="step-number">03</span><div><h3>Начните работу</h3><p>В MWS AI Cowork.</p></div></div>
        </section>
      </main>
      <footer className="site-footer"><span>MWS AI Cowork</span><span>Новый способ работать вместе.</span></footer>
    </div>
  );
}
