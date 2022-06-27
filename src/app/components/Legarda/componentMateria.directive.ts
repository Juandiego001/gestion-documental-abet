import { Directive, ElementRef, ViewContainerRef } from '@angular/core';

@Directive({
    selector: '[comMateriaHost]',
})
export class ComponentMateriaDirective {
    constructor (public viewContainer: ViewContainerRef) {
    }
};