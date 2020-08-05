import {Injectable} from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor, HttpResponse, HttpErrorResponse
} from '@angular/common/http';
import {Observable} from 'rxjs';
import {SessionService} from './services/session.service';
import {tap} from 'rxjs/operators';

// debug
import debug from 'debug';
import {Router} from '@angular/router';
const debugLog = debug('fusion:http-interceptor');

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
  constructor(
    public session: SessionService,
    public router: Router,
  ) {
  }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    request = request.clone({
      setHeaders: {
        Authorization: `Bearer ${this.session.getToken()}`
      }
    });

    return next.handle(request).pipe(tap((event: HttpEvent<any>) => {
      if (event instanceof HttpResponse) {
        debugLog('success');
        // debugLog(event);
        const token = event.headers.get('x-token');
        // debugLog('headers', token);
        if (token !== null) {
          this.session.setToken(token);
        }
      }
    }, (event) => {
      if (event instanceof HttpErrorResponse) {
        if (event.status === 401) {
          this.router.navigate(['login']);
        }

        if (event.status === 403) {
          // forbidden
        }
      }
    }));
  }
}
