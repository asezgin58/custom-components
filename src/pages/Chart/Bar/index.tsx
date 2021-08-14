import { FC } from 'react';
import { BarChart } from '../../../components';
import { IBarChartData } from '../../../components/Chart/Bar/type';

const BarChartPage: FC = () => {
    const data: IBarChartData[] = [
        {
            name: 'Page A',
            values: [
                {
                    name: 'bar1',
                    value: 3200,
                    valueUI: <div>Custom HTML : 3200 TL</div>,
                },
                { name: 'bar2', value: 2500, valueUI: '2500 TL' },
                { name: 'bar3', value: 1800, valueUI: '1800 TL' },
            ],
        },
        {
            name: 'Page B',
            values: [
                {
                    name: 'bar1',
                    value: 500,
                    valueUI: <div>Custom HTML : 500 TL</div>,
                },
                { name: 'bar2', value: 3200, valueUI: '1400 TL' },
                { name: 'bar3', value: 1000, valueUI: '1000 TL' },
            ],
        },
        {
            name: 'Page C',
            values: [
                {
                    name: 'bar1',
                    value: 2350,
                    valueUI: <div>Custom HTML : 2350 TL</div>,
                },
                { name: 'bar2', value: 1380, valueUI: '1380 TL' },
                { name: 'bar3', value: 1725, valueUI: '1725 TL' },
            ],
        },
    ];

    const exampleData: IBarChartData[] = [
        {
            name: 'Ocak 2020',
            values: [{ name: 'para', value: 13, valueUI: '5 TL' }],
        },
        {
            name: '',
            values: [{ name: 'para', value: 10, valueUI: '5 TL' }],
        },
        {
            name: 'Mart 2020',
            values: [{ name: 'para', value: 15, valueUI: '5 TL' }],
        },
        {
            name: '',
            values: [{ name: 'para', value: 18, valueUI: '5 TL' }],
        },
        {
            name: 'Mayıs 2020',
            values: [{ name: 'para', value: 22, valueUI: '5 TL' }],
        },
        {
            name: '',
            values: [{ name: 'para', value: 14, valueUI: '5 TL' }],
        },
        {
            name: 'Temmuz 2020',
            values: [{ name: 'para', value: 8, valueUI: '5 TL' }],
        },
        {
            name: '',
            values: [{ name: 'para', value: 11, valueUI: '5 TL' }],
        },
        {
            name: 'Eylül 2020',
            values: [{ name: 'para', value: 6, valueUI: '5 TL' }],
        },
        {
            name: '',
            values: [{ name: 'para', value: 7, valueUI: '5 TL' }],
        },
        {
            name: 'Kasım 2020',
            values: [{ name: 'para', value: 8.5, valueUI: '5 TL' }],
        },
        {
            name: '',
            values: [{ name: 'para', value: 15, valueUI: '5 TL' }],
        },
    ];

    const tmp: [number, number] = [1, 2];

    return (
        <>
            <h1>Bar Chart</h1>
            <div className='row'>
                <div className='col-6'>
                    <h4>Basic</h4>
                    <div style={{ height: 300, backgroundColor: '#f3f3f3' }}>
                        <BarChart data={data} colors={['#0088FE', '#00C49F', '#FFBB28']} />
                    </div>
                </div>
                <div className='col-6'>
                    <h4>Tooltip</h4>
                    <div style={{ height: 300, backgroundColor: '#fff' }}>
                        <BarChart
                            data={data}
                            colors={['#0088FE', '#00C49F', '#FFBB28']}
                            // tooltip={true}
                            tooltip={{
                                backgroundColor: 'lightblue',
                                valueColor: 'black',
                                cursorBgColor: 'aqua',
                                fontSize: 14,
                                border: '2px solid #000',
                                labelColor: '#fff',
                                radius: 20,
                                seperator: ':',
                            }}
                        />
                    </div>
                </div>
            </div>
            <div className='row'>
                <div className='col-6'>
                    <h4>Legend</h4>
                    <div style={{ height: 300, backgroundColor: '#f3f3f3' }}>
                        <BarChart
                            data={data}
                            colors={['#0088FE', '#00C49F', '#FFBB28']}
                            legend={true}
                            // legend={{
                            //     iconType: 'star',
                            //     position: 'top',
                            //     iconSize: 12,
                            //     color: '#f00',
                            //     fontSize: 18,
                            //     margin: 10,
                            // }}
                        />
                    </div>
                </div>
                <div className='col-6'>
                    <h4>Axis Control</h4>
                    <div style={{ height: 300, backgroundColor: '#fff' }}>
                        <BarChart
                            data={data}
                            colors={['#0088FE', '#00C49F', '#FFBB28']}
                            axis={{
                                lineColor: 'blue',
                                label: {
                                    color: '#f00',
                                    fontSize: 11,
                                    xLabel: 'X Label',
                                    yLabel: 'Y Label',
                                },
                                // xLine: true,
                                yLine: false,
                            }}
                        />
                    </div>
                </div>
            </div>
            <div className='row'>
                <div className='col-6'>
                    <h4>Bar Control</h4>
                    <div style={{ height: 300, backgroundColor: '#f3f3f3' }}>
                        <BarChart
                            data={data}
                            colors={['#0088FE', '#00C49F', '#FFBB28']}
                            bar={{
                                gap: 10,
                                size: 40,
                                radius: [5, 5, 0, 0],
                                label: true,
                                // label: {
                                //     color: "#f00",
                                //     fontSize: 12,
                                //     position: "top",
                                // },
                            }}
                        />
                    </div>
                </div>
                <div className='col-6'>
                    <h4>Tick Control</h4>
                    <div style={{ height: 300, backgroundColor: '#fff' }}>
                        <BarChart
                            data={data}
                            colors={['#0088FE', '#00C49F', '#FFBB28']}
                            tick={{
                                line: true,
                                color: '#f00',
                                fontSize: 14,
                                angle: { x: -45, y: 45 },
                                margin: { x: 12, y: 5 },
                            }}
                        />
                    </div>
                </div>
            </div>
            <div className='row'>
                <div className='col-6'>
                    <h4>Grid Control</h4>
                    <div style={{ height: 300, backgroundColor: '#f3f3f3' }}>
                        <BarChart
                            data={data}
                            colors={['#0088FE', '#00C49F', '#FFBB28']}
                            grid={{
                                backgroundColor: 'aqua',
                                lineColor: 'blue',
                                strokeDashArray: 5, // "5 10"
                                // horizontal: false,
                                // vertical: false,
                            }}
                        />
                    </div>
                </div>
                <div className='col-6'>
                    <h4>Range Control</h4>
                    <div style={{ height: 300, backgroundColor: '#fff' }}>
                        <BarChart data={data} colors={['#0088FE', '#00C49F', '#FFBB28']} range={[10, 5000]} />
                    </div>
                </div>
            </div>
            <div className='row'>
                <div className='col'>
                    <h4>
                        Layout Control - Vertical ( layout: {'"horizontal" '}|{' "vertical"'} )
                    </h4>
                    <div style={{ height: 400, backgroundColor: '#f3f3f3' }}>
                        <BarChart
                            data={data}
                            colors={['#0088FE', '#00C49F', '#FFBB28']}
                            layout={'vertical'}
                            tooltip={true}
                        />
                    </div>
                </div>
            </div>
            <div className='row'>
                <div className='col'>
                    <h4>Example</h4>
                    <div style={{ height: 400, backgroundColor: '#fff' }}>
                        <BarChart
                            data={exampleData}
                            colors={['#0088FE']}
                            axis={{ yLine: false, yUnit: '$' }}
                            tooltip={true}
                            range={[5, 25]}
                        />
                    </div>
                </div>
            </div>
        </>
    );
};

export default BarChartPage;
