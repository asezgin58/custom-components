import { FC, useEffect, useState } from 'react';
import { IBarChartProps } from './type';
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, CartesianGrid } from 'recharts';
import CustomLegend from '../utils/Legend';
import CustomTooltip from '../utils/Tooltip';
import { randomColor, getDataModelForBarChart } from '../action';

const BarChartComponent: FC<IBarChartProps> = ({
    data,
    colors,
    tooltip = false,
    legend = false,
    tick = { fontSize: 11, line: false, color: '#4b4f54' },
    axis = {
        xLine: true,
        yLine: true,
        lineColor: '#4b4f54',
    },
    grid = {
        lineColor: '#f3f3f3',
        horizontal: true,
        vertical: false,
        backgroundColor: 'transparent',
    },
    bar,
    range,
    layout = 'horizontal',
}: IBarChartProps) => {
    const [newData, setNewData] = useState<any[]>(getDataModelForBarChart(data));
    const [activeTooltipData, setactiveTooltipData] = useState<any>(null);

    const axisData = {
        xData: {
            value: axis.label?.xLabel,
            stroke: axis.label?.color,
            fontSize: axis.label?.fontSize,
            position: 'bottom',
        },
        yData: {
            value: axis.label?.yLabel,
            stroke: axis.label?.color,
            fontSize: axis.label?.fontSize,
            angle: -90,
            position: 'left',
        },
    };

    const xAxisProps: any = {
        dataKey: Object.keys(newData[0])[0],
        stroke: axis.lineColor,
        axisLine: layout === 'vertical' ? axis.yLine : axis.xLine,
        tick: { fontSize: tick.fontSize, fill: tick.color },
        tickLine: tick.line,
        type: 'category',
        angle: layout === 'vertical' ? tick.angle?.y : tick.angle?.x,
        tickMargin: layout === 'vertical' ? tick.margin?.y : tick.margin?.x,
        label: {
            ...(layout === 'vertical' ? axisData.yData : axisData.xData),
        },
    };

    const yAxisProps: any = {
        stroke: axis.lineColor,
        axisLine: layout === 'vertical' ? axis.xLine : axis.yLine,
        tick: { fontSize: tick.fontSize, fill: tick.color },
        tickLine: tick.line,
        ...(range && { domain: range }),
        type: 'number',
        angle: layout === 'vertical' ? tick.angle?.x : tick.angle?.y,
        tickMargin: layout === 'vertical' ? tick.margin?.x : tick.margin?.y,
        label: {
            ...(layout === 'vertical' ? axisData.xData : axisData.yData),
        },
    };

    /** 1 */
    const renderBars = () => {
        const keysArr: string[] = Object.keys(newData[0]).slice(1);
        const barArr: any[] = [];
        keysArr.forEach((item: string, index: number) => {
            barArr.push(
                <Bar
                    key={`bar-${index}`}
                    dataKey={item}
                    radius={bar?.radius || (layout === 'vertical' ? [0, 10, 10, 0] : [10, 10, 0, 0])}
                    fill={colors ? colors[index % colors.length] : randomColor()}
                    {...(bar?.label && {
                        label:
                            typeof bar?.label === 'boolean'
                                ? bar?.label
                                : {
                                      stroke: bar?.label?.color,
                                      fontSize: bar?.label?.fontSize || 8,
                                      position: bar?.label?.position,
                                  },
                    })}
                />,
            );
        });
        return barArr;
    };

    useEffect(() => setNewData(getDataModelForBarChart(data)), [data]);

    return (
        <ResponsiveContainer width='100%' height='100%'>
            <BarChart
                data={newData}
                margin={{
                    top: 40,
                    right: 20,
                    left: 20,
                    bottom: 40,
                }}
                barGap={bar?.gap}
                barSize={bar?.size || 16}
                {...(tooltip && {
                    onMouseMove: (state: any) => {
                        // For Tooltip custom valueUI
                        if (state.isTooltipActive) setactiveTooltipData(state);
                        else setactiveTooltipData(null);
                    },
                })}
                layout={layout}>
                {!!grid && (
                    <CartesianGrid
                        {...(typeof grid !== 'boolean' && {
                            vertical: grid.vertical,
                            horizontal: grid.horizontal,
                            fill: grid.backgroundColor,
                            stroke: grid.lineColor,
                            strokeDasharray: grid.strokeDashArray,
                        })}
                    />
                )}
                <XAxis {...(layout === 'horizontal' && xAxisProps)} {...(layout === 'vertical' && yAxisProps)} />
                <YAxis {...(layout === 'horizontal' && yAxisProps)} {...(layout === 'vertical' && xAxisProps)} />
                {tooltip && CustomTooltip('bar', tooltip, activeTooltipData, data)}
                {legend && CustomLegend(legend)}
                {renderBars()}
            </BarChart>
        </ResponsiveContainer>
    );
};

export default BarChartComponent;
