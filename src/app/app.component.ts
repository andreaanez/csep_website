import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <!-- header -->
    <app-header></app-header>

    <!-- Contact --> 
    <app-contact></app-contact>

    <!-- Home --> 
    <app-home></app-home>

    <!-- router outlet -->
    <router-outlet></router-outlet>
   
    <!--Footer-->
    <app-footer></app-footer>
  `,
  styles: []
})

export class AppComponent {
  title = 'csep-site';
}
