import * as actionTypes from "../constant";
import axios from "axios";

export const toGoRoute = (data) => ({
    type: actionTypes.JUMP_TO_ROUTER,
    data
  });

export const clearRoute = (data) => ({
  type: actionTypes.CLEAR_ROUTER,
  data
})