import { getData } from "../common/Apicall";

export const getHashTagPostListApi = () => {
    const randomNumber = Math.floor(Math.random() * 6);
  return getData(`https://picsum.photos/v2/list?page=${randomNumber}&limit=50`);
};

export const getCommunityPostListApi = () => {
    const randomNumber = Math.floor(Math.random() * 12);
  return getData(`https://picsum.photos/v2/list?page=${randomNumber}&limit=50`);
};

export const getRandomPostApi = () => {
  const randomNumber = Math.floor(Math.random() * 100);
  return getData(`https://picsum.photos/id/${randomNumber}/info`);
};

export const getTopNomadsApi = () => {
  return getData("https://picsum.photos/v2/list?page=3&limit=50");
};