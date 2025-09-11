import type { DestroyRef } from '@angular/core';
import { ChangeDetectorRef, inject } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { from, mergeMap, tap } from 'rxjs';

import { ObservableDictionary, StateObject } from '../model';

export function connectState<T>(destroyRef: DestroyRef, sourceObject: ObservableDictionary<T>): StateObject<T> {
  const cdRef = inject(ChangeDetectorRef);

  const stateObject = {} as StateObject<T>;

  from(Object.keys(sourceObject) as (keyof T)[])
    .pipe(
      mergeMap((sourceKey: keyof T) => {
        const sourceValue$ = sourceObject[sourceKey];

        return sourceValue$.pipe(
          tap((sourceValue: T[keyof T]) => {
            stateObject[sourceKey] = sourceValue as StateObject<T>[keyof T];
          })
        );
      }),
      takeUntilDestroyed(destroyRef)
    )
    .subscribe(() => cdRef.markForCheck());

  return stateObject;
}
