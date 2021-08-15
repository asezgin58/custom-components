import { BrowserRouter as Router, Switch } from 'react-router-dom';
import { Home, Form, PieChart, BarChart } from './pages';
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
                </Switch>
            </ScrollPageTop>
        </Router>
    );
};

export default App;
