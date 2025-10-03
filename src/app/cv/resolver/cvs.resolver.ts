import { ActivatedRouteSnapshot, MaybeAsync, RedirectCommand, Resolve, RouterStateSnapshot } from '@angular/router';
import { Cv } from '../model/cv';
import { CvService } from '../services/cv.service';
import { catchError, of } from 'rxjs';
import { ToastrService } from 'ngx-toastr';
import { Injectable } from '@angular/core';

@Injectable({providedIn: 'root'})
export class CvsResolver implements Resolve<Cv[]> {
  constructor(
    private cvService: CvService,
    private toastr: ToastrService
  ) {}
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): MaybeAsync<Cv[] | RedirectCommand> {
    return this.cvService.getCvs().pipe(
      catchError((e) => {
        this.toastr.error(`
              Attention!! Les données sont fictives, problème avec le serveur.
              Veuillez contacter l'admin.`);
        return of(this.cvService.getFakeCvs());
      })
    );
  }
};
