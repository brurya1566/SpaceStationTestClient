
import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { spaceLocation } from '../../models/space-location';
import { importantLocation } from '../../models/important-location';

@Component({
  selector: 'app-add-note-dialog',
  templateUrl: './add-note-dialog.component.html',
  styleUrls: ['./add-note-dialog.component.css']
})
export class AddNoteDialogComponent {
  location: spaceLocation=new spaceLocation(0,0);
  importantLocation:importantLocation=new importantLocation(new spaceLocation(0,0),"");
  note:string="";
  constructor(
    public dialogRef: MatDialogRef<AddNoteDialogComponent>,
    @Inject(MAT_DIALOG_DATA)  data: spaceLocation) {
    this.location = data;
    this.importantLocation.location=data;
  }

  onNoClick(): void {
    
    this.dialogRef.close();
  }

}