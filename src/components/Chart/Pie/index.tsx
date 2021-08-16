import { FC, useEffect, useState } from 'react';
import { IActiveIndex, IInfoView, IInsideRate, IPartialNameView, IPieChartProps, IPieLabel } from './type';
import { randomColor } from '../action';
import { PieChart, Pie, Sector, Cell, ResponsiveContainer, Label } from 'recharts';
import CustomLegend from '../utils/Legend';
import CustomTooltip from '../utils/Tooltip';
import { v4 as uuidv4 } from 'uuid';

const PieChartComponent: FC<IPieChartProps> = ({
    data,
    paddingAngle = 0,
    colors,
    tooltip = false,
    legend = false,
    activeIndex,
    activeShape = { type: 'default', infoView: false },
    label,
    insideRadius = 0,
}: IPieChartProps) => {
    const RADIAN = Math.PI / 180;

    const [currentActiveIndex, setCurrentActiveIndex] = useState<number | number[]>();

    const [constantActiveIndex, setConstantActiveIndex] = useState<number | number[]>();

    const [activeTooltipData, setActiveTooltipData] = useState<any>(null);

    const onPieEventListener = (state: any, index: number) => {
        if (activeIndex && (activeIndex as IActiveIndex).constant) {
            if ((activeIndex as IActiveIndex)?.value) {
                if (!(constantActiveIndex as number[]).includes(index)) {
                    if (activeShape?.eventType === 'click') {
                        if ((currentActiveIndex as number[]).includes(index)) {
                            const newCurrentArr: number[] = (currentActiveIndex as number[]).filter(
                                (item: number) => item !== index,
                            );
                            setCurrentActiveIndex([...(constantActiveIndex as number[]), ...newCurrentArr]);
                        } else {
                            setCurrentActiveIndex([
                                ...(constantActiveIndex as number[]),
                                ...(typeof (activeIndex as IActiveIndex)?.value !== 'number'
                                    ? (currentActiveIndex as number[])
                                    : []),
                                index,
                            ]);
                        }
                    } else {
                        setCurrentActiveIndex([...(constantActiveIndex as number[]), index]);
                    }
                }
            }
        } else {
            if (activeShape?.eventType === 'click' && activeIndex && typeof activeIndex !== 'number') {
                if ((currentActiveIndex as number[]).includes(index)) {
                    const newCurrentArr: number[] = (currentActiveIndex as number[]).filter(
                        (item: number) => item !== index,
                    );
                    setCurrentActiveIndex(newCurrentArr);
                } else {
                    setCurrentActiveIndex([...(currentActiveIndex as number[]), index]);
                }
            } else {
                activeShape?.eventType === 'click' && currentActiveIndex === index
                    ? setCurrentActiveIndex(-1)
                    : setCurrentActiveIndex(index);
            }
        }
    };

    const onPieTooltipEvent = (state: any) => {
        if (tooltip && state) setActiveTooltipData(state);
        else setActiveTooltipData(null);
    };

    useEffect(() => {
        if (activeIndex) {
            if ((activeIndex as IActiveIndex)?.value) {
                // value type isNumber control
                if (typeof (activeIndex as IActiveIndex)?.value === 'number') {
                    // is Object and has constant prop control && isNumber = true
                    (activeIndex as IActiveIndex)?.constant &&
                        setConstantActiveIndex([(activeIndex as IActiveIndex)?.value as number]);
                    // is Object and has value prop control
                    setCurrentActiveIndex([(activeIndex as IActiveIndex)?.value as number]);
                } else {
                    // is Object and has constant prop control && isNumber = false => number[]
                    (activeIndex as IActiveIndex)?.constant &&
                        setConstantActiveIndex((activeIndex as IActiveIndex)?.value);
                    // is Object and has value prop control
                    setCurrentActiveIndex((activeIndex as IActiveIndex)?.value);
                }
            } else if (typeof activeIndex === 'number') setCurrentActiveIndex(activeIndex as any);
            else {
                setCurrentActiveIndex(activeIndex as number[]);
                setConstantActiveIndex(activeIndex as number[]);
            }
        }
    }, [activeIndex]);

    const renderActiveShape = (props: any) => {
        const { cx, cy, midAngle, innerRadius, outerRadius, startAngle, endAngle, fill, payload, percent } = props;
        const sin = Math.sin(-RADIAN * midAngle);
        const cos = Math.cos(-RADIAN * midAngle);
        const sx = cx + (outerRadius + 15) * cos;
        const sy = cy + (outerRadius + 15) * sin;
        const mx = cx + (outerRadius + 30) * cos;
        const my = cy + (outerRadius + 30) * sin;
        const ex = mx + (cos >= 0 ? 1 : -1) * 22;
        const ey = my;
        const textAnchor = cos >= 0 ? 'start' : 'end';

        /** For Inside Rate */
        const radius = innerRadius * 0.9 + (outerRadius - innerRadius) * 0.5;
        const x = cx + radius * Math.cos(-midAngle * RADIAN);
        const y = cy + radius * Math.sin(-midAngle * RADIAN);

        const nameArr: string[] = (label && (label as IPieLabel)?.position === 'center' ? '' : payload.name).split(' ');

        return (
            <g>
                {activeShape?.partialNameView &&
                    (label && (label as IPieLabel)?.position === 'center' ? '' : payload.name)
                        .split(' ')
                        .map((item: string, index: number) => (
                            <text
                                key={`title-${index}`}
                                x={cx}
                                y={cy}
                                dy={nameArr.length > 1 ? index * 15 : 5}
                                textAnchor='middle'
                                fill={(activeShape?.partialNameView as IPartialNameView).color || fill}
                                fontSize={(activeShape?.partialNameView as IPartialNameView).fontSize || 14}
                                fontWeight={(activeShape?.partialNameView as IPartialNameView).fontWeight || 'normal'}>
                                {item}
                            </text>
                        ))}

                <Sector
                    cx={activeShape?.type && activeShape?.type === 'bold' ? cx : cx + (outerRadius - 55) * cos}
                    cy={activeShape?.type && activeShape?.type === 'bold' ? cy : cy + (outerRadius - 55) * sin}
                    innerRadius={innerRadius}
                    outerRadius={outerRadius + (activeShape?.type && activeShape?.type === 'bold' ? 10 : 0)}
                    startAngle={startAngle}
                    endAngle={endAngle}
                    fill={fill}
                />
                {activeShape && activeShape.infoView && (
                    <>
                        <path d={`M${sx},${sy}L${mx},${my}L${ex},${ey}`} stroke={fill} fill='none' />
                        <circle cx={ex} cy={ey} r={2} fill={fill} stroke='none' />
                        <text
                            x={ex + (cos >= 0 ? 1 : -1) * 12}
                            y={ey}
                            textAnchor={textAnchor}
                            fill={(activeShape.infoView as IInfoView).name?.color || fill}
                            fontSize={(activeShape.infoView as IInfoView).name?.fontSize || 14}
                            fontWeight={
                                (activeShape.infoView as IInfoView).name?.fontWeight || 600
                            }>{`${payload.name}`}</text>
                        <text
                            x={ex + (cos >= 0 ? 1 : -1) * 12}
                            y={ey}
                            dy={18}
                            textAnchor={textAnchor}
                            fill={(activeShape.infoView as IInfoView).value?.color || '#999'}
                            fontSize={(activeShape.infoView as IInfoView).value?.fontSize || 14}
                            fontWeight={(activeShape.infoView as IInfoView).value?.fontWeight || 'normal'}>
                            {`${payload.valueUI ? payload.valueUI : payload.value} (%${(percent * 100).toFixed(2)})`}
                        </text>
                    </>
                )}
                {activeShape?.type && activeShape?.type === 'bold' && activeShape?.insideRate && (
                    <text
                        x={x}
                        y={y}
                        dy={6}
                        textAnchor={textAnchor}
                        fontSize={(activeShape?.insideRate as IInsideRate).fontSize || 12}
                        fontWeight={(activeShape?.insideRate as IInsideRate).fontWeight || 'normal'}
                        style={{
                            textShadow: `1px 0px 2px ${
                                (activeShape?.insideRate as IInsideRate).textShadowColor || '#fff'
                            }`,
                        }}
                        fill={(activeShape?.insideRate as IInsideRate).color || '#000'}>
                        {`%${Math.floor(percent * 100)}`}
                    </text>
                )}
            </g>
        );
    };

    const onHoverMouseLeave = (state: any, index: number) => {
        if (activeIndex && (activeIndex as IActiveIndex).constant) {
            if (!(constantActiveIndex as number[]).includes(index)) {
                const newConstArr: number[] = (constantActiveIndex as number[]).filter(
                    (item: number) => item !== index,
                );
                setCurrentActiveIndex(newConstArr);
            }
        } else setCurrentActiveIndex(-1);
    };

    return (
        <ResponsiveContainer width='100%' height='100%'>
            <PieChart id={uuidv4()} margin={{ bottom: 0, top: 0 }}>
                <Pie
                    data={data}
                    activeIndex={currentActiveIndex}
                    activeShape={renderActiveShape}
                    {...(activeShape?.eventType === 'hover' && {
                        onMouseEnter: onPieEventListener,
                        onMouseLeave: onHoverMouseLeave,
                    })}
                    {...(tooltip && { onMouseMove: onPieTooltipEvent })}
                    {...(activeShape?.eventType === 'click' && {
                        onMouseDown: onPieEventListener,
                    })}
                    cx='50%'
                    cy='50%'
                    innerRadius={insideRadius}
                    outerRadius={65}
                    fill={'#8884d8'}
                    paddingAngle={paddingAngle}
                    dataKey='value'
                    label={false}
                    labelLine={false}>
                    {data.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={colors ? colors[index % colors.length] : randomColor()} />
                    ))}
                    {label && (
                        <Label
                            position={(label as IPieLabel)?.position || 'outside'}
                            fill={(label as IPieLabel)?.color || '#4b4f54'}
                            fontSize={(label as IPieLabel)?.fontSize || 14}
                            offset={(label as IPieLabel)?.offset || 20}
                            {...((label as IPieLabel)?.position === 'center' && { width: 20 })}
                            fontWeight={(label as IPieLabel)?.fontWeight || 'bold'}>
                            {(label as IPieLabel)?.value || label}
                        </Label>
                    )}
                </Pie>
                {tooltip && CustomTooltip('pie', tooltip, activeTooltipData)}
                {legend && CustomLegend(legend)}
            </PieChart>
        </ResponsiveContainer>
    );
};

export default PieChartComponent;
