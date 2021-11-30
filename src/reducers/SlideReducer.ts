import { createAction, ActionType, createReducer } from 'typesafe-actions';

// 상태의 타입 선언
interface SlideReducer {
  slideText: string;
}

// 상태 초기화
const initialState: SlideReducer = {
  slideText: 'main',
};

// 액션타입 선언
export const RESET_TEXT = 'testReducer/RESET_TEXT';
export const ADD_TEXT = 'testReducer/ADD_TEXT';
export const REMOVE_TEXT = 'testReducer/REMOVE_TEXT';

// 액션함수 선언
export const resetText = createAction(RESET_TEXT)();
export const addText = createAction(ADD_TEXT)<SlideReducer>();
export const removeText = createAction(REMOVE_TEXT)();

// 액션 객체타입
export const actions = { resetText, addText, removeText };
type TestReducerActions = ActionType<typeof actions>;

// 리듀서 추가
const testReducer = createReducer<SlideReducer, TestReducerActions>(initialState, {
  [RESET_TEXT]: () => ({
    slideText: '',
  }),
  [ADD_TEXT]: (state, action) => {
    console.log(state.slideText);
    return {
      slideText: action.payload.slideText,
    };
  },
  [REMOVE_TEXT]: (state) => ({
    slideText: '',
  }),
});

export default testReducer;