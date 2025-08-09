<template>
  <div class="music-controls">
    <PixelButton v-if="autoplayBlocked" @click="startPlayback">ENABLE SOUND</PixelButton>
    <PixelButton v-else @click="togglePlayback">{{ isPlaying ? 'MUTE' : 'UNMUTE' }}</PixelButton>
  </div>
</template>

<script>
import PixelButton from '../ui/PixelButton.vue'

export default {
  name: 'BackgroundMusic',
  components: { PixelButton },
  props: {
    src: { type: String, default: '/sound-liberation-luffy.mp3' },
    volume: { type: Number, default: 0.3 },
    autoplay: { type: Boolean, default: true },
    loop: { type: Boolean, default: true }
  },
  data() {
    return {
      audio: null,
      isPlaying: false,
      autoplayBlocked: false,
      unlockHandlersRegistered: false
    }
  },
  mounted() {
    this.audio = new Audio(this.src)
    this.audio.loop = this.loop
    this.audio.volume = this.volume
    this.audio.preload = 'auto'

    if (this.autoplay) {
      this.audio
        .play()
        .then(() => {
          this.isPlaying = true
          this.autoplayBlocked = false
        })
        .catch(() => {
          this.isPlaying = false
          this.autoplayBlocked = true
          this.registerUnlockHandlers()
        })
    }
  },
  beforeUnmount() {
    if (this.audio) {
      this.audio.pause()
      this.audio = null
    }
    this.removeUnlockHandlers()
  },
  methods: {
    async startPlayback() {
      try {
        await this.audio.play()
        this.isPlaying = true
        this.autoplayBlocked = false
        this.removeUnlockHandlers()
      } catch (_) {
        this.autoplayBlocked = true
      }
    },
    togglePlayback() {
      if (!this.audio) return
      if (this.isPlaying) {
        this.audio.pause()
        this.isPlaying = false
      } else {
        this.startPlayback()
      }
    },
    registerUnlockHandlers() {
      if (this.unlockHandlersRegistered) return
      this.unlockHandlersRegistered = true
      const tryStart = () => this.startPlayback()
      this._unlockHandlers = [
        ['click', tryStart],
        ['touchstart', tryStart],
        ['keydown', tryStart]
      ]
      this._unlockHandlers.forEach(([evt, fn]) => {
        window.addEventListener(evt, fn, { passive: true })
      })
    },
    removeUnlockHandlers() {
      if (!this.unlockHandlersRegistered || !this._unlockHandlers) return
      this._unlockHandlers.forEach(([evt, fn]) => {
        window.removeEventListener(evt, fn)
      })
      this._unlockHandlers = null
      this.unlockHandlersRegistered = false
    }
  }
}
</script>

<style scoped>
.music-controls {
  position: fixed;
  right: 20px;
  bottom: 20px;
  z-index: 1001;
}
.music-controls :deep(.btn-8bit) {
  padding: 10px 16px;
  font-size: 10px;
}
</style>


