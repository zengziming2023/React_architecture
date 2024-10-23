import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './counterSlice';
import authReducer from './authSlice';

// 创建 store，并自动组合多个 reducer
const store = configureStore({
    reducer: {
        counter: counterReducer,
        auth: authReducer,
    },
});

export default store;

// 定义 RootState 和 AppDispatch 类型
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;