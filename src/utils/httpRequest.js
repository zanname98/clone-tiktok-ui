import axios from 'axios';

const request = axios.create({
    baseURL: 'https://tiktok.fullstack.edu.vn/api/',
});

export const get = async (path, option = {}) => {
    //await chỉ đứng trc một promise
    const reponse = await request.get(path, option);
    return reponse.data;
}; //giống bên kia hàm chỉ trả về response.data để truyền vào .then
export default request;
