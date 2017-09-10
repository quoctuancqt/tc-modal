import { Injectable } from '@angular/core';
import { ModalComponent } from './modal.component';

@Injectable()
export class ModalService {
  private modals: Array<ModalComponent>;

  constructor() {
    this.modals = [];
  }

  registerModal(newModal: ModalComponent): void {
    const modal = this.findModal(newModal.modalConfigs.id);

    if (modal) {
      this.modals.splice(this.modals.indexOf(modal));
    }

    this.modals.push(newModal);
  }

  open(modalId: string): void {
    const modal = this.findModal(modalId);

    if (modal) {
      modal.isOpen = true;
    }
  }

  close(modalId: string, checkBlocking = false): void {
    const modal = this.findModal(modalId);

    if (modal) {
      if (checkBlocking && modal.modalConfigs.blocking) {
        return;
      }

      modal.isOpen = false;
    }
  }

  private findModal(modalId: string): ModalComponent {
    for (const modal of this.modals) {
      if (modal.modalConfigs.id === modalId) {
        return modal;
      }
    }
    return null;
  }
}