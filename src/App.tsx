import BookDetails from './components/BookDetails/BookDetails'
import './App.css';
import {BrowserRouter, Route} from "react-router-dom";
import Home from "./components/Home"

function App() {
    return (
        <BrowserRouter>
            <div className="app">
                <div className="app-container">
                    <Route exact path="/" component={Home}/>
                    <Route exact path="/book/:id" component={BookDetails}/>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;

