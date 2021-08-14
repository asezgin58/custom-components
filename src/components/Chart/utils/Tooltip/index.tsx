import { Tooltip } from 'recharts';
import { ChartDataTypes, ChartTooltipTypes } from '../../commonTypes';
import { ITooltip } from './type';

const CustomTooltip = <T extends ChartDataTypes, Y extends ChartTooltipTypes>(
    chartType: 'pie' | 'bar',
    tooltip: boolean | ITooltip | Y,
    activeTooltipData?: any,
    data?: T,
) => {
    const renderTooltip = (value: number, name: string, props: any, index: number) => {
        const nameJSX = (
            <div>
                <span
                    style={{
                        display: 'inline-block',
                        marginRight: '5px',
                        borderRadius: '10px',
                        width: '8px',
                        height: '8px',
                        backgroundColor: (props.color as any) || props?.payload?.fill,
                    }}></span>
                <strong
                    style={{
                        ...(chartType === 'pie' && {
                            color: (tooltip as ITooltip).labelColor || '#000',
                        }),
                    }}>
                    {name} {typeof tooltip !== 'boolean' && `${tooltip.seperator} `}
                </strong>
                {chartType === 'pie' && (
                    <div style={{ paddingLeft: 15 }}>
                        {(props?.payload?.payload as any).valueUI +
                            ` (%${(activeTooltipData?.percent * 100).toFixed(2)})` || value}
                    </div>
                )}
                {chartType === 'bar' &&
                    data &&
                    (((data as any)[activeTooltipData?.activeTooltipIndex]?.values[index] as any)?.valueUI || value)}
            </div>
        );
        const result = [nameJSX].reverse();
        return result;
    };

    return (
        <>
            <Tooltip
                cursor={{
                    fill:
                        typeof tooltip !== 'boolean' && (tooltip as any).cursorBgColor // for bar chart control
                            ? (tooltip as any).cursorBgColor // for bar chart data
                            : 'transparent',
                }}
                contentStyle={{
                    boxShadow: '0 3px 5px rgb(0 0 0 / 0.2)',
                    ...(typeof tooltip !== 'boolean'
                        ? {
                              ...(tooltip.backgroundColor && {
                                  backgroundColor: tooltip.backgroundColor,
                              }),
                              ...(tooltip.border && {
                                  border: tooltip.border,
                              }),
                              ...(tooltip.radius && {
                                  borderRadius: tooltip.radius,
                              }),
                              ...(tooltip.boxShadow && {
                                  boxShadow: tooltip.boxShadow,
                              }),
                          }
                        : {}),
                }}
                labelStyle={{
                    ...(chartType === 'bar' && {
                        color: (tooltip as ITooltip).labelColor || '#4b4f54',
                    }),
                    fontSize: (tooltip as ITooltip).fontSize || 12,
                    fontWeight: 'bold',
                }}
                itemStyle={{
                    fontSize: (tooltip as ITooltip).fontSize || 12,
                    ...(typeof tooltip !== 'boolean'
                        ? {
                              ...(tooltip.valueColor && {
                                  color: tooltip.valueColor,
                              }),
                              ...(tooltip?.fontSize && {
                                  fontSize: tooltip.fontSize,
                              }),
                          }
                        : {}),
                }}
                formatter={renderTooltip}
            />
        </>
    );
};

export default CustomTooltip;
