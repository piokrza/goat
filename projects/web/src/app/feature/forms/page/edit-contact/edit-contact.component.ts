import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';

const imports = [
  MatCardModule,
  MatIconModule,
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
  readonly #activatedRoute = inject(ActivatedRoute);

  readonly form = this.#fb.nonNullable.group({
    firstName: '',
    lastName: '',
    dateOfBirth: null as Date | null,
    favoritesRanking: null as number | null,
    phone: this.#fb.nonNullable.group({
      phoneNumber: '',
      phoneType: '',
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
    // this.form.valueChanges.subscribe(console.log);

    const contactId = this.#activatedRoute.snapshot.params['id'];
    if (!contactId) return;
  }

  saveContact(): void {
    //
  }
}
