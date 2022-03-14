import { createAsyncThunk, createSlice, current } from '@reduxjs/toolkit';

const PROXY = 'https://cors-anywhere.herokuapp.com';
const BASE_URL = 'https://test.daground.io';

const initialState = {
  data: undefined,
  loading: true,
};

export const fetchData = createAsyncThunk(
  'indoData/fetchInfoData',
  async () => {
    const res = await fetch(PROXY + '/' + BASE_URL + '/info/contents', {
      headers: {
        'TEST-AUTH': 'wantedpreonboarding',
      },
    });
    const data = await res.json();
    return data;
  },
);

export const infoDataReducer = createSlice({
  name: 'review',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchData.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchData.fulfilled, (state, action) => {
        state.loading = false;
        if (action.payload.ok === true) {
          state.data = {
            sector: action.payload.sector,
            content: action.payload.content,
          };
        } else {
          console.warn('Sorry something is wrong');
        }
      })
      .addCase(fetchData.rejected, (state, action) => {
        console.warn(action, 'error');
      });
  },
});

// export const {  } = infoDataReducer.actions;

export default infoDataReducer.reducer;
