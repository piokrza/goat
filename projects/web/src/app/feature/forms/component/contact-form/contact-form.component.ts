import { TitleCasePipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject, input, OnInit, output } from '@angular/core';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { map, take, tap } from 'rxjs';

import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';

import { FirebaseApi } from '#firebase/data-access';
import { Contact, Phone } from '#forms/model';

const imports = [
  RouterLink,
  MatCardModule,
  MatIconModule,
  TitleCasePipe,
  MatInputModule,
  MatRadioModule,
  MatButtonModule,
  MatSelectModule,
  MatDividerModule,
  MatCheckboxModule,
  ReactiveFormsModule,
];

@Component({
  selector: 'echo-contact-form',
  templateUrl: './contact-form.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports,
})
export class ContactFormComponent implements OnInit {
  readonly #fb = inject(FormBuilder);
  readonly #firestoreApi = inject(FirebaseApi);

  readonly isProcessing = input(false);
  readonly view = input<'add' | 'edit'>('add');

  readonly formSubmit = output<Contact>();

  readonly contactId?: string = inject(ActivatedRoute).snapshot.params['id'];
  readonly form = this.#fb.nonNullable.group({
    id: '',
    uid: '',
    firstName: '',
    lastName: '',
    personal: false,
    dateOfBirth: null as Date | null,
    favoritesRanking: null as number | null,
    phone: this.#fb.nonNullable.group({
      phoneNumber: '',
      phoneType: '' as Phone['phoneType'],
    }),
    address: this.#fb.nonNullable.group({
      streetAddress: '',
      city: '',
      state: '',
      postalCode: '',
      addressType: '',
    }),
  });

  ngOnInit(): void {
    this.pathFormValue();
  }

  saveChanges(): void {
    if (this.form.invalid) {
      this.form.markAsDirty();
      return;
    }

    this.formSubmit.emit(this.form.value as Contact); //TODO: handle type assertion
  }

  private pathFormValue(): void {
    if (!this.contactId) return;

    this.#firestoreApi
      .collectionData$('contact')
      .pipe(
        map((contacts) => contacts.find(({ id }) => id === this.contactId)),
        tap((contact) => {
          if (contact) this.form.patchValue(contact);
        }),
        take(1)
      )
      .subscribe();
  }
}
