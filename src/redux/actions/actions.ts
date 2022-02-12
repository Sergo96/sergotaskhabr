import { ActionType } from "./actionTypes";
import axios from "axios";
import { iPicture } from "../../interfaces/picturesTypes";
import { Dispatch } from "redux";

const getPictures = (pictures: iPicture[][]) => ({
  type: ActionType.GET_PICTURES,
  payload: pictures,
});

const sortList = (list: any) => ({
  type: ActionType.SORT_LIST,
  payload: list,
});

function sliceIntoChunks(arr: iPicture[] | unknown[], chunkSize: number) {
  const res = [];
  for (let i = 0; i < arr.length; i += chunkSize) {
    const chunk = arr.slice(i, i + chunkSize);
    res.push(chunk);
  }
  return res;
}

export const loadPictures = () => {
  const obj: any = {};
  return function (dispatch: Dispatch) {
    axios
      .get(process.env.REACT_APP_API || "")
      .then((response) => {
        const dataArr = sliceIntoChunks(response.data, 50);
        for (let i = 0; i < dataArr.length; i++) {
          obj[i + 1] = dataArr[i];
        }
        dispatch(getPictures(obj));
      })
      .catch((error) => console.log(error));
  };
};

export const sortObj = (obj: any, sortBy: boolean) => {
  const object: any = {};
  const result = Object.values(obj).flatMap((item) => item);
  if (sortBy) {
    result.sort((a: any, b: any) => b.id - a.id);
  } else {
    result.sort((a: any, b: any) => a.id - b.id);
  }
  const dataArr = sliceIntoChunks(result, 50);
  for (let i = 0; i < dataArr.length; i++) {
    object[i + 1] = dataArr[i];
  }
  return function (dispatch: Dispatch) {
    dispatch(sortList(object));
  };
};
