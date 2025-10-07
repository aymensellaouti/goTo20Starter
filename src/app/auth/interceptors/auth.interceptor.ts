import { inject } from '@angular/core';
import { HttpRequest, HttpEvent, HttpHandlerFn } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';
import { HttpHeaders } from '@angular/common/http';


  export const authInterceptor = (
    request: HttpRequest<unknown>,
    next:  HttpHandlerFn
  ): Observable<HttpEvent<unknown>> => {
    const authService = inject(AuthService);
    if (authService.isAuthenticated()) {
      //Crée un nouveau Header
      // const headers = new HttpHeaders().set(
      //   'Authorization',
      //   localStorage.getItem('token') ?? ''
      // );
      //Met à jour les headers
      const cloneReq = request.clone({
        setHeaders: { Authorization: localStorage.getItem('token') ?? '' },
      });
      return next(cloneReq);
    }
    return next(request);
  }

// export const AuthInterceptorProvider = {
//   provide: HTTP_INTERCEPTORS,
//   useClass: AuthInterceptor,
//   multi: true,
// };
