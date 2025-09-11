import { NgTemplateWidgetActionsService, NgTemplateWidgetStateService } from '../../service';

import { NgTemplateOutlet } from '@angular/common';
import { Component, inject, Injector, input, TemplateRef } from '@angular/core';

import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';

const imports = [MatCardModule, MatButtonModule, NgTemplateOutlet];

@Component({
  selector: 'echo-template-outlet-widget',
  template: `
    <mat-card appearance="outlined">
      <mat-card-header>
        <ng-container [ngTemplateOutlet]="headerTemplate() || defaultWidgetHeader" />

        <!--DEFAULT HEADER TEMPLATE-->
        <ng-template #defaultWidgetHeader>
          <div>Weather forecast</div>
          <div>Current weather in your</div>
        </ng-template>
      </mat-card-header>

      <mat-card-content class="mt-5">
        <ng-container
          [ngTemplateOutlet]="contentTemplate() || defaultWidgetContent"
          [ngTemplateOutletContext]="{
            $implicit: state,
          }" />

        <!--DEFAULT CONTENT TEMPLATE-->
        <ng-template #defaultWidgetContent>
          <div>{{ state.data.skyCondition === 'sunny' }}</div>
          <div>{{ state.data.temperature }}°C</div>
        </ng-template>
      </mat-card-content>

      <mat-card-actions class="gap-3 mt-4">
        <ng-container [ngTemplateOutlet]="actionsTemplate() || defaultWidgetActions" [ngTemplateOutletInjector]="injector" />

        <!--DEFAULT ACTIONS TEMPLATE-->
        <ng-template #defaultWidgetActions>
          <button mat-stroked-button (click)="actions.reload()">Reload</button>
          <button mat-stroked-button (click)="actions.copyData()">Copy info</button>
        </ng-template>
      </mat-card-actions>
    </mat-card>
  `,
  imports,
})
export class TemlateOutletWidgetComponent {
  readonly injector = inject(Injector);
  readonly state = inject(NgTemplateWidgetStateService);
  readonly actions = inject(NgTemplateWidgetActionsService);

  readonly headerTemplate = input<TemplateRef<unknown>>();
  readonly actionsTemplate = input<TemplateRef<unknown>>();
  readonly contentTemplate = input<TemplateRef<NgTemplateWidgetStateService>>();
}
