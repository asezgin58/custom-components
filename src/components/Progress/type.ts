export enum EnumProgressType {
    LINEAR = 'linear',
    CIRCULAR = 'circular',
}

export interface IProgressLabel {
    fontSize?: number;
    fontWeight?: number;
    color?: string;
}

export interface IProgressProps {
    type: 'linear' | 'circular';
    label?: boolean | IProgressLabel;
    value?: number;
    thickness?: number;
    barColor?: string;
    barBackgroundColor?: string;
    rounded?: boolean;
}
