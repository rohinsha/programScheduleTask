import { Component, OnInit } from '@angular/core';
import { Router ,ActivatedRoute} from '@angular/router';
import { ProgramInfoService } from './../core/services/program-info.service';
@Component({
  selector: 'app-program-metadata',
  templateUrl: './program-metadata.component.html',
  styleUrls: ['./program-metadata.component.css']
})
export class ProgramMetadataComponent implements OnInit {
  
  id:number=0;
  showMetaDataObj:any={};
  showMetaData:any={};
  currentUrl:string='';
  website:string='';
  daysArr:any=[];
  episodesArr:any=[];
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
    const plazaPromise = new Promise((resolve, reject) => {
      this.programInfoService.getShowMetaDataById(this.id).subscribe((response)=>{
        if(response){
          this.showMetaData=response;
          console.log(this.showMetaData);
          console.log(this.showMetaData.genres);
          if(this.showMetaData.officialSite) {
            if(this.showMetaData.officialSite.includes('.com/')){
              this.website= this.showMetaData.officialSite.substr(0, this.showMetaData.officialSite.indexOf('.com')); 
              console.log(this.website);
              this.website=this.website+'.com';
              console.log(this.website);
            }else{
              this.website=this.showMetaData.officialSite;
            }
            
          }
        
          this.daysArr=this.showMetaData.schedule.days;
          this.episodesArr=this.showMetaData._embedded.episodes;
          localStorage.removeItem('showMetaDataObj');
          localStorage.setItem('showMetaDataObj', JSON.stringify(this.showMetaData));
          resolve();
        }
      });
     });
      return plazaPromise;
  }
}
