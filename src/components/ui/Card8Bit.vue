<template>
  <component :is="tag" :class="['card-8bit', customClass]">
    <slot />
  </component>
</template>

<script>
export default {
  name: 'Card8Bit',
  props: {
    tag: { type: String, default: 'div' },
    customClass: { type: [String, Array, Object], default: '' }
  }
}
</script>


