export class SettingObject {
    compIndex: number;
    name: string;
    type: string;
    data: {
        url: string;  
        value: any;      
    };
    style:{
        width: number;
        height: number;
    };
}