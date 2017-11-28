import { Component, Input } from '@angular/core';
import { RedisApiService } from '../../../redisAPI/redisApi.service';


@Component({
  selector: 'ngx-status-card',
  styleUrls: ['./status-card.component.scss'],
  template: `
    <nb-card (click)="on = !on" (click)="onClickDashBtn(on, pin)" [ngClass]="{'off': !on}">
      <div class="icon-container">
        <div class="icon {{ type }}">
          <ng-content></ng-content>
        </div>
      </div>

      <div class="details">
        <div class="title">{{ title }}</div>
        <div class="status">{{ on ? 'ON' : 'OFF' }}</div>
      </div>
    </nb-card>
  `,
})
export class StatusCardComponent {

  @Input() title: string;
  @Input() type: string;
  @Input() pin: string;
  @Input() on = true;
  stateBtn: boolean;
  pin: string;

  constructor(private redisApiService: RedisApiService) { }

  onClickDashBtn(value, pin) {
      this.stateBtn = value;
      this.pin = pin;
      this.redisApiService.dashBtnClick(this.stateBtn, this.pin);
  }

}
