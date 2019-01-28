import { Component, OnInit } from '@angular/core';
import { MyServiceService } from './my-service.service';
import { FutsalViewModel } from './Viewmodel/viewmodel';
import { UserViewModel } from './Viewmodel/UserViewModel';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  futsals: FutsalViewModel[] = [];
  futsal: FutsalViewModel = new FutsalViewModel();
  users: UserViewModel = new UserViewModel();
  isCreatingData: boolean = false;
  constructor(private _context: MyServiceService) { }


  ngOnInit() {
    //this.getFutsals();
  }
  getFutsals() {

    this._context.getAllFutsal().subscribe(data => {
      this.futsals = data as FutsalViewModel[];

    })
  }
  postFutsal() {
    if (this.futsal.futsalId) {

      this._context.updateValue(this.futsal).subscribe(response => {
        alert("Data updated");
        this.getFutsals();
      });
    }
    else {
      this._context.createFutsal(this.futsal).subscribe(response => {
        alert("Futsal Added");
        this.isCreatingData = false;
        this.getFutsals();

      });
    }

  }
  createFutshal() {
    this.isCreatingData = true;
  }
  deleteFutsal(id) {
    this._context.deleteFutsal(id).subscribe(result => {
      alert("Futsal Deleted");
      this.getFutsals();
    });
  }
  editFutsal(id) {
    this._context.getById(id).subscribe(result => {
      this.futsal = result as FutsalViewModel;
    });
  }
  resetValue() {
    this.futsal = new FutsalViewModel();
  }
  Submit() {
    this._context.getToken(this.users).subscribe(response => {
      
      console.log(response)
    });

  }
}
