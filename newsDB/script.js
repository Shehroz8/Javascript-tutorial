"use strict";

const numberOfNews = prompt("Siz qancha yangilik ko'rdingiz")

const personalNewDB = {
    count: numberOfNews,
    news: {},
    actors: {},
    genres: [],
    privat: false,
};

for(let i =0; i<2; i++){
    const a = prompt("oxirgi ko'rgan yangiliklaringizdan biri"),
    b = prompt("unga qancha baxo bergan bolardingiz");

    if(a != null && b != null && a != "" && b != "" && a.length < 50){
        personalNewDB.news[a] = b;
        console.log("tayor");
    }else{
        console.log("error");
        i--
    }
}

if(personalNewDB.count < 10){
    console.log("juda kam yangilik koripsiz");
}else if(personalNewDB.count >= 10 && personalNewDB.count <30){
    console.log("siz klassik tomoshabinsiz");
}else if(personalNewDB.count >=30){
    console.log("siz yangiliklar ishqibosisiz");
}else{
    alert("xatolik")
}


console.log(personalNewDB);
