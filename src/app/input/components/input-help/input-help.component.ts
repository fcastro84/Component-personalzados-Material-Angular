import {Component, Input, forwardRef, Self, EventEmitter, Output} from '@angular/core';
import {ControlValueAccessor, NgControl,Validators} from "@angular/forms";
const tippy = require("node_modules/tippy.js/dist/tippy.cjs.js").default;

interface Attributes{
texto: string;
id: string;
label: string;
}

@Component({
  selector: 'app-input-help',
  templateUrl: './input-help.component.html',
  styleUrls: ['./input-help.component.scss'],

})
export class InputHelpComponent implements ControlValueAccessor {

  @Input() values!: Attributes;
  @Output() blur: EventEmitter<void> = new EventEmitter<void>();
  changed = (value: string) => {};
  onTouch = () => {};
  isDisabled!: boolean;

  constructor(@Self() public controlDir: NgControl){
    controlDir.valueAccessor = this;

  }

  ngOnInit(): void {
    const control = this.controlDir.control;
    let validators = control?.validator
                ? [control.validator, Validators.required]
                : Validators.required;
    control?.setValidators(validators);
  }
  writeValue(value: string): void {
      //this.value = value;
      value && this.controlDir?.control?.setValue(value, { emitEvent: false });
  }

  onChange( event: Event ): void {
    const value = (<HTMLInputElement>event.target).value;
    this.changed(value);
  }

  registerOnChange(fn: any): void {
    this.changed = fn;
  }
  registerOnTouched(fn: any): void {
    this.onTouch = fn;
  }
  setDisabledState?(isDisabled: boolean): void {
    this.isDisabled = isDisabled;
  }


  mostrar(id: string, texto: string){
    tippy(id, {
      interactive: true,
      appendTo: () => document.body,
      content: texto,
      arrow: true,
      boundary: 'scrollParent',
      allowHTML: true,
      theme: 'light-border',
      trigger: 'click',
      maxWidth: 500,
    });

  }

}
