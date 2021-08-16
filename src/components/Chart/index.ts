import BarChart from './Bar';
import PieChart from './Pie';
import { IBarChartData as BarChartData } from './Bar/type';
import { IPieChartData as PieChartData } from './Pie/type';

export type IBarChartData = BarChartData[];
export type IPieChartData = PieChartData[];

export { BarChart, PieChart };
