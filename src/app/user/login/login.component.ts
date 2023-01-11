import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LocalhostService } from 'src/app/services/localhost/localhost.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit{
  form: FormGroup = this.fb.group({
    email: ['', [Validators.email, Validators.required]],
    password: ['', [Validators.required]]
  })

  constructor(private fb: FormBuilder, private ls: LocalhostService, private router: Router) {}

  ngOnInit(): void {
    this.ls.logout();
  }

  submit() {
    if (this.form.valid) {
      this.ls.loginSuccess();
      this.router.navigate(['/products']);
    }
  }
}
