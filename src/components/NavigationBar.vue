<template>
  <div class="nav-wrap">

    <!-- Desktop -->
    <div v-show="!mobile" class="desktop-nav">
      <router-link to="/home" class="nav-logo">
        <span class="brand-name">Zeal &amp; Fire</span>
        <span class="brand-sub">Where Passion Meets Design and Art</span>
      </router-link>

      <div class="nav-links">
        <div class="menu-item" v-for="nav in navItems" :key="nav.nav">
          <router-link :to="'/' + nav.nav" class="nav-link">{{ nav.caption }}</router-link>
          <div v-if="nav.sub_items.length" class="dropdown">
            <router-link
              :to="'/' + item.nav"
              v-for="item in nav.sub_items"
              :key="item.nav"
              class="dropdown-link"
            >{{ item.caption }}</router-link>
          </div>
        </div>
      </div>
    </div>

    <!-- Mobile / Tablet -->
    <div v-show="mobile" class="mobile-nav">
      <router-link to="/home" class="nav-logo">
        <span class="brand-name">Zeal &amp; Fire</span>
      </router-link>

      <button @click="toggleMobileView" class="hamburger-btn" :aria-label="mobileNav ? 'Close menu' : 'Open menu'">
        <i class="fa-solid" :class="mobileNav ? 'fa-xmark' : 'fa-bars'"></i>
      </button>
    </div>

    <!-- Full-screen overlay -->
    <transition name="overlay">
      <div v-if="mobileNav" class="mobile-overlay">
        <nav class="overlay-nav">
          <router-link
            v-for="(link, i) in mobileLinks"
            :key="link.to"
            :to="link.to"
            class="overlay-link"
            :style="{ transitionDelay: (i * 0.07 + 0.15) + 's' }"
            @click="toggleMobileView"
          >{{ link.label }}</router-link>
        </nav>
        <div class="overlay-contact">
          <a href="mailto:zeal.n.fire@gmail.com" class="overlay-email">zeal.n.fire@gmail.com</a>
        </div>
      </div>
    </transition>

  </div>
</template>

<style lang="scss" scoped>
.nav-wrap {
  background: var(--nav-bg);
  position: sticky;
  top: 0;
  z-index: 100;
  width: 100%;
}

// ─── Desktop ──────────────────────────────────────────────────────────────────

.desktop-nav {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.8rem 3rem;

  @include tablet {
    display: none;
  }
}

.nav-logo {
  display: flex;
  flex-flow: column;
  gap: 0.2rem;
  flex-shrink: 0;
  text-decoration: none;
}

.brand-name {
  font-family: var(--font-serif);
  font-size: 1.6rem;
  font-weight: 400;
  font-style: italic;
  color: var(--nav-text);
  letter-spacing: 0.03em;
  line-height: 1;
}

.brand-sub {
  font-family: var(--font-sans);
  font-size: 0.58rem;
  font-weight: 300;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: rgba(248, 246, 241, 0.4);
  line-height: 1;
}

.nav-links {
  display: flex;
  align-items: center;
  gap: 0.25rem;
}

.menu-item {
  position: relative;

  &:hover .dropdown {
    display: flex;
    flex-flow: column;
    align-items: center;
  }
}

.nav-link {
  display: block;
  color: rgba(248, 246, 241, 0.55);
  text-decoration: none;
  font-family: var(--font-sans);
  font-size: 0.72rem;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  padding: 1.3rem 1.1rem;
  transition: color 0.2s;

  &:hover,
  &.router-link-active {
    color: var(--nav-text);
  }
}

.dropdown {
  display: none;
  position: absolute;
  top: 100%;
  left: 50%;
  transform: translateX(-50%);
  background: var(--nav-bg);
  border-top: 2px solid var(--accent);
  min-width: 140px;
  padding: 0.5rem 0;
}

.dropdown-link {
  display: block;
  color: rgba(248, 246, 241, 0.55);
  text-decoration: none;
  font-size: 0.68rem;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  padding: 0.5rem 1.2rem;
  white-space: nowrap;
  transition: color 0.2s;

  &:hover { color: var(--nav-text); }
}

// ─── Mobile / Tablet ──────────────────────────────────────────────────────────

.mobile-nav {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.75rem 1.5rem;
}

.hamburger-btn {
  background: none;
  border: none;
  color: var(--nav-text);
  font-size: 1.4rem;
  padding: 0.5rem;
  line-height: 1;
  z-index: 600;
  position: relative;
}

// ─── Full-screen overlay ──────────────────────────────────────────────────────

.mobile-overlay {
  position: fixed;
  inset: 0;
  background: var(--nav-bg);
  z-index: 500;
  display: flex;
  flex-flow: column;
  justify-content: center;
  padding: 6rem 3rem 4rem;
}

.overlay-nav {
  display: flex;
  flex-flow: column;
  gap: 0.25rem;
}

.overlay-link {
  display: block;
  font-family: var(--font-serif);
  font-size: clamp(2rem, 8vw, 3.5rem);
  font-weight: 300;
  font-style: italic;
  color: rgba(248, 246, 241, 0.4);
  text-decoration: none;
  line-height: 1.3;
  opacity: 0;
  animation: linkSlideIn 0.4s ease forwards;
  transition: color 0.25s ease;

  &.router-link-active,
  &:hover {
    color: var(--nav-text);
  }
}

@keyframes linkSlideIn {
  from {
    opacity: 0;
    transform: translateX(-20px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

.overlay-contact {
  margin-top: auto;
  padding-top: 3rem;
  border-top: 1px solid rgba(255, 255, 255, 0.08);
}

.overlay-email {
  font-size: 0.75rem;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: rgba(248, 246, 241, 0.3);
  text-decoration: none;
  transition: color 0.2s;

  &:hover { color: rgba(248, 246, 241, 0.7); }
}

// ─── Overlay transition ───────────────────────────────────────────────────────

.overlay-enter-active { transition: opacity 0.3s ease; }
.overlay-leave-active  { transition: opacity 0.2s ease; }
.overlay-enter-from,
.overlay-leave-to      { opacity: 0; }
</style>

<script>
export default {
  name: "NavigationBar",
  data() {
    return {
      navItems: [
        { caption: "Home",    nav: "home",    sub_items: [
          { caption: "Gallery",  nav: "gallery" },
          { caption: "Services", nav: "service" },
        ]},
        { caption: "Gallery", nav: "gallery",  sub_items: [] },
        { caption: "Services", nav: "service", sub_items: [] },
        { caption: "About",   nav: "about",   sub_items: [] },
        { caption: "Contact", nav: "contact", sub_items: [] },
      ],
      mobile: null,
      mobileNav: false,
      mobileLinks: [
        { label: "Home",     to: "/home" },
        { label: "Gallery",  to: "/gallery" },
        { label: "Services", to: "/service" },
        { label: "About",    to: "/about" },
        { label: "Contact",  to: "/contact" },
      ],
    };
  },
  created() {
    window.addEventListener("resize", this.checkScreen);
    this.checkScreen();
  },
  beforeUnmount() {
    window.removeEventListener("resize", this.checkScreen);
  },
  methods: {
    toggleMobileView() {
      this.mobileNav = !this.mobileNav;
    },
    checkScreen() {
      this.mobile = window.innerWidth <= 1024;
      if (!this.mobile) this.mobileNav = false;
    },
  },
};
</script>
