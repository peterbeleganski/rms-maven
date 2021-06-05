import {Component, Inject} from "@angular/core";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {CategoryModel} from "../../../models/category.model";
import {CdkDragDrop, moveItemInArray} from "@angular/cdk/drag-drop";

@Component({
  selector: 'app-reorder-categories-dialog',
  templateUrl: 'reorder-categories.component.html',
  styleUrls: ['reorder-categories.component.css']
})
export class ReorderCategoriesComponent {

  categories: CategoryModel[];

  constructor(@Inject(MAT_DIALOG_DATA) public payload: ReorderCategoriesPayload, private dialogRef: MatDialogRef<ReorderCategoriesComponent>) {
    this.categories = payload.data;
  }

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.categories, event.previousIndex, event.currentIndex);

    for (let i = 0; i < this.categories.length; i++) {
      this.categories[i].priority = i;
    }
  }

  onConfirmClick() {
    this.dialogRef.close(true);
  }
}

export class ReorderCategoriesPayload {
  data: CategoryModel[];

  constructor(data: CategoryModel[]) {
    this.data = data;
  }
}
