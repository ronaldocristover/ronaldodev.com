<template>
  <div class="mobile-layout">
    <!-- Mobile Navigation -->
    <nav class="mobile-nav">
      <div class="nav-container">
        <div class="logo glitch" :data-text="portfolioData.personal.logo">{{ portfolioData.personal.logo }}</div>
        <button class="menu-toggle" @click="toggleMobileMenu">
          ☰
        </button>
      </div>
      <!-- Mobile Menu -->
      <div v-if="mobileMenuOpen" class="mobile-menu">
        <div class="menu-items">
          <a v-for="nav in portfolioData.navigation" 
             :key="nav.id" 
             :href="`#${nav.id}`" 
             class="menu-item"
             @click="mobileMenuOpen = false">{{ nav.label }}</a>
        </div>
      </div>
    </nav>

    <!-- Mobile Hero Section -->
    <section id="home" class="mobile-hero">
      <div class="hero-content">
        <h1 class="hero-title glitch" :data-text="portfolioData.hero.headline">{{ portfolioData.hero.headline }}</h1>
        <p class="hero-subtitle typing-animation">{{ portfolioData.hero.subheadline }}</p>
        <p class="hero-message">{{ portfolioData.hero.main_message }}</p>
        <div class="hero-buttons">
          <button class="btn-8bit" @click="scrollToSection('projects')">{{ portfolioData.hero.cta_primary }}</button>
          <button class="btn-8bit" @click="scrollToSection('contact')">{{ portfolioData.hero.cta_secondary }}</button>
        </div>
      </div>
      <div class="mobile-pixel-art">
        <div class="pixel-character"></div>
      </div>
    </section>

    <!-- Mobile About Section -->
    <section id="about" class="mobile-section">
      <div class="container">
        <h2 class="section-title glitch" data-text="ABOUT ME">ABOUT ME</h2>
        <div class="mobile-about-content">
          <div v-for="section in portfolioData.about.sections" 
               :key="section.title" 
               class="mobile-card">
            <div class="section-icon">{{ section.icon }}</div>
            <h3>{{ section.title }}</h3>
            <p>{{ section.content }}</p>
          </div>
        </div>
        <div class="mobile-key-points">
          <h3>KEY ACHIEVEMENTS</h3>
          <ul>
            <li v-for="point in portfolioData.about.key_points" :key="point">{{ point }}</li>
          </ul>
        </div>
      </div>
    </section>

    <!-- Mobile Experience Section -->
    <section id="experience" class="mobile-section">
      <div class="container">
        <h2 class="section-title glitch" data-text="EXPERIENCE">EXPERIENCE</h2>
        <div class="mobile-experience-summary">
          <p>{{ portfolioData.experience.summary }}</p>
        </div>
        <div class="mobile-experience-timeline">
          <div v-for="exp in portfolioData.experience.highlights" 
               :key="exp.period" 
               class="mobile-experience-item">
            <div class="experience-header">
              <h3>{{ exp.role }}</h3>
              <div class="company-info">
                <span class="company">{{ exp.company }}</span>
                <span class="period">{{ exp.period }}</span>
              </div>
            </div>
            <ul class="achievements-list">
              <li v-for="achievement in exp.achievements" :key="achievement">{{ achievement }}</li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- Mobile Skills Section -->
    <section id="skills" class="mobile-section">
      <div class="container">
        <h2 class="section-title glitch" data-text="SKILLS">SKILLS</h2>
        <div class="mobile-skills-content">
          <div v-for="category in portfolioData.skills.categories" 
               :key="category.name" 
               class="mobile-skill-category">
            <h3>{{ category.name }}</h3>
            <div class="mobile-skill-items">
              <span v-for="skill in category.items" 
                    :key="skill" 
                    class="mobile-skill-item">{{ skill }}</span>
            </div>
          </div>
        </div>
        <div class="mobile-additional-skills">
          <h3>ADDITIONAL SKILLS</h3>
          <div class="mobile-skill-items">
            <span v-for="skill in portfolioData.skills.additional_skills" 
                  :key="skill" 
                  class="mobile-skill-item">{{ skill }}</span>
          </div>
        </div>
      </div>
    </section>

    <!-- Mobile Projects Section -->
    <section id="projects" class="mobile-section">
      <div class="container">
        <h2 class="section-title glitch" data-text="PROJECTS">PROJECTS</h2>
        <div class="mobile-projects-content">
          <div v-for="project in portfolioData.projects" 
               :key="project.id" 
               class="mobile-project-card">
            <div class="project-header">
              <h3>{{ project.title }}</h3>
              <span class="project-category">{{ project.category }}</span>
            </div>
            <p class="project-description">{{ project.description }}</p>
            <div class="mobile-project-story">
              <div class="story-item">
                <strong>Challenge:</strong> {{ project.challenge }}
              </div>
              <div class="story-item">
                <strong>Solution:</strong> {{ project.solution }}
              </div>
              <div class="story-item">
                <strong>Impact:</strong> {{ project.impact }}
              </div>
            </div>
            <div class="mobile-project-tech">
              <span v-for="tech in project.technologies" 
                    :key="tech" 
                    class="mobile-tech-tag">{{ tech }}</span>
            </div>
            <div class="mobile-project-links">
              <a :href="project.github" target="_blank" class="btn-8bit">GITHUB</a>
              <a :href="project.demo" target="_blank" class="btn-8bit">DEMO</a>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Mobile Achievements Section -->
    <section id="achievements" class="mobile-section">
      <div class="container">
        <h2 class="section-title glitch" data-text="ACHIEVEMENTS">ACHIEVEMENTS</h2>
        <div class="mobile-achievements-content">
          <div v-for="achievement in portfolioData.achievements" 
               :key="achievement.title" 
               class="mobile-achievement-card">
            <div class="achievement-icon">{{ achievement.icon }}</div>
            <h3>{{ achievement.title }}</h3>
            <p>{{ achievement.description }}</p>
            <div class="achievement-metrics">{{ achievement.metrics }}</div>
          </div>
        </div>
      </div>
    </section>

    <!-- Mobile Education Section -->
    <section id="education" class="mobile-section">
      <div class="container">
        <h2 class="section-title glitch" data-text="EDUCATION">EDUCATION</h2>
        <div class="mobile-education-content">
          <div v-for="edu in portfolioData.education" 
               :key="edu.degree" 
               class="mobile-education-item">
            <div class="education-header">
              <h3>{{ edu.degree }}</h3>
              <div class="institution-info">
                <span class="institution">{{ edu.institution }}</span>
                <span class="period">{{ edu.period }}</span>
              </div>
            </div>
            <p class="major">{{ edu.major }}</p>
            <p class="thesis"><strong>Thesis:</strong> {{ edu.thesis }}</p>
            <div v-if="edu.achievement" class="achievement">
              <strong>Achievement:</strong> {{ edu.achievement }}
            </div>
          </div>
        </div>
      </div>
    </section>

    

    <!-- Mobile Contact Section -->
    <section id="contact" class="mobile-section">
      <div class="container">
        <h2 class="section-title glitch" data-text="CONTACT">CONTACT</h2>
        <div class="mobile-contact-content">
          <div class="mobile-contact-info">
            <h3>GET IN TOUCH</h3>
            <p>{{ portfolioData.contact.message }}</p>
            <div class="mobile-contact-details">
              <div v-for="detail in portfolioData.contact.details" 
                   :key="detail.label" 
                   class="mobile-contact-item">
                <span class="contact-label">{{ detail.label }}:</span>
                <a v-if="detail.type === 'email'" 
                   :href="`mailto:${detail.value}`" 
                   class="contact-link">{{ detail.value }}</a>
                <a v-else-if="detail.type === 'phone'" 
                   :href="`tel:${detail.value}`" 
                   class="contact-link">{{ detail.value }}</a>
                <a v-else-if="detail.type === 'linkedin'" 
                   :href="`https://${detail.value}`" 
                   target="_blank" 
                   class="contact-link">{{ detail.value }}</a>
                <a v-else-if="detail.type === 'github'" 
                   :href="`https://${detail.value}`" 
                   target="_blank" 
                   class="contact-link">{{ detail.value }}</a>
                <span v-else class="contact-link">{{ detail.value }}</span>
              </div>
            </div>
          </div>
          <form class="mobile-contact-form" @submit.prevent="handleContact">
            <h3>SEND MESSAGE</h3>
            <div class="form-group">
              <label for="mobile-name">NAME:</label>
              <input type="text" id="mobile-name" v-model="contactForm.name" required class="mobile-form-input">
            </div>
            <div class="form-group">
              <label for="mobile-email">EMAIL:</label>
              <input type="email" id="mobile-email" v-model="contactForm.email" required class="mobile-form-input">
            </div>
            <div class="form-group">
              <label for="mobile-message">MESSAGE:</label>
              <textarea id="mobile-message" v-model="contactForm.message" required class="mobile-form-input"></textarea>
            </div>
            <button type="submit" class="btn-8bit">SEND MESSAGE</button>
          </form>
        </div>
      </div>
    </section>

    <!-- Mobile Footer -->
    <footer class="mobile-footer">
      <div class="container">
        <p>&copy; 2024 {{ portfolioData.personal.name }}. ALL RIGHTS RESERVED.</p>
      </div>
    </footer>
  </div>
</template>

<script>
import portfolioData from '../data/portfolio.json'

export default {
  name: 'MobileLayout',
  data() {
    return {
      portfolioData,
      contactForm: {
        name: '',
        email: '',
        message: ''
      },
      mobileMenuOpen: false
    }
  },
  methods: {
    scrollToSection(sectionId) {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    },
    handleContact() {
      console.log('Contact form submitted:', this.contactForm);
      alert('Message sent! (This is a demo - replace with actual form handling)');
      this.contactForm = { name: '', email: '', message: '' };
    },
    toggleMobileMenu() {
      this.mobileMenuOpen = !this.mobileMenuOpen;
    }
  }
}
</script>

<style scoped>
/* Mobile-specific styles */
.mobile-layout {
  min-height: 100vh;
  background: var(--bg-black);
}

/* Mobile Navigation */
.mobile-nav {
  position: fixed;
  top: 0;
  width: 100%;
  background: var(--bg-black);
  border-bottom: 4px solid var(--primary-green);
  z-index: 100;
  padding: 10px 0;
  box-shadow: 0 0 0 4px var(--bg-black);
}

.nav-container {
  max-width: 100%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 15px;
}

.logo {
  font-size: 18px;
  font-weight: bold;
  color: var(--primary-green);
}

.menu-toggle {
  background: none;
  border: none;
  color: var(--primary-green);
  font-size: 24px;
  cursor: pointer;
  padding: 5px;
}

.mobile-menu {
  background: var(--bg-dark);
  border-top: 4px solid var(--primary-green);
  padding: 15px;
}

.menu-items {
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.menu-item {
  color: var(--primary-green);
  text-decoration: none;
  font-size: 14px;
  padding: 10px 0;
  border-bottom: 1px solid var(--primary-green);
  transition: color 0.3s ease;
}

.menu-item:hover {
  color: var(--accent-yellow);
}

/* Mobile Hero Section */
.mobile-hero {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 80px 20px 50px;
  background: linear-gradient(135deg, var(--bg-black) 0%, var(--bg-darker) 100%);
  position: relative;
  overflow: hidden;
  text-align: center;
}

.mobile-hero::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: 
    radial-gradient(circle at 20% 80%, var(--accent-blue) 0%, transparent 50%),
    radial-gradient(circle at 80% 20%, var(--accent-purple) 0%, transparent 50%);
  opacity: 0.1;
  z-index: 0;
}

.hero-content {
  position: relative;
  z-index: 1;
  max-width: 100%;
}

.hero-title {
  font-size: 24px;
  margin-bottom: 15px;
  color: var(--primary-green);
  text-shadow: 0 0 10px var(--primary-green);
  line-height: 1.2;
}

.hero-subtitle {
  font-size: 14px;
  margin-bottom: 10px;
  color: var(--accent-blue);
}

.hero-message {
  font-size: 12px;
  margin-bottom: 20px;
  color: var(--accent-yellow);
  font-style: italic;
}

.hero-buttons {
  display: flex;
  flex-direction: column;
  gap: 15px;
  align-items: center;
}

.mobile-pixel-art {
  margin-top: 30px;
  width: 150px;
  height: 150px;
  position: relative;
}

.pixel-character {
  width: 100%;
  height: 100%;
  background: 
    linear-gradient(45deg, var(--primary-green) 25%, transparent 25%),
    linear-gradient(-45deg, var(--primary-green) 25%, transparent 25%),
    linear-gradient(45deg, transparent 75%, var(--primary-green) 75%),
    linear-gradient(-45deg, transparent 75%, var(--primary-green) 75%);
  background-size: 15px 15px;
  background-position: 0 0, 0 8px, 8px -8px, -8px 0px;
  animation: pixel-pulse 2s infinite;
  clip-path: polygon(
    20% 0%, 80% 0%, 100% 20%, 100% 80%, 80% 100%, 20% 100%, 0% 80%, 0% 20%
  );
}

/* Mobile Sections */
.mobile-section {
  padding: 40px 15px;
  background: var(--bg-black);
  position: relative;
}

.mobile-section::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 4px;
  background: linear-gradient(90deg, var(--primary-green), var(--accent-blue), var(--accent-purple));
}

.container {
  max-width: 100%;
  margin: 0 auto;
}

.section-title {
  text-align: center;
  font-size: 24px;
  margin-bottom: 30px;
  color: var(--primary-green);
  text-shadow: 0 0 10px var(--primary-green);
}

/* Mobile Cards */
.mobile-card {
  background: var(--bg-dark);
  border: 4px solid var(--primary-green);
  padding: 20px;
  margin-bottom: 20px;
  position: relative;
  box-shadow:
    0 0 0 4px var(--bg-black),
    0 0 0 8px var(--primary-green),
    0 0 0 12px var(--bg-black);
  clip-path: polygon(0% 0%, 95% 0%, 100% 5%, 100% 95%, 95% 100%, 0% 100%, 5% 95%, 5% 5%);
  overflow: visible;
  word-wrap: break-word;
  overflow-wrap: break-word;
}

.mobile-card::before {
  content: '';
  position: absolute;
  top: -2px;
  left: -2px;
  right: -2px;
  bottom: -2px;
  background: linear-gradient(45deg, var(--accent-blue), var(--accent-purple));
  z-index: -1;
  clip-path: polygon(0% 0%, 95% 0%, 100% 5%, 100% 95%, 95% 100%, 0% 100%, 5% 95%, 5% 5%);
}

/* Mobile About */
.mobile-about-content {
  margin-bottom: 30px;
}

.section-icon {
  font-size: 36px;
  margin-bottom: 15px;
  text-align: center;
}

.mobile-key-points {
  background: var(--bg-dark);
  border: 4px solid var(--primary-green);
  padding: 20px;
  margin-top: 20px;
}

.mobile-key-points h3 {
  color: var(--accent-yellow);
  margin-bottom: 15px;
  text-shadow: 0 0 5px var(--accent-yellow);
  font-size: 16px;
}

.mobile-key-points ul {
  list-style: none;
  padding: 0;
}

.mobile-key-points li {
  color: var(--primary-green);
  margin-bottom: 10px;
  padding-left: 20px;
  position: relative;
  font-size: 12px;
  line-height: 1.4;
}

.mobile-key-points li::before {
  content: '▶';
  position: absolute;
  left: 0;
  color: var(--accent-yellow);
}

/* Mobile Experience */
.mobile-experience-summary {
  background: var(--bg-dark);
  border: 4px solid var(--primary-green);
  padding: 20px;
  margin-bottom: 30px;
  text-align: center;
  font-size: 14px;
  line-height: 1.6;
}

.mobile-experience-timeline {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.mobile-experience-item {
  background: var(--bg-dark);
  border: 4px solid var(--primary-green);
  padding: 20px;
  position: relative;
  box-shadow:
    0 0 0 4px var(--bg-black),
    0 0 0 8px var(--primary-green),
    0 0 0 12px var(--bg-black);
  clip-path: polygon(0% 0%, 95% 0%, 100% 5%, 100% 95%, 95% 100%, 0% 100%, 5% 95%, 5% 5%);
}

.experience-header {
  margin-bottom: 15px;
}

.experience-header h3 {
  color: var(--accent-yellow);
  margin-bottom: 8px;
  text-shadow: 0 0 5px var(--accent-yellow);
  font-size: 16px;
}

.company-info {
  display: flex;
  flex-direction: column;
  gap: 5px;
}

.company {
  color: var(--accent-blue);
  font-size: 12px;
}

.period {
  color: var(--accent-purple);
  font-size: 10px;
}

.achievements-list {
  list-style: none;
  padding: 0;
}

.achievements-list li {
  color: var(--primary-green);
  margin-bottom: 8px;
  padding-left: 20px;
  position: relative;
  font-size: 12px;
  line-height: 1.4;
}

.achievements-list li::before {
  content: '•';
  position: absolute;
  left: 0;
  color: var(--accent-yellow);
}

/* Mobile Skills */
.mobile-skills-content {
  margin-bottom: 30px;
}

.mobile-skill-category {
  background: var(--bg-dark);
  border: 4px solid var(--primary-green);
  padding: 20px;
  margin-bottom: 20px;
  position: relative;
  box-shadow:
    0 0 0 4px var(--bg-black),
    0 0 0 8px var(--primary-green),
    0 0 0 12px var(--bg-black);
  clip-path: polygon(0% 0%, 95% 0%, 100% 5%, 100% 95%, 95% 100%, 0% 100%, 5% 95%, 5% 5%);
}

.mobile-skill-category h3 {
  margin-bottom: 15px;
  color: var(--accent-yellow);
  text-shadow: 0 0 5px var(--accent-yellow);
  font-size: 16px;
  text-align: center;
}

.mobile-skill-items {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  justify-content: center;
}

.mobile-skill-item {
  background: var(--primary-green);
  color: var(--bg-black);
  padding: 8px 12px;
  font-size: 10px;
  border: 2px solid var(--bg-black);
  position: relative;
  transition: all 0.3s ease;
  white-space: nowrap;
  min-width: fit-content;
}

.mobile-skill-item:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 8px rgba(0, 255, 0, 0.3);
}

.mobile-additional-skills {
  background: var(--bg-dark);
  border: 4px solid var(--primary-green);
  padding: 20px;
  text-align: center;
  position: relative;
  box-shadow:
    0 0 0 4px var(--bg-black),
    0 0 0 8px var(--primary-green),
    0 0 0 12px var(--bg-black);
  clip-path: polygon(0% 0%, 95% 0%, 100% 5%, 100% 95%, 95% 100%, 0% 100%, 5% 95%, 5% 5%);
}

.mobile-additional-skills h3 {
  color: var(--accent-yellow);
  margin-bottom: 20px;
  text-shadow: 0 0 5px var(--accent-yellow);
  font-size: 16px;
}

/* Mobile Projects */
.mobile-projects-content {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.mobile-project-card {
  background: var(--bg-dark);
  border: 4px solid var(--primary-green);
  padding: 20px;
  position: relative;
  box-shadow:
    0 0 0 4px var(--bg-black),
    0 0 0 8px var(--primary-green),
    0 0 0 12px var(--bg-black);
  clip-path: polygon(0% 0%, 95% 0%, 100% 5%, 100% 95%, 95% 100%, 0% 100%, 5% 95%, 5% 5%);
}

.project-header {
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-bottom: 15px;
}

.project-header h3 {
  color: var(--accent-yellow);
  margin-bottom: 5px;
  text-shadow: 0 0 5px var(--accent-yellow);
  font-size: 16px;
}

.project-category {
  background: var(--accent-purple);
  color: var(--bg-black);
  padding: 4px 8px;
  font-size: 8px;
  border: 1px solid var(--bg-black);
  align-self: flex-start;
}

.project-description {
  margin-bottom: 15px;
  line-height: 1.6;
  font-size: 12px;
}

.mobile-project-story {
  margin: 15px 0;
  padding: 15px;
  background: var(--bg-black);
  border-left: 4px solid var(--accent-blue);
}

.story-item {
  margin-bottom: 10px;
  font-size: 11px;
  line-height: 1.4;
}

.story-item strong {
  color: var(--accent-yellow);
}

.mobile-project-tech {
  margin: 15px 0;
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
}

.mobile-tech-tag {
  background: var(--accent-blue);
  color: var(--bg-black);
  padding: 3px 6px;
  font-size: 7px;
  border: 1px solid var(--bg-black);
  position: relative;
}

.mobile-project-links {
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-top: 15px;
}

.mobile-project-links a {
  text-decoration: none;
  text-align: center;
}

/* Mobile Achievements */
.mobile-achievements-content {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.mobile-achievement-card {
  background: var(--bg-dark);
  border: 4px solid var(--primary-green);
  padding: 20px;
  text-align: center;
  position: relative;
  box-shadow:
    0 0 0 4px var(--bg-black),
    0 0 0 8px var(--primary-green),
    0 0 0 12px var(--bg-black);
  clip-path: polygon(0% 0%, 95% 0%, 100% 5%, 100% 95%, 95% 100%, 0% 100%, 5% 95%, 5% 5%);
}

.achievement-icon {
  font-size: 36px;
  margin-bottom: 15px;
}

.mobile-achievement-card h3 {
  color: var(--accent-yellow);
  margin-bottom: 10px;
  text-shadow: 0 0 5px var(--accent-yellow);
  font-size: 16px;
}

.mobile-achievement-card p {
  font-size: 12px;
  line-height: 1.4;
  margin-bottom: 10px;
}

.achievement-metrics {
  color: var(--accent-blue);
  font-size: 10px;
  font-weight: bold;
}

/* Mobile Education */
.mobile-education-content {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.mobile-education-item {
  background: var(--bg-dark);
  border: 4px solid var(--primary-green);
  padding: 20px;
  position: relative;
  box-shadow:
    0 0 0 4px var(--bg-black),
    0 0 0 8px var(--primary-green),
    0 0 0 12px var(--bg-black);
  clip-path: polygon(0% 0%, 95% 0%, 100% 5%, 100% 95%, 95% 100%, 0% 100%, 5% 95%, 5% 5%);
}

.education-header {
  margin-bottom: 15px;
}

.education-header h3 {
  color: var(--accent-yellow);
  margin-bottom: 8px;
  text-shadow: 0 0 5px var(--accent-yellow);
  font-size: 16px;
}

.institution-info {
  display: flex;
  flex-direction: column;
  gap: 5px;
}

.institution {
  color: var(--accent-blue);
  font-size: 12px;
}

.period {
  color: var(--accent-purple);
  font-size: 10px;
}

.major {
  color: var(--primary-green);
  margin-bottom: 10px;
  font-weight: bold;
  font-size: 14px;
}

.thesis {
  color: var(--primary-green);
  margin-bottom: 10px;
  font-size: 11px;
  line-height: 1.4;
}

.achievement {
  color: var(--accent-yellow);
  font-size: 11px;
  font-weight: bold;
}

/* Removed Mobile Testimonials */

/* Mobile Contact */
.mobile-contact-content {
  display: flex;
  flex-direction: column;
  gap: 30px;
}

.mobile-contact-info {
  background: var(--bg-dark);
  border: 4px solid var(--primary-green);
  padding: 20px;
  position: relative;
  box-shadow:
    0 0 0 4px var(--bg-black),
    0 0 0 8px var(--primary-green),
    0 0 0 12px var(--bg-black);
  clip-path: polygon(0% 0%, 95% 0%, 100% 5%, 100% 95%, 95% 100%, 0% 100%, 5% 95%, 5% 5%);
}

.mobile-contact-info h3 {
  color: var(--accent-yellow);
  margin-bottom: 15px;
  text-shadow: 0 0 5px var(--accent-yellow);
  font-size: 16px;
}

.mobile-contact-info p {
  font-size: 12px;
  line-height: 1.6;
  margin-bottom: 20px;
}

.mobile-contact-details {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.mobile-contact-item {
  display: flex;
  flex-direction: column;
  gap: 5px;
}

.contact-label {
  color: var(--accent-yellow);
  font-size: 11px;
  text-shadow: 0 0 5px var(--accent-yellow);
}

.contact-link {
  color: var(--primary-green);
  text-decoration: none;
  font-size: 12px;
  transition: color 0.3s ease;
}

.contact-link:hover {
  color: var(--accent-yellow);
  text-shadow: 0 0 5px var(--accent-yellow);
}

.mobile-contact-form {
  background: var(--bg-dark);
  border: 4px solid var(--primary-green);
  padding: 20px;
  position: relative;
  box-shadow:
    0 0 0 4px var(--bg-black),
    0 0 0 8px var(--primary-green),
    0 0 0 12px var(--bg-black);
  clip-path: polygon(0% 0%, 95% 0%, 100% 5%, 100% 95%, 95% 100%, 0% 100%, 5% 95%, 5% 5%);
}

.mobile-contact-form h3 {
  color: var(--accent-yellow);
  margin-bottom: 20px;
  text-shadow: 0 0 5px var(--accent-yellow);
  font-size: 16px;
}

.form-group {
  margin-bottom: 20px;
}

.form-group label {
  display: block;
  margin-bottom: 5px;
  color: var(--accent-yellow);
  font-size: 11px;
  text-shadow: 0 0 5px var(--accent-yellow);
}

.mobile-form-input {
  width: 100%;
  padding: 12px;
  background: var(--bg-black);
  border: 2px solid var(--primary-green);
  color: var(--primary-green);
  font-family: 'Press Start 2P', cursive;
  font-size: 9px;
  transition: all 0.3s ease;
}

.mobile-form-input:focus {
  outline: none;
  border-color: var(--accent-yellow);
  box-shadow: 0 0 10px var(--accent-yellow);
}

textarea.mobile-form-input {
  min-height: 80px;
  resize: vertical;
}

/* Mobile Footer */
.mobile-footer {
  background: var(--bg-dark);
  border-top: 4px solid var(--primary-green);
  padding: 15px;
  text-align: center;
  font-size: 8px;
  position: relative;
}

.mobile-footer::before {
  content: '';
  position: absolute;
  top: -4px;
  left: 0;
  right: 0;
  height: 4px;
  background: linear-gradient(90deg, var(--primary-green), var(--accent-blue), var(--accent-purple));
}
</style>
