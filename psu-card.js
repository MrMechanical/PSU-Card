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
 * A HAX- and DDD-enabled web component built with Lit.
 * 
 * @element psu-card
 */
export class PSUCard extends DDDSuper(I18NMixin(LitElement)) {

  static get tag() {
    return "psu-card";
  }

  constructor() {
    super();
    // Default property values; extend these as needed
    this.title = "";
    this.label = "";
    this.image = "";
    // Localization string defaults
    this.t = { ...this.t, title: "Title" };
    this.registerLocalization({
      context: this,
      localesPath: new URL("./locales/psu-card.ar.json", import.meta.url).href + "/../",
      locales: ["ar", "es", "hi", "zh"],
    });
  }

  // Define reactive properties.
  static get properties() {
    return {
      ...super.properties,
      title: { type: String },
      label: { type: String },
      image: { type: String }
    };
  }

  // Scoped styles updated with more rounded card borders and black text.
  static get styles() {
    return [
      super.styles,
      css`
        .card {
          border: 1px solid var(--ddd-grey-300, #ccc);
          /* Updated border-radius for rounded corners */
          border-radius: var(--ddd-radius-lg, 10px);
          padding: var(--ddd-spacing-4, 10px);
          box-shadow: 0 2px 5px rgba(0,0,0,0.1);
          width: 300px;
          background-color: var(--ddd-white, #fff);
          /* Ensuring text within the card is black by default */
          color: #000;
        }
        .card-image {
          width: 100%;
          height: auto;
          /* Ensuring that the image corners match the card's rounded corners */
          border-radius: var(--ddd-radius-lg, 10px) var(--ddd-radius-lg, 10px) 0 0;
        }
        .primary-bar {
          height: 10px;
          background-color: var(--ddd-primary-7, #003087);
        }
        .card-title {
          font-size: var(--ddd-font-size-lg, 1.5em);
          margin: var(--ddd-spacing-2, 5px) 0;
          /* Override color to black */
          color: #000;
        }
        .card-label {
          font-size: var(--ddd-font-size-md, 1em);
          margin-bottom: var(--ddd-spacing-4, 10px);
          color: #000;
        }
        .card-link {
          display: inline-block;
          padding: var(--ddd-spacing-2, 5px) var(--ddd-spacing-4, 10px);
          background-color: var(--ddd-primary-7, #003087);
          /* Override link text to black, if desired */
          color: #000;
          text-decoration: none;
          border-radius: var(--ddd-radius-lg, 10px);
        }
        .card-link:hover {
          background-color: var(--ddd-primary-9, #001f5f);
        }
      `
    ];
  }
//new line

  // The Lit template renders the complete component.
  render() {
    return html`
      <div class="card" role="region" aria-label="${this.title}">
        <img src="${this.image}" alt="Campus Image" class="card-image">
        <div class="primary-bar"></div>
        <h2 class="card-title">${this.title}</h2>
        <p class="card-label">${this.label}</p>
        <a href="#" class="card-link">Learn More</a>
        <slot></slot>
      </div>
    `;
  }

  /**
   * HAX integration.
   *
   * Exposes a URL to a HAX properties JSON file so HAX can configure this component.
   */
  static get haxProperties() {
    return new URL(`./lib/${this.tag}.haxProperties.json`, import.meta.url).href;
  }
}

globalThis.customElements.define(PSUCard.tag, PSUCard);
