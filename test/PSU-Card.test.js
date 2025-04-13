import { html, fixture, expect } from '@open-wc/testing';
import "../PSU-Card.js";

describe("PSU-Card test", () => {
  let element;
  beforeEach(async () => {
    element = await fixture(html`
      <PSU-Card
        title="title"
      ></PSU-Card>
    `);
  });

  it("basic will it blend", async () => {
    expect(element).to.exist;
  });

  it("passes the a11y audit", async () => {
    await expect(element).shadowDom.to.be.accessible();
  });
});
