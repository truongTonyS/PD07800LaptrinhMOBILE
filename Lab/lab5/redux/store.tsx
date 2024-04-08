import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { persistStore, persistReducer } from "redux-persist";
import autoMergeLevel2 from "redux-persist/lib/stateReconciler/autoMergeLevel2";

const rootReducer =  (state = {}, action: any) => {
    return state;
  };

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['Tên reducer bạn muốn lưu lại'],
  stateReconciler: autoMergeLevel2
};

const persistedReducer = persistReducer<RootState>(persistConfig, rootReducer)

export const store = configureStore({
  reducer: persistedReducer,
});

export const persistor = persistStore(store)
// Suy ra các loại 'RootState' và 'AppDispatch' từ chính store
export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;

// Tạo store persist