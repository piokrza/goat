import { Component, OnDestroy } from '@angular/core';

@Component({
  selector: 'pg-example-widget-content',
  template: `
    <h2>Example widget content</h2>
    <p>Content description</p>
  `,
})
export class ExampleWidgetContentComponent implements OnDestroy {
  ngOnDestroy(): void {
    // eslint-disable-next-line no-console
    console.log('component destroyed');
  }
}
