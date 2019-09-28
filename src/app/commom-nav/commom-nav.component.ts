import { Component, OnInit } from '@angular/core';
import { Router ,ActivatedRoute} from '@angular/router';
import { ProgramInfoService } from './../core/services/program-info.service';
@Component({
  selector: 'app-commom-nav',
  templateUrl: './commom-nav.component.html',
  styleUrls: ['./commom-nav.component.css']
})
export class CommomNavComponent implements OnInit {
  id:number=0;
  showMetaDataObj:any={};
  showMetaData:any=[];
  currentUrl:string='';
  constructor(private router:Router,
    private route: ActivatedRoute,
    private programInfoService: ProgramInfoService) { }

  ngOnInit() {
    console.log(this.route.snapshot.params.id);
    this.id=this.route.snapshot.params.id;
    this.showMetaDataObj = JSON.parse(localStorage.getItem('showMetaDataObj'));
    console.log(this.showMetaDataObj);
    if(this.showMetaDataObj){
      this.showMetaData= this.showMetaDataObj;
    
    }else{
      this.getShowMetaDataById();
      console.log('here i am');
    }
       
   
  }
  getShowMetaDataById(){
    this.programInfoService.getShowMetaDataById(this.id).subscribe((response)=>{
      if(response){
        this.showMetaData=response;
        console.log(this.showMetaData.name);
        localStorage.removeItem('showMetaDataObj');
        localStorage.setItem('showMetaDataObj', JSON.stringify(this.showMetaData));
      }
    });
  }
}
