import { createAsyncThunk, createSlice, current } from '@reduxjs/toolkit';

export const PROXY = 'https://cors-anywhere.herokuapp.com';
const BASE_URL = 'https://test.daground.io';

const initialState = {
  data: undefined,
  loading: true,
  error: undefined,
  pages: [],
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

const createPage = (sector_id, news, content) => {
  return {
    sector_id,
    news,
    content,
    nowShoing: undefined,
  };
};

const parsePages = (sector, content) => {
  const newPages = sector.map((item) => {
    const newsInSector = content.filter(
      (singleContent) =>
        singleContent.sector_id === item.id && singleContent.like_top === 1,
    );
    const contentInSector = content.filter(
      (singleContent) => singleContent.sector_id === item.id,
    );
    return createPage(item.id, newsInSector, contentInSector);
  });
  return newPages;
};

export const infoDataReducer = createSlice({
  name: 'review',
  initialState,
  reducers: {
    showDetail: (state, action) => {
      const { sectorId, contentId } = action.payload;
      const { pages } = current(state);
      const newPages = pages.map((page) => {
        if (page.sector_id === sectorId) {
          const newPage = { ...page, nowShoing: contentId };
          return newPage;
        } else {
          return page;
        }
      });
      state.pages = newPages;
    },
    exitDetail: (state, action) => {
      const { sectorId } = action.payload;
      const { pages } = current(state);
      const newPages = pages.map((page) => {
        if (page.sector_id === sectorId) {
          const newPage = { ...page, nowShoing: undefined };
          return newPage;
        } else {
          return page;
        }
      });
      state.pages = newPages;
    },
  },
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
        const newPages = parsePages(
          action.payload.sector,
          action.payload.content,
        );
        state.pages = newPages;
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

export const { showDetail, exitDetail } = infoDataReducer.actions;

export default infoDataReducer.reducer;
