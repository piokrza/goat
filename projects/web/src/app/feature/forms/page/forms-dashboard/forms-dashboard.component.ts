import { ChangeDetectionStrategy, Component, DestroyRef, inject, OnInit, Signal } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { RouterLink } from '@angular/router';

import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';

import { Path } from '#common/enum';
import { Contact, FormsDashboardState } from '#forms/model';
import { FormsDashboardService } from '#forms/service';

const imports = [MatButtonModule, RouterLink, MatDividerModule, MatIconModule, RouterLink, MatTooltipModule];

@Component({
  selector: 'echo-reactive-forms',
  templateUrl: './forms-dashboard.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports,
})
export class FormsDashboardComponent implements OnInit {
  readonly #destroyRef = inject(DestroyRef);
  readonly #formsDashboardService = inject(FormsDashboardService);

  readonly state: Signal<FormsDashboardState> = this.#formsDashboardService.state;

  readonly Path = Path;

  ngOnInit(): void {
    this.#formsDashboardService.loadContacts$().pipe(takeUntilDestroyed(this.#destroyRef)).subscribe();
  }

  removeContact(contact: Contact): void {
    this.#formsDashboardService.removeContact$(contact).pipe(takeUntilDestroyed(this.#destroyRef)).subscribe();
  }
}
