import {applyMiddleware, compose, createStore} from 'redux';
import * as reduxLoop from 'redux-loop-symbol-ponyfill';
import middleware from './middleware';
import reducers_data from './reducers_data';
import {AsyncStorage} from 'react-native';
import {persistCombineReducers, persistStore} from 'redux-persist'
import {createBlacklistFilter, createWhitelistFilter} from 'redux-persist-transform-filter';

const enhancers = [applyMiddleware(...middleware), reduxLoop.install()];
const composeEnhancers = (__DEV__ && typeof (window) !== 'undefined' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;
const enhancer = composeEnhancers(...enhancers);

const transforms = Object.keys(reducers_data).reduce((prev, key)=>(
    [...prev, createWhitelistFilter(key, Object.keys(reducers_data[key].cachedState)) ]
),[]);

const persistConfig = {
    key: 'root',
    storage: AsyncStorage,
    debug: true,
    blacklist: [],
    transforms: transforms
};

const reducers = Object.keys(reducers_data).reduce((prev, key)=>({...prev,[key]:reducers_data[key]._state }),{});
const persistedReducer = persistCombineReducers(persistConfig, reducers);
export const store = createStore(persistedReducer, enhancer);
export const dispatch = store.dispatch;
export const persistor = persistStore(store);

if (module.hot) {
    const acceptCallback = () => {
        store.replaceReducer(persistedReducer)
    };
    module.hot.accept('./reducer', acceptCallback);
    module.hot.acceptCallback = acceptCallback;
}