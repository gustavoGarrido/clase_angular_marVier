import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpResponse,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

const localStoragekeyToken= "token"

@Injectable()
export class TokenBakendInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    
    const token = localStorage.getItem(localStoragekeyToken);

    if (token) {
      request = request.clone({ headers: request.headers.set('x-token', token) });
    }

    request = request.clone({ headers: request.headers.set('Accept', 'application/json') });
    return next.handle(request).pipe(
      map((event: HttpEvent<any>) => {
          if (event instanceof HttpResponse) {
              //console.log('event--->>>', event);
          }
          return event;
      }));
  }


  private addToken(request: HttpRequest<any>, token: any) {
    if (token) {
        let clone: HttpRequest<any>;
        clone = request.clone({
            setHeaders: {
                Accept: `application/json`,
                'Content-Type': `application/json`,
                Authorization: `Bearer ${token}`
            }
        });
        return clone;
    }

    return request;
  }
}
