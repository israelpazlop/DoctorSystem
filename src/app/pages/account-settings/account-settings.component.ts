import { Component, OnInit, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { SettingsService } from '../../services/service.index';


@Component({
  selector: 'app-account-settings',
  templateUrl: './account-settings.component.html',
  styleUrls: ['./account-settings.component.css']
})
export class AccountSettingsComponent implements OnInit {

  constructor( public _ajustes: SettingsService ) { }

  ngOnInit(): void {
    this.setTickCheck();
  }

  changeColor( theme: string, link: any ){
    this.setCheckTheme( link );
    this._ajustes.aplyTheme( theme );
  }

  setCheckTheme(link: any){
    let  selectors: any = document.getElementsByClassName('selector');

    for (let ref of selectors){
      ref.classList.remove('working');
      link.classList.add('working');
    }
  }

  setTickCheck(){
    let  selectors: any = document.getElementsByClassName('selector');
    let theme = this._ajustes.ajustes.tema;
    for (let ref of selectors){
      if (ref.getAttribute('data-theme') === theme){
        ref.classList.add('working');
        break;
      }
    }
  }


}
