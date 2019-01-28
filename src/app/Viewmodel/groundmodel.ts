import { FutsalViewModel } from './viewmodel';

export class GroundViewModel {
  constructor(public groundId?: number, public groundName?: string, public availableHours?: string, public futsal?: FutsalViewModel) {
    this.futsal = futsal;
      
    this.groundId = groundId;
    this.groundName = groundName;
    this.availableHours = availableHours;


  }

}
