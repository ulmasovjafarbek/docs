import 'Frontend/demo/init'; // hidden-source-line
import { css, html, LitElement } from 'lit';
import { customElement } from 'lit/decorators.js';
import '@vaadin/vaadin-app-layout/vaadin-app-layout';
import '@vaadin/vaadin-app-layout/vaadin-drawer-toggle';
import '@vaadin/vaadin-icons/vaadin-icons';
import '@vaadin/vaadin-tabs/vaadin-tab';
import '@vaadin/vaadin-tabs/vaadin-tabs';
import { applyTheme } from 'Frontend/generated/theme';

@customElement('app-layout-bottom-navbar')
export class Example extends LitElement {
  protected createRenderRoot() {
    const root = super.createRenderRoot();
    // Apply custom theme (only supported if your app uses one)
    applyTheme(root);
    return root;
  }

  static get styles() {
    return css`
      h1 {
        font-size: var(--lumo-font-size-l);
        margin: var(--lumo-space-m) var(--lumo-space-l);
      }

      iron-icon {
        height: var(--lumo-icon-size-s);
        margin: auto;
        width: var(--lumo-icon-size-s);
      }

      .content {
        padding: 0 var(--lumo-space-l);
      }

      vaadin-tabs {
        width: 100%;
      }

      /* hidden-source-line: the bottom navbar is forced on in the example */
      vaadin-app-layout[overlay] /* hidden-source-line */ {
        --vaadin-app-layout-touch-optimized: true; /* hidden-source-line */
      } /* hidden-source-line */
    `;
  }

  render() {
    return html`
      <!-- tag::snippet[] -->
      <vaadin-app-layout>
        <h1 slot="navbar">MyApp</h1>
        <vaadin-tabs slot="navbar touch-optimized" theme="equal-width-tabs">
          <vaadin-tab>
            <a tabindex="-1">
              <iron-icon icon="vaadin:dashboard"></iron-icon>
            </a>
          </vaadin-tab>
          <vaadin-tab>
            <a tabindex="-1">
              <iron-icon icon="vaadin:cart"></iron-icon>
            </a>
          </vaadin-tab>
          <!-- end::snippet[] -->
          <vaadin-tab>
            <a tabindex="-1">
              <iron-icon icon="vaadin:user-heart"></iron-icon>
            </a>
          </vaadin-tab>
          <vaadin-tab>
            <a tabindex="-1">
              <iron-icon icon="vaadin:package"></iron-icon>
            </a>
          </vaadin-tab>
          <!-- tag::snippet[] -->
        </vaadin-tabs>
        <div class="content">
          <h2>View title</h2>
          <p>View content</p>
        </div>
      </vaadin-app-layout>
      <!-- end::snippet[] -->
    `;
  }
}
