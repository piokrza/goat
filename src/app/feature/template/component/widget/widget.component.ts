import { NgTemplateOutlet } from '@angular/common';
import { Component, contentChild, signal } from '@angular/core';

import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';

import { WidgetContentDirective } from '#template/directive';

const imports = [MatCardModule, MatButtonModule, NgTemplateOutlet];

@Component({
  selector: 'pg-widget',
  template: `
    <mat-card appearance="outlined">
      <mat-card-header>
        <div class="w-full flex justify-between">
          <div>
            <mat-card-title>
              <ng-content select="[widgetTitle]">No title provided</ng-content>
            </mat-card-title>
            <mat-card-subtitle>
              <ng-content select="[widgetSubTitle]">No subTitle provided</ng-content>
            </mat-card-subtitle>
          </div>
        </div>
      </mat-card-header>

      <mat-card-content class="mt-5">
        @if (isVisible()) {
          <ng-container [ngTemplateOutlet]="content()?.template || noContent" />
        }

        <ng-template #noContent>
          <p>No content provided...</p>
        </ng-template>

        <button mat-flat-button class="mt-8" (click)="isVisible.set(!isVisible())">Toggle/Collapse Content</button>
      </mat-card-content>
    </mat-card>
  `,
  imports,
})
export class WidgetComponent {
  readonly isVisible = signal(true);

  readonly content = contentChild(WidgetContentDirective);
}
