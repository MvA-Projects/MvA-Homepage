function getTime() {
    let h = new Date().getHours();
    let m = new Date().getMinutes(); 
    let s = new Date().getSeconds();

    if (h < 10) {
        h = "0"+h;
    }
    if (m < 10) {
        m = "0"+m;
    }
    if (s < 10) {
        s = "0"+s;
    }

    let time = h+":"+m+":"+s;
    return time;
}

function Search() {
    let query = document.getElementById("searchBar").value; 
    location.href = "https://www.google.com/search?q="+query;
}

setInterval(()=>{
    document.getElementById("time").innerHTML = getTime();
    let hour = new Date().getHours();
    if (hour < 6) {
        //early morning
        document.getElementById("greeting").innerHTML = "Good Early Morning";
    }
    if (hour > 6 && hour < 12) {
        //morning
        document.getElementById("greeting").innerHTML = "Good Morning";
    }
    if (hour > 12 && hour < 18) {
        //afternoon
        document.getElementById("greeting").innerHTML = "Good Afternoon";
    }
    if (hour > 18) {
        //evening
        document.getElementById("greeting").innerHTML = "Good Evening";
    }
});