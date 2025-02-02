import { Component, OnInit } from '@angular/core';
import { SearchService } from '../../service/search.service';
import { CommonModule } from '@angular/common';
import { FormsModule} from '@angular/forms'
@Component({
  selector: 'app-searchresults',
  imports: [CommonModule, FormsModule],
  templateUrl: './searchresults.component.html',
  styleUrl: './searchresults.component.scss'
})
export class SearchresultsComponent  implements OnInit {
  allResults:any=null;
  searchQuery:string='';

  constructor(private searchService:SearchService){}
  getData(){
    if(this.searchQuery){
      this.searchService.getData(this.searchQuery).subscribe((data:any)=>{
        this.allResults=data;
        console.log(this.allResults)
      },
    (error)=>{
      console.error('Error fetching search results:', error);
    })
    }


   
  }
  ngOnInit(): void {
    
  }

}
