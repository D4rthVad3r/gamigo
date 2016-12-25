import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AlertService, UserService } from '../_services/index';

@Injectable()
export class AuthGuard implements CanActivate {

    constructor(private router: Router, private alertService: AlertService) { }
    
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        if (localStorage.getItem('currentUser')) {
            // logged in so return true
            this.router.navigate(['/profile']);
            return true;
        }
        // not logged in so redirect to login page with the return url
        this.alertService.error('You must be logged in to view profile page', true);
        this.router.navigate(['/login'], { queryParams: { returnUrl: state.url }});
        return false;
    }
}