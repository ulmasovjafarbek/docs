import 'Frontend/demo/init'; // hidden-source-line
import { css, html, LitElement } from 'lit';
import { customElement, state } from 'lit/decorators.js';
import { applyTheme } from 'Frontend/generated/theme';
import '@vaadin/vaadin-ordered-layout/vaadin-vertical-layout';
import '@vaadin/vaadin-radio-button/vaadin-radio-group';
import '@vaadin/vaadin-item';
import { RadioGroupValueChangedEvent } from '@vaadin/vaadin-radio-button/vaadin-radio-group';
import './layout-item';

@customElement('basic-layouts-margin')
export class Example extends LitElement {
  protected createRenderRoot() {
    const root = super.createRenderRoot();
    // Apply custom theme (only supported if your app uses one)
    applyTheme(root);
    return root;
  }

  static get styles() {
    return css`
      vaadin-vertical-layout,
      div.container {
        border-radius: var(--lumo-border-radius-l);
      }

      div.container {
        border: 1px solid var(--lumo-success-color);
      }

      vaadin-vertical-layout {
        align-items: stretch;
        border: 1px solid var(--lumo-primary-color);
      }
    `;
  }

  // tag::snippet[]
  @state()
  private theme!: string;

  render() {
    return html`
      <div class="container">
        <vaadin-vertical-layout theme="${this.theme} spacing padding">
          <layout-item>Item 1</layout-item>
          <layout-item>Item 2</layout-item>
          <layout-item>Item 3</layout-item>
        </vaadin-vertical-layout>
      </div>
      <vaadin-radio-group
        label="Vertical layout: margin"
        @value-changed="${(e: RadioGroupValueChangedEvent) => (this.theme = e.detail.value)}"
      >
        <vaadin-radio-button value="margin" checked>Enabled</vaadin-radio-button>
        <vaadin-radio-button value="">Disabled</vaadin-radio-button>
      </vaadin-radio-group>
    `;
  }
  // end::snippet[]
}
