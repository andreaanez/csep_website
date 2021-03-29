import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
    <section class="hero is-primary is-bold is-fullheight">
    <div class="hero-body">
    <div class="container has-text-centered">
      <p class="title">
        CSEP Alumni Project 
      </p>
      <p class="subtitle">
          In partnership with UCSB's Data Science Capstone 
      </p>
    </div>
    </div>
  </section>
  `,
  styles: [`
    .hero {
      background-image: url('/assets/img/beach.jpg') !important;
      background-size: cover;
      background-position: center center;
    }
  `
  ]
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
