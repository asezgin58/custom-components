import { IChartCommonProps, IChartData } from '../commonTypes';
import { AxisDomain } from 'recharts/types/util/types';
import { ITooltip } from '../utils/Tooltip/type';

interface IAxisLabelData {
    xLabel?: string;
    yLabel?: string;
    color?: string;
    fontSize?: number;
}

interface IAxis {
    xLine?: boolean;
    yLine?: boolean;
    label?: IAxisLabelData;
    lineColor?: string;
}

interface ITickProps {
    x?: number;
    y?: number;
}

interface ITick {
    color?: string;
    fontSize?: number;
    line?: boolean;
    angle?: ITickProps;
    margin?: ITickProps;
}

interface ICartesianGrid {
    vertical?: boolean;
    horizontal?: boolean;
    lineColor?: string;
    backgroundColor?: string;
    strokeDashArray?: string | number;
}

interface IBarLabel {
    position?: 'top' | 'bottom' | 'right' | 'left' | 'center';
    color?: string;
    fontSize?: number;
}

interface IBar {
    gap?: number;
    size?: number;
    radius?: number | [number, number, number, number];
    label?: boolean | IBarLabel;
}

export interface IBarChartData {
    name: string;
    values: IChartData[];
}

export interface IBarTooltip extends ITooltip {
    cursorBgColor?: string;
}

export interface IBarChartProps extends IChartCommonProps {
    data: any[];
    tick?: ITick;
    axis?: IAxis;
    grid?: boolean | ICartesianGrid;
    bar?: IBar;
    range?: AxisDomain;
    layout?: 'horizontal' | 'vertical';
    tooltip?: boolean | IBarTooltip;
}
