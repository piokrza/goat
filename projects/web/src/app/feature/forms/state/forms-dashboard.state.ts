import { Injectable } from '@angular/core';

import { Store } from '#common/abstract';
import { FormsDashboardState } from '#forms/model';

@Injectable({ providedIn: 'root' })
export class FormsDashboardStore extends Store<FormsDashboardState> {
  constructor() {
    super({
      contacts: [],
      isLoading: false,
    });
  }
}
