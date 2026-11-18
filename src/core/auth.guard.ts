import { CanActivateFn } from "@angular/router";
import { inject } from "@angular/core";
import { AuthService } from "./auth.service";
import { Router } from "@angular/router";
    export const authGuard : CanActivateFn = (route, state) => {
    const auth = inject(AuthService);
    return auth.isLoggedIn() || inject(Router).createUrlTree(['/login']);  
}