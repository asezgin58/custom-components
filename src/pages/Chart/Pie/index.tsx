import { FC } from 'react';
import { PieChart } from '../../../components';
import { IPieChartData } from '../../../components/Chart/Pie/type';

const PieChartPage: FC = () => {
    const data: IPieChartData[] = [
        { name: 'Group A', value: 400, valueUI: '400 TL' },
        { name: 'Group B', value: 300, valueUI: '300 TL' },
        { name: 'Group C', value: 300, valueUI: '300 TL' },
        { name: 'Group D', value: 200, valueUI: '200 TL' },
    ];

    return (
        <>
            <h1>Pie Chart</h1>
            <div className='row'>
                <div className='col-6' style={{ backgroundColor: '#f3f3f3' }}>
                    <h4>Constant Active</h4>
                    <div style={{ height: 300 }}>
                        <PieChart
                            data={data}
                            colors={['#0088FE', '#00C49F', '#FFBB28', '#FF8042']}
                            label={'Chart Label'}
                            activeIndex={[0, 1, 2, 3]}
                            activeShape={{ infoView: true }}
                        />
                    </div>
                </div>
                <div className='col-6' style={{ backgroundColor: '#f7f7f7' }}>
                    <h4>Constant Multiple Active</h4>
                    <div style={{ height: 300 }}>
                        <PieChart
                            data={data}
                            colors={['#0088FE', '#00C49F', '#FFBB28', '#FF8042']}
                            label={'Chart Label'}
                            activeIndex={[0, 3]}
                            activeShape={{ infoView: true }}
                        />
                    </div>
                </div>
            </div>
            <div className='row'>
                <div className='col-6' style={{ backgroundColor: '#f3f3f3' }}>
                    <h4>Hover Active</h4>
                    <div style={{ height: 300 }}>
                        <PieChart
                            data={data}
                            colors={['#0088FE', '#00C49F', '#FFBB28', '#FF8042']}
                            label={'Chart Label'}
                            activeShape={{ eventType: 'hover', infoView: true }}
                        />
                    </div>
                </div>
                <div className='col-6' style={{ backgroundColor: '#f7f7f7' }}>
                    <h4>Click Active</h4>
                    <div style={{ height: 300 }}>
                        <PieChart
                            data={data}
                            colors={['#0088FE', '#00C49F', '#FFBB28', '#FF8042']}
                            label={'Chart Label'}
                            activeShape={{ eventType: 'click' }}
                        />
                    </div>
                </div>
            </div>
            <div className='row'>
                <div className='col-6' style={{ backgroundColor: '#f3f3f3' }}>
                    <h4>
                        ActiveShape = type: {'"default"'} - eventType: {'"hover"'}
                    </h4>
                    <div style={{ height: 300 }}>
                        <PieChart
                            data={data}
                            colors={['#0088FE', '#00C49F', '#FFBB28', '#FF8042']}
                            activeShape={{
                                eventType: 'hover',
                                type: 'default',
                                infoView: true,
                            }}
                        />
                    </div>
                </div>
                <div className='col-6' style={{ backgroundColor: '#f7f7f7' }}>
                    <h4>
                        ActiveShape = type: {'"bold"'} - eventType: {'"hover"'}
                    </h4>
                    <div style={{ height: 300 }}>
                        <PieChart
                            insideRadius={40}
                            data={data}
                            colors={['#0088FE', '#00C49F', '#FFBB28', '#FF8042']}
                            label={'Chart Label'}
                            activeShape={{
                                eventType: 'hover',
                                type: 'bold',
                                infoView: true,
                                insideRate: true,
                                // partialNameView: true,
                                partialNameView: {
                                    color: '#888',
                                    fontSize: 16,
                                    fontWeight: 600,
                                },
                            }}
                        />
                    </div>
                </div>
            </div>
            <div className='row'>
                <div className='col-6' style={{ backgroundColor: '#f3f3f3' }}>
                    <h4>Legend Control</h4>
                    <div style={{ height: 300 }}>
                        <PieChart
                            data={data}
                            colors={['#0088FE', '#00C49F', '#FFBB28', '#FF8042']}
                            legend={true}
                            // legend={{
                            //     iconType: "star",
                            //     position: "top",
                            //     iconSize: 12,
                            //     color: "#f00",
                            //     fontSize: 18,
                            //     margin: 10,
                            // }}
                        />
                    </div>
                </div>
                <div className='col-6' style={{ backgroundColor: '#f7f7f7' }}>
                    <h4>Tooltip Control</h4>
                    <div style={{ height: 300 }}>
                        <PieChart
                            data={data}
                            colors={['#0088FE', '#00C49F', '#FFBB28', '#FF8042']}
                            // tooltip={true}
                            tooltip={{
                                backgroundColor: 'lightblue',
                                valueColor: '#f00',
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
                <div className='col-6' style={{ backgroundColor: '#f3f3f3' }}>
                    <h4>Label Control</h4>
                    <div style={{ height: 300 }}>
                        <PieChart
                            insideRadius={40}
                            data={data}
                            colors={['#0088FE', '#00C49F', '#FFBB28', '#FF8042']}
                            // label={"Chart Label"}
                            label={{
                                value: 'Chart Label',
                                position: 'center',
                                color: '#f00',
                                fontWeight: 600,
                            }}
                        />
                    </div>
                </div>
                <div className='col-6' style={{ backgroundColor: '#f7f7f7' }}>
                    <h4>Active Index Control</h4>
                    <div style={{ height: 300 }}>
                        <PieChart
                            data={data}
                            colors={['#0088FE', '#00C49F', '#FFBB28', '#FF8042']}
                            label={'Chart Label'}
                            // activeIndex={3} // activeShape eventType varsa; tek bir parcanin aktif kalmasini saglar
                            // activeIndex={[0, 2]} // activeShape eventType varsa; "hover" ise tek bir parcanin, "click" ise birden fazla parcanin aktif kalmasini saglar
                            // activeIndex={{ value: 1 }} // activeShape eventType varsa; tek bir parcanin aktif kalmasini saglar
                            // activeIndex={{ value: [1, 3] }} // activeShape eventType varsa; "hover" ise tek bir parcanin, "click" ise birden fazla parcanin aktif kalmasini saglar
                            // activeIndex={{ constant: true, value: 1 }} // Chart'ta sabit olarak aktif parca gorunmesini saglar. activeShape eventType varsa; sabit parca disinda tek bir parcanin aktif kalmasini saglar
                            activeIndex={{ constant: true, value: [0, 1] }} // Chart'ta sabit olarak aktif parca gorunmesini saglar. activeShape eventType varsa; sabit parca ile birlikte birden fazla parcanin aktif kalmasini saglar. "hover" ise sabitlerin disinda bir aktif parcayi saglar; "click" ise sabitlerin disinda birden fazla aktif parcayi saglar.
                            activeShape={{ eventType: 'hover', infoView: true }}
                        />
                    </div>
                </div>
            </div>
            <div className='row'>
                <div className='col-6' style={{ backgroundColor: '#f3f3f3' }}>
                    <h4>insideRadius Control ( For Donut Chart )</h4>
                    <div style={{ height: 300 }}>
                        <PieChart
                            insideRadius={40}
                            data={data}
                            colors={['#0088FE', '#00C49F', '#FFBB28', '#FF8042']}
                            label={'Chart Label'}
                            // label={{
                            //     value: "Chart Label",
                            //     position: "center",
                            // }}
                        />
                    </div>
                </div>
            </div>
        </>
    );
};

export default PieChartPage;
