import { Component, Inject, ViewChild } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { MatTable } from '@angular/material/table';
import { AppService } from './../app-services';


@Component({
  selector: 'app-app-marver-dialog',
  templateUrl: './app-marver-dialog.component.html',
  styleUrls: ['./app-marver-dialog.component.css']
})
export class AppMarverDialogComponent {

  dataMarvelDetalle = new Array<any>();
  description:string;

  columnas: string[] = [ 'name', 'resourceURI'];
  @ViewChild("tabla1", { static: true }) tabla1!: MatTable<MarvelDetalle>;

  constructor(
    public appService: AppService, 
    private dialogRef: MatDialogRef<AppMarverDialogComponent>,
    @Inject(MAT_DIALOG_DATA) data
  ) {
    this.description = data.name;
    this.appService.getData('http://localhost:8085/api/marvel/' + data.id).subscribe(response => {
      this.dataMarvelDetalle = response.data.results[0].series.items;
      console.log(response.data.results[0].series.items);
    });

  }

  ngOnInit() {
  
  }

  save() {
  }

  close() {
    this.dialogRef.close();
  }
}
export class MarvelDetalle {
  constructor(public name: string, public resourceURI: string) {
  }
}