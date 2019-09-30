import { Component, OnInit } from '@angular/core';
import { ProgramInfoService } from './../core/services/program-info.service';
import { DataViewModule } from 'primeng/dataview';
import { PanelModule } from 'primeng/panel';
import { Router } from '@angular/router';
@Component({
  selector: 'app-program-list',
  templateUrl: './program-list.component.html',
  styleUrls: ['./program-list.component.css']
})
export class ProgramListComponent implements OnInit {
  programResp:any;
  programsArr:any;
  programRespArr:any;
  showsArr:any;
  totalItems:number=0;
  pageNumber:any;
  constructor(
   private programInfoService: ProgramInfoService,
   private router: Router) { }

  ngOnInit() {
   
    this.programInfoService.getProgramList().subscribe((response)=>{
      this.programResp=response;
      var uniq = {};
      this.showsArr = this.programResp.filter(obj => !uniq[obj.show.id] && (uniq[obj.show.id] = true));
      this.totalItems=this.showsArr.length;
      if(this.showsArr.length>0){
        this.showsArr.forEach((element)=>{
          element.show.image.medium=element.show.image.medium.replace('http','https');
        });
      }
    });
  }
  loadData(event) {
    console.log('first');
    console.log(this.programsArr);
    setTimeout(() => {
      if(this.showsArr.length>0){
        this.programsArr = this.showsArr.slice(event.first, (event.first + event.rows));
        //console.log(this.programsArr);
        event.first = 0;
        event.rows = 12;
      }
    }, 250);
  }

  getShowInfo(event, showId){
    localStorage.removeItem('showMetaDataObj');
    this.router.navigate(['/show-info', showId]);
  }
}



