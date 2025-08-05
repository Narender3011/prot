import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, ExternalLink, ChevronDown, Menu, X, Code, Briefcase, User, MessageCircle } from 'lucide-react';

const Portfolio = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  // Smooth scroll to section
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  // Handle scroll to update active section
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'projects', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;

          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const projects = [
    {
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce solution built with React, Node.js, and MongoDB. Features include user authentication, payment integration, and admin dashboard.",
      technologies: ["React", "Node.js", "MongoDB", "Stripe"],
      github: "https://github.com",
      live: "https://example.com"
    },
    {
      title: "Task Management App",
      description: "A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.",
      technologies: ["React", "Firebase", "Material-UI", "Socket.io"],
      github: "https://github.com",
      live: "https://example.com"
    },
    {
      title: "Weather Dashboard",
      description: "A responsive weather application that provides current weather data and forecasts using OpenWeatherMap API with interactive charts.",
      technologies: ["JavaScript", "Chart.js", "OpenWeather API", "CSS3"],
      github: "https://github.com",
      live: "https://example.com"
    }
  ];

 const skills = [
  {
    name: "JavaScript",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
  },
  {
    name: "React",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
  },
  {
    name: "Node.js",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg"
  },
  {
    name: "Python",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg"
  },
  {
    name: "MongoDB",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg"
  },
  {
    name: "PostgreSQL",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg"
  },
  {
    name: "HTML5",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"
  },
  {
    name: "CSS3",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"
  },
  {
    name: "Git",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg"
  },
  {
    name: "Docker",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg"
  },
  {
    name: "AWS",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.svg"
  },
  {
    name: "Express.js",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg"
  }
];

  const styles = {
    container: {
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #1e293b 0%, #7c3aed 50%, #1e293b 100%)',
      color: 'white',
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
    },
    nav: {
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      zIndex: 1000,
      background: 'rgba(0, 0, 0, 0.3)',
      backdropFilter: 'blur(10px)',
      borderBottom: '1px solid rgba(255, 255, 255, 0.1)'
    },
    navContent: {
      maxWidth: '1200px',
      margin: '0 auto',
      padding: '0 1rem',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      height: '70px'
    },
    logo: {
      fontSize: '1.5rem',
      fontWeight: 'bold',
      background: 'linear-gradient(45deg, #a855f7, #ec4899)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent'
    },
    navLinks: {
      display: 'flex',
      gap: '2rem',
      listStyle: 'none',
      margin: 0,
      padding: 0
    },
    navLink: {
      background: 'none',
      border: 'none',
      color: 'white',
      cursor: 'pointer',
      padding: '0.5rem 0',
      textTransform: 'capitalize',
      transition: 'color 0.3s ease',
      fontSize: '1rem'
    },
    navLinkActive: {
      color: '#a855f7',
      borderBottom: '2px solid #a855f7'
    },
    mobileMenuBtn: {
      display: 'none',
      background: 'none',
      border: 'none',
      color: 'white',
      cursor: 'pointer',
      '@media (max-width: 768px)': {
        display: 'block'
      }
    },
    mobileMenu: {
      background: 'rgba(0, 0, 0, 0.9)',
      backdropFilter: 'blur(10px)',
      padding: '1rem'
    },
    hero: {
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      textAlign: 'center',
      padding: '0 1rem'
    },
    heroContent: {
      maxWidth: '800px'
    },
    profileImage: {
      width: '200px',
      height: '200px',
      margin: '0 auto 2rem',
      borderRadius: '40%',
      background: 'linear-gradient(45deg, #a855f7, #ec4899)',
      padding: '4px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    },
    profileImageInner: {
      width: '100%',
      height: '100%',
      borderRadius: '40%',
      background: '#1f2937',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      overflow: 'hidden'
    },
    profileImg: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      borderRadius: '30%'
    },
    heroTitle: {
      fontSize: '3.5rem',
      fontWeight: 'bold',
      marginBottom: '1rem',
      background: 'linear-gradient(45deg, #a855f7, #ec4899)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      animation: 'pulse 2s infinite'
    },
    heroSubtitle: {
      fontSize: '1.5rem',
      marginBottom: '1rem',
      color: '#d1d5db'
    },
    heroDescription: {
      fontSize: '1.1rem',
      marginBottom: '2rem',
      color: '#9ca3af',
      lineHeight: '1.6'
    },
    socialLinks: {
      display: 'flex',
      justifyContent: 'center',
      gap: '1rem',
      marginBottom: '3rem'
    },
    socialLink: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: '50px',
      height: '50px',
      background: 'rgba(255, 255, 255, 0.1)',
      borderRadius: '50%',
      color: 'white',
      textDecoration: 'none',
      transition: 'all 0.3s ease',
      cursor: 'pointer'
    },
    section: {
      padding: '5rem 1rem',
      maxWidth: '1200px',
      margin: '0 auto'
    },
    sectionTitle: {
      fontSize: '3rem',
      fontWeight: 'bold',
      textAlign: 'center',
      marginBottom: '3rem',
      background: 'linear-gradient(45deg, #a855f7, #ec4899)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent'
    },
    aboutGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
      gap: '3rem',
      alignItems: 'center'
    },
    aboutText: {
      color: '#d1d5db',
      lineHeight: '1.6',
      marginBottom: '1rem'
    },
    skillsGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(120px, 1fr))',
      gap: '1rem'
    },
  skillItem: {
  background: 'rgba(255, 255, 255, 0.1)',
  backdropFilter: 'blur(5px)',
  borderRadius: '1rem',
  padding: '1.5rem',
  textAlign: 'center',
  transition: 'all 0.3s ease',
  cursor: 'pointer',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '1rem',
  minHeight: '120px',
  justifyContent: 'center'
},
skillLogo: {
  width: '48px',
  height: '48px',
  objectFit: 'contain',
  filter: 'brightness(0.9)'
},
    projectsSection: {
      padding: '5rem 1rem',
      background: 'rgba(0, 0, 0, 0.2)'
    },
    projectsGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
      gap: '2rem',
      maxWidth: '1200px',
      margin: '0 auto'
    },
    projectCard: {
      background: 'rgba(255, 255, 255, 0.1)',
      backdropFilter: 'blur(5px)',
      borderRadius: '1rem',
      padding: '1.5rem',
      border: '1px solid rgba(255, 255, 255, 0.1)',
      transition: 'all 0.3s ease',
      cursor: 'pointer'
    },
    projectHeader: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginBottom: '1rem'
    },
    projectLinks: {
      display: 'flex',
      gap: '0.5rem'
    },
    projectLink: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: '35px',
      height: '35px',
      background: 'rgba(255, 255, 255, 0.1)',
      borderRadius: '50%',
      color: 'white',
      textDecoration: 'none',
      transition: 'all 0.3s ease'
    },
    projectTitle: {
      fontSize: '1.25rem',
      fontWeight: '600',
      marginBottom: '0.75rem',
      color: '#a855f7'
    },
    projectDescription: {
      color: '#d1d5db',
      marginBottom: '1rem',
      lineHeight: '1.5'
    },
    techTags: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: '0.5rem'
    },
    techTag: {
      padding: '0.25rem 0.75rem',
      background: 'rgba(168, 85, 247, 0.2)',
      color: '#c4b5fd',
      borderRadius: '0.5rem',
      fontSize: '0.875rem'
    },
    contactSection: {
      padding: '5rem 1rem',
      textAlign: 'center'
    },
    contactContent: {
      maxWidth: '800px',
      margin: '0 auto'
    },
    contactDescription: {
      fontSize: '1.25rem',
      color: '#d1d5db',
      marginBottom: '3rem',
      lineHeight: '1.6'
    },
    contactLinks: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: '1rem',
      marginBottom: '3rem'
    },
    contactLink: {
      display: 'flex',
      alignItems: 'center',
      gap: '0.75rem',
      background: 'rgba(255, 255, 255, 0.1)',
      padding: '0.75rem 1.5rem',
      borderRadius: '50px',
      color: 'white',
      textDecoration: 'none',
      transition: 'all 0.3s ease'
    },
    contactCard: {
      background: 'rgba(255, 255, 255, 0.1)',
      backdropFilter: 'blur(5px)',
      borderRadius: '1rem',
      padding: '2rem',
      border: '1px solid rgba(255, 255, 255, 0.1)'
    },
    contactButton: {
      background: 'linear-gradient(45deg, #7c3aed, #ec4899)',
      border: 'none',
      padding: '1rem 2rem',
      borderRadius: '50px',
      color: 'white',
      fontSize: '1rem',
      fontWeight: '600',
      cursor: 'pointer',
      transition: 'all 0.3s ease'
    },
    footer: {
      padding: '2rem 1rem',
      textAlign: 'center',
      background: 'rgba(0, 0, 0, 0.4)',
      borderTop: '1px solid rgba(255, 255, 255, 0.1)',
      color: '#9ca3af'
    },
    bounceAnimation: {
      animation: 'bounce 2s infinite'
    }
  };

  // Add CSS keyframes
  useEffect(() => {
    const style = document.createElement('style');
    style.textContent = `
      @keyframes pulse {
        0%, 100% { opacity: 1; }
        50% { opacity: 0.8; }
      }
      @keyframes bounce {
        0%, 20%, 53%, 80%, 100% { transform: translate3d(0,0,0); }
        40%, 43% { transform: translate3d(0,-30px,0); }
        70% { transform: translate3d(0,-15px,0); }
        90% { transform: translate3d(0,-4px,0); }
      }
      @media (max-width: 768px) {
        .desktop-nav { display: none !important; }
        .mobile-menu-btn { display: block !important; }
      }
      @media (min-width: 769px) {
        .mobile-menu { display: none !important; }
        .mobile-menu-btn { display: none !important; }
      }
    `;
    document.head.appendChild(style);
    return () => document.head.removeChild(style);
  }, []);

  return (
    <div style={styles.container}>
      {/* Navigation */}
      <nav style={styles.nav}>
        <div style={styles.navContent}>
          <div style={styles.logo}>Portfolio</div>
          
          {/* Desktop Navigation */}
          <ul style={styles.navLinks} className="desktop-nav">
            {['home', 'about', 'projects', 'contact'].map((item) => (
              <li key={item}>
                <button
                  onClick={() => scrollToSection(item)}
                  style={{
                    ...styles.navLink,
                    ...(activeSection === item ? styles.navLinkActive : {})
                  }}
                  onMouseEnter={(e) => e.target.style.color = '#a855f7'}
                  onMouseLeave={(e) => e.target.style.color = activeSection === item ? '#a855f7' : 'white'}
                >
                  {item}
                </button>
              </li>
            ))}
          </ul>

          {/* Mobile Menu Button */}
          <button
            className="mobile-menu-btn"
            style={styles.mobileMenuBtn}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div style={styles.mobileMenu} className="mobile-menu">
            {['home', 'about', 'projects', 'contact'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                style={{
                  ...styles.navLink,
                  display: 'block',
                  width: '100%',
                  textAlign: 'left',
                  padding: '0.5rem 0'
                }}
                onMouseEnter={(e) => e.target.style.color = '#a855f7'}
                onMouseLeave={(e) => e.target.style.color = 'white'}
              >
                {item}
              </button>
            ))}
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" style={styles.hero}>
        <div style={styles.heroContent}>
          <div style={styles.profileImage}>
            <div style={styles.profileImageInner}>
              {/* Replace the src below with your image path */}
              <img 
                src="/src/assets/nani.jpg" 
                alt="Narender Reddy"
                style={styles.profileImg}
                onError={(e) => {
                  // Fallback to User icon if image fails to load
                  e.target.style.display = 'none';
                  e.target.nextSibling.style.display = 'block';
                }}
              />
              <User size={80} color="#a855f7" style={{display: 'none'}} />
            </div>
          </div>
          <h1 style={styles.heroTitle}>Narender Reddy</h1>
          <p style={styles.heroSubtitle}>Full Stack Developer & Creative Problem Solver</p>
          <p style={styles.heroDescription}>
            Passionate about creating innovative web solutions that combine beautiful design with powerful functionality. 
            Let's build something amazing together.
          </p>
          
          <div style={styles.socialLinks}>
            <a 
              href="https://github.com/Narender3011" 
              style={styles.socialLink}
              onMouseEnter={(e) => {
                e.target.style.background = 'rgba(255, 255, 255, 0.2)';
                e.target.style.transform = 'scale(1.1)';
              }}
              onMouseLeave={(e) => {
                e.target.style.background = 'rgba(255, 255, 255, 0.1)';
                e.target.style.transform = 'scale(1)';
              }}
            >
              <Github size={24} />
            </a>
            <a 
              href="https://www.linkedin.com/in/narender-reddy-b885a7377/"
              style={styles.socialLink}
              onMouseEnter={(e) => {
                e.target.style.background = 'rgba(255, 255, 255, 0.2)';
                e.target.style.transform = 'scale(1.1)';
              }}
              onMouseLeave={(e) => {
                e.target.style.background = 'rgba(255, 255, 255, 0.1)';
                e.target.style.transform = 'scale(1)';
              }}
            >
              <Linkedin size={24} />
            </a>
            <a 
              href="mailto:narenderreddy3050@gmail.com" 
              style={styles.socialLink}
              onMouseEnter={(e) => {
                e.target.style.background = 'rgba(255, 255, 255, 0.2)';
                e.target.style.transform = 'scale(1.1)';
              }}
              onMouseLeave={(e) => {
                e.target.style.background = 'rgba(255, 255, 255, 0.1)';
                e.target.style.transform = 'scale(1)';
              }}
            >
              <Mail size={24} />
            </a>
          </div>
          
          <button 
            onClick={() => scrollToSection('about')}
            style={{
              ...styles.bounceAnimation,
              background: 'none',
              border: 'none',
              cursor: 'pointer'
            }}
          >
            <ChevronDown size={32} color="#a855f7" />
          </button>
        </div>
      </section>

      {/* About Section */}
      <section id="about" style={styles.section}>
        <h2 style={styles.sectionTitle}>About Me</h2>
        
        <div style={styles.aboutGrid}>
          <div>
            <h3 style={{ fontSize: '1.5rem', fontWeight: '600', marginBottom: '1.5rem', color: '#a855f7' }}>
              My Story
            </h3>
            <p style={styles.aboutText}>
             Hi, I'm Narender Reddy, a passionate and curious student at Malla Reddy University. I’ve always believed that learning is a lifelong journey, and every mistake is a valuable lesson in disguise.

My interest lies in exploring new things, whether it's a new technology, concept, or challenge. I enjoy understanding how things work and love the process of figuring things out—especially when it pushes me out of my comfort zone.

What drives me most is the desire to grow through experience.</p>
 <p style={styles.aboutText}>I don’t shy away from failure; instead, I take it as a stepping stone to learn, adapt, and improve. Whether it's coding, solving real-world problems, or collaborating with others on creative projects, I’m always eager to dive in and give my best.

I’m on a mission to become not just a better student, but a better thinker and problem-solver—someone who builds meaningful things and keeps evolving along the way.
            </p>
          </div>
          
          <div>
            <h3 style={{ fontSize: '1.5rem', fontWeight: '600', marginBottom: '1.5rem', color: '#a855f7' }}>
              Skills & Technologies
            </h3>
            <div style={styles.skillsGrid}>
  {skills.map((skill, ) => (
    <div 
      key={skill.name}
      style={styles.skillItem}
      onMouseEnter={(e) => {
        e.target.style.background = 'rgba(255, 255, 255, 0.2)';
        e.target.style.transform = 'scale(1.05)';
      }}
      onMouseLeave={(e) => {
        e.target.style.background = 'rgba(255, 255, 255, 0.1)';
        e.target.style.transform = 'scale(1)';
      }}
    >
      <img 
        src={skill.logo} 
        alt={skill.name}
        style={styles.skillLogo}
        onError={(e) => {
          // Fallback to text if logo fails to load
          e.target.style.display = 'none';
        }}
      />
      <span style={{ fontSize: '0.875rem', fontWeight: '500', color: '#d1d5db' }}>
        {skill.name}
      </span>
    </div>
  ))}
</div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" style={styles.projectsSection}>
        <h2 style={styles.sectionTitle}>Featured Projects</h2>
        
        <div style={styles.projectsGrid}>
          {projects.map((project,) => (
            <div 
              key={project.title}
              style={styles.projectCard}
              onMouseEnter={(e) => {
                e.target.style.background = 'rgba(255, 255, 255, 0.2)';
                e.target.style.transform = 'scale(1.05)';
              }}
              onMouseLeave={(e) => {
                e.target.style.background = 'rgba(255, 255, 255, 0.1)';
                e.target.style.transform = 'scale(1)';
              }}
            >
              <div style={styles.projectHeader}>
                <Code size={24} color="#a855f7" />
                <div style={styles.projectLinks}>
                  <a 
                    href={project.github}
                    style={styles.projectLink}
                    onMouseEnter={(e) => e.target.style.background = 'rgba(255, 255, 255, 0.2)'}
                    onMouseLeave={(e) => e.target.style.background = 'rgba(255, 255, 255, 0.1)'}
                  >
                    <Github size={16} />
                  </a>
                  <a 
                    href={project.live}
                    style={styles.projectLink}
                    onMouseEnter={(e) => e.target.style.background = 'rgba(255, 255, 255, 0.2)'}
                    onMouseLeave={(e) => e.target.style.background = 'rgba(255, 255, 255, 0.1)'}
                  >
                    <ExternalLink size={16} />
                  </a>
                </div>
              </div>
              
              <h3 style={styles.projectTitle}>{project.title}</h3>
              <p style={styles.projectDescription}>{project.description}</p>
              
              <div style={styles.techTags}>
                {project.technologies.map((tech) => (
                  <span key={tech} style={styles.techTag}>
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" style={styles.contactSection}>
        <div style={styles.contactContent}>
          <h2 style={styles.sectionTitle}>Let's Work Together</h2>
          
          <p style={styles.contactDescription}>
            Have a project in mind or want to collaborate? I'd love to hear from you. 
            Let's create something amazing together.
          </p>
          
          <div style={styles.contactLinks}>
            <a 
              href="mailto:narenderreddy3050@gmail.com"
              style={styles.contactLink}
              onMouseEnter={(e) => {
                e.target.style.background = 'rgba(255, 255, 255, 0.2)';
                e.target.style.transform = 'scale(1.05)';
              }}
              onMouseLeave={(e) => {
                e.target.style.background = 'rgba(255, 255, 255, 0.1)';
                e.target.style.transform = 'scale(1)';
              }}
            >
              <Mail size={20} />
              <span>narenderreddy3050@gmail.com</span>
            </a>
            
            <a 
              href="https://www.linkedin.com/in/narender-reddy-b885a7377"
              style={styles.contactLink}
              onMouseEnter={(e) => {
                e.target.style.background = 'rgba(255, 255, 255, 0.2)';
                e.target.style.transform = 'scale(1.05)';
              }}
              onMouseLeave={(e) => {
                e.target.style.background = 'rgba(255, 255, 255, 0.1)';
                e.target.style.transform = 'scale(1)';
              }}
            >
              <Linkedin size={20} />
              <span>LinkedIn</span>
            </a>
          </div>
          
          <div style={styles.contactCard}>
            <MessageCircle size={48} color="#a855f7" style={{ margin: '0 auto 1.5rem', display: 'block' }} />
            <h3 style={{ fontSize: '1.5rem', fontWeight: '600', marginBottom: '1rem' }}>Get In Touch</h3>
            <p style={{ color: '#d1d5db', marginBottom: '1.5rem' }}>
              Whether you have a question, want to work together, or just want to say hi, 
              I'm always open to interesting conversations and opportunities.
            </p>
            <button 
              style={styles.contactButton}
              onMouseEnter={(e) => {
                e.target.style.background = 'linear-gradient(45deg, #6d28d9, #db2777)';
                e.target.style.transform = 'scale(1.05)';
              }}
              onMouseLeave={(e) => {
                e.target.style.background = 'linear-gradient(45deg, #7c3aed, #ec4899)';
                e.target.style.transform = 'scale(1)';
              }}
            >
              Start a Conversation
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer style={styles.footer}>
        <p>© 2025 Narender reddy. Built with React and lots of ☕</p>
      </footer>
    </div>
  );
};

export default Portfolio;