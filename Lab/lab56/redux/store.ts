import AsyncStorage from '@react-native-async-storage/async-storage';
import {Tuple, combineReducers, configureStore} from '@reduxjs/toolkit';
import counterSlice from './counterSlice';
import {persistReducer, persistStore} from 'redux-persist';
import {thunk} from 'redux-thunk';
import {pokemonApi} from '../api/pokemonApi';

const rootReducer = combineReducers({
  counter: counterSlice,
  [pokemonApi.reducerPath]: pokemonApi.reducer,
});

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['counter'],
};

const persistedReducer = persistReducer<RootState>(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({serializableCheck: false}).concat(
      pokemonApi.middleware,
    ),
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;
