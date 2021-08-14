import { IBarChartData } from './Bar/type';
import { IChartData } from './commonTypes';

export const randomColor = (): string => `#${((Math.random() * 0xffffff) << 0).toString(16).padStart(6, '0')}`;

export const getDataModelForBarChart = (data: IBarChartData[]) => {
    const newDataModel: any[] = [];
    const keys: string[] = Object.keys(data[0]);
    const valueKeys: string[] = Object.keys((data as any)[0][keys[1]][0]);

    data.forEach((dataItem: IBarChartData) => {
        const dataObj: any = {};

        keys.forEach((key: string, index: number) => {
            if (index === 0) dataObj[key] = (dataItem as any)[key];
            else {
                (dataItem as any)[key].forEach((valuesItem: IChartData) => {
                    dataObj[(valuesItem as any)[valueKeys[0]]] = (valuesItem as any)[valueKeys[1]];
                });
            }
        });
        newDataModel.push(dataObj);
    });

    return newDataModel;
};
