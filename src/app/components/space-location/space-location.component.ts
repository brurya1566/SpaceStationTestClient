import { Component, OnInit } from '@angular/core';
import { interval, Subscription } from 'rxjs';
import { spaceLocation } from 'src/app/models/space-location';
import { HttpService } from 'src/app/services/http-service.service';
import { MatDialog } from '@angular/material/dialog';
import { AddNoteDialogComponent } from '../add-note-dialog/add-note-dialog.component';


@Component({
  selector: 'app-space-location',
  templateUrl: './space-location.component.html',
  styleUrls: ['./space-location.component.css']
})
export class SpaceLocationComponent implements OnInit {
  sub: Subscription;
  location: spaceLocation=new spaceLocation(0,0);

  constructor(private LocationService: HttpService,public dialog: MatDialog) {
    this.sub = interval(2000)
      .subscribe((val) => {
        this.LocationService.getLocation().subscribe(data => {
          if (data.message == 'success') {
            this.location = data.iss_position;
          }
        }
        )
      });
  }
res:any;
list:any;
  openDialog(): void {
    let dialogRef = this.dialog.open(AddNoteDialogComponent, {
      width: '400px',
      data: { latitude: this.location.latitude, longitude: this.location.longitude }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.res = result;
      this.LocationService.saveLocation(this.res).subscribe(res=>{
        this.list=res;
      })
    });
  }

  ngOnInit(): void {

  }

}
