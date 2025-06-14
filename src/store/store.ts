import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { newsAPi } from './reducers/NewsReducer.ts';
import { localApiInstance } from './reducers/NewsLocalReducer.ts';
import themeSLice from './reducers/ThemeSLice.ts';


export const rootReducer = combineReducers({
    [newsAPi.reducerPath]:newsAPi.reducer,
  [localApiInstance.reducerPath]: localApiInstance.reducer,
  theme:themeSLice
})

export const setupStore = () =>{
  const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(newsAPi.middleware,localApiInstance.middleware),
  })
  return store;
};

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = ReturnType<typeof setupStore>['dispatch']