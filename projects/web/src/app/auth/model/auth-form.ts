import { FormControl } from '@angular/forms';

export interface AuthForm {
  email: FormControl<string>;
  username: FormControl<string>;
  password: FormControl<string>;
}
