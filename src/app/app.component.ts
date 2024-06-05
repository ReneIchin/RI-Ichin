import { Component } from '@angular/core';
import { SessionService } from './service/session.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'RemyIchin';


  isLoggedIn: boolean = false;
  private loggedInSubscription: Subscription = new Subscription();

  constructor(private sessionService: SessionService) {}

  ngOnInit() {
    this.loggedInSubscription = this.sessionService.getLoggedInObservable().subscribe((loggedIn: boolean) => {
      this.isLoggedIn = loggedIn;
    });
  }

  ngOnDestroy() {
    this.loggedInSubscription.unsubscribe();
  }

}
