<template>
  <button
    :type="type"
    class="btn-8bit"
    :disabled="disabled || loading"
    @click="$emit('click', $event)"
  >
    <slot v-if="!loading" />
    <span v-else>LOADING...</span>
  </button>
</template>

<script>
export default {
  name: 'PixelButton',
  props: {
    type: { type: String, default: 'button' },
    disabled: { type: Boolean, default: false },
    loading: { type: Boolean, default: false }
  }
}
</script>


