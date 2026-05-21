<template>
  <div class="services-page">

    <!-- Page header -->
    <div class="page-header">
      <div v-reveal class="page-header-inner">
        <span class="label">What we offer</span>
        <h1>Services</h1>
        <p>Every piece begins with a conversation. Here's how Zeal &amp; Fire can work with you.</p>
      </div>
    </div>

    <!-- Service cards -->
    <section class="cards-section">
      <div class="cards-grid">
        <div
          v-reveal="index * 110"
          class="service-card"
          v-for="(s, index) in services"
          :key="s.title"
        >
          <div class="card-rule"></div>
          <div class="card-number">0{{ index + 1 }}</div>
          <h2 class="card-title">{{ s.title }}</h2>
          <p class="card-body">{{ s.body }}</p>
        </div>
      </div>
    </section>

    <!-- How it works -->
    <section class="process-section">
      <div v-reveal class="process-header">
        <span class="label">The process</span>
        <h2>How it works</h2>
      </div>
      <div class="process-steps">
        <div v-reveal="index * 120" class="step" v-for="(step, index) in steps" :key="step.title">
          <div class="step-num">{{ index + 1 }}</div>
          <h3>{{ step.title }}</h3>
          <p>{{ step.body }}</p>
        </div>
      </div>
    </section>

    <!-- CTA banner -->
    <div v-reveal class="cta-banner">
      <div class="cta-inner">
        <h2>Ready to start?</h2>
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

  @include tablet {
    padding: 4rem 3rem 3rem;
  }

  @include mobile {
    padding: 3rem 1.5rem 2.5rem;
  }
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

// ─── Service cards ────────────────────────────────────────────────────────────

.cards-section {
  padding: 5rem 5rem;

  @include tablet {
    padding: 4rem 3rem;
  }

  @include mobile {
    padding: 3rem 1.5rem;
  }
}

.cards-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1px;
  background: var(--border);
  border: 1px solid var(--border);

  @include tablet {
    grid-template-columns: 1fr;
  }
}

.service-card {
  background: var(--bg);
  padding: 3rem 2.5rem;

  @include mobile {
    padding: 2rem 1.5rem;
  }
}

.card-rule {
  width: 2.5rem;
  height: 2px;
  background: var(--accent);
  margin-bottom: 1.5rem;
}

.card-number {
  font-family: var(--font-serif);
  font-size: 3rem;
  font-style: italic;
  color: var(--border);
  line-height: 1;
  margin-bottom: 0.75rem;
}

.card-title {
  font-family: var(--font-serif);
  font-size: 1.5rem;
  font-style: italic;
  font-weight: 300;
  margin-bottom: 1rem;
  line-height: 1.2;
}

.card-body {
  color: var(--text-muted);
  font-size: 0.92rem;
  line-height: 1.8;
}

// ─── Process section ──────────────────────────────────────────────────────────

.process-section {
  padding: 5rem 5rem;
  background: var(--surface);

  @include tablet {
    padding: 4rem 3rem;
  }

  @include mobile {
    padding: 3rem 1.5rem;
  }
}

.process-header {
  margin-bottom: 3.5rem;

  h2 {
    font-family: var(--font-serif);
    font-size: clamp(1.8rem, 3vw, 2.8rem);
    font-weight: 300;
    margin-top: 0.4rem;
  }
}

.process-steps {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 3rem;

  @include tablet {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
}

.step {
  position: relative;
  padding-left: 1rem;
  border-left: 2px solid var(--border);
}

.step-num {
  font-family: var(--font-serif);
  font-size: 2.5rem;
  font-style: italic;
  color: var(--accent);
  line-height: 1;
  margin-bottom: 0.75rem;
}

.step h3 {
  font-family: var(--font-serif);
  font-size: 1.2rem;
  font-weight: 300;
  margin-bottom: 0.6rem;
}

.step p {
  color: var(--text-muted);
  font-size: 0.9rem;
  line-height: 1.75;
}

// ─── CTA banner ───────────────────────────────────────────────────────────────

.cta-banner {
  background: var(--nav-bg);
  padding: 5rem;

  @include tablet {
    padding: 4rem 3rem;
  }

  @include mobile {
    padding: 3rem 1.5rem;
  }
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
  name: "ServicesView",
  data() {
    return {
      services: [
        {
          title: "Commissioned Portraits",
          body: "From a single person to a full family, each portrait is painted from photo reference or a live sitting session. Capturing not just a likeness, but something true about the subject.",
        },
        {
          title: "Landscapes & Scenes",
          body: "South African scenes — fynbos, coastline, vineyards, and open skies. Available as bespoke commissions or as adaptations of existing works in the gallery.",
        },
        {
          title: "Pet Portraits",
          body: "Your beloved animal, immortalised in paint. A thoughtful and lasting tribute, painted with the same care given to every portrait.",
        },
        {
          title: "Custom Art Pieces",
          body: "Have something specific in mind? Zané collaborates with clients to produce custom works that reflect individual style, vision, and the character of your space.",
        },
        {
          title: "Art Consultancy",
          body: "Not sure where to start? Get guidance on selecting or commissioning a piece that resonates with your aesthetic preferences and the energy of your space.",
        },
        {
          title: "Delivery",
          body: "All commissioned pieces are carefully packaged and delivered to your chosen location across South Africa. Framing assistance is also available on request.",
        },
      ],
      steps: [
        {
          title: "Share your vision",
          body: "Send a message with what you have in mind — a reference photo, a space, a feeling. There's no brief too simple or too ambitious.",
        },
        {
          title: "We create together",
          body: "Zané will sketch a concept and keep you informed throughout the process. You'll have the opportunity to give feedback before the final piece is completed.",
        },
        {
          title: "Delivered to you",
          body: "Once finished, your piece is carefully packaged and shipped. For local clients, personal delivery or collection is available.",
        },
      ],
    };
  },
};
</script>
