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
      console.log(response);
      this.programResp=response;
      var uniq = {};
      this.showsArr = this.programResp.filter(obj => !uniq[obj.show.id] && (uniq[obj.show.id] = true));
      console.log(this.showsArr);
      this.totalItems=this.showsArr.length;
      console.log(this.totalItems);
    });
  }
  loadData(event) {
    console.log(event);
    setTimeout(() => {
      if(this.showsArr.length!=0) {
        this.programsArr = this.showsArr.slice(event.first, (event.first + event.rows));
        console.log(this.programsArr);
        // this.pageNumber=event.first+12;
        // this.pageNumber= this.pageNumber.toString().replace(/0/, '');
        // console.log(this.pageNumber);
        event.first = 0;
        event.rows = 12;
      }
    }, 250);
  }

  getShowInfo(event, showId){
    console.log(event);
    console.log(showId);
    localStorage.removeItem('showMetaDataObj');
    this.router.navigate(['/show-info', showId]);
  }
}



