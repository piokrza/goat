import { Component } from '@angular/core';

import { ContentProjectionWidgetComponent } from '#template/component/content-projection-widget';
import { ExampleWidgetContent } from '#template/component/example-widget-content';
import { WidgetContentDirective } from '#template/directive';

const imports = [ContentProjectionWidgetComponent, WidgetContentDirective, ExampleWidgetContent];

@Component({
  selector: 'pg-content-projection',
  template: `
    <pg-content-projection-widget class="block max-w-[30rem]">
      <ng-container ngProjectAs="[widgetTitle]">Weather Forecast</ng-container>
      <ng-container ngProjectAs="[widgetSubTitle]">Currently in Lublin, Poland</ng-container>

      <pg-example-widget-content *widgetContent />
    </pg-content-projection-widget>
  `,
  imports,
})
export class ContentProjectionComponent {}
