<template>
  <form :class="wrapperClass" @submit.prevent="onSubmit">
    <h3>SEND MESSAGE</h3>
    <div class="form-group">
      <label :for="`${idPrefix}-name`">NAME:</label>
      <input :id="`${idPrefix}-name`" type="text" v-model="form.name" required class="form-input" />
    </div>
    <div class="form-group">
      <label :for="`${idPrefix}-email`">EMAIL:</label>
      <input :id="`${idPrefix}-email`" type="email" v-model="form.email" required class="form-input" />
    </div>
    <div class="form-group">
      <label :for="`${idPrefix}-message`">MESSAGE:</label>
      <textarea :id="`${idPrefix}-message`" v-model="form.message" required class="form-input"></textarea>
    </div>
    <PixelButton type="submit" :loading="submitting">SEND MESSAGE</PixelButton>
  </form>
</template>

<script>
import { sendContactMessage } from '../../services/api'
import PixelButton from '../ui/PixelButton.vue'

export default {
  name: 'ContactForm',
  components: { PixelButton },
  props: {
    variant: { type: String, default: 'desktop' }, // 'desktop' | 'mobile'
    idPrefix: { type: String, default: 'contact' }
  },
  data() {
    return {
      submitting: false,
      form: { name: '', email: '', message: '' }
    }
  },
  computed: {
    wrapperClass() {
      if (this.variant === 'mobile') return 'mobile-contact-form card-8bit'
      return 'contact-form card-8bit'
    }
  },
  methods: {
    async onSubmit() {
      try {
        this.submitting = true
        const result = await sendContactMessage(this.form)
        this.$emit('submitted', result)
        alert('Message sent! (dummy API)')
        this.form = { name: '', email: '', message: '' }
      } catch (err) {
        console.error(err)
        alert('Failed to send. Please try again later.')
      } finally {
        this.submitting = false
      }
    }
  }
}
</script>

<style scoped>
.form-group { margin-bottom: 20px; }
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
textarea.form-input { min-height: 100px; resize: vertical; }

/* Mobile size tweaks when used with variant="mobile" */
.mobile-contact-form h3 { font-size: 16px; }
.mobile-contact-form .form-input { font-size: 9px; }
textarea.mobile-contact-form .form-input { min-height: 80px; }
</style>


