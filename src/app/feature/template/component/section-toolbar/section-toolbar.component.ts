import { Component, signal, WritableSignal } from '@angular/core';

import { MatTabsModule } from '@angular/material/tabs';

import { ContentProjectionComponent } from '#template/page/content-projection';
import { NgTemplateComponent } from '#template/page/ng-template';

const imports = [MatTabsModule, ContentProjectionComponent, NgTemplateComponent];

@Component({
  selector: 'pg-section-toolbar',
  template: `
    <mat-tab-group
      mat-align-tabs="start"
      mat-stretch-tabs="false"
      [selectedIndex]="selectedIdx()"
      (selectedIndexChange)="setSelectedIdx($event)">
      <mat-tab label="Content projection">
        <pg-content-projection class="mt-4 block" />
      </mat-tab>

      <mat-tab label="Ng-template">
        <pg-ng-template class="mt-4 block" />
      </mat-tab>
    </mat-tab-group>
  `,
  imports,
})
export class SectionToolbarComponent {
  constructor() {
    let idx: number;

    try {
      idx = JSON.parse(sessionStorage.getItem(this.#selectedIdxKey) ?? '0') as number;
    } catch (e) {
      // eslint-disable-next-line no-console
      console.error('Cannot get selected idx from session storage', e);
      idx = 0;
    }
    this.selectedIdx = signal(idx);
  }

  readonly #selectedIdxKey = 'selectedIdx';
  readonly selectedIdx: WritableSignal<number>;

  setSelectedIdx(idx: number): void {
    sessionStorage.setItem(this.#selectedIdxKey, `${idx}`);
  }
}
