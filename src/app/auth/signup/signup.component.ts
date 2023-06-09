import { Component } from "@angular/core";
import { NgForm } from "@angular/forms";

@Component({
    selector: "app-signup",
    templateUrl: "./signup.component.html",
    styleUrls: ["./signup.component.scss"],
})
export class SignupComponent {
    maxDate = new Date();
    // constructor(private authSrv: AuthService) {}

    ngOnInit(): void {
        this.maxDate.setFullYear(this.maxDate.getFullYear() - 18);
    }

    onSubmit(form: NgForm) {
        console.log(form.form.value);
    }
}
