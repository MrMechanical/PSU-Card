/**
 * Copyright 2025 MrMechanical
 * @license Apache-2.0, see LICENSE for full text.
 */
import { LitElement, html, css } from "lit";
import { DDDSuper } from "@haxtheweb/d-d-d/d-d-d.js";
import { I18NMixin } from "@haxtheweb/i18n-manager/lib/I18NMixin.js";
//DELETE FALLBACKS 5 cards instead of 4
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
          font-size: var(--ddd-font-size-sm, 1em);
          position: relative; /* allow absolute children */
          //border: 1px solid var(--ddd-grey-300, #ccc);
          /* Updated border-radius for rounded corners */
          border-radius: var(--ddd-radius-lg);
          //padding: var(--ddd-spacing-4, 10px);
         //box-shadow: 0 2px 5px rgba(0,0,0,0.1);
          width: 300px;
          height: 500px;
          //color: white;
          background-color: white; /* ← make card background white */
          /* Ensuring text within the card is black by default */
          //color: var(--ddd-black);
        }
        .card-image {
          display: block;
          margin: 0;
          width: 100%;
          height: 150px;
          /* Ensuring that the image corners match the card's rounded corners */
          border-radius: var(--ddd-radius-lg) var(--ddd-radius-lg) 0 0;
        }
        .primary-bar {
          height: 10px;
          background-color: var(--ddd-theme-default-nittanyNavy);
        }
        .card-title {
          margin-top: var(--ddd-spacing-4);
          font-size: var(--ddd-font-size-sm);
          margin: var(--ddd-spacing-2, 5px) 0;
          /* Override color to black */
          color: #000;
        }
        .card-label {
          font-size: var(--ddd-font-size-md, 1em);
          margin-bottom: var(--ddd-spacing-2);
          color: #000;
        }
        .card-link {
          white-space: nowrap;
          position: absolute; /* place at bottom center */
          bottom: var(--ddd-spacing-4);
          left: 50%;
          transform: translateX(-50%);
          padding: 10px 70px;
          background-color: var(--ddd-theme-default-nittanyNavy);
          color: var(--ddd-white, #fff);
          text-decoration: none;
          border-radius: var(--ddd-radius-sm);
          font-size: 10px;    /* make Explore text smaller */
        }
        .card-link:hover {
          background-color: var(--ddd-primary-9);
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
        <a href="#" class="card-link">Explore ></a>
        <slot></slot>
      </div>
    `;
  }
//new li ne

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
