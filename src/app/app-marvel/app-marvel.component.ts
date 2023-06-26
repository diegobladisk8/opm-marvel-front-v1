import { Component, ViewChild } from '@angular/core';
import { MatTable } from '@angular/material/table';
import { AppService } from './../app-services';
import { MatDialog, MatDialogConfig} from '@angular/material/dialog';
import { AppMarverDialogComponent } from './../app-marver-dialog/app-marver-dialog.component';

@Component({
  selector: 'app-app-marvel',
  templateUrl: './app-marvel.component.html',
  styleUrls: ['./app-marvel.component.css'],
})
export class AppMarvelComponent {

  constructor(public appService: AppService, private dialog: MatDialog) { }
  dataMarvel = new Array<any>();

  columnas: string[] = [ 'resourceURI', 'name', 'description' , 'modified'];
  @ViewChild("tabla1", {static: true}) tabla1!: MatTable<Marvel>;

  ngOnInit(): void {
    this.appService.getData('http://localhost:8085/api/marvel').subscribe(response => {
      this.dataMarvel = response.data.results;
      this.dataMarvel.forEach(item => {
        var img = item.thumbnail.path;
        var ext = item.thumbnail.extension;
        item.resourceURI = img + '.' + ext;
      });
    });
  }

  openDialog(datos: any) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.data = datos;
    this.dialog.open(AppMarverDialogComponent, dialogConfig);
  }
}

export class Marvel {
  constructor(public name: string, public description: string, public modified: string,  public resourceURI: string, ) {
  }
}
