import { HttpErrorResponse, HttpInterceptorFn } from '@angular/common/http';
import { catchError, throwError } from 'rxjs';

export const httpErrorInterceptor: HttpInterceptorFn = (req, next) => {
  return next(req).pipe(
    catchError((error: HttpErrorResponse) => {
      let errorMsg = '';

      if (error.error instanceof ErrorEvent) {
        errorMsg = `Client Error: ${error.error.message}`;
      } else errorMsg = `Server Error Code: ${error.status}, Message: ${error.message}`;

      // eslint-disable-next-line no-console
      console.error(errorMsg);

      return throwError(() => errorMsg);
    })
  );
};
