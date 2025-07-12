import { Component } from '@angular/core';

import { TemlateOutletWidgetComponent } from '#template/component/template-outlet-widget';
import { TemplateWidgetCustomActions } from '#template/component/template-widget-custom-actions';

const imports = [TemlateOutletWidgetComponent, TemplateWidgetCustomActions];

@Component({
  selector: 'pg-ng-template',
  template: `
    <pg-template-outlet-widget
      class="block max-w-[30rem]"
      [headerTemplate]="alternativeWidgetHeader"
      [contentTemplate]="alternativeWidgetContent"
      [actionsTemplate]="alrternativeWidgetActions" />

    <ng-template #alternativeWidgetHeader> Template passed by input </ng-template>

    <ng-template #alternativeWidgetContent let-state>
      <div>
        <span>TEMPLATE from parent level {{ state.data.temperature }}</span>
      </div>
    </ng-template>

    <ng-template #alrternativeWidgetActions>
      <pg-template-widget-custom-actions />
    </ng-template>
  `,
  imports,
})
export class NgTemplateComponent {}
