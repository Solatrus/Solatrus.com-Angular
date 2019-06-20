import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { slideAnimations } from './animations';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ],
  animations: [slideAnimations]
})
export class AppComponent  {
  name = 'Angular';

  prepareRoute(outlet: RouterOutlet) {
    var routeKey = outlet && outlet.activatedRouteData && outlet.activatedRouteData['routeKey'];
    return routeKey;
  }
}
