<script lang="ts" setup></script>

<template>
  <div class="m-card">
    <div class="m-card-prepend" v-if="$slots.prepend">
      <slot name="prepend"></slot>
    </div>
    <div class="m-card-content">
      <slot></slot>
    </div>
  </div>
</template>

<style scoped>
.m-card {
  display: flex;
  gap: 0.5rem;
  justify-content: center;
  align-items: center;
  padding: 0.7rem 1rem;
  border-radius: 0.5rem;
  background-color: rgba(57, 89, 109, 0.199);
  backdrop-filter: blur(2px);
}

.m-card-prepend {
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
