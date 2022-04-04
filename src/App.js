import { Route, Switch, Redirect} from 'react-router-dom';
import Home from './pages/Home';
import Products from './pages/Products';
import Contact from './pages/Contact';
import MainHeader from './components/MainHeader';



function App() {
  return (
    <div>
        <MainHeader />
        <main>
            <Switch>
                <Route path ="/" exact >
                    <Redirect to ="/home" />
                </Route>
                <Route path ="/home" exact>
                    <Home />
                </Route>
                <Route path ="/products">
                    <Products />
                </Route>
                <Route path ="/contact">
                    <Contact />
                </Route>
            </Switch>
        </main>
    </div>
  )
}

export default App