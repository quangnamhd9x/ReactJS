import { YoutubeData } from "../../data";
import { DataCategory } from "./DataCategory";
const obj = {};
const result;

YoutubeData.forEach(function(a){
    obj[a.id] = a;
});

result = DataCategory.map(function(a){
    return {
        id: a.id,
        title: a.title,
        author: a.author,
        image: a.image,
        avatar: a.avatar,
    };
})