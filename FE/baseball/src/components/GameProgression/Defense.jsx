import React, { createContext, useReducer, useMemo } from "react";
import styled, { ThemeProvider } from "styled-components";
import theme from "../../styles/theme";
// import Score from "../Score";
import PlayGround from "./PlayGround";
// import Title from "../title";
// import InningStatus from "./InningStatus";
// import PlayerInfo from "./PlayerInfo";
import Header from "../Header/Header";
import { mock } from "../../mock";

import { GlobalStyle, Background } from "../../styles/global";

export const FETCH_RESULT_INFO = "FETCH_RESULT_INFO";

export const BaseBallContext = createContext({
  score: {},
  inningStatus: {},
  updatedPlayer: [],
  updatedBaseman: {},
  dispatch: () => {},
}); // 초기 데이터 fetch해와서 여기에 값 넣어줌

const initialState = {
  score: { Home: 0, Away: 0 },
  inningStatus: {},
  updatedPlayer: [],
  updatedBaseman: {},
}; // 초기 데이터 fetch해와서 여기에 값 넣어줌

const reducer = (state, action) => {
  switch (action.type) {
    case FETCH_RESULT_INFO:
      // fetch('주소')
      // .then(res=> res.json())
      // .then(data => data.)
      const score = mock.updatedBaseman.updatedScore;
      const inningStatus = mock.inningStatus;
      const updatedPlayer = mock.updatedBaseman.updatedPlayer;
      const updatedBaseman = mock.updatedBaseman.updatedBaseman;

      return {
        ...state,
        score,
        inningStatus,
        updatedPlayer,
        updatedBaseman,
      };
  }
};

function Defense() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const value = useMemo(
    () => ({
      score: state.score,
      inningStatus: state.inningStatus,
      updatedPlayer: state.updatedPlayer,
      updatedBaseman: state.updatedBaseman,
      dispatch,
    }),
    [state.score, state.inningStatus, state.updatedPlayer, state.updatedBaseman]
  );

  return (
    <BaseBallContext.Provider value={value}>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Background>
          <Header />
          <PlayGround />
        </Background>
      </ThemeProvider>
    </BaseBallContext.Provider>
  );
}

export default Defense;
