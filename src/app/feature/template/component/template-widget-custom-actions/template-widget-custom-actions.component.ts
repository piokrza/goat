import { Component, inject } from '@angular/core';

import { MatButtonModule } from '@angular/material/button';

import { TemlateOutletWidgetComponent } from '#template/component/template-outlet-widget';

const imports = [MatButtonModule];

@Component({
  selector: 'pg-template-widget-custom-actions',
  template: `
    <h1>Custom template widget actions component works!!</h1>
    <button mat-stroked-button (click)="reloadAndCopy()">Reload & Copy</button>
  `,
  imports,
})
export class TemplateWidgetCustomActions {
  templateWeatherWidget = inject(TemlateOutletWidgetComponent);

  reloadAndCopy(): void {
    this.templateWeatherWidget.actions.reload();
    this.templateWeatherWidget.actions.copyData();
  }
}
