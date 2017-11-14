import { Injectable } from '@angular/core';
import { CanLoad, Route } from '@angular/router';
import { Observable } from 'rxjs/Observable';


@Injectable()
export class RouteCanLoad implements CanLoad {
	canLoad(route: Route): Observable<boolean>|Promise<boolean>|boolean {
		return Observable.of(true)
		// .delay(10);
	}
}