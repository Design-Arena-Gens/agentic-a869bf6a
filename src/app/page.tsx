"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
import styles from "./page.module.css";

const VIRTUAL_SHOTS = [
  {
    id: 1,
    title: "Social Carousel",
    mood: "Airy daylight",
    url: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=900&q=80",
    accent: "#f06595",
  },
  {
    id: 2,
    title: "Billboard Crop",
    mood: "Runway contrast",
    url: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37c?auto=format&fit=crop&w=900&q=80",
    accent: "#6f2dbd",
  },
  {
    id: 3,
    title: "Macro Detail",
    mood: "Studio shimmer",
    url: "https://images.unsplash.com/photo-1518271345552-5d5643b48b4c?auto=format&fit=crop&w=900&q=80",
    accent: "#1f8a70",
  },
];

const FEATURES = [
  {
    headline: "Palette-lock intelligence",
    copy: "Automatically syncs manicure, wardrobe, and props so every frame sells the hero shade.",
  },
  {
    headline: "Editorial art direction",
    copy: "Curates hand poses, jewelry, and lighting to match the Aloha Nails voice without manual retouching.",
  },
  {
    headline: "Luxury set extensions",
    copy: "Swap between penthouse lounges, tropical suites, and mirror runways in one click.",
  },
  {
    headline: "Compliance baked-in",
    copy: "Always stamps the required ‘TPO FREE • HEMA FREE’ badge with color-aware placement.",
  },
];

const PRODUCTION_STATS = [
  { label: "Campaign variants", value: "9 per run" },
  { label: "Render time", value: "< 40s" },
  { label: "Palette accuracy", value: "100%" },
];

export default function Home() {
  const [style, setStyle] = useState("editorial spotlight");
  const [palette, setPalette] = useState("hibiscus coral");
  const [background, setBackground] = useState("mirrored marble lounge");
  const [finish, setFinish] = useState("gel gloss");

  const generatedPrompt = useMemo(
    () =>
      `Ultra-realistic ${style} photoshoot for Aloha Nails showing perfectly manicured hands with ${palette} polish and a couture outfit in matching hues, staged inside a ${background}, ${finish} finish, cinematic lighting, editorial crop, luxury brand atmosphere. Include safety badge reading "TPO FREE • HEMA FREE" on a color-matched circle.`,
    [style, palette, background, finish],
  );

  return (
    <main className={styles.main}>
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <span className={styles.badge}>Aloha Nails AI Photoshoot Pro</span>
          <h1>Flawless, fashion-forward nail visuals on demand.</h1>
          <p>
            Direct a couture-ready product shoot that pairs immaculate hands with
            wardrobe-coordinated looks, luxury sets, and the safety details your
            audience trusts.
          </p>
          <div className={styles.actions}>
            <a className={styles.primaryCta} href="#builder">
              Generate a collection
            </a>
            <a className={styles.secondaryCta} href="#workflow">
              View creative workflow
            </a>
          </div>
          <ul className={styles.stats}>
            {PRODUCTION_STATS.map((stat) => (
              <li key={stat.label}>
                <span>{stat.value}</span>
                <small>{stat.label}</small>
              </li>
            ))}
          </ul>
        </div>
        <div className={styles.heroShowcase}>
          <div className={styles.mockupFrame}>
            <Image
              src="https://images.unsplash.com/photo-1512496015851-a90fb38ba796?auto=format&fit=crop&w=900&q=80"
              alt="Editorial manicure close up"
              width={520}
              height={640}
              className={styles.mockupImage}
              priority
            />
            <div className={styles.safetyBadge}>TPO FREE • HEMA FREE</div>
          </div>
          <div className={styles.heroCard}>
            <h3>Palette Sync</h3>
            <p>
              Outfit tones sampled in real time to guarantee the polish shade
              matches every look.
            </p>
            <div className={styles.swatchRow}>
              {[
                "#f06595",
                "#f3c1d3",
                "#201c2b",
                "#f8a227",
              ].map((color) => (
                <span
                  key={color}
                  className={styles.swatch}
                  style={{ backgroundColor: color }}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="builder" className={styles.builder}>
        <div className={styles.builderHeader}>
          <h2>Direct the AI photoshoot</h2>
          <p>
            Choose styling cues and Aloha Nails renders a coordinated editorial
            set with matching manicures, outfits, and the signature compliance
            badge.
          </p>
        </div>
        <div className={styles.builderBody}>
          <form
            className={styles.controlPanel}
            onSubmit={(event) => event.preventDefault()}
          >
            <label>
              <span>Style &amp; lighting</span>
              <select
                value={style}
                onChange={(event) => setStyle(event.target.value)}
              >
                <option value="editorial spotlight">Editorial spotlight</option>
                <option value="runway flash">Runway flash</option>
                <option value="dusk terrace">Dusk terrace</option>
                <option value="tropical bloom">Tropical bloom</option>
              </select>
            </label>
            <label>
              <span>Signature palette</span>
              <input
                type="text"
                value={palette}
                onChange={(event) => setPalette(event.target.value)}
                placeholder="e.g. hibiscus coral"
              />
            </label>
            <label>
              <span>Set design</span>
              <select
                value={background}
                onChange={(event) => setBackground(event.target.value)}
              >
                <option value="mirrored marble lounge">
                  Mirrored marble lounge
                </option>
                <option value="sunset penthouse balcony">
                  Sunset penthouse balcony
                </option>
                <option value="tropical atelier dressing room">
                  Tropical atelier dressing room
                </option>
                <option value="studio infinity pool">
                  Studio infinity pool
                </option>
              </select>
            </label>
            <label>
              <span>Finish</span>
              <select
                value={finish}
                onChange={(event) => setFinish(event.target.value)}
              >
                <option value="gel gloss">Gel gloss</option>
                <option value="velvet matte">Velvet matte</option>
                <option value="mother-of-pearl shimmer">
                  Mother-of-pearl shimmer
                </option>
                <option value="chrome veil">Chrome veil</option>
              </select>
            </label>
            <button type="submit">Render 9 looks</button>
          </form>
          <div className={styles.promptPanel}>
            <div className={styles.promptHeader}>
              <h3>Editorial direction</h3>
              <span>AI-ready brief</span>
            </div>
            <p className={styles.promptText}>{generatedPrompt}</p>
            <div className={styles.virtualShots}>
              {VIRTUAL_SHOTS.map((shot) => (
                <article key={shot.id} className={styles.virtualShot}>
                  <div className={styles.virtualImageWrapper}>
                    <Image
                      src={shot.url}
                      alt={`${shot.title} preview`}
                      width={280}
                      height={220}
                    />
                    <div
                      className={styles.virtualBadge}
                      style={{ backgroundColor: shot.accent }}
                    >
                      TPO FREE • HEMA FREE
                    </div>
                  </div>
                  <h4>{shot.title}</h4>
                  <p>{shot.mood}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="workflow" className={styles.features}>
        <div className={styles.sectionIntro}>
          <h2>Luxury production workflow</h2>
          <p>
            Every render fuses high-fashion art direction with technical
            compliance so your social team ships campaigns without retouching.
          </p>
        </div>
        <div className={styles.featureGrid}>
          {FEATURES.map((feature) => (
            <div key={feature.headline} className={styles.featureCard}>
              <h3>{feature.headline}</h3>
              <p>{feature.copy}</p>
            </div>
          ))}
        </div>
      </section>

      <section className={styles.gallery}>
        <div className={styles.sectionIntro}>
          <h2>Gallery-ready outputs</h2>
          <p>
            Export high-resolution stills for Meta ads, TikTok carousels, and
            in-store displays—all color-matched to the featured polish.
          </p>
        </div>
        <div className={styles.galleryGrid}>
          {VIRTUAL_SHOTS.map((shot) => (
            <figure key={shot.id} className={styles.galleryItem}>
              <Image
                src={shot.url}
                alt={`${shot.title} manicure mockup`}
                width={400}
                height={500}
              />
              <figcaption>
                <div className={styles.galleryLabel}>
                  <span>{shot.title}</span>
                  <small>{shot.mood}</small>
                </div>
                <div
                  className={styles.galleryBadge}
                  style={{ backgroundColor: shot.accent }}
                >
                  TPO FREE • HEMA FREE
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      <section className={styles.footerCta}>
        <div>
          <h2>Launch the next Aloha Nails campaign.</h2>
          <p>
            Plug this AI studio into your Vercel workflow, deliver consistent
            luxury visuals, and keep compliance locked in by default.
          </p>
        </div>
        <a className={styles.primaryCta} href="#builder">
          Start generating now
        </a>
      </section>
    </main>
  );
}
