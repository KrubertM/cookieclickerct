const cookie = document.getElementById("cookie");
const counter = document.getElementById("counter");
const autoclicker = document.getElementById("autoclicker");
const clickupgrade =document.getElementById("clickupgrade");


let cookies = 0;
let autoclickerPrice = 100;
let autoclickerIncrease = 0;
let clickupgradeprice = 50;
let clickupgradeIncrease = 1;

cookie.onclick = () =>{
    cookies+= clickupgradeIncrease;
    counter .innerHTML = cookies;
}

clickupgrade.onclick = () => {
    if(cookies >= clickupgradeprice){
        cookies -= clickupgradeprice;
        counter.innerHTML = cookies;
        clickupgradeprice *=2;
        clickupgrade.innerHTML = `Buy click upgrade: ${clickupgradeprice}`;
        clickupgradeIncrease++;
    }
}

autoclicker.onclick = () => {
    if(cookies >= autoclickerPrice){
        cookies -= autoclickerPrice;
        counter .innerHTML = cookies;
        autoclickerPrice *= 2;
        autoclicker.innerHTML = `Buy autoclicker: ${autoclickerPrice}`;
        if(autoclickerIncrease == 0){
            setInterval(() =>{
                cookies += autoclickerIncrease;
                counter .innerHTML = cookies;
            }, 1000);
        }
        autoclickerIncrease++;
    }
}