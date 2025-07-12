/* eslint-disable no-console */

import { inject, Injectable } from '@angular/core';

import { NgTemplateWidgetStateService } from '#template/service';

@Injectable({ providedIn: 'root' })
export class NgTemplateWidgetActionsService {
  state = inject(NgTemplateWidgetStateService);

  reload(): void {
    this.state.lastUpdateAt = new Date();
    console.log('Reloads widget data...');
  }

  copyData(): void {
    console.log('Copy widget data into clipboard...');
  }
}
