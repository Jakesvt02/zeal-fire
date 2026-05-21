<template>
  <div
    v-if="visible"
    class="cursor"
    :class="{ hovering: isHovering }"
    :style="{ left: x + 'px', top: y + 'px' }"
  ></div>
</template>

<style lang="scss" scoped>
.cursor {
  position: fixed;
  width: 10px;
  height: 10px;
  margin-left: -5px;
  margin-top: -5px;
  background: var(--accent);
  border-radius: 50%;
  pointer-events: none;
  z-index: 99999;
  transition:
    width 0.3s ease,
    height 0.3s ease,
    margin 0.3s ease,
    background 0.3s ease,
    border 0.3s ease,
    opacity 0.3s ease;

  &.hovering {
    width: 44px;
    height: 44px;
    margin-left: -22px;
    margin-top: -22px;
    background: transparent;
    border: 1.5px solid var(--accent);
    opacity: 0.7;
  }
}
</style>

<script>
export default {
  name: "CustomCursor",
  data() {
    return {
      x: -100,
      y: -100,
      isHovering: false,
      visible: false,
    };
  },
  mounted() {
    if (window.matchMedia("(pointer: coarse)").matches) return;
    this.visible = true;
    document.addEventListener("mousemove", this.onMove);
    document.addEventListener("mouseover", this.onOver);
    document.addEventListener("mouseout", this.onOut);
  },
  beforeUnmount() {
    document.removeEventListener("mousemove", this.onMove);
    document.removeEventListener("mouseover", this.onOver);
    document.removeEventListener("mouseout", this.onOut);
  },
  methods: {
    onMove(e) {
      this.x = e.clientX;
      this.y = e.clientY;
    },
    onOver(e) {
      if (e.target.closest("a, button, [role='button'], .gallery-card, .work-card, .filter-pill")) {
        this.isHovering = true;
      }
    },
    onOut(e) {
      if (e.target.closest("a, button, [role='button'], .gallery-card, .work-card, .filter-pill")) {
        this.isHovering = false;
      }
    },
  },
};
</script>
