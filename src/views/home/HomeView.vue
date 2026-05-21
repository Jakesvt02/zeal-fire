<template>
  <div class="home">

    <!-- ═══════════════════════════════ HERO ═══════════════════════════════ -->
    <section class="hero">
      <div class="hero-text">
        <span class="label">Original South African Art</span>
        <h1>Paintings that<br><em>linger long after</em><br>you look away.</h1>
        <p>Original portraits, landscapes, and commissioned pieces by Zané van Tonder — each one painted with intention, rooted in South Africa.</p>
        <div class="hero-ctas">
          <router-link to="/gallery" class="btn btn-primary">View Gallery</router-link>
          <router-link to="/contact" class="btn btn-outline">Commission a Piece</router-link>
        </div>
      </div>
      <div class="hero-carousel">
        <carousel :slides="heroSlides" :indicators="true" :controls="false" :interval="5000" />
      </div>
    </section>

    <!-- ═══════════════════════════ FEATURED WORKS ════════════════════════ -->
    <section class="featured">
      <div v-reveal class="section-header">
        <span class="label">Recent Work</span>
        <h2>Featured Pieces</h2>
        <p>A selection of original paintings — commissions welcome.</p>
      </div>

      <div class="works-scroll">
        <div v-reveal="index * 100" class="work-card" v-for="(piece, index) in featuredWorks" :key="piece.title">
          <div class="work-img">
            <img :src="piece.image" :alt="piece.title" />
            <div class="work-overlay"><span>Enquire</span></div>
          </div>
          <div class="work-info">
            <div class="work-meta">{{ piece.medium }} · {{ piece.dimensions }}</div>
            <div class="work-title">{{ piece.title }}</div>
            <div class="work-footer">
              <router-link to="/contact" class="work-btn">Enquire →</router-link>
            </div>
          </div>
        </div>
      </div>

      <div class="featured-cta">
        <router-link to="/gallery" class="btn btn-outline">See All Works</router-link>
      </div>
    </section>

    <!-- ════════════════════════════ ABOUT STRIP ══════════════════════════ -->
    <div class="about-strip">
      <div class="about-img"></div>
      <div v-reveal class="about-text">
        <span class="label">About the artist</span>
        <h2>Passion for people<br><em>&amp; paint.</em></h2>
        <p>
          Zané van Tonder is the founder of Zeal &amp; Fire Studio — a passionate creative
          space that seeks to illuminate the often-overlooked elements of beauty, life,
          and emotion in our everyday surroundings.
        </p>
        <p>
          Inspired by mesmerizing visuals, emotions, and behaviours in people, wildlife,
          landscapes, and plant life, each piece begins with a story that refuses to stay quiet.
        </p>
        <router-link to="/about" class="btn btn-outline">Read more</router-link>
      </div>
    </div>

    <!-- ══════════════════════════ SERVICES PREVIEW ═══════════════════════ -->
    <section class="services-preview">
      <div v-reveal class="section-header">
        <span class="label">What I offer</span>
        <h2>Services</h2>
      </div>
      <div class="services-grid">
        <div v-reveal="index * 120" class="service-card" v-for="(service, index) in services" :key="service.title">
          <div class="service-rule"></div>
          <h3>{{ service.title }}</h3>
          <p>{{ service.description }}</p>
        </div>
      </div>
      <div v-reveal class="services-cta">
        <router-link to="/service" class="btn btn-outline">All Services</router-link>
        <router-link to="/contact" class="btn btn-primary">Get in Touch</router-link>
      </div>
    </section>

  </div>
</template>

<style lang="scss" scoped>

// ─── SHARED TOKENS ──────────────────────────────────────────────────────────

.label {
  font-size: 0.7rem;
  letter-spacing: 0.22em;
  text-transform: uppercase;
  color: var(--accent);
  font-weight: 500;
  font-family: var(--font-sans);
}

.btn {
  display: inline-block;
  padding: 0.85rem 2.2rem;
  font-family: var(--font-sans);
  font-size: 0.72rem;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  text-decoration: none;
  cursor: pointer;
  border: none;
  transition: all 0.25s;

  &.btn-primary {
    background: var(--accent);
    color: #fff;

    &:hover { background: var(--text); }
  }

  &.btn-outline {
    background: transparent;
    color: var(--text);
    border: 1px solid var(--border);

    &:hover { border-color: var(--accent); color: var(--accent); }
  }
}

.section-header {
  margin-bottom: 3rem;

  h2 {
    font-family: var(--font-serif);
    font-size: clamp(1.8rem, 3vw, 3rem);
    font-weight: 300;
    margin-top: 0.4rem;
  }

  p {
    color: var(--text-muted);
    margin-top: 0.75rem;
    max-width: 55ch;
    font-size: 0.95rem;
  }
}

// ─── HERO ────────────────────────────────────────────────────────────────────

.hero {
  display: grid;
  grid-template-columns: 1fr 1fr;
  min-height: 88vh;
  position: relative;

  @include tablet {
    grid-template-columns: 1fr;
    min-height: unset;
  }
}

.hero-text {
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  padding: 6rem 5rem;
  background: var(--bg);

  @include tablet {
    padding: 4rem 3rem 3rem;
    order: 2;
  }

  @include mobile {
    padding: 3rem 1.5rem 2.5rem;
    order: 2;
  }

  h1 {
    font-family: var(--font-serif);
    font-size: clamp(2.5rem, 4vw, 5rem);
    font-weight: 300;
    line-height: 1.1;
    margin: 0.75rem 0 1.5rem;

    em { font-style: italic; }
  }

  p {
    color: var(--text-muted);
    font-size: 1rem;
    max-width: 42ch;
    margin-bottom: 2.5rem;
    line-height: 1.8;
  }
}

.hero-ctas {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
}

.hero-carousel {
  position: relative;
  overflow: hidden;
  background: var(--surface);

  @include tablet {
    order: 1;
    height: 70vw;
    min-height: 320px;
  }

  @include mobile {
    order: 1;
    height: 90vw;
    min-height: 300px;
  }

}

// ─── FEATURED WORKS ──────────────────────────────────────────────────────────

.featured {
  padding: 6rem 5rem;
  background: var(--bg);

  @include tablet {
    padding: 4rem 3rem;
  }

  @include mobile {
    padding: 3rem 1.5rem;
  }
}

.works-scroll {
  display: flex;
  gap: 1.5rem;
  overflow-x: auto;
  scroll-snap-type: x mandatory;
  padding-bottom: 1rem;
  -ms-overflow-style: none;
  scrollbar-width: none;
  margin-bottom: 3rem;

  &::-webkit-scrollbar { display: none; }
}

.work-card {
  scroll-snap-align: start;
  flex: 0 0 280px;
  background: var(--bg);

  @include mobile {
    flex: 0 0 72vw;
  }
}

.work-img {
  position: relative;
  width: 100%;
  aspect-ratio: 3/4;
  overflow: hidden;
  background: var(--surface);

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
    transition: transform 0.5s ease;
  }

  &:hover img { transform: scale(1.04); }
  &:hover .work-overlay { opacity: 1; }
}

.work-overlay {
  position: absolute;
  inset: 0;
  background: rgba(20, 34, 64, 0.45);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.3s ease;

  span {
    font-family: var(--font-sans);
    font-size: 0.65rem;
    letter-spacing: 0.25em;
    text-transform: uppercase;
    color: #fff;
    border: 1px solid rgba(255, 255, 255, 0.7);
    padding: 0.5rem 1.2rem;
  }
}

.work-info {
  padding: 1rem 0;
  border-top: 1px solid var(--border);
}

.work-meta {
  font-size: 0.72rem;
  color: var(--text-muted);
  letter-spacing: 0.06em;
  margin-bottom: 0.3rem;
}

.work-title {
  font-family: var(--font-serif);
  font-size: 1.15rem;
  font-weight: 300;
  margin-bottom: 0.75rem;
}

.work-footer {
  display: flex;
  justify-content: flex-end;
  align-items: center;
}

.work-btn {
  font-size: 0.65rem;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  color: var(--text-muted);
  text-decoration: none;
  border-bottom: 1px solid var(--border);
  padding-bottom: 1px;
  transition: color 0.2s, border-color 0.2s;

  &:hover { color: var(--accent); border-color: var(--accent); }
}

.featured-cta {
  text-align: center;
}

// ─── ABOUT STRIP ─────────────────────────────────────────────────────────────

.about-strip {
  display: grid;
  grid-template-columns: 1fr 1fr;
  background: var(--surface);

  @include tablet {
    grid-template-columns: 1fr;
  }
}

.about-img {
  background-image: url("../../../public/img/zane.jpg");
  background-position: center top;
  background-size: cover;
  background-repeat: no-repeat;
  min-height: 50rem;

  @include mobile {
    min-height: 70vw;
  }
}

.about-text {
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  padding: 5rem 4rem;

  @include tablet {
    padding: 3rem 3rem;
  }

  @include mobile {
    padding: 3rem 1.5rem;
  }

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
    max-width: 48ch;
    line-height: 1.8;
    margin-bottom: 1rem;
  }

  .btn { margin-top: 1rem; }
}

// ─── SERVICES PREVIEW ────────────────────────────────────────────────────────

.services-preview {
  padding: 6rem 5rem;
  background: var(--bg);

  @include tablet {
    padding: 4rem 3rem;
  }

  @include mobile {
    padding: 3rem 1.5rem;
  }
}

.services-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1px;
  background: var(--border);
  border: 1px solid var(--border);
  margin-bottom: 3rem;

  @include tablet {
    grid-template-columns: 1fr;
  }
}

.service-card {
  background: var(--bg);
  padding: 3rem 2.5rem;

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
    line-height: 1.75;
  }
}

.service-rule {
  width: 2.5rem;
  height: 2px;
  background: var(--accent);
  margin-bottom: 1.5rem;
}

.services-cta {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
}

</style>

<script>
import Carousel from "../../components/carousel/Carousel.vue";

export default {
  name: "HomeView",
  components: { Carousel },
  data() {
    return {
      heroSlides: [
        { image: require("../../../public/img/home_page_img.png") },
        { image: require("../../../public/img/two_boys.jpg") },
        { image: require("../../../public/img/background_1.jpg") },
        { image: require("../../../public/img/lukas_estian.jpg") },
      ],
      featuredWorks: [
        {
          title: "Two Boys",
          medium: "Oil on canvas",
          dimensions: "80 × 100 cm",
          image: require("../../../public/img/two_boys.jpg"),
        },
        {
          title: "Self Portrait",
          medium: "Oil on canvas",
          dimensions: "50 × 65 cm",
          image: require("../../../public/img/self_portrait.png"),
        },
        {
          title: "Man in Light",
          medium: "Oil on canvas",
          dimensions: "70 × 90 cm",
          image: require("../../../public/img/man_portrait.png"),
        },
        {
          title: "Lukas & Estian",
          medium: "Oil on canvas",
          dimensions: "60 × 80 cm",
          image: require("../../../public/img/lukas_estian.jpg"),
        },
      ],
      services: [
        {
          title: "Commissioned Portraits",
          description:
            "From a single person to a full family. Painted from photo reference or a live sitting session, each portrait captures something true.",
        },
        {
          title: "Landscapes & Scenes",
          description:
            "South African scenes — fynbos, coastline, vineyard, and beyond. Available as bespoke commissions or from existing works.",
        },
        {
          title: "Art Consultancy",
          description:
            "Not sure where to start? Zané can help you select or commission a piece that resonates with your space and aesthetic.",
        },
      ],
    };
  },
};
</script>
