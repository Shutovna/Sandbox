"use strict";

const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

for (let i = 0; i < 2; i++) {
    let name;
    let rating;
    let success;

    do {
        name = prompt('Один из последних просмотренных фильмов?');
        success = name != null && name != '' && name.length < 50;
    } while (!success);

    do {
        rating = +prompt('На сколько оцените его?')
        success = rating != null && rating != NaN;
    } while (!success);

    personalMovieDB.movies[name] = rating;
}

console.log(personalMovieDB);

if (personalMovieDB.count >= 0 && personalMovieDB.count < 10) {
    console.log('Просмотрено довольно мало фильмов');
} else if (personalMovieDB.count < 30) {
    console.log('Вы классический зритель');
} else if (personalMovieDB.count >= 30) {
    console.log('Вы киноман');
} else {
    console.log('Произошла ошибка');
}

/* Задание на урок:

1) Создать переменную numberOfFilms и в неё поместить ответ от пользователя на вопрос:
'Сколько фильмов вы уже посмотрели?'

2) Создать объект personalMovieDB и в него поместить такие свойства:
    - count - сюда передается ответ на первый вопрос
    - movies - в это свойство поместить пустой объект
    - actors - тоже поместить пустой объект
    - genres - сюда поместить пустой массив
    - privat - в это свойство поместить boolean(логическое) значение false

3) Задайте пользователю по два раза вопросы:
    - 'Один из последних просмотренных фильмов?'
    - 'На сколько оцените его?'
Ответы стоит поместить в отдельные переменные
Записать ответы в объект movies в формате:
    movies: {
        'logan': '8.1'
    }

Проверить, чтобы все работало без ошибок в консоли */
// const category ='toys';

// console.log(`https://localhost:8080/${category}/123`)

// const user = 'Ivan';
// console.log(`preved ${user}`)
// console.log(`preved ${user}`)