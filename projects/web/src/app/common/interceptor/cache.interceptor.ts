import { HttpHandlerFn, HttpInterceptorFn, HttpRequest, HttpResponse } from '@angular/common/http';
import { of, tap } from 'rxjs';

const cacheDataMap = new Map<string, HttpResponse<unknown>>();

export const cacheInterceptor: HttpInterceptorFn = (req: HttpRequest<unknown>, next: HttpHandlerFn) => {
  if (req.responseType !== 'json') return next(req);

  const data = cacheDataMap.get(req.url);
  if (data) return of(data);

  return next(req).pipe(
    tap((httpEvent) => {
      // TODO: check filter operator
      if (httpEvent instanceof HttpResponse) {
        cacheDataMap.set(req.url, httpEvent);
      }
    })
  );
};
