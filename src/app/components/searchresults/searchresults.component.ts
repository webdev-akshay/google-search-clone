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
  searchQuery:string='coffie';
  currentPage=1;
  totalPages=5
  constructor(private searchService:SearchService){}
  getData(page:number=1){
    if(this.searchQuery){
      this.currentPage=page
      this.searchService.getData(this.searchQuery,page).subscribe((data:any)=>{
        this.allResults=data;
        console.log(this.allResults)
        this.totalPages = Math.ceil(data.search_information.total_results / 10);

      },
    (error)=>{
      console.error('Error fetching search results:', error);
    })
    }


   
  }
  ngOnInit(): void {
    
  }

}
