"use strict";

const numberOfNews = prompt("Siz qancha yangilik ko'rdingiz")

const personalNewDB = {
    count: numberOfNews,
    news: {},
    actors: {},
    genres: [],
    privat: false,
};

const a = prompt("oxirgi ko'rgan yangiliklaringizdan biri"),
    b = prompt("unga qancha baxo bergan bolardingiz");

personalNewDB.news[a] = b;
console.log(personalNewDB);