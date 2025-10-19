import { Injectable } from '@angular/core';

import { Store } from '#common/abstract';
import { Path } from '#common/enum';

@Injectable({ providedIn: 'root' })
export class BreadcrumbsService extends Store<{ breadcrumbs: Path[] }> {
  constructor() {
    super({ breadcrumbs: [] });

    // inject(Router)
    //   .events.pipe(
    //     filter((e): e is NavigationEnd => e instanceof NavigationEnd),
    //     tap(({ url }) => {
    //       // console.log(url);
    //     })
    //   )
    //   .subscribe();
  }

  // private setBreadcrumbs(breadcrumb: Path) {
  //   //
  // }
}
