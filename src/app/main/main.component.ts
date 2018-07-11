import {Component, OnInit} from '@angular/core';
import {User} from '../shared/user.model';
import {UserService} from '../shared/user.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  userData: User[];
  name: string;
  isError = false;
  noData = false;
  count: number;
  countMessage: string;
  errorMessage: string;
  noDataMessage: string;

  constructor(private userService: UserService) {
  }

  ngOnInit() {
  }

  getUsers() {
    this.userService.getUser(this.name).subscribe((data) => {
        this.userData = data;

        if (this.userData.length > 0) {
          this.count = data.length;
          this.isError = false;
          this.noData = false;
          this.countMessage = 'You have retrieved a total of ' + this.count + ' records';
        }
        if (this.userData.length === 0) {
          this.isError = false;
          this.noData = true;
          this.countMessage = "";
          this.noDataMessage = 'There is no data for the name you entered.'
        }
      }, (error) => {
        if (error) {
          this.userData = [];
          this.isError = true;
          this.noData = false;
          this.countMessage = "";
          this.errorMessage = 'There has been an error with your request.  Please try again.  ' +
            'If the issue persists, please contact technical service for help';
        }
      }
    );
  }

}
