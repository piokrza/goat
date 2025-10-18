import { ChangeDetectionStrategy, Component } from '@angular/core';

import { TemlateOutletWidgetComponent } from '#template/component/template-outlet-widget';
import { TemplateWidgetCustomActions } from '#template/component/template-widget-custom-actions';

const imports = [TemlateOutletWidgetComponent, TemplateWidgetCustomActions];

@Component({
  selector: 'echo-ng-template',
  template: `
    <!--------Component---------->
    <echo-template-outlet-widget
      class="block max-w-[30rem]"
      [headerTemplate]="alternativeWidgetHeader"
      [contentTemplate]="alternativeWidgetContent"
      [actionsTemplate]="alrternativeWidgetActions" />

    <!--------NgTemplates---------->
    <ng-template #alternativeWidgetHeader> Template passed by input </ng-template>

    <ng-template #alternativeWidgetContent let-state>
      <span>TEMPLATE from parent level {{ state.data.temperature }}degrees</span>
    </ng-template>

    <ng-template #alrternativeWidgetActions>
      <echo-template-widget-custom-actions />
    </ng-template>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports,
})
export class NgTemplateComponent {}
