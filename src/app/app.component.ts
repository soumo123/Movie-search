import { Component,OnInit} from '@angular/core';
import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  filterTerm!: string;
  ratings=[1,2,3,4,5,6,7,8,9,10]
  userRecords:any = [
    {
      id: 1,
      title: 'The Matrix',
      rating: 7.5,
      category: 'Action',
    },
    {
      id: 2,
      title: 'Focus',
      rating: 6.9,
      category: 'Comedy',
    },
    {
      id: 3,
      title: 'The Lazarus Effect',
      rating: 6.4,
      category: 'Thriller',
    },
    {
      id: 4,
      title: 'Everly',
      rating: 5.0,
      category: 'Action',
    },
    {
      id: 5,
      title: 'Maps to the Stars',
      rating: 7.5,
      category: 'Drama',
    }
  ];


  myControl = new FormControl('');
  // searchItem = new FormControl('')
  options: {id:number,title:string,rating:number,category:string}[] = this.userRecords;
  filteredOptions!: Observable<any[]>;
  toppingList:any[] = ["Any genre","Action","Comedy","Thriller","Drama"];
  ratingList:any[] = [7.9,8,6.9,5,5.9]
  newMovie: any;
  newRating: any;
  newcategorywiseMove: any;
  newCategoryWiseRating: any;
  newCategory: any;
  ngOnInit() {
    this.filteredOptions = this.myControl.valueChanges.pipe(
      map((value:any) => 
      {
        return this.options.filter((option)=>
      
        option.title.toLowerCase().includes(value)
        )
      }
     ),
    );

    
  }


  selectfunction(event:any){
   
this.userRecords.map((ele:any)=>{
  let ratings = Math.round(ele.rating)
  if(ratings==event.target.value){
    this.newMovie = ele.title
    this.newRating = ele.rating
    this.newCategory = ele.category
    
  }
})

  }


  selectcategoryfunction(event:any){
    this.userRecords.map((ele:any)=>{
      if(ele.category==event.target.value){
        this.newcategorywiseMove = ele.title
        this.newCategoryWiseRating = ele.rating
        
      }
    })
  }
  // private _filter(value: string): string[] {
  //   const filterValue = value.toLowerCase();

  //   return this.options.filter(option => option.toLowerCase().includes(filterValue));
  // }


  

}
