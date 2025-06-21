<script lang="ts" setup></script>

<template>
  <div class="tooltip-container">
    <slot></slot>
    <div class="tooltip-content">
      <slot name="content"></slot>
    </div>
  </div>
</template>

<style scoped>
.tooltip-container {
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
}
.tooltip-content {
  position: absolute;

  top: calc(-100% - 8px);
  background-color: #333;
  font-size: 14px;
  color: #fff;
  padding: 8px;
  border-radius: 4px;
  white-space: nowrap;
  z-index: 1000;
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.3s ease;
}

.tooltip-container:hover .tooltip-content {
  opacity: 1;
}
</style>
