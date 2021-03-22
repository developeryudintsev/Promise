// let currentPromise = new Promise((res, rej) => {
//     console.log('1');
//     console.log('2');
//     console.log('3');
//     rej();
// })

// currentPromise
//     .then(() => { console.log('then'); })
//     .catch(() => { console.log('catch'); })
//     .finally(() => { console.log('finally'); })

//--------------------------------------------------------------
// let currentPromise = new Promise((res, rej) => {
//     setTimeout(() => {
//         res();
//     }, 2000);
// })

// currentPromise
//     .then(() => { console.log('2 sec'); })
//     .catch(() => { console.log('catch'); })

//--------------------------------------------------------------
// let currentPromise = new Promise((res, rej) => {
//     setTimeout(() => {
//         res(Math.random());
//     }, 1000);
// })
// console.log(currentPromise)
// currentPromise
//     .then((res) => { console.log(res); })
//     .catch(() => { console.log('catch'); })
//---------------------------------------------------------------
// промисификация
// function doAfter(num) {
//     let newPromise = new Promise((res, rej) => {
//         setTimeout(() => {
//             res();
//         }, num);
//     })
//     return newPromise;
// }


// doAfter(1000).then(() => console.log('я сработал через 1 секунд'));
// doAfter(2000).then(() => console.log('а я сработал через 2 секунд'));
// doAfter(3000).then(() => console.log('я сработал через 3 секунд'));

//----------------------------------------------------------------

// function doAfter(num) {
//     let newPromise = new Promise((res, rej) => {
//         setTimeout(() => {
//             res();
//         }, num * 1000);

//     })
//     return newPromise;
// }

// let promise3 = doAfter(2);
// promise3.then(() => console.log('я сработал через 3 секунд'));
// promise3.then(() => console.log('и я тоже следом сработал через 3 секунд'));
// promise3.then(() => console.log('и я'));
// // через 2 секунды выпадут одновременно все-т.к. подписчик один

//----------------------------------------------------------------

// промисификация
// function doAfter(num) {
//     let newPromise = new Promise((res, rej) => {
//         setTimeout(() => {
//             res();
//         }, num);
//     })
//     return newPromise;
// }


// doAfter(1000).then(() => console.log('я сработал через 1 секунд'));
// doAfter(2000).then(() => console.log('а я сработал через 2 секунд'));
// doAfter(3000).then(() => console.log('я сработал через 3 секунд'));
//--------------------------------------------------------------
// function doAfter(num) {
//     let newPromise = new Promise((res, rej) => {
//         setTimeout(() => {
//             let value = Math.random()
//             // console.log(value)
//             res(value);
//         }, num);
//     })
//     return newPromise;
// }

// doAfter(1000)
//     .then((value) => {
//         console.log(value);//0.32878305182312717
//         return value * 1000;// return-значит что мы передаем этот результат в след.then
//     })
//     .then((value) => {
//         console.log(value);//328.78305182312715
//         return value * 1000;
//     })
//     .then((value) => {
//         console.log(value);//328783.05182312714
//         return value * 1000;
//     })

//--------------------------------------------------------------

// api.sendStudentsCountToItKamasutra(20)
//     .then(res => {
//         console.log(res);
//     });

//--------------------------------------------------------------
// Promise.all-после выполнения всех промисов ([])


// let MicrosoftPromise = api.getVacanciesCountFromMicrosoft()
//     .then(res => {
//         //здесь мы получили не полный объект а нужное поле->смотри api.js
//         // console.log('MicrosoftPromise' + res.data.vacancies);
//         console.log('MicrosoftPromise' + res);
//         return res

//     });

// let GooglePromise = api.getVacanciesCountFromGoogle()
//     .then(res => {
//         console.log('GooglePromise' + res.data.vacancies);
//         return res.data.vacancies
//     });

// let allPromise = Promise.all([MicrosoftPromise, GooglePromise]);

// allPromise
//     .then((res) => {
//         const resMicrosoftPromise = res[0];
//         const resGooglePromise = res[1];
//         api.sendStudentsCountToItKamasutra(resMicrosoftPromise + resGooglePromise)
//             .then(res => {
//                 console.log(res.data);
//             });
//         console.log('All ok!')
//     })
//     .catch(() => console.log('Jopa'))

//--------------------------------------------------------------
//РЕТЕРНЕМ ПРОМИС А НЕ РЕЗОЛВ

// function doAfter(num) {
//     let newPromise = new Promise((res, rej) => {
//         setTimeout(() => {
//             let value = Math.random()
//             // console.log(value)
//             res(value);
//         }, num);
//     })
//     return newPromise;
// }

// doAfter(1000)
//     .then((value1) => {
//         console.log(value1);//0.3643092491965958
//         return value1
//     })
//     .then((value1) => {
//         console.log(value1); //0.3643092491965958
//         //а здесь мы ретернем не число а наш doAfter(2000)
//         //поэтому через 2 сек. он пойдет, но вернет не промис, а то чем он зарезолвится
//         let value2 = doAfter(2000)
//         return value2
//     })
//     .then((value2) => {
//         console.log(value2);//0.08549537265813179
//         return value2;
//     })
//--------------------------------------------------------------
//РЕТЕРНЕМ ПРОМИС А НЕ РЕЗОЛВ-УЖЕ В allPromise

// let MicrosoftPromise = api.getVacanciesCountFromMicrosoft()
//     .then(res => {
//         //здесь мы получили не полный объект а нужное поле->смотри api.js
//         // console.log('MicrosoftPromise' + res.data.vacancies);
//         console.log('MicrosoftPromise' + res);
//         return res

//     });

// let GooglePromise = api.getVacanciesCountFromGoogle()
//     .then(res => {
//         console.log('GooglePromise' + res.data.vacancies);
//         return res.data.vacancies
//     });

// let allPromise = Promise.all([MicrosoftPromise, GooglePromise]);

// allPromise
//     .then((res) => {
//         const resMicrosoftPromise = res[0];
//         const resGooglePromise = res[1];
//         return api.sendStudentsCountToItKamasutra(resMicrosoftPromise + resGooglePromise)
//         //раньше мы здесь писали .then, но благодаря return заводим новый .then
//         //и код становится линейным
//     })
//     .then(res => {
//         console.log(res.data);
//         console.log('All ok!');
//     })
//     .catch(() => console.log('Jopa'))

//--------------------------------------------------------------
//теперь запросы идут не один за другим, а зарезолвился один, пошел другой, он зарезолвился-пошел третий
//есть проблема в ретерн нам нужно возвращать результат, а мы должны отправлять следующий промис
//поэтому можно в ретерне создавать объект и в него наваливать кучу, или создать переменные, куда
//заливаем результат: let GoogleCount; let MicrosoftCount;
// let GoogleCount;
// let MicrosoftCount;
// let GoogleCount;
// let MicrosoftPromise = api.getVacanciesCountFromMicrosoft()
//     .then(resMicrosoft => {
//         MicrosoftCount = resMicrosoft;
//         console.log('MicrosoftPromise: ' + MicrosoftCount);
//         return api.getVacanciesCountFromGoogle();
//     })
//     .then(resGoogle => {
//         GoogleCount = resGoogle.data.vacancies
//         console.log('GooglePromise: ' + resGoogle.data.vacancies);
//         return api.sendStudentsCountToItKamasutra(MicrosoftCount + GoogleCount)
//     })
//     .then(res => {
//         console.log('ItKamasutra: ' + res.data.requestedCount);
//     })

//-----------------------------------------------------------------
//делаем через then и async

// function loadVacanciesTHEN() {
//     let MicrosoftCount;
//     let GoogleCount;
//     let MicrosoftPromise = api.getVacanciesCountFromMicrosoft()
//         .then(resMicrosoft => {
//             MicrosoftCount = resMicrosoft;
//             console.log('MicrosoftPromise: ' + MicrosoftCount);
//             return api.getVacanciesCountFromGoogle();
//         })
//         .then(resGoogle => {
//             GoogleCount = resGoogle.data.vacancies
//             console.log('GooglePromise: ' + resGoogle.data.vacancies);
//             return api.sendStudentsCountToItKamasutra(MicrosoftCount + GoogleCount)
//         })
//         .then(res => {
//             console.log('ItKamasutra: ' + res.data.requestedCount);
//         })
// } 
// loadVacanciesTHEN()

// async function loadVacanciesASYNCAWAIT() {
//     try {
//         let MicrosoftCount = await api.getVacanciesCountFromMicrosoft();
//         console.log(MicrosoftCount);
//         let GoogleCount = await api.getVacanciesCountFromGoogle();
//         console.log(GoogleCount.data.vacancies);
//         let res = await api.sendStudentsCountToItKamasutra(MicrosoftCount + GoogleCount.data.vacancies)
//         // debugger
//         console.log('ItKamasutra: ' + res.data.requestedCount);
//     }
//     catch {
//         console.log('error!')
//     }
// }

// loadVacanciesASYNCAWAIT()

//------------------------------------------------------------
//await-значит дождаться результата, но мы сейчас хотим идти вперед не дожидаясь результата 

// async function loadVacanciesASYNCAWAIT() {
//     // debugger
//     let MicrosoftCountPromise = api.getVacanciesCountFromMicrosoft();
//     let GoogleCountPromise = api.getVacanciesCountFromGoogle();

//     let MGResult = await Promise.all([MicrosoftCountPromise, GoogleCountPromise])
//     let res = await api.sendStudentsCountToItKamasutra(MGResult[0] + MGResult[1].data.vacancies)
//     console.log('ItKamasutra: ' + res.data.requestedCount);
// }
// loadVacanciesASYNCAWAIT()

//------------------------------------------------------------
//тоже самое сокращаем

async function loadVacanciesASYNCAWAIT() {
    let MGResult = await Promise.all([api.getVacanciesCountFromMicrosoft(), api.getVacanciesCountFromGoogle()])
    let res = await api.sendStudentsCountToItKamasutra(MGResult[0] + MGResult[1].data.vacancies)
    console.log('ItKamasutra: ' + res.data.requestedCount);
}
loadVacanciesASYNCAWAIT()
