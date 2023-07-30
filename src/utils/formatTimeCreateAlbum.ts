/* eslint-disable @typescript-eslint/restrict-plus-operands */

const formatTimeCreateAlbum = (time : any) => {
    const date = new Date(time * 1000)
    const year = date.getFullYear()
    const month = ("0" + (date.getMonth() + 1)).slice(-2)
    const day = ("0" + date.getDate()).slice(-2)
 
    return `${day}/${month}/${year}`
};

export default formatTimeCreateAlbum;