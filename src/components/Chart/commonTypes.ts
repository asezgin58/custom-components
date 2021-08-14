import { ReactNode } from 'react';
import { IBarChartData, IBarTooltip } from './Bar/type';
import { IPieChartData, IPieTooltip } from './Pie/type';
import { ILegend } from './utils/Legend/type';
import { ITooltip } from './utils/Tooltip/type';

export interface IChartData {
    name: string;
    value: number;
    valueUI?: ReactNode;
}

export interface IChartCommonProps {
    colors?: string[];
    tooltip?: boolean | ITooltip;
    legend?: boolean | ILegend;
}

export type ChartDataTypes = IPieChartData[] | IBarChartData[];
export type ChartTooltipTypes = IPieTooltip | IBarTooltip;
