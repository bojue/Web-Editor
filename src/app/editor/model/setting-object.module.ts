import { SettingEvents } from './setting-events.model';
import { SettingDate } from './setting-data.model';
import { SettingStyle } from './setting-style.model';
import { SettingEvent } from './setting-event.model';

export class SettingObject {
    compIndex: number;
    name: string;
    type: string;
    data: SettingDate;
    style:SettingStyle;
    event?: SettingEvent;
    events?:SettingEvents;
}