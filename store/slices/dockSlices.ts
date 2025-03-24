import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface DockState {
  activeApp: string | null;
}

const initialState: DockState = {
  activeApp: null,
};

const dockSlices = createSlice({  
  name: 'dock',
  initialState,
  reducers: {
    setActiveDock: (state, action: PayloadAction<string>) => {
      state.activeApp = action.payload;
    },
    resetActiveDock: (state) => {
      state.activeApp = null;
    },
  },
});

export const { setActiveDock, resetActiveDock  } = dockSlices.actions;
export default dockSlices.reducer;