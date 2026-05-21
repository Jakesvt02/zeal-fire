<template>
  <div class="about-page">

    <!-- Page header -->
    <div class="page-header">
      <div v-reveal class="page-header-inner">
        <span class="label">The artist</span>
        <h1>About Zané</h1>
        <p>Painter. Creator. Founder of Zeal &amp; Fire Studio — where passion meets paint.</p>
      </div>
    </div>

    <!-- Bio section -->
    <section class="bio-section">
      <div v-reveal class="bio-img"></div>
      <div v-reveal="150" class="bio-text">
        <span class="label">Background</span>
        <h2>Passion for people<br><em>&amp; paint.</em></h2>
        <p>
          Zané van Tonder is the founder of Zeal &amp; Fire Studio — a passionate creative
          space that seeks to illuminate the often-overlooked elements of beauty, life,
          and emotion in our everyday surroundings.
        </p>
        <p>
          Currently pursuing her Bachelor's Degree in Architecture at the University of
          the Witwatersrand, Zané infuses her deep love for life into each creation. Her
          training sharpens an eye for composition, light, and space that runs through
          every painting.
        </p>
        <p>
          Inspired by mesmerizing visuals, emotions, and behaviours in people, wildlife,
          landscapes, and plant life — each piece begins with a story that refuses to stay quiet.
        </p>
      </div>
    </section>

    <!-- Quote -->
    <div v-reveal class="quote-band">
      <blockquote>
        "We don't just create art — we curate experiences that linger in the heart and mind."
      </blockquote>
      <cite>— Zané van Tonder</cite>
    </div>

    <!-- Values -->
    <section class="values-section">
      <div v-reveal class="values-header">
        <span class="label">What drives us</span>
        <h2>Studio values</h2>
      </div>
      <div class="values-grid">
        <div v-reveal="index * 110" class="value-card" v-for="(v, index) in values" :key="v.title">
          <div class="value-rule"></div>
          <h3>{{ v.title }}</h3>
          <p>{{ v.body }}</p>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <div v-reveal class="cta-banner">
      <div class="cta-inner">
        <h2>Want to collaborate?</h2>
        <p>Commissions are open. Reach out and let's create something meaningful together.</p>
        <router-link to="/contact" class="btn-cta">Get in touch</router-link>
      </div>
    </div>

  </div>
</template>

<style lang="scss" scoped>
.label {
  font-size: 0.7rem;
  letter-spacing: 0.22em;
  text-transform: uppercase;
  color: var(--accent);
  font-weight: 500;
  display: block;
  margin-bottom: 0.5rem;
}

// ─── Page header ──────────────────────────────────────────────────────────────

.page-header {
  background: var(--surface);
  padding: 5rem 5rem 4rem;

  @include tablet { padding: 4rem 3rem 3rem; }
  @include mobile { padding: 3rem 1.5rem 2.5rem; }
}

.page-header-inner {
  max-width: 60rem;

  h1 {
    font-family: var(--font-serif);
    font-size: clamp(2.5rem, 5vw, 4.5rem);
    font-weight: 300;
    font-style: italic;
    margin: 0.4rem 0 1rem;
    line-height: 1.1;
  }

  p {
    color: var(--text-muted);
    font-size: 1.05rem;
    max-width: 55ch;
    line-height: 1.8;
  }
}

// ─── Bio section ──────────────────────────────────────────────────────────────

.bio-section {
  display: grid;
  grid-template-columns: 1fr 1fr;
  min-height: 48rem;

  @include tablet {
    grid-template-columns: 1fr;
    min-height: unset;
  }
}

.bio-img {
  background-image: url("../../../public/img/zane.jpg");
  background-position: center top;
  background-size: cover;
  background-repeat: no-repeat;
  min-height: 48rem;

  @include tablet { min-height: 55vw; }
  @include mobile { min-height: 80vw; }
}

.bio-text {
  display: flex;
  flex-flow: column;
  justify-content: center;
  padding: 5rem 4.5rem;
  background: var(--bg);

  @include tablet { padding: 4rem 3rem; }
  @include mobile { padding: 3rem 1.5rem; }

  h2 {
    font-family: var(--font-serif);
    font-size: clamp(1.8rem, 3vw, 2.8rem);
    font-weight: 300;
    line-height: 1.2;
    margin: 0.5rem 0 1.5rem;

    em { font-style: italic; }
  }

  p {
    color: var(--text-muted);
    font-size: 0.95rem;
    max-width: 50ch;
    line-height: 1.85;
    margin-bottom: 1rem;

    &:last-of-type { margin-bottom: 0; }
  }
}

// ─── Quote ────────────────────────────────────────────────────────────────────

.quote-band {
  background: var(--surface);
  padding: 5rem;
  text-align: center;
  display: flex;
  flex-flow: column;
  align-items: center;
  gap: 1rem;

  @include tablet { padding: 4rem 3rem; }
  @include mobile { padding: 3rem 1.5rem; }

  blockquote {
    font-family: var(--font-serif);
    font-size: clamp(1.3rem, 2.5vw, 2rem);
    font-weight: 300;
    font-style: italic;
    color: var(--text);
    max-width: 55ch;
    line-height: 1.5;
    margin: 0;

    &::before { content: "\201C"; }
    &::after  { content: "\201D"; }
  }

  cite {
    font-size: 0.75rem;
    letter-spacing: 0.18em;
    text-transform: uppercase;
    color: var(--accent);
    font-style: normal;
  }
}

// ─── Values ───────────────────────────────────────────────────────────────────

.values-section {
  padding: 5rem;
  background: var(--bg);

  @include tablet { padding: 4rem 3rem; }
  @include mobile { padding: 3rem 1.5rem; }
}

.values-header {
  margin-bottom: 3.5rem;

  h2 {
    font-family: var(--font-serif);
    font-size: clamp(1.8rem, 3vw, 2.8rem);
    font-weight: 300;
    margin-top: 0.4rem;
  }
}

.values-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1px;
  background: var(--border);
  border: 1px solid var(--border);

  @include tablet { grid-template-columns: 1fr; }
}

.value-card {
  background: var(--bg);
  padding: 3rem 2.5rem;

  @include mobile { padding: 2rem 1.5rem; }

  h3 {
    font-family: var(--font-serif);
    font-size: 1.4rem;
    font-style: italic;
    font-weight: 300;
    margin-bottom: 0.75rem;
  }

  p {
    color: var(--text-muted);
    font-size: 0.9rem;
    line-height: 1.8;
  }
}

.value-rule {
  width: 2.5rem;
  height: 2px;
  background: var(--accent);
  margin-bottom: 1.5rem;
}

// ─── CTA banner ───────────────────────────────────────────────────────────────

.cta-banner {
  background: var(--nav-bg);
  padding: 5rem;

  @include tablet { padding: 4rem 3rem; }
  @include mobile { padding: 3rem 1.5rem; }
}

.cta-inner {
  max-width: 55rem;

  h2 {
    font-family: var(--font-serif);
    font-size: clamp(1.8rem, 3vw, 3rem);
    font-weight: 300;
    font-style: italic;
    color: var(--nav-text);
    margin-bottom: 1rem;
  }

  p {
    color: rgba(250, 247, 242, 0.55);
    font-size: 1rem;
    max-width: 50ch;
    line-height: 1.8;
    margin-bottom: 2rem;
  }
}

.btn-cta {
  display: inline-block;
  background: var(--accent);
  color: #fff;
  text-decoration: none;
  padding: 0.9rem 2.5rem;
  font-family: var(--font-sans);
  font-size: 0.72rem;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  transition: background 0.25s;

  &:hover { background: var(--accent-soft); color: var(--text); }
}
</style>

<script>
export default {
  name: "AboutView",
  data() {
    return {
      values: [
        {
          title: "Authenticity",
          body: "Every piece is original and hand-painted. No prints, no shortcuts — only genuine craft that carries the energy of the moment it was made.",
        },
        {
          title: "Emotion first",
          body: "A painting should make you feel something. Zané works to capture not just a likeness or a scene, but the invisible weight of a moment.",
        },
        {
          title: "Collaboration",
          body: "Commissioned work is a conversation. You bring the vision; Zané brings the skill and sensitivity to translate it into something lasting.",
        },
      ],
    };
  },
};
</script>
