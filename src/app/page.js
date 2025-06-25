import Image from "next/image";

export default function Home() {
  return (
    <div className="page-container">
      {/* Navigation */}
      <nav className="navbar">
        <div className="nav-container">
          <div className="nav-logo">
            <h2>Istanku</h2>
          </div>
          <ul className="nav-menu">
            <li><a href="#home">Home</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#testimonials">Testimonials</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
          <div className="nav-cta">
            <a href="#contact" className="btn-primary">Get Started</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="hero">
        <div className="hero-container">
          <div className="hero-content">
            <h1 className="hero-title">
              Connecting Exceptional Talent with 
              <span className="text-accent"> Outstanding Opportunities</span>
            </h1>
            <p className="hero-description">
              As a leading third-party recruiting firm, we specialize in matching top-tier professionals 
              with companies that value excellence. Let us help you build your dream team or advance your career.
            </p>
            <div className="hero-buttons">
              <a href="#services" className="btn-primary">Our Services</a>
              <a href="#about" className="btn-secondary">Learn More</a>
            </div>
          </div>
          <div className="hero-image">
            <div className="hero-placeholder">
              <i className="fas fa-users fa-5x"></i>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="services">
        <div className="container">
          <div className="section-header">
            <h2>Our Services</h2>
            <p>Comprehensive recruitment solutions tailored to your needs</p>
          </div>
          <div className="services-grid">
            <div className="service-card">
              <div className="service-icon">
                <i className="fas fa-search"></i>
              </div>
              <h3>Executive Search</h3>
              <p>Find C-level executives and senior leadership positions with our specialized executive search services.</p>
            </div>
            <div className="service-card">
              <div className="service-icon">
                <i className="fas fa-users-cog"></i>
              </div>
              <h3>Permanent Placement</h3>
              <p>Full-time permanent positions across various industries and skill levels with guaranteed results.</p>
            </div>
            <div className="service-card">
              <div className="service-icon">
                <i className="fas fa-clock"></i>
              </div>
              <h3>Contract Staffing</h3>
              <p>Flexible contract and temporary staffing solutions for project-based and seasonal needs.</p>
            </div>
            <div className="service-card">
              <div className="service-icon">
                <i className="fas fa-chart-line"></i>
              </div>
              <h3>Market Intelligence</h3>
              <p>Comprehensive market analysis and salary benchmarking to make informed hiring decisions.</p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="about">
        <div className="container">
          <div className="about-content">
            <div className="about-text">
              <h2>Why Choose Istanku?</h2>
              <p>
                With over 15 years of experience in the recruitment industry, we have successfully placed 
                thousands of professionals in their ideal roles while helping companies build exceptional teams.
              </p>
              <div className="stats">
                <div className="stat-item">
                  <h3>5000+</h3>
                  <p>Successful Placements</p>
                </div>
                <div className="stat-item">
                  <h3>500+</h3>
                  <p>Partner Companies</p>
                </div>
                <div className="stat-item">
                  <h3>95%</h3>
                  <p>Client Satisfaction</p>
                </div>
              </div>
            </div>
            <div className="about-image">
              <div className="about-placeholder">
                <i className="fas fa-handshake fa-4x"></i>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="testimonials">
        <div className="container">
          <div className="section-header">
            <h2>What Our Clients Say</h2>
            <p>Hear from companies and professionals who have experienced our exceptional service</p>
          </div>
          <div className="testimonials-slider">
            <div className="testimonials-track">
              <div className="testimonial-slide active">
                <div className="testimonial-card">
                  <div className="testimonial-content">
                    <div className="quote-icon">
                      <i className="fas fa-quote-left"></i>
                    </div>
                    <p>
                      "Istanku helped us find the perfect CTO for our startup. Their understanding of both 
                      technical requirements and cultural fit was exceptional. The entire process was smooth 
                      and professional."
                    </p>
                  </div>
                  <div className="testimonial-author">
                    <div className="author-avatar">
                      <i className="fas fa-user"></i>
                    </div>
                    <div className="author-info">
                      <h4>Sarah Johnson</h4>
                      <p>CEO, TechFlow Solutions</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="testimonial-slide">
                <div className="testimonial-card">
                  <div className="testimonial-content">
                    <div className="quote-icon">
                      <i className="fas fa-quote-left"></i>
                    </div>
                    <p>
                      "After months of searching, Istanku found me the ideal role that matched both my skills 
                      and career aspirations. Their personalized approach and industry expertise made all 
                      the difference."
                    </p>
                  </div>
                  <div className="testimonial-author">
                    <div className="author-avatar">
                      <i className="fas fa-user"></i>
                    </div>
                    <div className="author-info">
                      <h4>Michael Chen</h4>
                      <p>Senior Data Scientist</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="testimonial-slide">
                <div className="testimonial-card">
                  <div className="testimonial-content">
                    <div className="quote-icon">
                      <i className="fas fa-quote-left"></i>
                    </div>
                    <p>
                      "Working with Istanku has been a game-changer for our hiring process. They consistently 
                      deliver high-quality candidates and have become our trusted recruitment partner."
                    </p>
                  </div>
                  <div className="testimonial-author">
                    <div className="author-avatar">
                      <i className="fas fa-user"></i>
                    </div>
                    <div className="author-info">
                      <h4>Emily Rodriguez</h4>
                      <p>HR Director, Global Dynamics</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="testimonial-slide">
                <div className="testimonial-card">
                  <div className="testimonial-content">
                    <div className="quote-icon">
                      <i className="fas fa-quote-left"></i>
                    </div>
                    <p>
                      "Istanku's market intelligence and salary benchmarking helped us structure competitive 
                      offers and build our dream team. Their expertise in the finance sector is unmatched."
                    </p>
                  </div>
                  <div className="testimonial-author">
                    <div className="author-avatar">
                      <i className="fas fa-user"></i>
                    </div>
                    <div className="author-info">
                      <h4>David Park</h4>
                      <p>Managing Partner, Capital Ventures</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Navigation Arrows */}
            <button className="slider-arrow slider-prev">
              <i className="fas fa-chevron-left"></i>
            </button>
            <button className="slider-arrow slider-next">
              <i className="fas fa-chevron-right"></i>
            </button>
            
            {/* Dots Indicator */}
            <div className="slider-dots">
              <span className="dot active"></span>
              <span className="dot"></span>
              <span className="dot"></span>
              <span className="dot"></span>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact">
        <div className="container">
          <div className="section-header">
            <h2>Get In Touch</h2>
            <p>Ready to find your next opportunity or build your dream team?</p>
          </div>
          <div className="contact-content">
            <div className="contact-info">
              <div className="contact-item">
                <div className="contact-icon">
                  <i className="fas fa-phone"></i>
                </div>
                <div>
                  <h4>Phone</h4>
                  <p>+1 (555) 123-4567</p>
                </div>
              </div>
              <div className="contact-item">
                <div className="contact-icon">
                  <i className="fas fa-envelope"></i>
                </div>
                <div>
                  <h4>Email</h4>
                  <p>contact@istanku.com</p>
                </div>
              </div>
              <div className="contact-item">
                <div className="contact-icon">
                  <i className="fas fa-map-marker-alt"></i>
                </div>
                <div>
                  <h4>Address</h4>
                  <p>123 Business Avenue<br />Suite 456, New York, NY 10001</p>
                </div>
              </div>
            </div>
            <form className="contact-form">
              <div className="form-group">
                <input type="text" placeholder="Your Name" required />
              </div>
              <div className="form-group">
                <input type="email" placeholder="Your Email" required />
              </div>
              <div className="form-group">
                <select required>
                  <option value="">I'm looking for...</option>
                  <option value="hiring">Hiring Solutions</option>
                  <option value="job">Job Opportunities</option>
                  <option value="consultation">Consultation</option>
                </select>
              </div>
              <div className="form-group">
                <textarea placeholder="Your Message" rows="5" required></textarea>
              </div>
              <button type="submit" className="btn-primary">Send Message</button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-brand">
              <h3>Istanku</h3>
              <p>Connecting talent with opportunity since 2008</p>
              <div className="social-links">
                <a href="#"><i className="fab fa-linkedin"></i></a>
                <a href="#"><i className="fab fa-twitter"></i></a>
                <a href="#"><i className="fab fa-facebook"></i></a>
              </div>
            </div>
            <div className="footer-links">
              <div className="footer-column">
                <h4>Services</h4>
                <ul>
                  <li><a href="#">Executive Search</a></li>
                  <li><a href="#">Permanent Placement</a></li>
                  <li><a href="#">Contract Staffing</a></li>
                  <li><a href="#">Market Intelligence</a></li>
                </ul>
              </div>
              <div className="footer-column">
                <h4>Industries</h4>
                <ul>
                  <li><a href="#">Technology</a></li>
                  <li><a href="#">Finance</a></li>
                  <li><a href="#">Healthcare</a></li>
                  <li><a href="#">Manufacturing</a></li>
                </ul>
              </div>
              <div className="footer-column">
                <h4>Company</h4>
                <ul>
                  <li><a href="#">About Us</a></li>
                  <li><a href="#">Careers</a></li>
                  <li><a href="#">Privacy Policy</a></li>
                  <li><a href="#">Terms of Service</a></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="footer-bottom">
            <p>&copy; 2025 Istanku. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
