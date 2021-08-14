import { Legend } from 'recharts';
import { ILegend } from './type';

const CustomLegend = (legend: boolean | ILegend) => {
    const renderColorfulLegendText = (value: string, entry: any) => {
        return (
            <span
                style={{
                    color: (legend as ILegend)?.color || '#000',
                    paddingTop: 20,
                    fontSize: (legend as ILegend)?.fontSize || 14,
                }}>
                {value}
            </span>
        );
    };

    return (
        <Legend
            wrapperStyle={{
                ...(typeof legend !== 'boolean' && legend?.position === 'bottom'
                    ? { bottom: 20 - ((legend as ILegend)?.margin || 0) }
                    : typeof legend !== 'boolean' && legend?.position === 'top'
                    ? { top: 20 - ((legend as ILegend)?.margin || 0) }
                    : legend && {
                          bottom: 20 - ((legend as ILegend)?.margin || 0),
                      }),
            }}
            iconSize={(legend as ILegend)?.iconSize || 8}
            formatter={renderColorfulLegendText}
            {...(typeof legend !== 'boolean'
                ? {
                      verticalAlign: legend.position || 'bottom',
                      layout: legend.layout,
                      iconType: legend.iconType || 'circle',
                  }
                : { iconType: 'circle' })}
        />
    );
};

export default CustomLegend;
