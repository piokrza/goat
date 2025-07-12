import { Component } from '@angular/core';

import { MatTabsModule } from '@angular/material/tabs';

import { ContentProjectionComponent } from '#template/page/content-projection';
import { NgTemplateComponent } from '#template/page/ng-template';

const imports = [MatTabsModule, ContentProjectionComponent, NgTemplateComponent];

@Component({
  selector: 'pg-section-toolbar',
  template: `
    <mat-tab-group mat-stretch-tabs="false" mat-align-tabs="start">
      <mat-tab label="Content projection">
        @defer {
          <pg-content-projection />
        }
      </mat-tab>

      <mat-tab label="Ng-template">
        @defer {
          <pg-ng-template />
        }
      </mat-tab>
    </mat-tab-group>
  `,
  imports,
})
export class SectionToolbarComponent {}
