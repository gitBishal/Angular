import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { FutsalViewModel } from './Viewmodel/viewmodel';
import { UserViewModel } from './Viewmodel/UserViewModel';


@Injectable({
  providedIn: 'root'
})
export class MyServiceService {

  constructor(private http: HttpClient) { }
  protected readonly myUrl: string = "https://localhost:44323/api/FutsalsApi";
  protected readonly myGroundUrl: string = "https://localhost:44323/api/GroundsApi";
  protected readonly myURLt: string = "https://localhost:44350/api/Token";
  getAllFutsal() {

    return this.http.get(this.myUrl + "/GetFu");

  }
  createFutsal(futsal:FutsalViewModel) {
    return this.http.post(this.myUrl + "/PostFutsal", futsal);
  }
  deleteFutsal(id) {
    return this.http.delete(this.myUrl + "/DeleteFutsal/" + id);
  }
  getById(id) {
    return this.http.get(this.myUrl + "/GetFutsal/" + id);
  }
  updateValue(futsal: FutsalViewModel) {
    return this.http.post(this.myUrl + "/PutFutsal", futsal);
  }
  getAllGround() {
    return this.http.get(this.myGroundUrl + "/GetGrounds");
  }
  getToken(users:UserViewModel) {
    return this.http.post(this.myURLt + "/GetToken", users);
  }
}
