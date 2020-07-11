import { Injectable, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Injectable()


export class SettingsService {
  ajustes: Ajustes = {
    temaUrl: 'assets/css/colors/purple-darl.css',
    tema: 'default'
  };
  constructor(  @Inject(DOCUMENT) private _document) {
    this.chargeSettings();
   }

  saveSettings(){
    localStorage.setItem('ajustes', JSON.stringify(this.ajustes));
  }

  chargeSettings(){
    if ( localStorage.getItem('ajustes')){
        this.ajustes = JSON.parse( localStorage.getItem('ajustes'));
        this.aplyTheme(this.ajustes.tema );
    }

  }

  aplyTheme(theme: string){
    let url = `assets/css/colors/${ theme }.css`;
    this._document.getElementById('theme').setAttribute('href', url );

    this.ajustes.tema = theme;
    this.ajustes.temaUrl = url;
    this.saveSettings();
  }
}

interface Ajustes{
  temaUrl: string;
  tema: string;
}
