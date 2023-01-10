import { Component } from '@angular/core';
import { FormBuilder, FormControl} from '@angular/forms';
import { FloatLabelType } from '@angular/material/form-field';

@Component({
  selector: 'app-form-field-label-example',
  templateUrl: './form-field-label-example.component.html',
  styleUrls: ['./form-field-label-example.component.scss']
})
export class FormFieldLabelExampleComponent {
  hideRequiredControl = new FormControl(false);
  floatLabelControl = new FormControl('auto' as FloatLabelType);
  options = this._formBuilder.group({
    hideRequired: this.hideRequiredControl,
    floatLabel: this.floatLabelControl,
  });

  constructor(private _formBuilder: FormBuilder) {}

  getFloatLabelValue(): FloatLabelType {
    return this.floatLabelControl.value || 'auto';
  }
}
