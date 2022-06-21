import { Component, OnInit } from '@angular/core'
import { FormControl, FormGroup, Validators } from '@angular/forms'
import { Title } from '@angular/platform-browser'
import { Router } from '@angular/router'
import { AuthService } from 'src/app/shared/services/auth.service'
import { ToastrService } from 'ngx-toastr'

@Component({
   selector: 'app-login',
   templateUrl: './login.component.html',
   styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit {
   public loginForm: FormGroup
   public loading = false

   constructor(
      private title: Title,
      private authService: AuthService,
      private router: Router,
      private toaster: ToastrService
   ) {
      this.title.setTitle('Войти в систему')

      this.loginForm = new FormGroup({
         username: new FormControl('', [
            Validators.email,
            Validators.required
         ]),
         password: new FormControl('', [
            Validators.minLength(5),
            Validators.required
         ])
      })
   }

   ngOnInit(): void {
      sessionStorage.clear()
   }

   loginFormSubmit() {
      if (this.loginForm.invalid) return
      this.authService.login(this.loginForm.value.username, this.loginForm.value.password)
   }
}
