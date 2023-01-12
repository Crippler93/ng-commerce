import { Component, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { AuthService } from './services/auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnDestroy {
  public loggedIn = false;
  private subject = new Subject<void>();

  constructor(private authService: AuthService) {
    this.authService.logged.pipe(
      takeUntil(this.subject)
    ).subscribe(value => {
      this.loggedIn = value
    })
  }

  ngOnDestroy(): void {
    this.subject.next();
  }
}
