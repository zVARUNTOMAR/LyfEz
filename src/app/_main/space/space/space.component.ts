import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/internal/Subscription';
import { SpaceCraft } from 'src/app/_models/spacecrafts';
import { CommonService } from 'src/app/_services/common.service';

@Component({
  selector: 'app-space',
  templateUrl: './space.component.html',
  styleUrls: ['./space.component.scss'],
})
export class SpaceComponent implements OnInit {
  spacecrafts!: SpaceCraft[];
  constructor(private commonService: CommonService) {}

  ngOnInit(): void {
    this.getSpaceData();
  }

  getSpaceData() {
    this.commonService.getSpaceData().subscribe((res) => {
      this.spacecrafts = (res as any).spacecrafts;
    });
  }
}
