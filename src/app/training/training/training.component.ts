import { Component, OnInit } from "@angular/core";
// import { TrainingService } from "./training.service";
import { Subscription } from "rxjs";

@Component({
  selector: 'app-training',
  templateUrl: './training.component.html',
  styleUrls: ['./training.component.scss']
})
export class TrainingComponent implements OnInit {
   onGoingTraining = false;
    exerciseSubscription!: Subscription;
    // constructor(private trainingSrv: TrainingService) {}

    ngOnInit(): void {
        // this.exerciseSubscription = this.trainingSrv.exerciseChanged.subscribe((exercise) => {
        //     exercise ? (this.onGoingTraining = true) : (this.onGoingTraining = false);
        // });
    }
}
