/*
 * React application powering the portfolio site.
 *
 * This file defines a single‑page app with four main sections: Home, Projects,
 * About, and Contact. Navigation is handled via simple state changes rather
 * than a full router. When the user clicks on a project card the
 * corresponding HTML file in the ``projects/`` folder is opened in a new
 * browser tab.
 */

const { useState } = React;

// Navigation component
function Navigation({ page, onNavigate }) {
  const links = [
    { id: 'home', label: 'Home' },
    { id: 'projects', label: 'Projects' },
    { id: 'about', label: 'About' },
    { id: 'contact', label: 'Contact' },
  ];
  return (
    <nav>
      <div className="logo">Game Dev &amp; AI Programmer</div>
      <ul>
        {links.map((link) => (
          <li key={link.id}>
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                onNavigate(link.id);
              }}
              style={{
                color: page === link.id ? 'var(--primary-color)' : 'inherit',
                fontWeight: page === link.id ? 600 : 500,
              }}
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

// Home page
function Home({ projects }) {
  return (
    <div className="home-page">
      <div className="hero">
        <h1>Creating Worlds with Code &amp; Intelligence</h1>
        <p>
          I combine game development and artificial intelligence to craft unique,
          immersive experiences. From gameplay mechanics to smart, adaptive
          systems, my work bridges creativity with cutting‑edge technology.
        </p>
      </div>
      <section className="section">
        <h2>What I Do</h2>
        <p>
          I specialise in designing and developing video games, leveraging AI to
          build dynamic behaviours, procedural content and adaptive gameplay.
          Whether it’s a mobile puzzle or a large‑scale multiplayer title, I
          deliver polished experiences across platforms.
        </p>
      </section>
      <section className="section">
        <h2>Latest Projects</h2>
        <div className="card-grid">
          {projects.slice(0, 3).map((project) => (
            <div
              key={project.id}
              className="card"
              onClick={() => window.open(project.link, '_blank')}
            >
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <span className="btn">View Details</span>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

// Projects page
function Projects({ projects }) {
  return (
    <div className="section">
      <h2>Projects</h2>
      <p>Explore a selection of my work. Click a project to learn more.</p>
      <div className="card-grid">
        {projects.map((project) => (
          <div
            key={project.id}
            className="card"
            onClick={() => window.open(project.link, '_blank')}
          >
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <span className="btn">View Details</span>
          </div>
        ))}
      </div>
    </div>
  );
}

// About page
function About() {
  return (
    <div className="section">
      <h2>About Me</h2>
      <p className="subtitle">
        Passionate game developer and AI engineer with a mission to create
        memorable experiences.
      </p>
      <div className="about-two-column">
        <div className="journey-card">
          <h3>My Journey</h3>
          <p>
            I'm a game developer and AI engineer with over five years of
            experience creating engaging games for PC, mobile and the web. My
            journey began with a love for both playing and building games,
            leading me to pursue a professional career in interactive
            entertainment. Over the years I've worked on projects ranging from
            mobile puzzles to complex real‑time strategy titles. I specialise in
            gameplay programming, system design and optimisation, always
            striving to deliver smooth and enjoyable player experiences.
            Combining technical expertise with creative problem‑solving, I
            believe that great games are built on solid systems and polished
            mechanics. I'm committed to continuous learning and staying
            current with industry trends.
          </p>
        </div>
        <div className="stats-card">
          <div className="stat">
            <i className="fas fa-briefcase"></i>
            <div>
              <span>5+ Years</span>
              <small>Game Development Experience</small>
            </div>
          </div>
          <div className="stat">
            <i className="fas fa-gamepad"></i>
            <div>
              <span>10+ Games</span>
              <small>Published &amp; Shipped</small>
            </div>
          </div>
          <div className="stat">
            <i className="fas fa-download"></i>
            <div>
              <span>2M+ Downloads</span>
              <small>Across All Projects</small>
            </div>
          </div>
        </div>
      </div>
      <h3>Technical Skills</h3>
      <div className="skills-grid">
        <div className="skill-column">
          <h4>Game Engines</h4>
          <ul>
            <li>Unity</li>
            <li>Unreal Engine</li>
            <li>Godot</li>
          </ul>
        </div>
        <div className="skill-column">
          <h4>Programming</h4>
          <ul>
            <li>C#</li>
            <li>C++</li>
            <li>JavaScript</li>
            <li>Python</li>
          </ul>
        </div>
        <div className="skill-column">
          <h4>Platforms</h4>
          <ul>
            <li>PC</li>
            <li>Mobile (iOS/Android)</li>
            <li>WebGL</li>
          </ul>
        </div>
        <div className="skill-column">
          <h4>Tools</h4>
          <ul>
            <li>Git</li>
            <li>Blender</li>
            <li>Photoshop</li>
            <li>Visual Studio</li>
          </ul>
        </div>
        <div className="skill-column">
          <h4>Specialties</h4>
          <ul>
            <li>Gameplay Programming</li>
            <li>System Design</li>
            <li>Optimisation</li>
            <li>Multiplayer</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

// Contact page
function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    // Construct mailto link to send an email. Replace the email address below
    // with your own to receive messages.
    const recipient = 'your.email@example.com';
    const mailtoLink = `mailto:${recipient}?subject=${encodeURIComponent(
      formData.subject
    )}&body=${encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`
    )}`;
    window.location.href = mailtoLink;
  };
  return (
    <div className="section">
      <h2>Contact Me</h2>
      <p>Have a question or want to collaborate? Send me a message!</p>
      <form className="contact-form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="subject"
          placeholder="Subject"
          value={formData.subject}
          onChange={handleChange}
          required
        />
        <textarea
          name="message"
          placeholder="Message"
          rows="5"
          value={formData.message}
          onChange={handleChange}
          required
        ></textarea>
        <button type="submit">Send Message</button>
      </form>
    </div>
  );
}

// Footer component with social links
function Footer() {
  return (
    <footer>
      <div className="social-icons">
        <a href="https://www.linkedin.com" target="_blank" rel="noopener" aria-label="LinkedIn">
          <i className="fab fa-linkedin-in"></i>
        </a>
        <a href="https://github.com" target="_blank" rel="noopener" aria-label="GitHub">
          <i className="fab fa-github"></i>
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener" aria-label="Twitter">
          <i className="fab fa-twitter"></i>
        </a>
      </div>
      <p>&copy; {new Date().getFullYear()} Game Dev &amp; AI Programmer. All rights reserved.</p>
    </footer>
  );
}

// Root App component
function App() {
  const [page, setPage] = useState('home');
  // Define portfolio projects. These can be customised later.
  const projects = [
    {
      id: 'project1',
      title: 'AI Puzzle Game',
      description: 'A puzzle game powered by AI algorithms that adapts to player skill.',
      link: 'projects/project1.html',
    },
    {
      id: 'project2',
      title: 'Procedural World Generator',
      description: 'An AI-driven procedural world generator for exploration games.',
      link: 'projects/project2.html',
    },
    {
      id: 'project3',
      title: 'Multiplayer Strategy Game',
      description: 'A real-time multiplayer strategy game built with networking and AI.',
      link: 'projects/project3.html',
    },
  ];
  return (
    <>
      <Navigation page={page} onNavigate={setPage} />
      {page === 'home' && <Home projects={projects} />}
      {page === 'projects' && <Projects projects={projects} />}
      {page === 'about' && <About />}
      {page === 'contact' && <Contact />}
      <Footer />
    </>
  );
}

// Render application
ReactDOM.render(<App />, document.getElementById('root'));