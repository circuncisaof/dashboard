import { Component } from '@angular/core';

@Component({
  selector: 'app-save-modal',
  templateUrl: './save-modal.component.html',
  styleUrls: ['./save-modal.component.css']
})
export class SaveModalComponent {
  todo:string= '';

  seeModa: boolean = false;

  toggle() {
    this.seeModa = !this.seeModa
  }

}
