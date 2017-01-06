import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import LikeCounter from './components/LikeCounter';
import reducers from './reducers';

const store = createStore(reducers);

const App = props =>
  <div>
    <p>
      Hello {props.name}, welcome to React!
    </p>
    <LikeCounter
      likesCount={store.getState()}
      onLike={() => store.dispatch({ type: 'LIKE' })}
      onDislike={() => store.dispatch({ type: 'DISLIKE' })}
    />
  </div>;

App.propTypes = {
  name: React.PropTypes.string,
};

const render = () => {
  ReactDOM.render(<App name="Joe" />, document.getElementById('app'));
};

render();
store.subscribe(render);
