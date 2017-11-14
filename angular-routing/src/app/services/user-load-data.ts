import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';

@Injectable()

export class UserLoadData implements Resolve<any> {

	resolve(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> | Promise<any> | any {
		return Observable.of([{name: 'Gaben', id: 11111}])
			.delay(10);
	}
}