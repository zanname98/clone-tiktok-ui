import axios from 'axios';

console.log(process.env);
const httpRequest = axios.create({
    baseURL: process.env.REACT_APP_BASE_URL,
});

export const get = async (path, option = {}) => {
    //await chỉ đứng trc một promise
    const response = await httpRequest.get(path, option);
    return response.data;
}; //giống bên kia hàm chỉ trả về response.data để truyền vào .then
export default httpRequest;
