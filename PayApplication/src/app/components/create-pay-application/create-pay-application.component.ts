import { CommonModule } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { provideNativeDateAdapter } from '@angular/material/core';
import {
  FormArray,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { customValidation } from '../../Validators/customValidation.validator';
import { ApplicationModal } from '../../models/application.modal';
import { ApiService } from '../../services/api.service';
@Component({

  selector: 'app-create-pay-application',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
  ],
  templateUrl: './create-pay-application.component.html',
  styleUrl: './create-pay-application.component.css',
  providers: [provideNativeDateAdapter()],
})
export class CreatePayApplicationComponent implements OnInit {
  reactiveForm: FormGroup;
  model: ApplicationModal;
  payApplicationService = inject(ApiService);
  ngOnInit(): void {
    this.reactiveForm = new FormGroup({
      applicationNo: new FormControl(null, [
        Validators.required,
        customValidation.alphanumericValidator,
      ]),
      applicationDate: new FormControl(null, [Validators.required]),
      periodStart: new FormControl(null, Validators.required),
      periodEnd: new FormControl(null, Validators.required),
      includeCertificate: new FormControl(null, Validators.required),
      retainage: new FormControl(null, Validators.required),
      changeOrderSummary: new FormControl(null, Validators.required),
    });
  }
  validateDateFormat(date: Date) {
    const inputDate = new Date(date);
    const day = inputDate.getDate();
    const month = inputDate.getMonth() + 1;
    const year = inputDate.getFullYear();
    return `${year}-${month}-${day}`;
  }

  onSubmit() {
    console.log(this.reactiveForm.value.applicationNo);
    if (this.reactiveForm.valid) {
      this.model = new ApplicationModal(
        this.reactiveForm.value.applicationNo,
        '9229a3af-13de-4b67-9820-fb808b21efa4',
        this.validateDateFormat(this.reactiveForm.value.periodStart),
        this.validateDateFormat(this.reactiveForm.value.periodEnd),
        this.reactiveForm.value.includeCertificate,
        this.reactiveForm.value.retainage,
        this.reactiveForm.value.changeOrderSummary,
        this.validateDateFormat(this.reactiveForm.value.applicationDate),
      );
      console.log(this.model);
      // this.payApplicationService.post(this.model).subscribe((res) => {
      //   console.log(res);
      // });
    } else {
      console.log('else part');
    }
  }
}