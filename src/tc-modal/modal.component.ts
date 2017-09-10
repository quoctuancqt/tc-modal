import { Component, OnInit, Input, Output, HostListener } from '@angular/core';
import { ModalService } from './modal.service';

@Component({
  selector: 'tc-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {
  @Input() settings: ModalSettings;

  defaultSettings: ModalSettings = new ModalSettings("ModalId", "ModalTitle");

  modalConfigs: ModalSettings;

  isOpen = false;

  constructor(private modalService: ModalService) {
  }

  ngOnInit() {
    this.modalConfigs = Object.assign(this.defaultSettings, this.settings);
    this.modalService.registerModal(this);
  }

  close(checkBlocking = false): void {
    this.modalService.close(this.modalConfigs.id, checkBlocking);
  }
}

export class ModalSettings {
  id: string;
  title?: string;
  blocking?: boolean;
  showFooter?: boolean;
  isConfirm?: boolean;
  submitButtonLable?: string;
  submitCallback?: () => void;

  constructor(id: string, title: string, showFooter?: boolean, isConfirm?: boolean, submitButtonLabel?: string, blocking?: boolean) {
    this.id = id;
    this.title = title;
    this.blocking = blocking == undefined ? true : blocking;
    this.showFooter = showFooter == undefined ? true : showFooter;
    this.submitButtonLable = submitButtonLabel == undefined ? "Submit" : submitButtonLabel;
    this.isConfirm = isConfirm == undefined ? false : isConfirm;
    this.submitCallback = null;
  }
}