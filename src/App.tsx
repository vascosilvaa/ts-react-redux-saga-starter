import React from 'react';
import { Provider } from 'react-redux';
import PostsList from './components/PostsList';
import store from './store';

const App: React.FC = () => <Provider store={store}><PostsList /></Provider>;

export default App;
