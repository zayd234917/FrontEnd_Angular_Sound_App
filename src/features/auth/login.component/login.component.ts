import { Component ,inject} from '@angular/core';
import { FormBuilder ,Validators} from '@angular/forms';
import { AuthService } from '../../../core/auth.service';
import { Router } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
@Component({
  selector: 'app-login.component',
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  private fb = inject(FormBuilder);
  private authService = inject(AuthService);
  private router = inject(Router);
  error = '';
  loginForm = this.fb.nonNullable.group({
    email: ['',[Validators.required, Validators.email]],
    password: ['',[Validators.required]],
  });
  submit() {
  const {email, password} = this.loginForm.getRawValue();
  this.authService.login(email, password).subscribe({
    next: () => {
      this.router.navigate(['/home']);
    },
    error: (err) => {
      console.error(err);
      this.error = 'Invalid email or password';
    }
  });
  }
}
