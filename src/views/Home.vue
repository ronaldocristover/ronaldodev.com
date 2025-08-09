<template>
  <div id="home-view">
    <DesktopLayout v-if="!isMobile" />
    <MobileLayout v-else />
  </div>
  
</template>

<script>
import DesktopLayout from '../components/DesktopLayout.vue'
import MobileLayout from '../components/MobileLayout.vue'

export default {
  name: 'HomeView',
  components: { DesktopLayout, MobileLayout },
  data() {
    return { isMobile: false }
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


