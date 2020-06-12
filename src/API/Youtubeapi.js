import axios from "axios";
const KEY ="AIzaSyDuj0YN8FYZeesvPbu6J1FFLfxb4xZfL1o"
export const baseParams = {
    channelId:"UCBRZyPJ29uswpRI7ser-oQA",
    key:KEY
}
export default axios.create({
     baseURL:"https://www.googleapis.com/youtube/v3",
});
