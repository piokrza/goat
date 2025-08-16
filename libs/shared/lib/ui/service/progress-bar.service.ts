import { Store } from '../../abstract';

import { Injectable } from '@angular/core';


@Injectable({ providedIn: 'root' })
export class ProgressBarService extends Store<{ isProcessing: boolean }> {
  constructor() {
    super({ isProcessing: false });
  }
}
