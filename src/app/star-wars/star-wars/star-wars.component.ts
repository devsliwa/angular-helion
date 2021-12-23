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
    this.getData(this.page, 'people');
  }

  getData(page: number, item: string) {
    this.api.getSwApiData(page,item).subscribe(response => {
      console.log(response);
      this.people = response;
    })
  }

  handlePageChange($event: any) {
    console.log($event.pageIndex);
    this.getData($event.pageIndex + 1, 'people');
  }

}
