const superagent = require('superagent');
const charset = require('superagent-charset');
charset(superagent);
// const fs = require('fs');
// const http = require('http');
// const path = require('path');
const express = require('express');
const cheerio = require('cheerio');
const fn = require('./utils/fn');  // 调用自定义方法
// console.log(fn);
// 爬取的网址
var baseUrl = 'http://piao.qunar.com';

const app = express();

app.get('/', function(req, res) {
    //设置请求头
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods', '*');

    //网页页面信息是gb2312，所以chaeset应该为.charset('gb2312')，一般网页则为utf-8,可以直接使用.charset('utf-8')
    superagent.get(baseUrl + '/touch')
        .charset('utf-8')
        .end(function(err, sres) {
            if (err) {
                res.json({ code: 400, msg: err, sets: items });
                return false;
            }
            const $ = cheerio.load(sres.text);

            // 爬取轮播
            let swiperImgs = [];
            $('#img-slider img').each((index, item) => {
                let imgUrl = $(item).attr('src');
                swiperImgs.push({id: index, imgUrl});
                // 下载爬取的图片
                fn.downloadImg('img/swiper', imgUrl);
            });
            // 爬取列表图标
            let icon = [];
            $('#category-container .mp-category-item').each((index, item) => {
                let $element = $(item);
                let img = $element.find('img');
                let imgUrl = img.attr('src');
                let title = $element.find('.keywords').text();
                icon.push({id: index, imgUrl, title});
                // 下载爬取的图片
                fn.downloadImg('img/icon', imgUrl);
            });
            // 爬取本周热门榜单
            let hotsale = [];
            $('.mp-hotsale-list .mp-hotsale-item').each((index, item) => {
                let $element = $(item);
                let imgUrl = $element.find('.mp-hotsale-imgcon').find('img').attr('src');
                let title = $element.find('.mp-hotsale-sight').text();
                let price = $element.find('.mpg-price-num').text();
                hotsale.push({id: index, imgUrl, title, price});
                // 下载爬取的图片
                fn.downloadImg('img/host', imgUrl);
            });
            // 爬取猜你喜欢
            let like = [];
            $('.mp-like-item').each((idx, item) => {
                let $element = $(item);
                let title = $element.find('.mp-like-title').text();
                let address = $element.find('.mp-like-address').text();
                let comment_num = parseInt($element.find('.mp-comment-num').text());
                let imgUrl = $element.find('.mp-like-img').attr('src');
                let price = parseInt($element.find('.mpg-price-num').text());
                // let imgName = imgUrl.attr('src').split('/').slice(-1)[0];
                let featur = $element.find('.mp-like-feature');
                let featurText = '';
                if(featur.length) {
                    featurText = featur.text();
                }
                like.push({
                    id: idx,
                    title,
                    imgUrl,
                    address,
                    price,
                    comment_num,
                    featurText
                });
                // 下载爬取的图片
                fn.downloadImg('img/like', imgUrl);
            });
            // 爬取周末去哪儿
            let weekend = [];
            $('#weekend-trip .mp-product-item').each((index, item) => {
                let $element = $(item);
                let imgUrl = $element.find('img').attr('src');
                let name = $element.find('.product-name').text();
                let desc = $element.find('.product-desc').text();
                weekend.push({imgUrl, name, desc});
                // 下载爬取的图片
                fn.downloadImg('img/week/', imgUrl);
            });

            let data = {
                'swiper': swiperImgs,
                'icon': icon,
                'hot': hotsale,
                'like': like,
                'week': weekend
            };

            // 保存数据到本地
            let resData = { code: 200, msg: "数据爬取成功!", data};
            // 下载爬取的城市信息
            fn.saveData('data.json', resData);
            res.json(resData);
        });
});

// 建立http服务
const server = app.listen(8081, function() {
    const host = server.address().address;
    const port = server.address().port;
    console.log("应用实例，访问地址为 http://%s:%s", host, port);
});
