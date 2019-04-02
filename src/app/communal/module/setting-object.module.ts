import { SettingDate } from './setting-data.module';
import { SettingStyle } from './setting-style.module';

export class SettingObject {
    compIndex: number;
    name: string;
    type: string;
    data: SettingDate;
    style:SettingStyle;
}