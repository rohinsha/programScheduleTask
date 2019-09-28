import { Component, OnInit } from '@angular/core';
import { Router ,ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-crew',
  templateUrl: './crew.component.html',
  styleUrls: ['./crew.component.css']
})
export class CrewComponent implements OnInit {

  id:number=0;
  showMetaData:any={};
  constructor(private router:Router,
    private route: ActivatedRoute) { }
  
  ngOnInit() {
    console.log(this.route.snapshot.params.id);
    this.id=this.route.snapshot.params.id;
    this.getEpisodes();
  }
  getEpisodes(){
    this.showMetaData = JSON.parse(localStorage.getItem('showMetaDataObj'));
    console.log(this.showMetaData);
  }

}


