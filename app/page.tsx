import { siteConfig as c } from "@/site.config";
import Reveal from "@/components/Reveal";
import Envelope from "@/components/Envelope";
import Countdown from "@/components/Countdown";
import Rsvp from "@/components/Rsvp";
import StoryCarousel from "@/components/StoryCarousel";

const bg = (src: string) => ({ backgroundImage: `url('${src}')` });

export default function Home() {
  return (
    <main>
      <Envelope />

      {/* ---------------- HERO ---------------- */}
      <section className="section hero">
        <div className="section-bg" style={bg(c.hero.backgroundImage)} />
        <div className="section-inner">
          <Reveal>
            <img className="hero__monogram" src={c.couple.monogramImage} alt={c.couple.monogramText} />
          </Reveal>
          <Reveal delay={120}>
            <h1 className="hero__name script">{c.couple.scriptName}</h1>
          </Reveal>
          <Reveal delay={220}>
            <div className="heart">♥</div>
            <p className="eyebrow hero__kicker">{c.hero.kicker}</p>
            <div className="heart">♥</div>
          </Reveal>
          <Reveal delay={320}>
            <div className="divider">{c.hero.saveTheDate}</div>
            <p className="hero__date script">{c.hero.dateLine}</p>
            <p className="eyebrow hero__loc">{c.hero.location}</p>
          </Reveal>
        </div>
      </section>

      {/* ---------------- COUNTDOWN ---------------- */}
      <section className="section countdown">
        <div className="section-inner">
          <Reveal>
            <p className="ornament">⤙ {c.countdown.heading} ⤚</p>
          </Reveal>
          <Reveal delay={150}>
            <div className="countdown__clock">
              <Countdown />
            </div>
          </Reveal>
          <Reveal delay={250}>
            <p className="countdown__foot">❦ {c.countdown.footnote} ❦</p>
            <div className="heart" style={{ marginTop: "1.5rem" }}>♥</div>
            <p className="countdown__thanks">{c.countdown.thankYou}</p>
            <div className="heart">♥</div>
          </Reveal>
        </div>
      </section>

      {/* ---------------- FAMILIES ---------------- */}
      <section className="section">
        <div className="section-bg" style={bg(c.families.backgroundImage)} />
        <div className="section-inner">
          <Reveal>
            <p className="script families__tagline">{c.families.tagline}</p>
            <p className="ornament">❦ ♥ ❦</p>
            <h2 className="section-title">{c.families.heading}</h2>
            <p className="ornament">⤙ ❦ ⤚</p>
          </Reveal>

          <div className="families__grid">
            <Reveal className="family-card" delay={80}>
              <h3 className="family-card__name script">{c.families.groom.name}</h3>
              <span className="family-card__star">✦</span>
              <p className="family-card__rel">{c.families.groom.relationLabel}</p>
              <p className="family-card__parents">{c.families.groom.parents}</p>
              <p className="family-card__rel">{c.families.groom.siblingLabel}</p>
              <p className="family-card__sib">{c.families.groom.siblings.join(" & ")}</p>
            </Reveal>

            <Reveal className="families__sep" delay={140}>
              <img src={c.couple.monogramImage} alt={c.couple.monogramText} />
            </Reveal>

            <Reveal className="family-card" delay={200}>
              <h3 className="family-card__name script">{c.families.bride.name}</h3>
              <span className="family-card__star">✦</span>
              <p className="family-card__rel">{c.families.bride.relationLabel}</p>
              <p className="family-card__parents">{c.families.bride.parents}</p>
              <p className="family-card__rel">{c.families.bride.siblingLabel}</p>
              <p className="family-card__sib">{c.families.bride.siblings.join(" & ")}</p>
            </Reveal>
          </div>

          <Reveal delay={120}>
            <p className="families__closing">
              {c.families.closing.map((line, i) => (
                <span key={i}>
                  {line}
                  <br />
                </span>
              ))}
            </p>
            <div className="heart">♥</div>
          </Reveal>
        </div>
      </section>

      {/* ---------------- OUR STORY ---------------- */}
      <section className="section">
        <div className="section-bg" style={bg(c.story.backgroundImage)} />
        <div className="section-inner">
          <Reveal>
            <h2 className="section-title">{c.story.heading}</h2>
            <p className="ornament">❦ ❦</p>
            <p className="story__intro">{c.story.intro}</p>
          </Reveal>

          <StoryCarousel items={c.story.gallery} />

          <Reveal delay={120}>
            <p className="story__quote">&rdquo;{c.story.quote}&rdquo;</p>
            <div className="heart">♥</div>
          </Reveal>
        </div>
      </section>

      {/* ---------------- SCHEDULE OVERVIEW ---------------- */}
      <section className="section">
        <div className="section-bg" style={bg(c.schedule.backgroundImage)} />
        <div className="section-inner">
          <Reveal>
            <p className="ornament">❦</p>
            <h2 className="section-title">{c.schedule.heading}</h2>
            <div className="heart">♥</div>
            <p className="eyebrow schedule__sub">{c.schedule.subheading}</p>
          </Reveal>
          <div className="schedule__cards">
            {c.schedule.cards.map((card, i) => (
              <Reveal className="schedule__card" delay={i * 90} key={i}>
                <img src={card.image} alt={card.title} loading="lazy" />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------- WEDDING ---------------- */}
      <section className="section">
        <div className="section-bg" style={bg(c.wedding.backgroundImage)} />
        <div className="section-inner">
          <Reveal>
            <h2 className="section-title">{c.wedding.eyebrow}</h2>
            <div className="heart">♥</div>
            <p className="eyebrow">{c.wedding.subheading}</p>
            <p className="ornament">❦</p>
            <h3 className="wedding__date script">{c.wedding.dateLabel}</h3>
            <p className="ornament">♦</p>
          </Reveal>
          <Reveal delay={120}>
            <img className="wedding__content" src={c.wedding.contentImage} alt={c.wedding.title} loading="lazy" />
          </Reveal>
          <Reveal delay={180}>
            <h2 className="wedding__title script">{c.wedding.title}</h2>
            <p className="wedding__time">{c.wedding.time}</p>
            <p className="wedding__venue-label">{c.wedding.venueLabel}</p>
            <a className="wedding__venue" href={c.wedding.venueMapUrl} target="_blank" rel="noopener noreferrer">
              {c.wedding.venueName}
            </a>
          </Reveal>
          <Reveal delay={240}>
            <p className="wedding__verse">
              &ldquo;
              {c.wedding.verse.map((l, i) => (
                <span key={i}>
                  {l}
                  <br />
                </span>
              ))}
              &rdquo;
            </p>
            <p className="wedding__verse-ref eyebrow">{c.wedding.verseRef}</p>
            <div className="heart">♥</div>
          </Reveal>
        </div>
      </section>

      {/* ---------------- RECEPTION ---------------- */}
      <section className="section">
        <div className="section-bg" style={bg(c.reception.backgroundImage)} />
        <div className="section-inner">
          <Reveal>
            <h2 className="section-title">{c.reception.eyebrow}</h2>
            <div className="heart">♥</div>
            <p className="eyebrow">{c.reception.subheading}</p>
          </Reveal>
          <Reveal delay={120}>
            <img className="reception__content" src={c.reception.contentImage} alt="Reception" loading="lazy" />
          </Reveal>
        </div>
      </section>

      {/* ---------------- RSVP ---------------- */}
      <section className="section rsvp">
        <div className="section-bg" style={bg(c.rsvp.backgroundImage)} />
        <div className="section-inner">
          <Reveal>
            <Rsvp />
          </Reveal>
          <Reveal delay={120}>
            <p className="rsvp__footer script">{c.rsvp.footer}</p>
            <div className="heart">♥</div>
            <a className="rsvp__directions" href={c.rsvp.directionsUrl} target="_blank" rel="noopener noreferrer">
              📍 {c.rsvp.directionsLabel}
            </a>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
