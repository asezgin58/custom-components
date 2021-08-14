import { BrowserRouter as Router, Switch } from 'react-router-dom';
import { Home, PieChart, BarChart } from './pages';
import Route from './_route';

const App = () => {
    return (
        <Router>
            <Switch>
                <Route exact path='/' component={Home} />
                <Route path='/pie-chart' component={PieChart} />
                <Route path='/bar-chart' component={BarChart} />
            </Switch>
        </Router>
    );
};

export default App;
