import { Component, OnInit } from '@angular/core';
import { GroundViewModel } from '../Viewmodel/groundmodel';
import { MyServiceService } from '../my-service.service';
import { FutsalViewModel } from '../Viewmodel/viewmodel';

@Component({
  selector: 'app-ground',
  templateUrl: './ground.component.html',
  styleUrls: ['./ground.component.scss']
})
export class GroundComponent implements OnInit {
  grounds: GroundViewModel[] = [];
  ground: GroundViewModel = new GroundViewModel();
  futsal: FutsalViewModel = new FutsalViewModel();

  constructor( private _context:MyServiceService) { }

  ngOnInit() {
     this.getAllGrounds();
  }
  getAllGrounds() {
    this._context.getAllGround().subscribe(data => {
      this.grounds = data as GroundViewModel[];
    })
  }
  postFutsal() {


    this._context.createFutsal(this.futsal).subscribe(response => {
      alert("Futsal Added");
    })
  }
        
      
    


}
