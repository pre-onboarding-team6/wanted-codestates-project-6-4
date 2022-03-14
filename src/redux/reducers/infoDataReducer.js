import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const PROXY = 'https://cors-anywhere.herokuapp.com';
const BASE_URL = 'https://test.daground.io';

const initialState = {
  data: undefined,
  loading: true,
  error: undefined,
};

export const fetchData = createAsyncThunk(
  'indoData/fetchInfoData',
  async () => {
    const res = await fetch(PROXY + '/' + BASE_URL + '/info/contents', {
      headers: {
        'TEST-AUTH': 'wantedpreonboarding',
      },
    });
    if (res.status === 200) {
      const contentType = res.headers.get('content-type');
      if (contentType === 'application/json; charset=utf-8') {
        const data = await res.json();
        return data;
      } else {
        throw new Error('Sorry, Something is wrong');
      }
    } else if (res.status === 429) {
      throw new Error('To Many Requests');
    } else {
      throw new Error('Sorry, Something is wrong');
    }
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
        state.data = {
          sector: action.payload.sector,
          content: action.payload.content,
        };
      })
      .addCase(fetchData.rejected, (state, action) => {
        state.loading = false;
        state.error = {
          message: action.error.message,
          stack: action.error.stack,
        };
      });
  },
});

// export const {  } = infoDataReducer.actions;

export default infoDataReducer.reducer;
