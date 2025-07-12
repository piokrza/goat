import { Directive, inject, TemplateRef } from '@angular/core';

@Directive({ selector: '[widgetContent]' })
export class ContentDirective {
  readonly template = inject(TemplateRef);
}
