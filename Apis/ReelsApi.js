import { getData } from "../common/Apicall";


export const getReelsListApi = () => {
    const randomNumber = Math.floor(Math.random() * 60);
    return getData(`https://picsum.photos/v2/list?page=${randomNumber}&limit=20`);
};