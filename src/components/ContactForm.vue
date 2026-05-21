<template>
  <div class="contact-page">

    <!-- Page header -->
    <div class="page-header">
      <div v-reveal class="page-header-inner">
        <span class="label">Reach out</span>
        <h1>Get in Touch</h1>
        <p>Whether it's a commission, a question, or just a hello — Zané would love to hear from you.</p>
      </div>
    </div>

    <div class="contact-body">

      <!-- Form -->
      <div v-reveal class="form-col">
        <div class="form-group two-col">
          <div class="field">
            <label for="first_name">First Name</label>
            <input v-model="form.firstName" type="text" id="first_name" placeholder="Zané" />
          </div>
          <div class="field">
            <label for="last_name">Last Name</label>
            <input v-model="form.lastName" type="text" id="last_name" placeholder="van Tonder" />
          </div>
        </div>

        <div class="field">
          <label for="email">Email</label>
          <input v-model="form.email" type="email" id="email" placeholder="you@example.com" />
        </div>

        <div class="field">
          <label for="subject">Subject</label>
          <input v-model="form.subject" type="text" id="subject" placeholder="Commission enquiry" />
        </div>

        <div class="field">
          <label for="message">Message</label>
          <textarea v-model="form.message" id="message" rows="6" placeholder="Tell me what you have in mind…"></textarea>
        </div>

        <div class="form-actions">
          <button @click="sendEmail" class="btn-send" :disabled="sending">
            {{ sending ? "Sending…" : "Send Message" }}
          </button>
          <span v-if="sent" class="sent-msg">Message sent! Zané will be in touch soon.</span>
        </div>
      </div>

      <!-- Info panel -->
      <div v-reveal="150" class="info-col">
        <div class="info-block">
          <span class="info-label">Email</span>
          <a href="mailto:zeal.n.fire@gmail.com" class="info-value">zeal.n.fire@gmail.com</a>
        </div>

        <div class="info-block">
          <span class="info-label">Instagram</span>
          <a href="https://www.instagram.com/zeal.n.fire.studio/" target="_blank" class="info-value">@zeal.n.fire.studio</a>
        </div>

        <div class="info-block">
          <span class="info-label">Facebook</span>
          <a href="https://www.facebook.com/profile.php?id=61553973684515" target="_blank" class="info-value">Zeal &amp; Fire Studio</a>
        </div>

        <div class="info-block">
          <span class="info-label">Response time</span>
          <span class="info-value muted">Usually within 1–2 business days.</span>
        </div>

        <div class="info-note">
          <p>Commissions are open. No brief is too big or too small — feel free to share reference images, dimensions, or just a rough idea.</p>
        </div>
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

// ─── Contact body ─────────────────────────────────────────────────────────────

.contact-body {
  display: grid;
  grid-template-columns: 1fr 380px;
  gap: 5rem;
  padding: 5rem;
  align-items: start;

  @include tablet {
    grid-template-columns: 1fr;
    gap: 3rem;
    padding: 4rem 3rem;
  }

  @include mobile {
    padding: 3rem 1.5rem;
    gap: 2.5rem;
  }
}

// ─── Form ─────────────────────────────────────────────────────────────────────

.form-col {
  display: flex;
  flex-flow: column;
  gap: 1.5rem;
}

.two-col {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.5rem;

  @include mobile { grid-template-columns: 1fr; }
}

.field {
  display: flex;
  flex-flow: column;
  gap: 0.4rem;

  label {
    font-size: 0.72rem;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    color: var(--text-muted);
    font-weight: 500;
  }

  input, textarea {
    background: transparent;
    border: none;
    border-bottom: 1px solid var(--border);
    padding: 0.6rem 0;
    font-family: var(--font-sans);
    font-size: 0.95rem;
    color: var(--text);
    outline: none;
    transition: border-color 0.2s;
    resize: none;

    &::placeholder { color: var(--border); }

    &:focus { border-bottom-color: var(--accent); }
  }
}

.form-actions {
  display: flex;
  align-items: center;
  gap: 1.5rem;
  flex-wrap: wrap;
  padding-top: 0.5rem;
}

.btn-send {
  background: var(--accent);
  color: #fff;
  border: none;
  padding: 0.9rem 2.5rem;
  font-family: var(--font-sans);
  font-size: 0.72rem;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  cursor: pointer;
  transition: background 0.25s;

  &:hover { background: var(--text); }
  &:disabled { opacity: 0.5; cursor: default; }
}

.sent-msg {
  font-size: 0.85rem;
  color: var(--accent);
}

// ─── Info panel ───────────────────────────────────────────────────────────────

.info-col {
  padding-top: 0.5rem;
  display: flex;
  flex-flow: column;
  gap: 2rem;
}

.info-block {
  display: flex;
  flex-flow: column;
  gap: 0.3rem;
}

.info-label {
  font-size: 0.68rem;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: var(--text-muted);
}

.info-value {
  font-size: 0.95rem;
  color: var(--text);
  text-decoration: none;
  transition: color 0.2s;

  &:hover { color: var(--accent); }

  &.muted { color: var(--text-muted); }
}

.info-note {
  border-left: 2px solid var(--border);
  padding-left: 1.2rem;

  p {
    font-size: 0.88rem;
    color: var(--text-muted);
    line-height: 1.8;
  }
}
</style>

<script>
export default {
  name: "ContactForm",
  data() {
    return {
      form: {
        firstName: "",
        lastName: "",
        email: "",
        subject: "",
        message: "",
      },
      sending: false,
      sent: false,
    };
  },
  methods: {
    sendEmail() {
      // EmailJS or similar will be wired up here.
      // For now, open a mailto as a fallback.
      const { firstName, lastName, email, subject, message } = this.form;
      const body = `From: ${firstName} ${lastName} (${email})\n\n${message}`;
      window.open(
        `mailto:zeal.n.fire@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
      );
    },
  },
};
</script>
