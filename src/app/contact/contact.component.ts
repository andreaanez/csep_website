import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  template: `
   <section class = "hero is-primary is-bold">
   <div class = "hero-body">
   <div class= "container">
    <h1 class="title"> Contact Us!</h1>
   </div>
   </div>


   <section class = "section">
   <div class = "container">
  


    <!-- Contact Form -->
    <form>
      <!-- name -->

      <div class="feild">
        <label class ="label"> Name</label>
        <input type ="text" name = "name" class ="input">

      </div>

      <!-- email -->

      <div class="feild">
        <label class ="label"> Email</label>
        <input type ="email" name = "email" class ="input">
      </div>

      <!-- message-->

      <div class="feild">
        <label class ="label"> Tell Us What You Think</label>
        <textarea name = "mesage" class ="textarea"></textarea>
      </div>

      <!-- submit button -->

      <button type = "submit" class = "button is-large is-warning">
        Send!
      </button>
    </form>

  `,
  styles: [
  ]
})
export class ContactComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  submitForm(){}

}
