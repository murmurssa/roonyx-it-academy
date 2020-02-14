import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { GithubService } from '../../services';
import { User } from '../../interfaces';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  searchForm: FormGroup;
  users: User[] = [];
  error: any;

  constructor(private github: GithubService, private fb: FormBuilder) { }

  ngOnInit() {
    this.initForm();
  }

  searchUser(): void {
    this.error = false;
    this.users = null;
    this.github.getUsers(this.github.getUserNames(this.searchForm.controls.searchInput.value))
      .subscribe(
        users => this.users = users,
        error => {
          this.error = error.message;
          console.log(error);
        }
      );
  }

  private initForm(): void {
    this.searchForm = this.fb.group({
      searchInput: [[''], [
        Validators.required,
        Validators.pattern(/[A-z0-9,]/)
      ]
      ]
    });
  }
}
