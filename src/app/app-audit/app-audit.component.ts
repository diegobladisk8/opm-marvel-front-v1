import { Component, ViewChild } from '@angular/core';
import { MatTable } from '@angular/material/table';
import { AppService } from './../app-services';

@Component({
  selector: 'app-app-audit',
  templateUrl: './app-audit.component.html',
  styleUrls: ['./app-audit.component.css']
})
export class AppAuditComponent {

  constructor(public appService: AppService) { }
  dataAudit = new Array<any>();
  columnas: string[] = ['path', 'fecha', 'hora'];
  
  ngOnInit(): void {
    this.appService.getData('http://localhost:8085/api/audit').subscribe(response => {
      this.dataAudit = response;
    });
  }

  @ViewChild("tabla1", {static: true}) tabla1!: MatTable<Aduditoria>;

  
}
export class Aduditoria {
  constructor(public path: string, public fecha: string, public hora: string) {
}
}