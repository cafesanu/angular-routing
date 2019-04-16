import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Data } from '@angular/router';

@Component({
  selector: 'app-error-page',
  templateUrl: './error-page.component.html',
  styleUrls: ['./error-page.component.css'],
})
export class ErrorPageComponent implements OnInit {
  public errorMessage: string = '';

  constructor(
    private _route: ActivatedRoute,
  ) {
  }

  public ngOnInit(): void {
    this.errorMessage = String(this._route.snapshot.data.message);
    this._route.data
      .subscribe((data: Data) => {
        this.errorMessage = String(data.message);
      });
  }
}
