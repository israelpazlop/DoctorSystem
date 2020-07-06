import { Component, OnInit, Input, ViewChild, Output, EventEmitter, ElementRef } from '@angular/core';


@Component({
  selector: 'app-incrementer',
  templateUrl: './incrementer.component.html',
  styles: [
  ]
})
export class IncrementerComponent implements OnInit {

  @ViewChild('txtProgress') txtProgress: ElementRef;

  @Input() title = 'Title';
  @Input() progress: number = 50;

  @Output() outChangeValue: EventEmitter<number> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  onChanges( newValue: number){

    //let elementHtml: any = document.getElementsByName('progress')[0];

    if (newValue >= 100) {
      this.progress = 100;
    } else if (newValue <= 0) {
      this.progress = 0;
    }else{
      this.progress = newValue;
    }
    //elementHtml.value = this.progress;
    this.txtProgress.nativeElement.value = this.progress;

    this.outChangeValue.emit( this.progress );

    this.txtProgress.nativeElement.focus();

  }

  changeValue(value) {
    console.log(this.progress + value);
    if (this.progress + value >= 105) {
      return;
    }
    if (this.progress + value <= -5) {
      return;
    }

    this.progress = this.progress + value;

    this.outChangeValue.emit( this.progress );

  }
}
