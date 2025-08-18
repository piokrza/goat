import { Component } from '@angular/core';

import { ContentDirective } from '../../../ui/directive';
import { ContentProjectionWidgetComponent } from '../../component/content-projection-widget';
import { ExampleWidgetContentComponent } from '../../component/example-widget-content';

const imports = [ContentProjectionWidgetComponent, ContentDirective, ExampleWidgetContentComponent];

@Component({
  selector: 'lib-content-projection',
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
