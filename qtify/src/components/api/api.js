import axios from "axios";

export const BackendEndpoint="https://qtify-backend-labs.crio.do";

export const fetchTopAlbumsData=async ()=>{
  try{
    const response=await axios.get(`${BackendEndpoint}/albums/top`);
    console.log(response);
    return response.data;
  }catch(e){
    console.log(e)
  }
}