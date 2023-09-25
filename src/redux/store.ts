import { configureStore } from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { formProduct } from '../components/Admin/FormProduct/reducer';
import { tableProduct } from '../components/Admin/TableProduct/reducer';
import { cartProduct } from '../components/Cards/reducer';

export const store = configureStore({
  reducer: {
    cartProduct: cartProduct.reducer,
    tableProduct: tableProduct.reducer,
    formProduct: formProduct.reducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
