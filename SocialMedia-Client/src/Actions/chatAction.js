import * as ChatApi from "../Api/ChatRequest.js"

export const chatStart = (data) => async (dispatch) => {
    try {
      console.log("Chat in Box");
      await ChatApi.chatStart(data);
    } catch (error) {
      console.log(error);
    }
  };