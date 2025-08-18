import { Component, OnDestroy } from '@angular/core';

@Component({
  selector: 'lib-example-widget-content',
  template: `
    <div class="border p-3 rounded-xl">
      <h2>Example widget content</h2>
      <p>Content description</p>
    </div>
  `,
})
export class ExampleWidgetContentComponent implements OnDestroy {
  ngOnDestroy(): void {
    // eslint-disable-next-line no-console
    console.log('component destroyed');
  }
}
