import { State } from "react-native-track-player";
import { createStoreHook } from "react-redux";
import { create } from "react-test-renderer";

const TANG ='TANG';
const GIAM = 'GIAM';
const BINH_PHUONG = 'BINH_PHUONG'; // Thêm action type mới
const RESET = 'RESET'; // Thêm action type mới

export const tang=()=>({type: TANG});
export const giam=()=>({type: GIAM});
export const binhPhuong = () => ({ type: BINH_PHUONG }); // Action creator cho bình phương
export const reset = () => ({ type: RESET }); // Action creator cho reset

const initState ={
  dem:0,
};

const demReducer=(state = initState, action) => {
  switch(action.type) {
    case TANG:
      return {...state, dem: state.dem + 1};
    case GIAM:
      return {...state, dem: state.dem - 1};
    case BINH_PHUONG:
      return {...state, dem: state.dem * state.dem}; // Bình phương giá trị
    case RESET:
      return { ...state, dem: 0 }; // Reset về giá trị ban đầu
    default:
      return state;
  }
};
const store=createStore(demReducer);

export default store
