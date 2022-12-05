import { Component, OnInit } from '@angular/core';
import { AasService } from '../../services/aas.service';

@Component({
  selector: 'app-anlage',
  templateUrl: './anlage.component.html',
  styleUrls: ['./anlage.component.scss']
})
export class AnlageComponent implements OnInit {

  listAasRaw: any;
  listAas: string[] = [];
  selectedAas: string = "";
  selectedAasIndex: number = 0;


  constructor(private aasService: AasService) { }

  ngOnInit(): void {
    this.selectedAas = this.aasService.getSelectedAas();
    this.aasService.getAas().subscribe(
      data => {
        console.log(data);
        this.listAasRaw = data.aaslist;
        for(let i = 0; i < this.listAasRaw.length; i++) {
          var name = this.listAasRaw[i].split(":")[1];
          if (name === this.selectedAas){
            this.selectedAasIndex = i;
          }
          this.listAas.push(name);
        }
      }
    );
  }

  onValueChanged(e: any){
    console.log(e.value);
    this.aasService.setAas(e.value);
  }

  log() {
    console.log(this.listAasRaw);
    console.log(this.listAas);
  }

}
