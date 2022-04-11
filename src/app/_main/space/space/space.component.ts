import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Subscription } from 'rxjs/internal/Subscription';
import { SpaceCraft } from 'src/app/_models/Spacecrafts';
import { CommonService } from 'src/app/_services/common.service';

@Component({
  selector: 'app-space',
  templateUrl: './space.component.html',
  styleUrls: ['./space.component.scss'],
})
export class SpaceComponent implements OnInit {
  // @ViewChild('search') searchStr = search;
  spacecrafts!: SpaceCraft[];
  search!: '';
  filterData!: any[];
  constructor(private commonService: CommonService) {}

  ngOnInit(): void {
    this.getSpaceData();
  }

  getSpaceData() {
    this.commonService.getSpaceData().subscribe((res) => {
      this.spacecrafts = (res as any).spacecrafts;
    });
  }

  searchSpacecraft() {
    this.filterData = this.spacecrafts.filter((el) => {
      console.log(el.name.includes(this.search));
    });
    // console.log(this.filterData);
  }
}
