export interface ILegend {
    position?: 'top' | 'bottom';
    layout?: 'vertical' | 'horizontal';
    iconSize?: number;
    fontSize?: number;
    margin?: number;
    color?: string;
    iconType?:
        | 'line'
        | 'plainline'
        | 'square'
        | 'rect'
        | 'circle'
        | 'cross'
        | 'diamond'
        | 'square'
        | 'star'
        | 'triangle'
        | 'wye';
}
