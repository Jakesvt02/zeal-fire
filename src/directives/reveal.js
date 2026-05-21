// v-reveal directive — fades + slides elements up when they enter the viewport.
// Usage:  v-reveal            (no delay)
//         v-reveal="200"      (200ms delay for staggered cards)

export const reveal = {
  mounted(el, binding) {
    const delay = typeof binding.value === "number" ? binding.value : 0;

    el.style.opacity = "0";
    el.style.transform = "translateY(32px)";
    el.style.transition = `opacity 0.65s ease ${delay}ms, transform 0.65s ease ${delay}ms`;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.style.opacity = "1";
          el.style.transform = "translateY(0)";
          observer.disconnect();
        }
      },
      { threshold: 0.12 }
    );

    observer.observe(el);
  },
};
