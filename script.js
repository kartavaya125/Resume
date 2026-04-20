// ═══════════════════════════════════════════════════════════
//  RESUME DATA — Edit this to personalize your site
// ═══════════════════════════════════════════════════════════
const DATA = {
  name: "Kartavaya Suryavanshi",
  nickname: "Rocky",
  role: "Aspiring Full Stack Developer",
  taglines: ["Building Digital Experiences", "Learning Every Single Day", "Solving Real Problems", "Crafting Clean Code", "Future CS & AI Student"],
  bio: "19-year-old developer from India, currently in a dedicated gap year — learning, building, and levelling up my skills before starting my Bachelor's in CS & AI in Italy (2026).",
  location: "India 🇮🇳",
  email: "suryakartavaya007@gmail.com",
  phone: "+91 93341 52734",
  avatar: "avatar.png",
  socials: [
    { icon: "fab fa-instagram", href: "https://instagram.com/rocky.motions", label: "Instagram" },
  ],
  stats: [
    { number: "6+", label: "Projects Built" },
    { number: "2mo+", label: "Work Exp" },
    { number: "10+", label: "Technologies" },
    { number: "100%", label: "Dedication" },
  ],
  skills: [
    { name: "HTML & CSS", level: 92 },
    { name: "JavaScript / ES6+", level: 78 },
    { name: "React.js", level: 70 },
    { name: "Python", level: 60 },
    { name: "Node.js", level: 55 },
    { name: "Git & GitHub", level: 75 },
  ],
  techStack: ["HTML5", "CSS3", "JavaScript", "React", "Tailwind CSS", "Python", "Node.js", "Firebase", "MongoDB", "Git", "VS Code", "REST APIs"],
  projects: [
    {
      title: "Spotify-Style Music Player",
      desc: "A custom web music player with karaoke-style synchronized lyrics, smooth fill animations, and a premium dark Spotify-inspired UI.",
      tags: ["HTML", "CSS", "Vanilla JS"],
      icon: "🎵",
      img: "proj_music.png",
    },
    {
      title: "Interactive Birthday Website",
      desc: "Multi-page birthday experience with candle-blowing interaction, confetti, 3D envelope reveal, and animated photo scrapbook.",
      tags: ["HTML", "CSS", "Canvas API"],
      icon: "🎂",
      img: "proj_birthday.png",
    },
    {
      title: "Common Sense AI App",
      desc: "Humorous AI-themed app with terminal aesthetics, typewriter effects, simulated progress bars, and Web Audio API sound effects.",
      tags: ["HTML", "JS", "Web Audio API"],
      icon: "🤖",
      img: "proj_ai.png",
    },
    {
      title: "Personal Resume Website",
      desc: "This very site! Built with React, Tailwind CSS, and Vanilla JS — particle system, scroll reveal, typewriter, and smooth animations.",
      tags: ["React", "Tailwind", "Vanilla JS"],
      icon: "💼",
      img: "proj_resume.png",
    },
    {
      title: "Sister's Birthday Envelope",
      desc: "Interactive 3D envelope animation birthday site with photo reveals, confetti, and multi-phase user journey for a personal surprise.",
      tags: ["HTML", "CSS", "JS"],
      icon: "💌",
      img: "proj_envelope.png",
    },
    {
      title: "Majboor Music Player",
      desc: "A dedicated song player with CSS karaoke text-fill animation synced precisely to audio, custom controls, and fixed themed background.",
      tags: ["HTML", "CSS", "JS"],
      icon: "🎶",
      img: "proj_majboor.png",
    },
  ],
  experience: [
    {
      role: "Self-Learning Developer (Gap Year)",
      company: "Independent Practice",
      period: "Feb 2026 — Present (2 months)",
      desc: "Dedicated gap year focused on hands-on web development. Built 6+ real projects covering UI, animations, Canvas API, and React. Actively upskilling in backend (Node.js, MongoDB) and deepening JavaScript fundamentals every day.",
    },
  ],
  education: [
    {
      degree: "Bachelor's in Computer Science & AI",
      school: "Italy (Planned — 2026)",
      period: "Starting 2026",
      desc: "Planning to pursue higher education abroad in Italy with a focus on Computer Science and Artificial Intelligence.",
    },
    {
      degree: "Class 12 — Science Stream",
      school: "Senior Secondary School",
      period: "Passed 2025 — 81.2%",
      desc: "Completed Class 12 with 81.2%. Interest in development sparked in Class 11 while exploring how websites and games are built.",
    },
    {
      degree: "Class 10 — Secondary School",
      school: "Secondary School",
      period: "Passed 2023 — 84.5%",
      desc: "Completed Class 10 with 84.5%, building a strong academic foundation before pursuing technical interests.",
    },
  ],
  aboutMe: [
    "Hi, I'm Kartavaya Suryavanshi (Rocky), a 19-year-old student and aspiring Full Stack Developer with a strong interest in web development and artificial intelligence.",
    "After completing Class 12, I chose a dedicated gap year to improve my technical skills through hands-on practice before starting my higher education. I'm currently building real projects and levelling up consistently.",
    "I'm planning to pursue my Bachelor's degree in Computer Science & AI in Italy starting in 2026 — combining my passion for technology with an international experience.",
    "My interest in development began in Class 11 — driven by curiosity about how websites and games work behind the scenes. Since then, I've been practising consistently through self-learning and building projects.",
    "I prefer working independently, enjoy solving problems with logical and creative approaches, and I'm currently focused on strengthening my backend skills. My short-term goal: strong backend expertise. Long-term: become a skilled full stack developer capable of building impactful applications.",
  ],
};

// ═══════════════════════════════════════════════════════════
//  HOOKS
// ═══════════════════════════════════════════════════════════
const { useState, useEffect, useRef } = React;

function useTypewriter(words, speed = 80, pause = 2000) {
  const [text, setText] = useState('');
  const [wordIdx, setWordIdx] = useState(0);
  const [charIdx, setCharIdx] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const word = words[wordIdx % words.length];
    let timeout;
    if (!deleting && charIdx < word.length) {
      timeout = setTimeout(() => setCharIdx(c => c + 1), speed);
    } else if (!deleting && charIdx === word.length) {
      timeout = setTimeout(() => setDeleting(true), pause);
    } else if (deleting && charIdx > 0) {
      timeout = setTimeout(() => setCharIdx(c => c - 1), speed / 2);
    } else {
      setDeleting(false);
      setWordIdx(w => w + 1);
    }
    setText(word.slice(0, charIdx));
    return () => clearTimeout(timeout);
  }, [charIdx, deleting, wordIdx]);

  return text;
}

// ═══════════════════════════════════════════════════════════
//  COMPONENTS
// ═══════════════════════════════════════════════════════════

function Navbar({ menuOpen, setMenuOpen }) {
  const navItems = ['About Me', 'Skills', 'Projects', 'Experience', 'Contact'];
  return (
    <>
      <nav className="navbar">
        <div className="nav-logo">KS<span style={{ color: '#38bdf8' }}>.</span></div>
        <ul className="nav-links">
          {navItems.map(item => (
            <li key={item}>
              <a href={`#${item.toLowerCase().replace(' ', '-')}`} className="nav-link">{item}</a>
            </li>
          ))}
        </ul>
        <button className="hamburger" id="hamburger" onClick={() => setMenuOpen(!menuOpen)} aria-label="Menu">
          <span /><span /><span />
        </button>
      </nav>
      <div className={`mobile-nav ${menuOpen ? 'open' : ''}`}>
        {navItems.map(item => (
          <a key={item} href={`#${item.toLowerCase()}`} className="nav-link text-2xl" onClick={() => setMenuOpen(false)}>{item}</a>
        ))}
      </div>
    </>
  );
}

function Hero() {
  const typed = useTypewriter(DATA.taglines);
  return (
    <section id="about" className="hero-section" style={{ maxWidth: '100vw', padding: '6rem 5vw 2rem', backgroundImage: 'url(hero_bg.png)', backgroundSize: 'cover', backgroundPosition: 'center', backgroundBlendMode: 'luminosity' }}>
      <div style={{ position:'absolute', inset:0, background:'rgba(2,8,23,0.72)', zIndex:0 }} />
      <div className="shape shape-1" /><div className="shape shape-2" />
      <div style={{ flex: 1, zIndex: 1 }}>
        <div className="hero-badge"><span className="dot" /> Available for Work</div>
        <h1 className="hero-name">{DATA.name}</h1>
        <p className="hero-subtitle">{DATA.role}</p>
        <p className="hero-typewriter">
          {'> '}{typed}<span className="type-cursor">|</span>
        </p>
        <p className="hero-desc">{DATA.bio}</p>
        <div style={{ display: 'flex', gap: '1rem', marginTop: '1.5rem', flexWrap: 'wrap' }}>
          <span style={{ color: '#60a5fa', fontSize: '0.9rem' }}><i className="fas fa-map-marker-alt" style={{ marginRight: 6 }} />{DATA.location}</span>
          <span style={{ color: '#60a5fa', fontSize: '0.9rem' }}><i className="fas fa-envelope" style={{ marginRight: 6 }} />{DATA.email}</span>
        </div>
        <div className="hero-cta">
          <a href="#contact" className="btn-primary"><i className="fas fa-paper-plane" /> Hire Me</a>
          <a href="#projects" className="btn-outline"><i className="fas fa-code" /> View Work</a>
        </div>
        <div style={{ display: 'flex', gap: '0.75rem', marginTop: '2rem' }}>
          {DATA.socials.map((s, i) => (
            <a key={i} href={s.href} target="_blank" rel="noreferrer" className="social-link" aria-label={s.label}>
              <i className={s.icon} />
            </a>
          ))}
        </div>
      </div>
      <div style={{ zIndex: 1 }}>
        <div className="hero-avatar-wrap">
          <div className="hero-avatar-glow" />
          <div className="hero-avatar-ring" />
          <img src={DATA.avatar} alt={DATA.name} className="hero-avatar-img" />
        </div>
      </div>
    </section>
  );
}

function Stats() {
  return (
    <div style={{ background: 'rgba(7,21,55,0.5)', borderTop: '1px solid rgba(59,130,246,0.1)', borderBottom: '1px solid rgba(59,130,246,0.1)', padding: '3rem 5vw' }}>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', gap: '1.5rem', maxWidth: 1200, margin: '0 auto' }}>
        {DATA.stats.map((s, i) => (
          <div key={i} className="stat-card reveal">
            <div className="stat-number">{s.number}</div>
            <div style={{ color: '#64748b', fontSize: '0.85rem', marginTop: 4 }}>{s.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

function Skills() {
  return (
    <section id="skills" style={{ maxWidth: 1200, margin: '0 auto', padding: '6rem 5vw' }}>
      <div className="section-tag">Skills</div>
      <h2 className="section-title">What I Work With</h2>
      <div className="section-divider" />
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: '3rem' }}>
        <div className="reveal-left">
          {DATA.skills.map((sk, i) => (
            <div key={i} style={{ marginBottom: '1.5rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 8 }}>
                <span style={{ color: '#e2e8f0', fontWeight: 600 }}>{sk.name}</span>
                <span style={{ color: '#60a5fa', fontFamily: 'JetBrains Mono', fontSize: '0.8rem' }}>{sk.level}%</span>
              </div>
              <div className="skill-bar-track">
                <div className="skill-bar-fill" data-width={sk.level} />
              </div>
            </div>
          ))}
        </div>
        <div className="reveal-right" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
          <h3 style={{ color: '#93c5fd', fontWeight: 700, marginBottom: '1.5rem', fontSize: '1.2rem' }}>Tech Stack</h3>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.6rem' }}>
            {DATA.techStack.map((t, i) => (
              <span key={i} className="tech-pill"><i className="fas fa-circle-dot" style={{ fontSize: '0.5rem' }} />{t}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Projects() {
  return (
    <section id="projects" style={{ maxWidth: 1200, margin: '0 auto', padding: '6rem 5vw', background: 'rgba(7,21,55,0.3)' }}>
      <div className="section-tag">Projects</div>
      <h2 className="section-title">Things I've Built</h2>
      <div className="section-divider" />
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
        {DATA.projects.map((p, i) => (
          <div key={i} className="project-card reveal">
            <div style={{ position:'relative', overflow:'hidden', height:180 }}>
              <img src={p.img} alt={p.title} style={{ width:'100%', height:'100%', objectFit:'cover', transition:'transform 0.5s ease' }}
                onMouseOver={e=>e.target.style.transform='scale(1.08)'}
                onMouseOut={e=>e.target.style.transform='scale(1)'}
              />
              <div style={{ position:'absolute', inset:0, background:'linear-gradient(to top, rgba(7,21,55,0.95) 0%, rgba(7,21,55,0.3) 60%, transparent 100%)' }} />
              <span style={{ position:'absolute', top:12, right:12, fontSize:'1.6rem', filter:'drop-shadow(0 0 8px rgba(59,130,246,0.8))' }}>{p.icon}</span>
            </div>
            <div style={{ padding:'1.5rem' }}>
              <h3 style={{ fontWeight: 700, fontSize: '1.05rem', marginBottom: '0.6rem', color: '#e2e8f0' }}>{p.title}</h3>
              <p style={{ color: '#64748b', fontSize: '0.875rem', lineHeight: 1.7, marginBottom: '1.2rem' }}>{p.desc}</p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
                {p.tags.map((tag, j) => (
                  <span key={j} className="tech-pill" style={{ fontSize: '0.72rem' }}>{tag}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function Experience() {
  return (
    <section id="experience" style={{ maxWidth: 1200, margin: '0 auto', padding: '6rem 5vw' }}>
      <div className="section-tag">Experience</div>
      <h2 className="section-title">My Journey</h2>
      <div className="section-divider" />
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: '4rem' }}>
        <div>
          <h3 style={{ color: '#38bdf8', fontWeight: 700, fontSize: '1.1rem', marginBottom: '2rem', display: 'flex', alignItems: 'center', gap: 8 }}>
            <i className="fas fa-briefcase" /> Work Experience
          </h3>
          <div className="timeline">
            {DATA.experience.map((ex, i) => (
              <div key={i} className="timeline-item reveal">
                <div className="timeline-dot" />
                <div className="glass-card">
                  <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: 4, marginBottom: 8 }}>
                    <h4 style={{ fontWeight: 700, color: '#e2e8f0' }}>{ex.role}</h4>
                    <span style={{ fontFamily: 'JetBrains Mono', fontSize: '0.75rem', color: '#38bdf8', background: 'rgba(56,189,248,0.1)', padding: '2px 10px', borderRadius: 999 }}>{ex.period}</span>
                  </div>
                  <div style={{ color: '#60a5fa', fontSize: '0.85rem', marginBottom: 8 }}>{ex.company}</div>
                  <p style={{ color: '#64748b', fontSize: '0.9rem', lineHeight: 1.7 }}>{ex.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div>
          <h3 style={{ color: '#38bdf8', fontWeight: 700, fontSize: '1.1rem', marginBottom: '2rem', display: 'flex', alignItems: 'center', gap: 8 }}>
            <i className="fas fa-graduation-cap" /> Education
          </h3>
          <div className="timeline">
            {DATA.education.map((ed, i) => (
              <div key={i} className="timeline-item reveal">
                <div className="timeline-dot" />
                <div className="glass-card">
                  <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: 4, marginBottom: 8 }}>
                    <h4 style={{ fontWeight: 700, color: '#e2e8f0' }}>{ed.degree}</h4>
                    <span style={{ fontFamily: 'JetBrains Mono', fontSize: '0.75rem', color: '#38bdf8', background: 'rgba(56,189,248,0.1)', padding: '2px 10px', borderRadius: 999 }}>{ed.period}</span>
                  </div>
                  <div style={{ color: '#60a5fa', fontSize: '0.85rem', marginBottom: 8 }}>{ed.school}</div>
                  <p style={{ color: '#64748b', fontSize: '0.9rem', lineHeight: 1.7 }}>{ed.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState(false);

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async e => {
    e.preventDefault();
    setSending(true);
    setError(false);
    try {
      const res = await fetch('https://formsubmit.co/ajax/suryakartavaya007@gmail.com', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          message: form.message,
          _subject: `Portfolio Message from ${form.name}`,
          _captcha: 'false',
        }),
      });
      const data = await res.json();
      if (data.success === 'true' || data.success === true) {
        setSent(true);
        setForm({ name: '', email: '', message: '' });
        setTimeout(() => setSent(false), 6000);
      } else { setError(true); }
    } catch { setError(true); }
    setSending(false);
  };

  return (
    <section id="contact" style={{ maxWidth: 1200, margin: '0 auto', padding: '6rem 5vw', background: 'rgba(7,21,55,0.3)' }}>
      <div className="section-tag">Contact</div>
      <h2 className="section-title">Let's Connect</h2>
      <div className="section-divider" />
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem' }}>
        <div className="reveal-left">
          <p style={{ color: '#94a3b8', lineHeight: 1.8, marginBottom: '2rem' }}>
            Have a project in mind? Want to collaborate? Or just say hi? I'm always open to new opportunities and interesting conversations.
          </p>
          {[
            { icon: 'fas fa-envelope', label: 'Email', value: DATA.email },
            { icon: 'fas fa-phone', label: 'Phone', value: DATA.phone },
            { icon: 'fas fa-map-marker-alt', label: 'Location', value: DATA.location },
          ].map((c, i) => (
            <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
              <div style={{ width: 48, height: 48, borderRadius: 12, background: 'rgba(59,130,246,0.1)', border: '1px solid rgba(59,130,246,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#60a5fa', flexShrink: 0 }}>
                <i className={c.icon} />
              </div>
              <div>
                <div style={{ color: '#64748b', fontSize: '0.75rem' }}>{c.label}</div>
                <div style={{ color: '#e2e8f0', fontWeight: 500 }}>{c.value}</div>
              </div>
            </div>
          ))}
          <div style={{ display: 'flex', gap: '0.75rem', marginTop: '1rem' }}>
            {DATA.socials.map((s, i) => (
              <a key={i} href={s.href} target="_blank" rel="noreferrer" className="social-link" aria-label={s.label}>
                <i className={s.icon} />
              </a>
            ))}
          </div>
        </div>
        <div className="glass-card reveal-right">
          {sent ? (
            <div style={{ textAlign: 'center', padding: '3rem 1rem' }}>
              <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>🚀</div>
              <h3 style={{ color: '#22c55e', fontWeight: 700, fontSize: '1.2rem' }}>Message Sent!</h3>
              <p style={{ color: '#64748b', marginTop: '0.5rem' }}>Check your inbox — it's on its way to my Gmail!</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
              {error && (
                <div style={{ background: 'rgba(239,68,68,0.1)', border: '1px solid rgba(239,68,68,0.3)', borderRadius: 10, padding: '0.75rem 1rem', color: '#f87171', fontSize: '0.85rem' }}>
                  ⚠️ Something went wrong. Please try again or email directly.
                </div>
              )}
              <div>
                <label style={{ color: '#64748b', fontSize: '0.8rem', display: 'block', marginBottom: 6 }}>Your Name</label>
                <input id="contact-name" name="name" value={form.name} onChange={handleChange} required placeholder="Your name" className="form-input" />
              </div>
              <div>
                <label style={{ color: '#64748b', fontSize: '0.8rem', display: 'block', marginBottom: 6 }}>Email Address</label>
                <input id="contact-email" type="email" name="email" value={form.email} onChange={handleChange} required placeholder="your@email.com" className="form-input" />
              </div>
              <div>
                <label style={{ color: '#64748b', fontSize: '0.8rem', display: 'block', marginBottom: 6 }}>Message</label>
                <textarea id="contact-message" name="message" value={form.message} onChange={handleChange} required rows={5} placeholder="Tell me about your project..." className="form-input" style={{ resize: 'vertical' }} />
              </div>
              <button type="submit" id="contact-submit" className="btn-primary" disabled={sending} style={{ justifyContent: 'center', marginTop: 4, opacity: sending ? 0.7 : 1, cursor: sending ? 'not-allowed' : 'pointer' }}>
                {sending
                  ? <><i className="fas fa-spinner fa-spin" /> Sending...</>
                  : <><i className="fas fa-paper-plane" /> Send Message</>
                }
              </button>
              <p style={{ color: '#334155', fontSize: '0.72rem', textAlign: 'center' }}>
                📬 Message goes directly to suryakartavaya007@gmail.com
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}

function AboutMe() {
  return (
    <section id="about-me" style={{ maxWidth: 1200, margin: '0 auto', padding: '6rem 5vw' }}>
      <div className="section-tag">About Me</div>
      <h2 className="section-title">Who I Am</h2>
      <div className="section-divider" />
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', alignItems: 'start' }}>
        <div className="reveal-left">
          <div className="glass-card" style={{ marginBottom: '1.5rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
              <img src={DATA.avatar} alt={DATA.name} style={{ width: 80, height: 80, borderRadius: '50%', border: '2px solid rgba(59,130,246,0.4)', objectFit: 'cover' }} />
              <div>
                <h3 style={{ fontWeight: 800, fontSize: '1.2rem', color: '#e2e8f0' }}>{DATA.name}</h3>
                <p style={{ color: '#38bdf8', fontSize: '0.85rem' }}>aka Rocky · Age 19</p>
                <p style={{ color: '#64748b', fontSize: '0.8rem', marginTop: 2 }}>{DATA.role}</p>
              </div>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              {[{icon:'fas fa-map-marker-alt',v:DATA.location},{icon:'fas fa-envelope',v:DATA.email},{icon:'fas fa-phone',v:DATA.phone},{icon:'fas fa-plane',v:'Planning Italy 2026 🇮🇹'}].map((r,i)=>(
                <div key={i} style={{ display:'flex', alignItems:'center', gap:'0.75rem' }}>
                  <i className={r.icon} style={{ color:'#60a5fa', width:16, textAlign:'center' }} />
                  <span style={{ color:'#94a3b8', fontSize:'0.85rem' }}>{r.v}</span>
                </div>
              ))}
            </div>
          </div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.6rem' }}>
            {['Self-Learner','Frontend Dev','Problem Solver','Creative Coder','Future CS Student','Gap Year 2026'].map((t,i)=>(
              <span key={i} className="tech-pill">{t}</span>
            ))}
          </div>
        </div>
        <div className="reveal-right" style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
          {DATA.aboutMe.map((para, i) => (
            <div key={i} className="glass-card" style={{ padding: '1.25rem 1.5rem', display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
              <span style={{ color: '#3b82f6', fontFamily: 'JetBrains Mono', fontSize: '0.8rem', flexShrink: 0, marginTop: 2 }}>0{i+1}</span>
              <p style={{ color: '#94a3b8', lineHeight: 1.8, fontSize: '0.95rem' }}>{para}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer>
      <p>Designed & Built with ❤️ by <span>{DATA.name}</span> aka <span>{DATA.nickname}</span></p>
      <p style={{ marginTop: '0.5rem', color: '#1e3a5f' }}>© {new Date().getFullYear()} All rights reserved.</p>
    </footer>
  );
}

// ═══════════════════════════════════════════════════════════
//  CURSOR GLOW (Vanilla JS injected)
// ═══════════════════════════════════════════════════════════
function CursorGlow() {
  const ref = useRef(null);
  useEffect(() => {
    const move = e => {
      if (ref.current) {
        ref.current.style.left = e.clientX + 'px';
        ref.current.style.top = e.clientY + 'px';
      }
    };
    window.addEventListener('mousemove', move);
    return () => window.removeEventListener('mousemove', move);
  }, []);
  return <div ref={ref} className="cursor-glow" />;
}

// ═══════════════════════════════════════════════════════════
//  APP ROOT
// ═══════════════════════════════════════════════════════════
function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <>
      <div className="grid-bg" />
      <CursorGlow />
      <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <main style={{ position: 'relative', zIndex: 1 }}>
        <Hero />
        <Stats />
        <AboutMe />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(React.createElement(App));
