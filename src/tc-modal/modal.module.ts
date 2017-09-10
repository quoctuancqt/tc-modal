import { NgModule, ModuleWithProviders } from '@angular/core';
import { ModalComponent } from './modal.component';
import { ModalService } from './modal.service';
import { CommonModule } from '@angular/common';

@NgModule({
    imports:[
        CommonModule
    ],
    declarations:[
        ModalComponent
    ],
    providers:[
        ModalService
    ],
    exports:[
        ModalComponent
    ]
})
export class ModalModule{
    static forRoot(): ModuleWithProviders {
        return {
            ngModule: ModalModule
        }
    }
}