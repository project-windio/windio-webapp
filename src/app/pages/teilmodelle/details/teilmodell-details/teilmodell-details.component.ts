import { AfterViewInit, Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AasService } from 'src/app/services/aas.service';

@Component({
  selector: 'app-teilmodell-details',
  templateUrl: './teilmodell-details.component.html',
  styleUrls: ['./teilmodell-details.component.scss']
})
export class TeilmodellDetailsComponent implements OnInit, AfterViewInit {

  submodelName: string = "";
  submodelDetailsListRaw: any[] = [];
  submodelDetailsList: any[] = [];
  selectedAas: string = "";

  constructor(private router: Router, private activatedRoute: ActivatedRoute, private aasService: AasService) { }

  ngOnInit(): void {
   

  }

  ngAfterViewInit(){
    console.log("ngAfterViewInit TeilmodellDetailsComponent");
     //console.log("onInit TeilmodellDetailsComponent");
  this.activatedRoute.queryParams.subscribe(params => {
    //console.log(params);
    this.submodelName = params['submodel'];
    console.log("SumbmodelName: " + this.submodelName);
    this.selectedAas =  this.aasService.getSelectedAas(); 
    this.aasService.getSubmodelDetails(this.selectedAas, this.submodelName).subscribe(data => {
      console.log(data);
      this.submodelDetailsListRaw = data;
      for (let i = 0; i < this.submodelDetailsListRaw.length; i++) {
        var element = this.submodelDetailsListRaw[i];
        element["ID"] = i + 1;
        this.submodelDetailsList.push(element);
      }
    });
  });
  }

  back(){
    this.router.navigate(['../'],{relativeTo: this.activatedRoute});
  }
  
}
