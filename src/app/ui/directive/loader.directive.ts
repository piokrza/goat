import { Directive, effect, inject, input, TemplateRef, ViewContainerRef } from '@angular/core';

import { Loader } from '#ui/component/loader';

@Directive({ selector: '[isLoading]' })
export class LoaderDirective {
  constructor() {
    effect(() => {
      this.#viewContainerRef.clear();

      if (this.isLoading()) {
        this.#viewContainerRef.createComponent(Loader);
      } else {
        this.#viewContainerRef.createEmbeddedView(this.#templateRef);
      }
    });
  }

  readonly #templateRef = inject(TemplateRef);
  readonly #viewContainerRef = inject(ViewContainerRef);

  readonly isLoading = input.required<boolean>();
}
