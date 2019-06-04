const pinyin = require('pinyin');
// console.log(pinyin);
// 开启分词模块需要安装 nodejieba
// npm install nodejieba

console.log(pinyin("调顺", {
    style: pinyin.STYLE_NORMAL,
    heteronym: false,              // 启用多音字模式
    // segment: true                 // 启用分词，以解决多音字问题。
}));

const data = '我要排序'.split('');
console.log(data);
const sortedData = data.sort(pinyin.compare);
console.log(sortedData);