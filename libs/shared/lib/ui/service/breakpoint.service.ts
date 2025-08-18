import { BreakpointObserver } from '@angular/cdk/layout';
import { inject, Injectable, Signal } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { map, Observable } from 'rxjs';

import { breakpoints } from '../constant';
import { Breakpoint } from '../model';

@Injectable({ providedIn: 'root' })
export class BreakpointService {
  readonly #breakpointObserver = inject(BreakpointObserver);

  observe(breakpoint: Breakpoint): Signal<boolean> {
    const obs: Observable<boolean> = this.#breakpointObserver
      .observe([`(min-width: ${breakpoints.get(breakpoint)}px)`])
      .pipe(map(({ matches }) => matches));

    return toSignal(obs, { requireSync: true });
  }
}
