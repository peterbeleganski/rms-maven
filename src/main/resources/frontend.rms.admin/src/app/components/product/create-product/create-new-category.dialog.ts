import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';
import {FormBuilder, FormGroup} from '@angular/forms';
import {CategoryService} from '../../../services/category.service';
import {CategoryModel} from '../../../models/category.model';

@Component({
  selector: 'app-create-new-category.dialog',
  templateUrl: 'create-new-category.dialog.html',
})
export class CreateNewCategoryDialogComponent {
  form: FormGroup;
  category: CategoryModel = {};

  constructor(@Inject(MAT_DIALOG_DATA) public data: string, formBuilder: FormBuilder,
              private categoryService: CategoryService) {
    this.form = formBuilder.group({
      title: []
    });
  }

  async addCategory(data: any) {
    this.category = {
      title: this.title.value
    };
    await this.categoryService.addCategory(data.restaurantId, this.category);
  }

  get title() {
    return this.form.get('title');
  }
}
