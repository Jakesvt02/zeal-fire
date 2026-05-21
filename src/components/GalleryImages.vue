<template>
  <div class="gallery-page">

    <!-- Page header -->
    <div class="page-header">
      <div v-reveal class="page-header-inner">
        <span class="label">Original works</span>
        <h1>Gallery</h1>
        <p>A collection of original paintings by Zané van Tonder. Each piece is unique and available for enquiry.</p>
      </div>
    </div>

    <!-- Filter pills -->
    <div v-reveal class="filter-bar">
      <button
        v-for="cat in categories"
        :key="cat"
        class="filter-pill"
        :class="{ active: activeFilter === cat }"
        @click="activeFilter = cat"
      >{{ cat }}</button>
    </div>

    <!-- Grid -->
    <div class="gallery-grid">
      <div
        v-reveal
        class="gallery-card"
        v-for="item in filteredItems"
        :key="item.id"
        @click="openLightbox(item)"
      >
        <div class="card-img">
          <img :src="item.imageUrl" :alt="item.caption" />
          <div class="card-overlay">
            <span class="overlay-label">View</span>
          </div>
        </div>
        <div class="card-info">
          <div class="card-meta">{{ item.medium }} · {{ item.dimensions }}</div>
          <div class="card-title">{{ item.caption }}</div>
        </div>
      </div>
    </div>

    <!-- Lightbox -->
    <transition name="fade">
      <div v-if="lightboxItem" class="lightbox" @click.self="closeLightbox">
        <button class="lb-close" @click="closeLightbox">
          <i class="fa-solid fa-xmark"></i>
        </button>
        <button class="lb-prev" @click="prevSlide" v-if="filteredItems.length > 1">
          <i class="fa-solid fa-chevron-left"></i>
        </button>
        <div class="lb-content">
          <img :src="lightboxItem.imageUrl" :alt="lightboxItem.caption" class="lb-img" />
          <div class="lb-caption">
            <div class="lb-title">{{ lightboxItem.caption }}</div>
            <div class="lb-meta">{{ lightboxItem.medium }} · {{ lightboxItem.dimensions }}</div>
            <router-link to="/contact" class="lb-enquire" @click="closeLightbox">Enquire about this piece →</router-link>
          </div>
        </div>
        <button class="lb-next" @click="nextSlide" v-if="filteredItems.length > 1">
          <i class="fa-solid fa-chevron-right"></i>
        </button>
      </div>
    </transition>

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

// ─── Filter bar ───────────────────────────────────────────────────────────────

.filter-bar {
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
  padding: 2rem 5rem 0;

  @include tablet { padding: 1.5rem 3rem 0; }
  @include mobile { padding: 1.5rem 1.5rem 0; }
}

.filter-pill {
  background: transparent;
  border: 1px solid var(--border);
  color: var(--text-muted);
  font-family: var(--font-sans);
  font-size: 0.68rem;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  padding: 0.45rem 1.1rem;
  cursor: pointer;
  transition: all 0.2s;

  &:hover { border-color: var(--accent); color: var(--accent); }
  &.active { background: var(--accent); border-color: var(--accent); color: #fff; }
}

// ─── Masonry gallery ──────────────────────────────────────────────────────────

.gallery-grid {
  columns: 3;
  column-gap: 1.5rem;
  padding: 3rem 5rem 5rem;

  @include tablet {
    columns: 2;
    padding: 2.5rem 3rem 4rem;
  }

  @include mobile {
    columns: 1;
    padding: 2rem 1.5rem 3rem;
  }
}

.gallery-card {
  break-inside: avoid;
  margin-bottom: 1.5rem;
  cursor: pointer;

  &:hover .card-overlay { opacity: 1; }
  &:hover .card-img img { transform: scale(1.04); }
}

.card-img {
  position: relative;
  width: 100%;
  overflow: hidden;
  background: var(--surface);

  img {
    width: 100%;
    height: auto;
    display: block;
    transition: transform 0.5s ease;
  }
}

.card-overlay {
  position: absolute;
  inset: 0;
  background: rgba(43, 36, 32, 0.45);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.overlay-label {
  font-family: var(--font-sans);
  font-size: 0.65rem;
  letter-spacing: 0.25em;
  text-transform: uppercase;
  color: #fff;
  border: 1px solid rgba(255, 255, 255, 0.7);
  padding: 0.5rem 1.2rem;
}

.card-info {
  padding: 0.85rem 0 0;
  border-top: 1px solid var(--border);
  margin-top: 0.1rem;
}

.card-meta {
  font-size: 0.7rem;
  color: var(--text-muted);
  letter-spacing: 0.06em;
  margin-bottom: 0.2rem;
}

.card-title {
  font-family: var(--font-serif);
  font-size: 1.1rem;
  font-weight: 300;
}

// ─── Lightbox ─────────────────────────────────────────────────────────────────

.lightbox {
  position: fixed;
  inset: 0;
  background: rgba(20, 16, 14, 0.96);
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1.5rem;
  padding: 2rem;

  @include mobile { padding: 1rem; gap: 0.5rem; }
}

.lb-close {
  position: absolute;
  top: 1.5rem;
  right: 1.5rem;
  background: none;
  border: none;
  color: rgba(250, 247, 242, 0.6);
  font-size: 1.4rem;
  cursor: pointer;
  padding: 0.5rem;
  transition: color 0.2s;
  z-index: 10;

  &:hover { color: #fff; }
}

.lb-prev,
.lb-next {
  background: none;
  border: none;
  color: rgba(250, 247, 242, 0.5);
  font-size: 1.3rem;
  cursor: pointer;
  padding: 1rem 0.75rem;
  transition: color 0.2s;
  flex-shrink: 0;

  &:hover { color: #fff; }

  @include mobile { font-size: 1rem; padding: 0.5rem; }
}

.lb-content {
  display: flex;
  flex-flow: column;
  align-items: center;
  gap: 1.5rem;
  max-width: 70vw;
  max-height: 90vh;

  @include mobile { max-width: 90vw; }
}

.lb-img {
  max-width: 100%;
  max-height: 72vh;
  object-fit: contain;
  display: block;

  @include mobile { max-height: 60vh; }
}

.lb-caption {
  text-align: center;
}

.lb-title {
  font-family: var(--font-serif);
  font-size: 1.4rem;
  font-weight: 300;
  font-style: italic;
  color: #fff;
  margin-bottom: 0.3rem;
}

.lb-meta {
  font-size: 0.72rem;
  color: rgba(250, 247, 242, 0.5);
  letter-spacing: 0.1em;
  margin-bottom: 0.9rem;
}

.lb-enquire {
  font-size: 0.68rem;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: var(--accent);
  text-decoration: none;
  border-bottom: 1px solid transparent;
  transition: border-color 0.2s;

  &:hover { border-bottom-color: var(--accent); }
}

// ─── Lightbox transition ───────────────────────────────────────────────────────

.fade-enter-active,
.fade-leave-active { transition: opacity 0.25s ease; }
.fade-enter-from,
.fade-leave-to { opacity: 0; }
</style>

<script>
export default {
  name: "GalleryImages",
  data() {
    return {
      activeFilter: "All",
      lightboxItem: null,
      lightboxIndex: 0,
      categories: ["All", "Portraits", "Landscapes", "Animals"],
      items: [
        {
          id: 1,
          caption: "Two Boys",
          medium: "Oil on canvas",
          dimensions: "80 × 100 cm",
          category: "Portraits",
          imageUrl: require("../../public/img/two_boys.jpg"),
        },
        {
          id: 2,
          caption: "Self Portrait",
          medium: "Oil on canvas",
          dimensions: "50 × 65 cm",
          category: "Portraits",
          imageUrl: require("../../public/img/self_portrait.png"),
        },
        {
          id: 3,
          caption: "Man in Light",
          medium: "Oil on canvas",
          dimensions: "70 × 90 cm",
          category: "Portraits",
          imageUrl: require("../../public/img/man_portrait.png"),
        },
        {
          id: 4,
          caption: "Lukas & Estian",
          medium: "Oil on canvas",
          dimensions: "60 × 80 cm",
          category: "Portraits",
          imageUrl: require("../../public/img/lukas_estian.jpg"),
        },
      ],
    };
  },
  computed: {
    filteredItems() {
      if (this.activeFilter === "All") return this.items;
      return this.items.filter((i) => i.category === this.activeFilter);
    },
  },
  methods: {
    openLightbox(item) {
      this.lightboxItem = item;
      this.lightboxIndex = this.filteredItems.indexOf(item);
      document.body.style.overflow = "hidden";
    },
    closeLightbox() {
      this.lightboxItem = null;
      document.body.style.overflow = "";
    },
    prevSlide() {
      this.lightboxIndex =
        (this.lightboxIndex - 1 + this.filteredItems.length) % this.filteredItems.length;
      this.lightboxItem = this.filteredItems[this.lightboxIndex];
    },
    nextSlide() {
      this.lightboxIndex = (this.lightboxIndex + 1) % this.filteredItems.length;
      this.lightboxItem = this.filteredItems[this.lightboxIndex];
    },
    onKeydown(e) {
      if (!this.lightboxItem) return;
      if (e.key === "Escape") this.closeLightbox();
      if (e.key === "ArrowLeft") this.prevSlide();
      if (e.key === "ArrowRight") this.nextSlide();
    },
  },
  mounted() {
    window.addEventListener("keydown", this.onKeydown);
  },
  beforeUnmount() {
    window.removeEventListener("keydown", this.onKeydown);
    document.body.style.overflow = "";
  },
};
</script>
