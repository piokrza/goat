import { Component } from '@angular/core';

import { ExampleWidgetContent } from '#template/component/example-widget-content';
import { WidgetComponent } from '#template/component/widget';
import { WidgetContentDirective } from '#template/directive';

const imports = [WidgetComponent, WidgetContentDirective, ExampleWidgetContent];

@Component({
  selector: 'pg-content-projection',
  template: `
    <pg-widget class="block max-w-[30rem]">
      <ng-container ngProjectAs="[widgetTitle]">Weather Forecast</ng-container>
      <ng-container ngProjectAs="[widgetSubTitle]">Currently in Lublin, Poland</ng-container>

      <pg-example-widget-content *widgetContent />
    </pg-widget>
  `,
  imports,
})
export class ContentProjectionComponent {}
