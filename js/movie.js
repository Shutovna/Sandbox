"use strict";


let numberOfFilms;
function rememberMovieCount() {
    let success;
    do {
        numberOfFilms = prompt('Сколько фильмов вы уже посмотрели?', 1);
        success = numberOfFilms != null && numberOfFilms != '' && !isNaN(numberOfFilms);
    } while (!success);
}

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

function rememberMoviesReating() {
    for (let i = 0; i < 2; i++) {
        let name;
        let rating;
        let success;

        do {
            name = prompt('Один из последних просмотренных фильмов?').trim;
            success = name != null && name != '' && name.length < 50;
        } while (!success);

        do {
            rating = +prompt('На сколько оцените его?')
            success = rating != null && rating != '' && !isNaN(rating);
        } while (!success);

        personalMovieDB.movies[name] = rating;
    }
}



function detectUserType() {
    if (personalMovieDB.count >= 0 && personalMovieDB.count < 10) {
        console.log('Просмотрено довольно мало фильмов');
    } else if (personalMovieDB.count < 30) {
        console.log('Вы классический зритель');
    } else if (personalMovieDB.count >= 30) {
        console.log('Вы киноман');
    } else {
        console.log('Произошла ошибка');
    }
}

function showMyDb(personalMovieDB) {
    if (!personalMovieDB.privat) {
        console.log(personalMovieDB);

    }
}

function writeYourGenres() {
    for (let i = 0; i < 3; i++) {
        let success;

        do {
            personalMovieDB.genres[i] = prompt(`Ваш любимый жанр под номером ${i + 1}`).trim();
            success = personalMovieDB.genres[i] != null && personalMovieDB.genres[i] != '';
        } while (!success);        
    }
}

rememberMovieCount();
rememberMoviesReating();
detectUserType();
writeYourGenres();
showMyDb(personalMovieDB);

