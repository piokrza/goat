import { Component } from '@angular/core';

import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';

const imports = [MatCardModule, MatButtonModule, MatInputModule, MatIconModule, MatSelectModule, MatDividerModule, MatRadioModule];

@Component({
  selector: 'echo-edit-contact',
  templateUrl: './edit-contact.component.html',
  imports,
})
export class EditContactComponent {}
