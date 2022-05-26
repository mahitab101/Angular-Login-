import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


 loginForm = new FormGroup({
   email : new FormControl(),
   password : new FormControl()
 })
  constructor( private auth :AuthService,
    private router :Router) { }

  ngOnInit(): void {
  }
  onSubmit(): void{
    console.log('login Form>>>',this.loginForm.value)
    if (this.loginForm.valid) {
      this.auth.login(this.loginForm.value).subscribe(
        (result) => {
          console.log("result>>>>",result);
          this.router.navigate(['/dashoard']);
        },
        (err: Error) => {
          alert(err.message);
        }
      );
    }
  }
}
