import { Component, OnInit } from '@angular/core';
import { SwHttpApiService } from 'src/app/shared/service/sw-http-api.service';

@Component({
  selector: 'app-star-wars',
  templateUrl: './star-wars.component.html',
  styleUrls: ['./star-wars.component.scss']
})
export class StarWarsComponent implements OnInit {

  people: any;
  displayedColumns =  ['name', 'birth_year', 'hair_color'];
  page: number = 1;

  constructor(public api: SwHttpApiService) { 

  }

  ngOnInit(): void {
    this.getData();
  }

  getData() {
    this.api.getSwApiData(this.page, 'people').subscribe(response => {
      console.log(response);
      this.people = response;
    })
  }

}
