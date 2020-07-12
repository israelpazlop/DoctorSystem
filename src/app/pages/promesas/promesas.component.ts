import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-promesas',
  templateUrl: './promesas.component.html',
  styleUrls: ['./promesas.component.css']
})
export class PromesasComponent implements OnInit {

  constructor() {
    

    this.countThree().then(
      () => console.log('Finish')
    ).catch(error => console.error('Error in promise',  error) );

   }

  ngOnInit(): void {
  }

  countThree(): Promise<boolean>{
    return new Promise( (resolve, reject) => {

      let count = 0;

      let interval = setInterval(() => {
        console.log(count);
        count += 1;
        if ( count === 3) {
          resolve();
          //reject('With error');
          clearInterval(interval);
        }

      }, 1000 );
    });
  }

}
