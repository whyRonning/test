import {Component, OnInit} from '@angular/core';
import {ProfileService} from "../services/profile.service";
import {BehaviorSubject, mergeMap, Observable, withLatestFrom} from "rxjs";
import {userCarts} from "../services/userType";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  users: Observable<string[]>;
  userCarts: Observable<userCarts[]>;
  selectedUser = new BehaviorSubject<number>(0);

  constructor(private profSev: ProfileService) {
    this.users = profSev.users
    this.userCarts = profSev.userCards
  }

  ngOnInit(): void {
    this.profSev.getUsers().subscribe()

    this.selectedUser.pipe(
      withLatestFrom(this.users),
      mergeMap((data) => {
        const [userId, users] = data;
        return this.profSev.getUserCarts(users[userId])
      })
    ).subscribe()

  }

  clickHandler(user: number) {
    this.selectedUser.next(user)
  }

}
