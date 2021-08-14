import { IChartCommonProps, IChartData } from '../commonTypes';
import { ITooltip } from '../utils/Tooltip/type';

interface IFontProps {
    fontSize?: number;
    fontWeight?: string | number;
    color?: string;
    textShadowColor?: string;
}
export interface IInsideRate extends IFontProps {}

export interface IInfoView {
    name?: Pick<IFontProps, 'fontSize' | 'color' | 'fontWeight'>;
    value?: Pick<IFontProps, 'fontSize' | 'color' | 'fontWeight'>;
}

export interface IPartialNameView extends Pick<IFontProps, 'fontSize' | 'color' | 'fontWeight'> {}

interface IActiveShape {
    type?: 'default' | 'bold';
    infoView?: boolean | IInfoView;
    insideRate?: boolean | IInsideRate;
    eventType?: 'hover' | 'click';
    partialNameView?: boolean | IPartialNameView;
}

export interface IPieChartData extends Pick<IChartData, 'name'> {
    value: number;
    valueUI?: string;
}

export interface IPieLabel extends Pick<IFontProps, 'fontSize' | 'color' | 'fontWeight'> {
    value: string;
    offset?: number;
    position?: 'center' | 'outside';
}

export interface IActiveIndex {
    constant?: boolean;
    value: number | number[];
}

export interface IPieTooltip extends ITooltip {}

export interface IPieChartProps extends IChartCommonProps {
    data: IPieChartData[];
    paddingAngle?: number;
    insideRadius?: number;
    activeIndex?: number | number[] | IActiveIndex;
    activeShape?: IActiveShape;
    label?: string | IPieLabel;
    tooltip?: boolean | IPieTooltip;
}
