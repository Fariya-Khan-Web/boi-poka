// read list

const getStoredRead = () => {
    const storedListStr = localStorage.getItem('read-list')
    if(storedListStr){
        const storedList = JSON.parse(storedListStr)
        return storedList;
    }
    return [];
}

const addToReadStore = (id) =>{
    const storedList = getStoredRead()
    if(storedList.includes(id)){
        console.log(id);
    }
    else {
        storedList.push(id);
        const storedListStr = JSON.stringify(storedList);
        localStorage.setItem('read-list', storedListStr);
    }
} 



// wish list

const getStoredWish = () =>{
    const wishListStr = localStorage.getItem('wish-list')
    if(wishListStr){
        const wishList = JSON.parse(wishListStr);
        return wishList;
    }
    return [];
}

const addToWish = (id) =>{
    const wishList = getStoredWish()
    if(wishList.includes(id)){
        console.log(id, 'exists');
    }
    else{
        wishList.push(id);
        const wishLishStr = JSON.stringify(wishList);
        localStorage.setItem('wish-list', wishLishStr)
    }
}


export { addToReadStore ,addToWish, getStoredRead, getStoredWish }