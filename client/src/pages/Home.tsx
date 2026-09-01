// Design direction: Brass & Black Atelier — cinematic grooming editorial, asymmetrical content rails, charcoal/ivory/brass palette, tactile micro-interactions.

import { useEffect, useState } from "react";
import {
  ArrowUpRight,
  Check,
  ChevronDown,
  Clock3,
  Instagram,
  MapPin,
  Menu,
  Phone,
  Scissors,
  Star,
  X,
} from "lucide-react";

const HERO = "/manus-storage/omar-barbershop-hero_24ad8ac6.png";
const MONOGRAM = "/manus-storage/omar-monogram_22967487.png";
const TOOLS = "/manus-storage/omar-tools-detail_2871489e.png";
const CHAIR = "/manus-storage/omar-chair-detail_95da7558.png";
const WINDOW = "/manus-storage/omar-window-light_2a86ce32.png";
const TRANSFORMATION = "/manus-storage/CrazyTransformation.......#fyp#foryou#foryoupage#explore#houston#houstonbarber#barber#ba_76769eeb.mp4";
const DROP_FADE = "/manus-storage/CleanDropFade......#barber#explore#explorepage#fade#dropfade#houstonbarber#fades#haircu_625b2ec8.mp4";
const HERO_VIDEO = "/manus-storage/Barber_preparing_client_for_haircut_202609020404_4ceb0ca9.mp4";

const mapsUrl = "https://www.google.com/maps/dir/?api=1&destination=7710+Bellaire+Blvd+%23+I,+Houston,+TX+77036";
const phone = "+17134808254";

const services = [
  { name: "Haircut", note: "The everyday cut, made exact.", price: "$50", duration: "1 hr" },
  { name: "Haircut + Beard", note: "A complete reset, head to chin.", price: "$60", duration: "1 hr" },
  { name: "Line Up", note: "Crisp edges and a clean finish.", price: "$25", duration: "40 min" },
  { name: "V.I.P", note: "Haircut, beard trim, wash, hot towel, steam, moisturizer, and beard oil.", price: "$85", duration: "2 hr" },
];

const reviews = [
  "Great experience, friendly staff and quality cuts and styles.",
  "The service is excellent and the price is reasonable.",
  "I told the guy I only have money for a regular haircut which is $30.",
];

function scrollToId(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeService, setActiveService] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 36);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="site-shell">
      <header className={`topbar ${scrolled ? "topbar-scrolled" : ""}`}>
        <button className="brand-lockup" onClick={() => scrollToId("top")} aria-label="Back to top">
          <img src={MONOGRAM} alt="" className="brand-mark" />
          <span className="brand-name">Omar<br /><em>Barbershop</em></span>
        </button>
        <nav className={`main-nav ${menuOpen ? "main-nav-open" : ""}`} aria-label="Main navigation">
          <button onClick={() => { scrollToId("services"); closeMenu(); }}>Services</button>
          <button onClick={() => { scrollToId("story"); closeMenu(); }}>Our approach</button>
          <button onClick={() => { scrollToId("visit"); closeMenu(); }}>Find us</button>
          <a href="https://www.instagram.com/omar.cuts/" target="_blank" rel="noreferrer"><Instagram size={15} /> Instagram</a>
          <a className="nav-book" href="https://booksy.com/" target="_blank" rel="noreferrer">Book online <ArrowUpRight size={15} /></a>
        </nav>
        <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label={menuOpen ? "Close menu" : "Open menu"}>
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </header>

      <main id="top">
        <section className="hero" aria-labelledby="hero-title">
          <video className="hero-image hero-video" autoPlay muted loop playsInline preload="metadata" poster={HERO} aria-label="Barber preparing a client for a haircut in a warm, dark barbershop">
            <source src={HERO_VIDEO} type="video/mp4" />
          </video>
          <div className="hero-scrim" />
          <div className="hero-grain" />
          <div className="hero-content">
            <p className="eyebrow hero-eyebrow"><span /> Houston, Texas <span /></p>
            <h1 id="hero-title">Leave sharper<br /><i>than you arrived.</i></h1>
            <p className="hero-copy">Precision cuts, honest conversation, and the kind of attention you can see in the mirror.</p>
            <div className="hero-actions">
              <a className="button button-brass" href="https://booksy.com/" target="_blank" rel="noreferrer">Book your chair <ArrowUpRight size={17} /></a>
              <button className="text-link light-link" onClick={() => scrollToId("services")}>Explore the services <ArrowUpRight size={16} /></button>
            </div>
          </div>
          <div className="hero-meta">
            <div><span className="meta-label">The neighborhood cut</span><strong>7710 Bellaire Blvd</strong></div>
            <div className="hero-meta-right"><span className="meta-label">Open today</span><strong>Closes 9 pm</strong></div>
          </div>
          <button className="scroll-cue" onClick={() => scrollToId("story")} aria-label="Scroll to our approach"><span /> Scroll to explore</button>
        </section>

        <section className="intro-section" id="story">
          <div className="section-rail"><span>01</span><span className="rail-line" /><span>THE APPROACH</span></div>
          <div className="intro-copy">
            <p className="eyebrow">A cut worth taking time for</p>
            <h2>Good grooming is<br /><em>a small ritual.</em></h2>
            <p className="body-large">At Omar Barbershop, every appointment is a reset. We take the time to understand what you want, work through the details, and finish with a look that feels like you — just dialed in.</p>
            <a className="text-link dark-link" href={`tel:${phone}`}>Talk to Omar <Phone size={15} /></a>
          </div>
          <div className="intro-image-wrap">
            <img src={CHAIR} alt="Vintage barber chair waiting at a warm wood station" className="intro-image" />
            <div className="image-caption"><span>Craft over rush</span><span>Houston · TX</span></div>
          </div>
        </section>

        <section className="service-section" id="services">
          <div className="service-header">
            <div className="section-rail light-rail"><span>02</span><span className="rail-line" /><span>THE MENU</span></div>
            <div>
              <p className="eyebrow">Make the appointment yours</p>
              <h2>Start with the<br /><em>right cut.</em></h2>
            </div>
            <p className="service-intro">From a clean line-up to a full reset, the essentials are here. Additional services include fades, shaves, color, curly hair, scalp treatments, waxing, and more.</p>
          </div>
          <div className="service-layout">
            <div className="service-list" role="list">
              {services.map((service, index) => (
                <button key={service.name} className={`service-row ${activeService === index ? "service-row-active" : ""}`} onClick={() => setActiveService(index)} role="listitem">
                  <span className="service-index">0{index + 1}</span>
                  <span className="service-info"><strong>{service.name}</strong><small>{service.note}</small></span>
                  <span className="service-details"><b>{service.price}</b><small>{service.duration}</small></span>
                  <ArrowUpRight className="service-arrow" size={20} />
                </button>
              ))}
              <a className="service-all-link" href="https://booksy.com/" target="_blank" rel="noreferrer">See availability &amp; book online <ArrowUpRight size={16} /></a>
            </div>
            <div className="service-image-wrap">
              <img src={TOOLS} alt="Barber tools arranged on a dark walnut workstation" className="service-image" />
              <div className="service-image-note"><Scissors size={18} /><span>{services[activeService].name}<br /><em>{services[activeService].duration} appointment</em></span></div>
            </div>
          </div>
        </section>

        <section className="work-section" id="work">
          <div className="work-copy">
            <div className="section-rail"><span>03</span><span className="rail-line" /><span>THE WORK</span></div>
            <p className="eyebrow">Watch the transformation</p>
            <h2>Details make<br /><em>the difference.</em></h2>
            <p className="body-large">A real before-and-after from the chair, from bulk removal and fade work to crisp edging, razor detail, and the finished style.</p>
            <div className="work-points"><span><Check size={14} /> Clippers to scissors</span><span><Check size={14} /> Straight-razor finish</span><span><Check size={14} /> Styled for the reveal</span></div>
          </div>
          <div className="work-video-grid">
            <div className="work-video-frame">
              <video className="work-video" autoPlay muted loop playsInline controls preload="metadata" poster={HERO} aria-label="Haircut transformation showing the barber's process and finished cut">
                <source src={TRANSFORMATION} type="video/mp4" />
                Your browser does not support video playback.
              </video>
              <div className="work-video-label"><span>REAL WORK</span><span>28 SEC</span></div>
            </div>
            <div className="work-video-frame work-video-frame-alt">
              <video className="work-video" autoPlay muted loop playsInline controls preload="metadata" poster={HERO} aria-label="Clean drop fade haircut reveal">
                <source src={DROP_FADE} type="video/mp4" />
                Your browser does not support video playback.
              </video>
              <div className="work-video-label"><span>DROP FADE</span><span>10 SEC</span></div>
            </div>
          </div>
        </section>

        <section className="quote-section">
          <div className="quote-mark">“</div>
          <div className="quote-copy">
            <p className="eyebrow">The word on the street</p>
            <blockquote>“{reviews[0]}”</blockquote>
            <div className="rating-row"><span className="stars">★★★★★</span><span>4.9 from 207 Google reviews</span></div>
          </div>
          <a className="text-link light-link" href="https://www.google.com/search?q=Omar+Barbershop+7710+Bellaire+Blvd+Houston+reviews" target="_blank" rel="noreferrer">Read more reviews <ArrowUpRight size={16} /></a>
        </section>

        <section className="reviews-section" aria-label="Client review highlights">
          <div className="reviews-heading"><p className="eyebrow">A few words from the chair</p><h2>Feels good<br /><em>to be seen.</em></h2></div>
          <div className="review-grid">
            {reviews.slice(1).map((review, index) => <article key={review} className="review-card"><span className="review-number">0{index + 2}</span><p>“{review}”</p><span className="review-source">Google review</span></article>)}
            <div className="review-card review-card-accent"><Star size={18} fill="currentColor" /><strong>4.9</strong><span>207 reviews<br />and counting</span></div>
          </div>
        </section>

        <section className="visit-section" id="visit">
          <div className="visit-image-wrap"><img src={WINDOW} alt="Warm light inside a neighborhood barbershop in Houston" className="visit-image" /></div>
          <div className="visit-content">
            <div className="section-rail"><span>04</span><span className="rail-line" /><span>THE VISIT</span></div>
            <p className="eyebrow">Pull up a chair</p>
            <h2>Find us<br /><em>in Houston.</em></h2>
            <div className="visit-details">
              <div className="detail-item"><MapPin size={19} /><div><span className="meta-label">Address</span><strong>7710 Bellaire Blvd # I<br />Houston, TX 77036</strong></div></div>
              <div className="detail-item"><Clock3 size={19} /><div><span className="meta-label">Hours</span><strong>Open today<br />Closes 9 pm</strong></div></div>
              <div className="detail-item"><Phone size={19} /><div><span className="meta-label">Call the shop</span><a href={`tel:${phone}`}><strong>+1 713-480-8254</strong></a></div></div>
            </div>
            <div className="visit-actions"><a className="button button-dark" href={mapsUrl} target="_blank" rel="noreferrer">Get directions <ArrowUpRight size={17} /></a><a className="text-link dark-link" href="https://www.instagram.com/omar.cuts/" target="_blank" rel="noreferrer">Follow @omar.cuts <Instagram size={15} /></a></div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="footer-top"><div className="footer-brand"><img src={MONOGRAM} alt="" className="brand-mark" /><span className="brand-name">Omar<br /><em>Barbershop</em></span></div><p>Right here when you need<br />to get right.</p><a className="button button-brass" href="https://booksy.com/" target="_blank" rel="noreferrer">Book online <ArrowUpRight size={17} /></a></div>
        <div className="footer-bottom"><span>© 2026 Omar Barbershop · Houston, TX</span><span>Built for the next appointment.</span><a href="#top" onClick={(e) => { e.preventDefault(); scrollToId("top"); }}>Back to top ↑</a></div>
      </footer>

      <a href={`tel:${phone}`} className="mobile-booking-bar"><Phone size={16} /> Call +1 713-480-8254 <ArrowUpRight size={16} /></a>
    </div>
  );
}
