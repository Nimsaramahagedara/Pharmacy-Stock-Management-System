import { message } from "antd"
import authAxios from "./authAxios";


export const getAllSku =async ()=>{
    try {
        const result = await authAxios.get(`/stock/getallsku`);
        return result.data
    } catch (error) {
        message.error(error.message)
    }
}

export const getAllSupplier = async () => {
    try {
      const result = await authAxios.get(`/supplier/`);
      //console.log(result);
      return(result.data);
    } catch (error) {
      message.error(error);
    }
  };