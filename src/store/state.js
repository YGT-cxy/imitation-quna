<<<<<<< HEAD
let defaultCity = '北京';
try {
    if(localStorage.city) {
        defaultCity = localStorage.city;
    }
} catch(e) {}

export default {
    city: defaultCity,
    cityListIndex: 'domestic'
=======
let defaultCity = '北京';
try {
    if(localStorage.city) {
        defaultCity = localStorage.city;
    }
} catch(e) {}

export default {
    city: defaultCity,
    cityListIndex: 'domestic'
>>>>>>> 抽离接口到api文件，增加serve端文件
};