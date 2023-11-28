import {configureStore, ReducersMapObject} from "@reduxjs/toolkit";
import {playerReducer} from "@/store/slice/player-slice";
import {PlayerState} from "@/types/player";

export interface StateSchema {
  player: PlayerState
}

const rootReducers: ReducersMapObject<StateSchema>  = {
  player: playerReducer
}

export const store = configureStore({
  reducer: rootReducers
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch