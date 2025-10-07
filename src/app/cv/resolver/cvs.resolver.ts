import {
  ActivatedRouteSnapshot,
  MaybeAsync,
  RedirectCommand,
  RouterStateSnapshot,
} from '@angular/router';
import { Cv } from '../model/cv';
import { CvService } from '../services/cv.service';
import { catchError, of } from 'rxjs';
import { ToastrService } from 'ngx-toastr';
import { inject } from '@angular/core';

export const cvsResolver = (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot
): MaybeAsync<Cv[] | RedirectCommand> => {
  const cvService = inject(CvService);
  const toastr = inject(ToastrService);
  return cvService.getCvs().pipe(
    catchError((e) => {
      toastr.error(`
              Attention!! Les données sont fictives, problème avec le serveur.
              Veuillez contacter l'admin.`);
      return of([]);
    })
  );
};
