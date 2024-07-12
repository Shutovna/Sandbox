"use strict";

const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,

    rememberMovieCount: function () {
        let success;
        do {
            personalMovieDB.count = prompt('Сколько фильмов вы уже посмотрели?', 1);
            success = personalMovieDB.count !== null && personalMovieDB.count !== ''
                && !isNaN(personalMovieDB.count);
        } while (!success);
    },

    rememberMoviesRating: function () {
        for (let i = 0; i < 2; i++) {
            let name;
            let rating;
            let success;

            do {
                name = prompt('Один из последних просмотренных фильмов?').trim();
                success = name != null && name !== '' && name.length < 50;
            } while (!success);

            do {
                rating = +prompt('На сколько оцените его?');
                success = rating != null && rating !== '' && !isNaN(rating);
            } while (!success);

            personalMovieDB.movies[name] = rating;
        }
    },

    detectUserType: function () {
        if (personalMovieDB.count >= 0 && personalMovieDB.count < 10) {
            console.log('Просмотрено довольно мало фильмов');
        } else if (personalMovieDB.count < 30) {
            console.log('Вы классический зритель');
        } else if (personalMovieDB.count >= 30) {
            console.log('Вы киноман');
        } else {
            console.log('Произошла ошибка');
        }
    },

    toggleVisibleMyDb: function () {
        personalMovieDB.privat = !personalMovieDB.privat;
    },

    showMyDb: function () {
        if (!personalMovieDB.privat) {
            console.log(personalMovieDB);

        }
    },

    writeYourGenres: function () {
        let success;

        do {
            let str = prompt(`Введите ваши любимые жанры через запятую`);
            success = str != null && str !== '';
            if (!success) {
                console.log('Вы ввели некорректные жанры или не ввели их вовсе');
            } else {
                personalMovieDB.genres = str.split(",");
                personalMovieDB.genres.sort();
            }
        } while (!success);        

        personalMovieDB.genres.forEach(function (item, idx) {
            console.log(`Любимый жанр #${idx + 1} - это ${item}`)
        });
    }

};

