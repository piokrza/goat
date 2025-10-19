import { ChangeDetectionStrategy, Component, input } from '@angular/core';

@Component({
  selector: 'echo-breadcrumbs',
  template: `
    <div class="flex gap-4">
      @for (node of breadcrumbs(); track $index) {
        <div>
          {{ node }}
          @if (!$last) {
            <span>/</span>
          }
        </div>
      }
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BreadcrumbsComponent {
  readonly breadcrumbs = input([]);
}
