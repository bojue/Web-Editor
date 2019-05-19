import { SettingEvents } from './setting-events.module';
import { SettingDate } from './setting-data.module';
import { SettingStyle } from './setting-style.module';
import { SettingEvent } from './setting-event.module';

export class SettingObject {
    compIndex: number;
    name: string;
    type: string;
    data: SettingDate;
    style:SettingStyle;
    event?: SettingEvent;
    events?:SettingEvents;
}