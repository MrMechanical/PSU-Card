/**
 * Copyright 2025 MrMechanical
 * @license Apache-2.0, see LICENSE for full text.
 */
import { LitElement, html, css } from "lit";
import { DDDSuper } from "@haxtheweb/d-d-d/d-d-d.js";
import { I18NMixin } from "@haxtheweb/i18n-manager/lib/I18NMixin.js";

/**
 * `psu-card`
 *
 * A PSU-Card web component that uses HAX and the DDD Design System.
 *
 * @demo index.html
 * @element psu-card
 */
export class PSUCard extends DDDSuper(I18NMixin(LitElement)) {

  static get tag() {
    return "psu-card";
  }

  constructor() {
    super();
    // Define component default property values
    this.title = "";
    this.image = "";
    this.alt = "Campus Image";
    this.link = "#";
    this.linkLabel = "Learn More";
    // Setup translation defaults and register localization support
    this.t = { ...this.t, title: "Title" };
    this.registerLocalization({
      context: this,
      localesPath:
        new URL("./locales/psu-card.ar.json", import.meta.url).href +
        "/../",
      locales: ["ar", "es", "hi", "zh"],
    });
  }

  // Lit reactive properties
  static get properties() {
    return {
      ...super.properties,
      title: { type: String },
      image: { type: String },
      alt: { type: String },
      link: { type: String },
      linkLabel: { type: String }
    };
  }

  // Scoped styles that leverage the DDD design tokens
  static get styles() {
    return [super.styles, css`
      :host {
        display: block;
        font-family: var(--ddd-font-primary, Arial, sans-serif);
        color: var(--ddd-theme-primary, #003087);
        background-color: var(--ddd-theme-accent, #fff);
      }
      .card {
        border: 1px solid var(--ddd-grey-300, #ccc);
        border-radius: var(--ddd-radius-sm, 5px);
        padding: var(--ddd-spacing-4, 10px);
        box-shadow: 0 2px 5px rgba(0,0,0,0.1);
        width: 300px;
        background-color: var(--ddd-white, #fff);
      }
      .card-image {
        width: 100%;
        height: auto;
        border-radius: var(--ddd-radius-sm, 5px) var(--ddd-radius-sm, 5px) 0 0;
      }
      .primary-bar {
        height: 10px;
        background-color: var(--ddd-primary-7, #003087);
      }
      .card-title {
        font-size: var(--ddd-font-size-lg, 1.5em);
        margin: var(--ddd-spacing-2, 5px) 0;
        color: var(--ddd-primary-7, #003087);
      }
      .card-label {
        font-size: var(--ddd-font-size-md, 1em);
        margin-bottom: var(--ddd-spacing-4, 10px);
      }
      .card-link {
        display: inline-block;
        padding: var(--ddd-spacing-2, 5px) var(--ddd-spacing-4, 10px);
        background-color: var(--ddd-primary-7, #003087);
        color: var(--ddd-white, #fff);
        text-decoration: none;
        border-radius: var(--ddd-radius-sm, 5px);
      }
      .card-link:hover {
        background-color: var(--ddd-primary-9, #001f5f);
      }
    `];
  }

  // Template rendering: Notice how we now use the Lit templating syntax,
  // dynamic properties, and include a slot for extra content.
  render() {
    return html`
      <div class="card" role="region" aria-label="${this.title}">
        <img src="${this.image}" alt="${this.alt}" class="card-image" />
        <div class="primary-bar"></div>
        <h2 class="card-title">${this.title}</h2>
        <!-- You can put more static or dynamic content inside the label area -->
        <p class="card-label"><slot></slot></p>
        <a href="${this.link}" class="card-link">${this.linkLabel}</a>
      </div>
    `;
  }

  /**
   * HAX integration
   *
   * By exposing a HAX properties file via haxProperties, the component becomes
   * available in HAX editors for easy drag-and-drop configuration.
   */
  static get haxProperties() {
    return new URL(`./lib/${this.tag}.haxProperties.json`, import.meta.url).href;
  }
}

// Register the custom element with the browser.
globalThis.customElements.define(PSUCard.tag, PSUCard);
