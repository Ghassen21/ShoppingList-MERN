import { GET_ITEMS,ADD_ITEM,DELETE_ITEM} from './type'

export const getItems= () => {
    return {
        type :GET_ITEMS
    }
}
 export const  deletItem = id => {
     return {
     type : DELETE_ITEM,
     payload :id 
 };
}
 export const  addtItem = item => {
    return {
    type : ADD_ITEM,
    payload :item 
};
};