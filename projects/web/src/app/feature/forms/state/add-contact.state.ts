import { Injectable } from '@angular/core';

import { Store } from '#common/abstract';

@Injectable({ providedIn: 'root' })
export class AddContactStore extends Store<{ isProcessing: boolean }> {
  constructor() {
    super({
      isProcessing: false,
    });
  }
}
