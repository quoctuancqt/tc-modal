import { Component, OnInit } from '@angular/core';
import { ModalService } from '../tc-modal/modal.service';
import { ModalSettings } from '../tc-modal/modal.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  ngOnInit(): void {
    this.modalSettings.submitCallback = this.callback;
  }
  title = 'app';
  modalSettings: ModalSettings = new ModalSettings("demo", "This is my demo", true, true, "Ok");

  constructor(private modalService: ModalService) { }

  showModal() {
    this.modalService.open(this.modalSettings.id);
  }

  callback() {
    console.log("callback");
  }
}
