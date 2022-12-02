import { Component, OnInit } from '@angular/core';
import { AasService } from 'src/app/services/aas.service';

@Component({
  selector: 'app-teilmodelle',
  templateUrl: './teilmodelle.component.html',
  styleUrls: ['./teilmodelle.component.scss']
})
export class TeilmodelleComponent implements OnInit {

selectedAas: string = "";
submodelList: string[] = [];

  constructor(private aasService: AasService) { }

  ngOnInit(): void {
    console.log("onInit TeilmodelleComponent"); 
    this.selectedAas = this.aasService.getSelectedAas();
    this.aasService.getSubmodels(this.selectedAas).subscribe(
      data => {
        console.log(data);
        this.submodelList = data.aaslist;
      }
    );
  }

}
