import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ServiceService } from '../service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  form: FormGroup;

  constructor(private s: ServiceService, private router: Router, private fb: FormBuilder) {
    this.form = this.fb.group({
      email: ['', [Validators.required, Validators.email]], // Dodaj validaciju za email
      password: ['', Validators.required] // Dodaj validaciju za lozinku
    });
  }

  onSubmit() {
    if (this.form.valid) { // Proverite da li je forma validna pre slanja
      this.s.login(this.form.value).subscribe({
        next: (res) => {
          const email = this.form.get('email')?.value; // Preuzmi vrednost email-a iz forme
          console.log(email);
          console.log(this.form.value);
          this.router.navigate(['/dash', email]);
        },
        error: (err) => {
          console.log(err.message);
        }
      });
    }
  }
}
