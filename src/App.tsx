import { BrowserRouter as Router, Switch } from 'react-router-dom';
import { Home, Form, PieChart, BarChart, Table, Progress, Loading } from './pages';
import Route from './_route';
import { ScrollPageTop } from './components/utils';

const App = () => {
    return (
        <Router>
            <ScrollPageTop scrollElement='root'>
                <Switch>
                    <Route exact path='/' component={Home} />
                    <Route path='/form' component={Form} />
                    <Route path='/pie-chart' component={PieChart} />
                    <Route path='/bar-chart' component={BarChart} />
                    <Route path='/table' component={Table} />
                    <Route path='/progress' component={Progress} />
                    <Route path='/loading' component={Loading} />
                </Switch>
            </ScrollPageTop>
        </Router>
    );
};

export default App;
