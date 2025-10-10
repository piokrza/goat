import { Component, inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
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
  readonly #activatedRoute = inject(ActivatedRoute);

  readonly form = new FormGroup({
    firstName: new FormControl(),
    lastName: new FormControl(),
    dateOfBirth: new FormControl(),
    favoritesRanking: new FormControl(''),
    phone: new FormGroup({
      phoneNumber: new FormControl(),
      phoneType: new FormControl(),
    }),
    address: new FormGroup({
      streetAddress: new FormControl(),
      city: new FormControl(),
      state: new FormControl(),
      postalCode: new FormControl(),
      addressType: new FormControl(),
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
