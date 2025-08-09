<template>
  <div class="desktop-layout">
    <!-- Navigation -->
    <nav class="nav-8bit">
      <div class="nav-container">
        <div class="logo glitch" :data-text="portfolioData.personal.logo">{{ portfolioData.personal.logo }}</div>
        <div class="nav-links">
          <a v-for="nav in portfolioData.navigation" 
             :key="nav.id" 
             :href="`#${nav.id}`" 
             class="nav-link">{{ nav.label }}</a>
        </div>
      </div>
    </nav>

    <!-- Hero Section -->
    <section id="home" class="hero-section">
      <div class="hero-content">
        <div class="hero-text">
          <h1 class="hero-title glitch" :data-text="portfolioData.hero.headline">{{ portfolioData.hero.headline }}</h1>
          <p class="hero-subtitle typing-animation">{{ portfolioData.hero.subheadline }}</p>
          <p class="hero-message">{{ portfolioData.hero.main_message }}</p>
          <div class="hero-buttons">
            <PixelButton @click="scrollToSection('projects')">{{ portfolioData.hero.cta_primary }}</PixelButton>
            <PixelButton @click="scrollToSection('contact')">{{ portfolioData.hero.cta_secondary }}</PixelButton>
          </div>
        </div>
        <div class="hero-visual">
          <div class="pixel-art-container">
            <div class="pixel-character"></div>
            <div class="pixel-particles"></div>
          </div>
        </div>
      </div>
    </section>

    <!-- About Section -->
    <section id="about" class="section">
      <div class="container">
        <h2 class="section-title glitch" data-text="ABOUT ME">ABOUT ME</h2>
        <div class="about-content">
          <Card8Bit v-for="section in portfolioData.about.sections" 
               :key="section.title">
            <div class="section-icon">{{ section.icon }}</div>
            <h3>{{ section.title }}</h3>
            <p>{{ section.content }}</p>
          </Card8Bit>
        </div>
        <div class="key-points">
          <h3>KEY ACHIEVEMENTS</h3>
          <ul>
            <li v-for="point in portfolioData.about.key_points" :key="point">{{ point }}</li>
          </ul>
        </div>
      </div>
    </section>

    <!-- Experience Section -->
    <section id="experience" class="section">
      <div class="container">
        <h2 class="section-title glitch" data-text="EXPERIENCE">EXPERIENCE</h2>
        <div class="experience-summary card-8bit">
          <p>{{ portfolioData.experience.summary }}</p>
        </div>
        <div class="experience-timeline">
          <Card8Bit v-for="exp in portfolioData.experience.highlights" 
               :key="exp.period" 
               customClass="experience-item">
            <div class="experience-header">
              <h3>{{ exp.role }}</h3>
              <span class="company">{{ exp.company }}</span>
              <span class="period">{{ exp.period }}</span>
            </div>
            <ul class="achievements-list">
              <li v-for="achievement in exp.achievements" :key="achievement">{{ achievement }}</li>
            </ul>
          </Card8Bit>
        </div>
      </div>
    </section>

    <!-- Skills Section -->
    <section id="skills" class="section">
      <div class="container">
        <h2 class="section-title glitch" data-text="SKILLS">SKILLS</h2>
        <div class="skills-grid">
          <div v-for="category in portfolioData.skills.categories" 
               :key="category.name" 
               class="skill-category card-8bit">
            <h3>{{ category.name }}</h3>
            <div class="skill-items">
              <span v-for="skill in category.items" 
                    :key="skill" 
                    class="skill-item">{{ skill }}</span>
            </div>
          </div>
        </div>
        <div class="additional-skills card-8bit">
          <h3>ADDITIONAL SKILLS</h3>
          <div class="skill-items">
            <span v-for="skill in portfolioData.skills.additional_skills" 
                  :key="skill" 
                  class="skill-item">{{ skill }}</span>
          </div>
        </div>
      </div>
    </section>

    <!-- Projects Section -->
    <section id="projects" class="section">
      <div class="container">
        <h2 class="section-title glitch" data-text="PROJECTS">PROJECTS</h2>
          <div class="projects-grid">
            <Card8Bit v-for="project in portfolioData.projects" 
                 :key="project.id" 
                 customClass="project-card">
            <div class="project-header">
              <h3>{{ project.title }}</h3>
              <span class="project-category">{{ project.category }}</span>
            </div>
            <p class="project-description">{{ project.description }}</p>
            <div class="project-story">
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
            <div class="project-tech">
              <span v-for="tech in project.technologies" 
                    :key="tech" 
                    class="tech-tag">{{ tech }}</span>
            </div>
            <div class="project-links">
              <a :href="project.github" target="_blank" class="btn-8bit">GITHUB</a>
              <a :href="project.demo" target="_blank" class="btn-8bit">DEMO</a>
            </div>
            </Card8Bit>
        </div>
      </div>
    </section>

    <!-- Achievements Section -->
    <section id="achievements" class="section">
      <div class="container">
        <h2 class="section-title glitch" data-text="ACHIEVEMENTS">ACHIEVEMENTS</h2>
          <div class="achievements-grid">
            <Card8Bit v-for="achievement in portfolioData.achievements" 
                 :key="achievement.title" 
                 customClass="achievement-card">
            <div class="achievement-icon">{{ achievement.icon }}</div>
            <h3>{{ achievement.title }}</h3>
            <p>{{ achievement.description }}</p>
            <div class="achievement-metrics">{{ achievement.metrics }}</div>
            </Card8Bit>
        </div>
      </div>
    </section>

    <!-- Education Section -->
    <section id="education" class="section">
      <div class="container">
        <h2 class="section-title glitch" data-text="EDUCATION">EDUCATION</h2>
          <div class="education-timeline">
            <Card8Bit v-for="edu in portfolioData.education" 
                 :key="edu.degree" 
                 customClass="education-item">
            <div class="education-header">
              <h3>{{ edu.degree }}</h3>
              <span class="institution">{{ edu.institution }}</span>
              <span class="period">{{ edu.period }}</span>
            </div>
            <p class="major">{{ edu.major }}</p>
            <p class="thesis"><strong>Thesis:</strong> {{ edu.thesis }}</p>
            <div v-if="edu.achievement" class="achievement">
              <strong>Achievement:</strong> {{ edu.achievement }}
            </div>
            </Card8Bit>
        </div>
      </div>
    </section>

    <!-- Contact Section -->
    <section id="contact" class="section">
      <div class="container">
        <h2 class="section-title glitch" data-text="CONTACT">CONTACT</h2>
          <div class="contact-content">
            <Card8Bit customClass="contact-info">
            <h3>GET IN TOUCH</h3>
            <p>{{ portfolioData.contact.message }}</p>
            <div class="contact-details">
              <div v-for="detail in portfolioData.contact.details" 
                   :key="detail.label" 
                   class="contact-item">
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
            </Card8Bit>
            <ContactForm variant="desktop" idPrefix="desktop" @submitted="onMessageSent" />
        </div>
      </div>
    </section>

    <!-- Footer -->
    <footer class="footer">
      <div class="container">
        <p>&copy; 2024 {{ portfolioData.personal.name }}. ALL RIGHTS RESERVED.</p>
      </div>
    </footer>
  </div>
</template>

<script>
import portfolioData from '../data/portfolio.json'
import PixelButton from './ui/PixelButton.vue'
import Card8Bit from './ui/Card8Bit.vue'
import ContactForm from './forms/ContactForm.vue'

export default {
  name: 'DesktopLayout',
  components: { PixelButton, Card8Bit, ContactForm },
  data() {
    return { portfolioData }
  },
  methods: {
    scrollToSection(sectionId) {
      const element = document.getElementById(sectionId)
      if (element) element.scrollIntoView({ behavior: 'smooth' })
    },
    onMessageSent() {
      // noop hook for now
    }
  }
}
</script>

<style scoped>
/* Desktop-specific styles */
.desktop-layout {
  min-height: 100vh;
  background: var(--bg-black);
}

/* Navigation */
.nav-8bit {
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
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
}

.logo {
  font-size: 24px;
  font-weight: bold;
  color: var(--primary-green);
}

.nav-links {
  display: flex;
  gap: 20px;
}

.nav-link {
  color: var(--primary-green);
  text-decoration: none;
  font-size: 12px;
  transition: color 0.3s ease;
  position: relative;
}

.nav-link:hover {
  color: var(--accent-yellow);
}

.nav-link::after {
  content: '';
  position: absolute;
  bottom: -4px;
  left: 0;
  width: 0;
  height: 2px;
  background: var(--accent-yellow);
  transition: width 0.3s ease;
}

.nav-link:hover::after {
  width: 100%;
}

/* Hero Section */
.hero-section {
  min-height: 100vh;
  display: flex;
  align-items: center;
  padding: 100px 20px 50px;
  background: linear-gradient(135deg, var(--bg-black) 0%, var(--bg-darker) 100%);
  position: relative;
  overflow: hidden;
}

.hero-section::before {
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
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 50px;
  align-items: center;
  position: relative;
  z-index: 1;
}

.hero-text {
  text-align: left;
}

.hero-title {
  font-size: 48px;
  margin-bottom: 20px;
  color: var(--primary-green);
  text-shadow: 0 0 10px var(--primary-green);
}

.hero-subtitle {
  font-size: 18px;
  margin-bottom: 15px;
  color: var(--accent-blue);
}

.hero-message {
  font-size: 16px;
  margin-bottom: 30px;
  color: var(--accent-yellow);
  font-style: italic;
}

.hero-buttons {
  display: flex;
  gap: 20px;
}

.hero-visual {
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
}

.pixel-art-container {
  width: 300px;
  height: 300px;
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
  background-size: 20px 20px;
  background-position: 0 0, 0 10px, 10px -10px, -10px 0px;
  animation: pixel-pulse 2s infinite;
  clip-path: polygon(
    20% 0%, 80% 0%, 100% 20%, 100% 80%, 80% 100%, 20% 100%, 0% 80%, 0% 20%
  );
}

.pixel-particles {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: 
    radial-gradient(circle at 25% 25%, var(--accent-yellow) 0%, transparent 50%),
    radial-gradient(circle at 75% 75%, var(--accent-red) 0%, transparent 50%);
  animation: particle-float 3s ease-in-out infinite;
}

@keyframes particle-float {
  0%, 100% { transform: translateY(0) rotate(0deg); }
  50% { transform: translateY(-20px) rotate(180deg); }
}

/* Sections */
.section {
  padding: 80px 20px;
  background: var(--bg-black);
  position: relative;
}

.section::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 4px;
  background: linear-gradient(90deg, var(--primary-green), var(--accent-blue), var(--accent-purple));
}

.container {
  max-width: 1200px;
  margin: 0 auto;
}

.section-title {
  text-align: center;
  font-size: 36px;
  margin-bottom: 50px;
  color: var(--primary-green);
  text-shadow: 0 0 10px var(--primary-green);
}

/* About Section */
.about-content {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;
  margin-bottom: 40px;
}

.section-icon {
  font-size: 48px;
  margin-bottom: 15px;
  text-align: center;
}

.key-points {
  background: var(--bg-dark);
  border: 4px solid var(--primary-green);
  padding: 24px;
  margin-top: 30px;
}

.key-points h3 {
  color: var(--accent-yellow);
  margin-bottom: 15px;
  text-shadow: 0 0 5px var(--accent-yellow);
}

.key-points ul {
  list-style: none;
  padding: 0;
}

.key-points li {
  color: var(--primary-green);
  margin-bottom: 10px;
  padding-left: 20px;
  position: relative;
}

.key-points li::before {
  content: '▶';
  position: absolute;
  left: 0;
  color: var(--accent-yellow);
}

/* Experience Section */
.experience-summary {
  margin-bottom: 40px;
  text-align: center;
  font-size: 16px;
  line-height: 1.8;
}

.experience-timeline {
  display: grid;
  gap: 30px;
}

.experience-item {
  position: relative;
}

.experience-header {
  margin-bottom: 15px;
}

.experience-header h3 {
  color: var(--accent-yellow);
  margin-bottom: 5px;
  text-shadow: 0 0 5px var(--accent-yellow);
}

.company {
  color: var(--accent-blue);
  font-size: 14px;
  margin-right: 15px;
}

.period {
  color: var(--accent-purple);
  font-size: 12px;
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
}

.achievements-list li::before {
  content: '•';
  position: absolute;
  left: 0;
  color: var(--accent-yellow);
}

/* Skills Section */
.skills-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 30px;
  margin-bottom: 40px;
}

.skill-category {
  min-height: 200px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.skill-category h3 {
  margin-bottom: 15px;
  color: var(--accent-yellow);
  text-shadow: 0 0 5px var(--accent-yellow);
}

.skill-items {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  justify-content: center;
  padding: 10px 0;
}

.skill-item {
  background: var(--primary-green);
  color: var(--bg-black);
  padding: 10px 16px;
  font-size: 11px;
  border: 2px solid var(--bg-black);
  position: relative;
  transition: all 0.3s ease;
  white-space: nowrap;
  min-width: fit-content;
}

.skill-item:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 8px rgba(0, 255, 0, 0.3);
}

.additional-skills {
  text-align: center;
  padding: 30px;
  margin-top: 30px;
}

.additional-skills h3 {
  color: var(--accent-yellow);
  margin-bottom: 20px;
  text-shadow: 0 0 5px var(--accent-yellow);
  font-size: 16px;
}

/* Projects Section */
.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 30px;
}

.project-card h3 {
  color: var(--accent-yellow);
  margin-bottom: 15px;
  text-shadow: 0 0 5px var(--accent-yellow);
}

.project-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 15px;
}

.project-category {
  background: var(--accent-purple);
  color: var(--bg-black);
  padding: 4px 8px;
  font-size: 8px;
  border: 1px solid var(--bg-black);
}

.project-description {
  margin-bottom: 15px;
  line-height: 1.6;
}

.project-story {
  margin: 15px 0;
  padding: 15px;
  background: var(--bg-dark);
  border-left: 4px solid var(--accent-blue);
}

.story-item {
  margin-bottom: 10px;
  font-size: 12px;
  line-height: 1.4;
}

.story-item strong {
  color: var(--accent-yellow);
}

.project-tech {
  margin: 15px 0;
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.tech-tag {
  background: var(--accent-blue);
  color: var(--bg-black);
  padding: 4px 8px;
  font-size: 8px;
  border: 1px solid var(--bg-black);
  position: relative;
}

.tech-tag::before {
  content: '';
  position: absolute;
  top: -1px;
  left: -1px;
  right: -1px;
  bottom: -1px;
  background: linear-gradient(45deg, var(--accent-blue), var(--accent-cyan));
  z-index: -1;
}

.project-links {
  display: flex;
  gap: 10px;
  margin-top: 15px;
}

.project-links a {
  text-decoration: none;
}

/* Achievements Section */
.achievements-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 30px;
}

.achievement-card {
  text-align: center;
}

.achievement-icon {
  font-size: 48px;
  margin-bottom: 15px;
}

.achievement-card h3 {
  color: var(--accent-yellow);
  margin-bottom: 10px;
  text-shadow: 0 0 5px var(--accent-yellow);
}

.achievement-metrics {
  color: var(--accent-blue);
  font-size: 12px;
  font-weight: bold;
  margin-top: 10px;
}

/* Education Section */
.education-timeline {
  display: grid;
  gap: 30px;
}

.education-item {
  position: relative;
}

.education-header {
  margin-bottom: 15px;
}

.education-header h3 {
  color: var(--accent-yellow);
  margin-bottom: 5px;
  text-shadow: 0 0 5px var(--accent-yellow);
}

.institution {
  color: var(--accent-blue);
  font-size: 14px;
  margin-right: 15px;
}

.period {
  color: var(--accent-purple);
  font-size: 12px;
}

.major {
  color: var(--primary-green);
  margin-bottom: 10px;
  font-weight: bold;
}

.thesis {
  color: var(--primary-green);
  margin-bottom: 10px;
  font-size: 12px;
}

.achievement {
  color: var(--accent-yellow);
  font-size: 12px;
  font-weight: bold;
}

/* Removed Testimonials Section */

/* Contact Section */
.contact-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 50px;
}

.contact-details {
  margin-top: 20px;
}

.contact-item {
  margin-bottom: 15px;
}

.contact-label {
  color: var(--accent-yellow);
  font-size: 12px;
  text-shadow: 0 0 5px var(--accent-yellow);
}

.contact-link {
  color: var(--primary-green);
  text-decoration: none;
  margin-left: 10px;
  transition: color 0.3s ease;
}

.contact-link:hover {
  color: var(--accent-yellow);
  text-shadow: 0 0 5px var(--accent-yellow);
}

/* Form Styles */
.form-group {
  margin-bottom: 20px;
}

.form-group label {
  display: block;
  margin-bottom: 5px;
  color: var(--accent-yellow);
  font-size: 12px;
  text-shadow: 0 0 5px var(--accent-yellow);
}

.form-input {
  width: 100%;
  padding: 12px;
  background: var(--bg-black);
  border: 2px solid var(--primary-green);
  color: var(--primary-green);
  font-family: 'Press Start 2P', cursive;
  font-size: 10px;
  transition: all 0.3s ease;
}

.form-input:focus {
  outline: none;
  border-color: var(--accent-yellow);
  box-shadow: 0 0 10px var(--accent-yellow);
}

textarea.form-input {
  min-height: 100px;
  resize: vertical;
}

/* Footer */
.footer {
  background: var(--bg-dark);
  border-top: 4px solid var(--primary-green);
  padding: 20px;
  text-align: center;
  font-size: 10px;
  position: relative;
}

.footer::before {
  content: '';
  position: absolute;
  top: -4px;
  left: 0;
  right: 0;
  height: 4px;
  background: linear-gradient(90deg, var(--primary-green), var(--accent-blue), var(--accent-purple));
}
</style>
