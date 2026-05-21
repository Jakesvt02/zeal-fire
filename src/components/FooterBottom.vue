<template>
  <footer class="footer">

    <div class="footer-inner">
      <div class="footer-col">
        <div class="footer-brand">Zeal &amp; Fire</div>
        <p class="footer-tagline">Original South African art.<br>Commissions open.</p>
      </div>

      <div class="footer-col">
        <div class="footer-heading">Navigate</div>
        <router-link class="footer-link" to="/home">Home</router-link>
        <router-link class="footer-link" to="/about">About</router-link>
        <router-link class="footer-link" to="/gallery">Gallery</router-link>
        <router-link class="footer-link" to="/service">Services</router-link>
        <router-link class="footer-link" to="/contact">Contact</router-link>
      </div>

      <div class="footer-col">
        <div class="footer-heading">Connect</div>
        <span class="footer-link" @click="facebookClick">Facebook</span>
        <span class="footer-link" @click="instagramClick">Instagram</span>
        <span class="footer-link" @click="mailClick">zeal.n.fire@gmail.com</span>
      </div>
    </div>

    <div class="footer-bottom">
      © {{ new Date().getFullYear() }} Zeal &amp; Fire. All rights reserved.
    </div>
  </footer>
</template>

<style lang="scss" scoped>
.footer {
  background: var(--nav-bg);
  color: var(--nav-text);
  padding: 5rem 5rem 2.5rem;
  border-top: 3px solid var(--accent);

  @include tablet { padding: 4rem 3rem 2rem; }
  @include mobile { padding: 3rem 1.5rem 1.5rem; }
}

// ─── Footer grid ──────────────────────────────────────────────────────────────

.footer-inner {
  display: grid;
  grid-template-columns: 1.5fr 1fr 1fr;
  gap: 3rem;
  padding-bottom: 3rem;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);

  @include mobile {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
}

.footer-brand {
  font-family: var(--font-serif);
  font-size: 1.6rem;
  font-style: italic;
  color: var(--nav-text);
  margin-bottom: 0.75rem;
  letter-spacing: 0.05em;
}

.footer-tagline {
  font-size: 0.85rem;
  color: rgba(248, 246, 241, 0.45);
  line-height: 1.7;
  max-width: 28ch;
}

.footer-heading {
  font-size: 0.65rem;
  letter-spacing: 0.22em;
  text-transform: uppercase;
  color: var(--accent);
  margin-bottom: 1.2rem;
  font-weight: 500;
}

.footer-col {
  display: flex;
  flex-flow: column;
}

.footer-link {
  display: block;
  color: rgba(248, 246, 241, 0.5);
  text-decoration: none;
  font-size: 0.85rem;
  line-height: 2.2;
  cursor: pointer;
  transition: color 0.2s;

  &:hover { color: var(--nav-text); }
}

.footer-bottom {
  padding-top: 1.5rem;
  text-align: center;
  font-size: 0.72rem;
  color: rgba(248, 246, 241, 0.25);
  letter-spacing: 0.08em;
}
</style>

<script>
export default {
  name: "FooterBottom",
  methods: {
    instagramClick() {
      window.open("https://www.instagram.com/zeal.n.fire.studio/");
    },
    facebookClick() {
      window.open("https://www.facebook.com/profile.php?id=61553973684515");
    },
    mailClick() {
      window.open("mailto:zeal.n.fire@gmail.com");
    },
  },
};
</script>
