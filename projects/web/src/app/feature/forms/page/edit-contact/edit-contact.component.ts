import { TitleCasePipe } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { tap } from 'rxjs';

import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';

import { FirebaseApi } from '#firebase/data-access';
import { Contact, Phone } from '#forms/model';
import { EditContactService } from '#forms/service';

const imports = [
  MatCardModule,
  MatIconModule,
  TitleCasePipe,
  MatInputModule,
  MatRadioModule,
  MatButtonModule,
  MatSelectModule,
  MatDividerModule,
  ReactiveFormsModule,
];

@Component({
  selector: 'echo-edit-contact',
  templateUrl: './edit-contact.component.html',
  imports,
})
export class EditContactComponent implements OnInit {
  readonly #fb = inject(FormBuilder);
  readonly #firestoreApi = inject(FirebaseApi);
  readonly #activatedRoute = inject(ActivatedRoute);
  readonly #editContactService = inject(EditContactService);

  readonly form = this.#fb.nonNullable.group({
    id: '',
    firstName: '',
    lastName: '',
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
    this.#firestoreApi
      .collectionData$<Contact>('contact')
      .pipe(
        tap((data) => {
          this.form.patchValue(data[0]);
        })
      )
      .subscribe();

    const contactId = this.#activatedRoute.snapshot.params['id'];
    if (!contactId) return;
  }

  saveChanges(): void {
    if (this.form.invalid) {
      this.form.markAsDirty();
      return;
    }

    this.#editContactService.saveChanges(this.form.getRawValue() as Partial<Contact>);
  }
}
