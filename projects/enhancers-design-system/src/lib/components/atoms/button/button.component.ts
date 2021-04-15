import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'eds-button',
  template: `
    <button class="ciao ok">Bottone</button> `,
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {
  @Input() labelColor: string;
  @Input() labelHexColor: string;

  constructor() {
  }

  ngOnInit(): void {
  }

}