import {AnyAction, PayloadAction, createSlice} from '@reduxjs/toolkit';

const RESET_COUNTER_TYPE = 'RESET';

export const resetCounter = () => {
  return {
    type: RESET_COUNTER_TYPE,
  };
};

const initialState = {
  value: 0,
};

const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    multiply: {
      reducer: (state, action: PayloadAction<number>) => {
        state.value = state.value * action.payload;
      },
      prepare: (value?: number) => ({payload: value || 2}),
    },
    increment: state => {
      state.value += 1;
    },
    decrement: state => {
      state.value -= 1;
    },
  },
  extraReducers: builder => {
    builder.addMatcher(
      (action: AnyAction) => action.type === RESET_COUNTER_TYPE,
      () => {
        return initialState;
      },
    );
  },
});

export const {multiply, increment, decrement} = counterSlice.actions;
export default counterSlice.reducer;
