import { Directive, inject, TemplateRef } from '@angular/core';

@Directive({ selector: '[widgetContent]' })
export class WidgetContentDirective {
  readonly template = inject(TemplateRef);
}
