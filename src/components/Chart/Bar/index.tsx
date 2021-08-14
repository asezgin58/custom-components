import { FC, useEffect, useState } from 'react';
import { IBarChartProps } from './type';
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, CartesianGrid } from 'recharts';
import CustomLegend from '../utils/Legend';
import CustomTooltip from '../utils/Tooltip';
import { randomColor, getDataModelForBarChart } from '../action';
import { v4 as uuidv4 } from 'uuid';

const BarChartComponent: FC<IBarChartProps> = ({
    data,
    colors,
    tooltip = false,
    legend = false,
    tick,
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

    const tickViewValues = {
        tick: { fontSize: tick?.fontSize || 11, fill: tick?.color || '#000' },
        tickLine: tick?.line || false,
    };

    const xAxisProps: any = {
        orientation: layout === 'vertical' ? axis.yOrientation : axis.xOrientation,
        dataKey: Object.keys(newData[0])[0],
        stroke: axis.lineColor,
        axisLine: layout === 'vertical' ? axis.yLine : axis.xLine,
        unit: axis.xUnit,
        ...tickViewValues,
        type: 'category',
        angle: layout === 'vertical' ? tick?.angle?.y : tick?.angle?.x,
        tickMargin: layout === 'vertical' ? tick?.margin?.y : tick?.margin?.x,
        label: {
            ...(layout === 'vertical' ? axisData.yData : axisData.xData),
        },
    };

    const yAxisProps: any = {
        orientation: layout === 'vertical' ? axis.xOrientation : axis.yOrientation,
        stroke: axis.lineColor,
        axisLine: layout === 'vertical' ? axis.xLine : axis.yLine,
        unit: axis?.yUnit && typeof axis?.yUnit !== 'string' ? axis?.yUnit[0] : axis?.yUnit,
        ...tickViewValues,
        ...(tick?.points && { ticks: tick?.points }),
        ...(range && { domain: range }),
        type: 'number',
        angle: layout === 'vertical' ? tick?.angle?.x : tick?.angle?.y,
        tickMargin: layout === 'vertical' ? tick?.margin?.x : tick?.margin?.y,
        label: {
            ...(layout === 'vertical' ? axisData.xData : axisData.yData),
        },
    };

    const getEquivalentPointsValues = () =>
        tick?.equivalentPoints &&
        tick?.equivalentPoints?.length > 0 && {
            ...yAxisProps,
            ...(layout !== 'vertical' ? { yAxisId: uuidv4() } : { xAxisId: uuidv4() }),
            orientation: layout === 'vertical' ? 'top' : 'right',
            unit: axis?.yUnit && typeof axis?.yUnit !== 'string' ? axis?.yUnit[1] : '',
            ticks: tick?.equivalentPoints,
            domain: [tick.equivalentPoints[0], tick.equivalentPoints[tick.equivalentPoints.length - 1]],
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
                id={uuidv4()}
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
                {tick?.equivalentPoints &&
                    tick?.equivalentPoints?.length > 0 &&
                    (layout !== 'vertical' ? (
                        <YAxis {...getEquivalentPointsValues()} />
                    ) : (
                        <XAxis {...getEquivalentPointsValues()} />
                    ))}
                {tooltip && CustomTooltip('bar', tooltip, activeTooltipData, data, axis.yUnit)}
                {legend && CustomLegend(legend)}
                {renderBars()}
            </BarChart>
        </ResponsiveContainer>
    );
};

export default BarChartComponent;
