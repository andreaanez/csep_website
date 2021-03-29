import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  template: `
  <footer class = "footer">
  <div class = "container">
    <p> Our Findings </p>
  <figure class="image 100%">
    <img src="/assets/img/frpm-graph.png">
  </figure>
  </div>
  </footer>
  `,
  styles: []
})
export class FooterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
