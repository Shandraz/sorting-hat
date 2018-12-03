import React, { Component } from 'react';
import Result from "./Containers/Result";
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './reducers';


const store = createStore(reducers);

class App extends Component {
    render() {
        return (
            <div>
                <Provider store={store}>
                    <Result />
                </Provider>
            </div>
        )
    }
}

export default App;
