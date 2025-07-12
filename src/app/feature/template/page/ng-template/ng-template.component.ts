import { Component } from '@angular/core';

import { TemlateOutletWidgetComponent } from '#template/component/template-outlet-widget';

const imports = [TemlateOutletWidgetComponent];

@Component({
  selector: 'pg-ng-template',
  template: ` <pg-template-outlet-widget /> `,
  imports,
})
export class NgTemplateComponent {}
