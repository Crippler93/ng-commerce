import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'product-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent {
  form = this.fb.group({
    priceMin: [0],
    category: ['']
  })
  constructor(private fb: FormBuilder) {

  }
}
