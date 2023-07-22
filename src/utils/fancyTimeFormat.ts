const fancyTimeFormat = (duration : any, par?: boolean) => {
    const hrs = Math.floor(duration / 3600);
    const mins = Math.floor((duration % 3600) / 60);
    const secs = duration % 60;
 
    let ret = "";
 
    if (par) {
       if (hrs > 0) {
          ret += `${hrs} giờ`;
       }
 
       ret += ` ${mins} phút${secs < 10 ? "0" : ""}`;
    } else {
       if (hrs > 0) {
          ret += `${hrs}:`;
       }
 
       ret += `${mins < 10 ? "0" : ""}${mins}:${secs < 10 ? "0" : ""}${secs}`;
    }
 
    return ret;
 };
 
 export default fancyTimeFormat;
 