import { Injectable } from '@angular/core';

import { WidgetData } from '#template/model';

@Injectable({ providedIn: 'root' })
export class NgTemplateWidgetStateService {
  data: WidgetData = {
    temperature: 20,
    windSpeed: 5,
    skyCondition: 'sunny',
  };

  lastUpdateAt = new Date();
}
