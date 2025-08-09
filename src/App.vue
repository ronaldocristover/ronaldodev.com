<template>
  <div id="app">
    <!-- Desktop Layout -->
    <DesktopLayout v-if="!isMobile" />
    
    <!-- Mobile Layout -->
    <MobileLayout v-else />
  </div>
</template>

<script>
import DesktopLayout from './components/DesktopLayout.vue'
import MobileLayout from './components/MobileLayout.vue'

export default {
  name: 'App',
  components: {
    DesktopLayout,
    MobileLayout
  },
  data() {
    return {
      isMobile: false
    }
  },
  mounted() {
    this.checkScreenSize()
    window.addEventListener('resize', this.checkScreenSize)
  },
  beforeUnmount() {
    window.removeEventListener('resize', this.checkScreenSize)
  },
  methods: {
    checkScreenSize() {
      this.isMobile = window.innerWidth <= 768
    }
  }
}
</script>

<style>
/* Global styles */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  image-rendering: pixelated;
  image-rendering: -moz-crisp-edges;
  image-rendering: crisp-edges;
}

body {
  font-family: 'Press Start 2P', cursive;
  background: var(--bg-black);
  color: var(--primary-green);
  line-height: 1.6;
  overflow-x: hidden;
  font-smooth: never;
  -webkit-font-smoothing: none;
}

#app {
  min-height: 100vh;
  background: var(--bg-black);
}

/* 16-Bit Theme Variables */
:root {
  --primary-green: #00ff00;
  --secondary-green: #00cc00;
  --dark-green: #006600;
  --accent-blue: #0080ff;
  --accent-red: #ff0000;
  --accent-yellow: #ffff00;
  --accent-purple: #ff00ff;
  --accent-cyan: #00ffff;
  --bg-black: #000000;
  --bg-dark: #111111;
  --bg-darker: #0a0a0a;
  --pixel-size: 4px;
}

/* 16-Bit Button Styles */
.btn-8bit {
  font-family: 'Press Start 2P', cursive;
  background: var(--primary-green);
  color: var(--bg-black);
  border: none;
  padding: 16px 32px;
  font-size: 12px;
  cursor: pointer;
  text-transform: uppercase;
  transition: all 0.1s ease;
  position: relative;
  box-shadow:
    0 0 0 4px var(--bg-black),
    0 0 0 8px var(--primary-green),
    0 0 0 12px var(--bg-black),
    0 0 0 16px var(--primary-green);
  clip-path: polygon(0% 0%, 90% 0%, 100% 10%, 100% 90%, 90% 100%, 0% 100%, 10% 90%, 10% 10%);
}

.btn-8bit:hover {
  transform: translateY(-2px);
  box-shadow:
    0 0 0 4px var(--bg-black),
    0 0 0 8px var(--accent-yellow),
    0 0 0 12px var(--bg-black),
    0 0 0 16px var(--accent-yellow);
}

.btn-8bit:active {
  transform: translateY(0px);
}

/* 16-Bit Card Styles */
.card-8bit {
  background: var(--bg-dark);
  border: 4px solid var(--primary-green);
  padding: 30px;
  position: relative;
  box-shadow:
    0 0 0 4px var(--bg-black),
    0 0 0 8px var(--primary-green),
    0 0 0 12px var(--bg-black);
  clip-path: polygon(0% 0%, 95% 0%, 100% 5%, 100% 95%, 95% 100%, 0% 100%, 5% 95%, 5% 5%);
  overflow: visible;
  margin: 15px 0;
  min-height: fit-content;
  word-wrap: break-word;
  overflow-wrap: break-word;
}

.card-8bit::before {
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

/* Glitch Effects */
.glitch {
  position: relative;
  animation: glitch 0.3s infinite;
}

.glitch::before,
.glitch::after {
  content: attr(data-text);
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.glitch::before {
  animation: glitch-1 0.3s infinite;
  color: var(--accent-red);
  z-index: -1;
}

.glitch::after {
  animation: glitch-2 0.3s infinite;
  color: var(--accent-cyan);
  z-index: -2;
}

@keyframes glitch {
  0% {
    transform: translate(0);
  }

  20% {
    transform: translate(-2px, 2px);
  }

  40% {
    transform: translate(-2px, -2px);
  }

  60% {
    transform: translate(2px, 2px);
  }

  80% {
    transform: translate(2px, -2px);
  }

  100% {
    transform: translate(0);
  }
}

@keyframes glitch-1 {
  0% {
    transform: translate(0);
  }

  20% {
    transform: translate(-4px, 4px);
  }

  40% {
    transform: translate(-4px, -4px);
  }

  60% {
    transform: translate(4px, 4px);
  }

  80% {
    transform: translate(4px, -4px);
  }

  100% {
    transform: translate(0);
  }
}

@keyframes glitch-2 {
  0% {
    transform: translate(0);
  }

  20% {
    transform: translate(4px, -4px);
  }

  40% {
    transform: translate(4px, 4px);
  }

  60% {
    transform: translate(-4px, -4px);
  }

  80% {
    transform: translate(-4px, 4px);
  }

  100% {
    transform: translate(0);
  }
}

/* Typing Animation */
.typing-animation {
  overflow: hidden;
  border-right: 3px solid var(--primary-green);
  white-space: nowrap;
  animation: typing 3s steps(40, end), blink-caret 0.75s step-end infinite;
}

@keyframes typing {
  from {
    width: 0;
  }

  to {
    width: 100%;
  }
}

@keyframes blink-caret {

  from,
  to {
    border-color: transparent;
  }

  50% {
    border-color: var(--primary-green);
  }
}

/* Pixel Art Character */
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
  clip-path: polygon(20% 0%, 80% 0%, 100% 20%, 100% 80%, 80% 100%, 20% 100%, 0% 80%, 0% 20%);
}

@keyframes pixel-pulse {

  0%,
  100% {
    transform: scale(1);
    filter: brightness(1);
  }

  50% {
    transform: scale(1.05);
    filter: brightness(1.2);
  }
}

/* Scan Lines Effect */
.scanlines {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(transparent 50%,
      rgba(0, 255, 0, 0.1) 50%);
  background-size: 100% 4px;
  pointer-events: none;
  z-index: 1000;
  animation: scanlines 0.1s linear infinite;
}

@keyframes scanlines {
  0% {
    transform: translateY(0);
  }

  100% {
    transform: translateY(4px);
  }
}

/* Pixel Perfect Borders */
.pixel-border {
  border: 4px solid var(--primary-green);
  box-shadow:
    inset 0 0 0 4px var(--bg-black),
    inset 0 0 0 8px var(--primary-green);
}

/* Scrollbar Styling */
::-webkit-scrollbar {
  width: 12px;
}

::-webkit-scrollbar-track {
  background: var(--bg-dark);
}

::-webkit-scrollbar-thumb {
  background: var(--primary-green);
  border: 2px solid var(--bg-black);
}

::-webkit-scrollbar-thumb:hover {
  background: var(--secondary-green);
}
</style>
