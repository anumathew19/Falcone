import { Component, Input, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { SearchUnit } from 'src/app/models/search-unit';
import { StateService } from 'src/app/services/state.service';

@Component({
  selector: 'search-unit',
  templateUrl: './search-unit.component.html',
  styleUrls: ['./search-unit.component.css']
})
export class SearchUnitComponent implements OnInit {

  @Input() id;
  selectedUnitSubscription: Subscription;
  searchUnit : SearchUnit;
  constructor(private stateService: StateService) { }

  ngOnInit() {

    this.searchUnit = this.stateService.getSelectedUnitById(this.id);

    this.selectedUnitSubscription = this.stateService.selectedUnitChanged.subscribe((id) => {
      // Update the search unit component
      if(this.id != id){
        this.searchUnit = this.stateService.getSelectedUnitById(this.id);
      }
    })
  }
}
