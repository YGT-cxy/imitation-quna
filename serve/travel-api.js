const querystring = require('querystring');
const superagent = require('superagent');
const charset = require('superagent-charset');
charset(superagent);
// const fs = require('fs');
// const http = require('http');
// const path = require('path');
const express = require('express');
const cheerio = require('cheerio');
const pinyin = require('pinyin');  // 引入中文转为拼音的模块
// const fn = require('./fn');
// console.log(pinyin);
// 爬取的网址
var baseUrl = 'http://piao.qunar.com';

const app = express();

// 根据不同的城市爬取不同的数据，URL携带参数city=城市名
app.get('/travel', function(req, res) {
    //设置请求头
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods', '*');

    const city = querystring.escape(req.query.city ? req.query.city : '北京');
    const query = city !=='' ? `/index_${city}.html`: '';
    // return false;

    //网页页面信息是gb2312，所以chaeset应该为.charset('gb2312')，一般网页则为utf-8,可以直接使用.charset('utf-8')
    //http://piao.qunar.com/touch/index_%E6%9D%AD%E5%B7%9E.html
    superagent.get(baseUrl + '/touch' + query)
        .charset('utf-8')
        .end(function(err, sres) {
            if (err) {
                res.json({code: 400, msg: err});
                return false;
            }
            const $ = cheerio.load(sres.text);

            // 爬取轮播
            let swiperImgs = [];
            $('#img-slider img').each((index, item) => {
                let imgUrl = $(item).attr('src');
                swiperImgs.push({id: index, imgUrl});
            });
            // 爬取列表图标
            let icon = [];
            $('#category-container .mp-category-item').each((index, item) => {
                let $element = $(item);
                let img = $element.find('img');
                let imgUrl = img.attr('src');
                let title = $element.find('.keywords').text();
                icon.push({id: index, imgUrl, title});
            });
            // 爬取本周热门榜单
            let hotsale = [];
            $('.mp-hotsale-list .mp-hotsale-item').each((index, item) => {
                let $element = $(item);
                let url = $element.find('.mp-fulllink').attr('href');
                let id = url.split('?')[1].split('&')[0].split('=')[1];  // 唯一ID
                let imgUrl = $element.find('.mp-hotsale-imgcon').find('img').attr('src');  // 图片url
                let title = $element.find('.mp-hotsale-sight').text();  // 地点名
                let price = $element.find('.mpg-price-num').text();  // 门票
                hotsale.push({id, imgUrl, title, price});
            });
            // 爬取猜你喜欢
            let like = [];
            $('.mp-like-item').each((index, item) => {
                let $element = $(item);
                let id = querystring.parse($element.find('.mp-fulllink').attr('href').split('?')[1]).id;  // 根据跳转的URL获取当前的ID
                let title = $element.find('.mp-like-title').text();  // 标题
                let address = $element.find('.mp-like-address').text();  // 地点
                let comment_num = parseInt($element.find('.mp-comment-num').text());  // 评论数
                let imgUrl = $element.find('.mp-like-img').attr('src');  // 图片
                let tag = $element.find('.mp-like-tag').text();
                let price = parseInt($element.find('.mpg-price-num').text());  // 价格
                let featurText = $element.find('.mp-like-feature').text();  // 点评语
                let starlevel = $element.find('.mpf-starlevel').attr('data-score');  // 等级
                like.push({
                    id,
                    tag,
                    title,
                    imgUrl,
                    address,
                    price,
                    comment_num,
                    starlevel,
                    featurText
                });
            });
            // 爬取周末去哪儿
            let weekend = [];
            $('#weekend-trip .mp-product-item').each((index, item) => {
                let $element = $(item);
                let skuId = querystring.parse($element.find('.mp-fulllink').attr('href').split('?')[1]).skuId;
                let imgUrl = $element.find('img').attr('src');
                let name = $element.find('.product-name').text();
                let desc = $element.find('.product-desc').text();
                weekend.push({skuId, imgUrl, name, desc});
            });

            let data = {
                'swiper': swiperImgs,
                'icon': icon,
                'hot': hotsale,
                'like': like,
                'week': weekend
            };

            res.json({ code: 200, msg: "数据爬取成功!", city: querystring.unescape(city), data});
        });
});

// 爬取城市列表信息
app.get('/showcity', function(req, res) {
    //设置请求头
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods', '*');

    superagent.get(baseUrl + '/touch/toNewCityList.htm')
        .charset('utf-8')
        .end(function(err, sres) {
            if (err) {
                res.json({code: 400, msg: err});
                return false;
            }
            const $ = cheerio.load(sres.text);

            // 境内 #city-domestic
            const domestic = $('#city-domestic');
            const domestic_lists = domestic.find('.mp-list').not('.mp-tr3');  // 取得一个列表集合，在集合中取消热门城市
            const domestic_lists_hot = domestic.find('.mp-tr3');  // 取得热门城市
            let domestic_obj = {};
            let domestic_index = 0;  // 计数
            let domestic_items_hot = [];
            // console.log(domestic_lists_hot);
            domestic_lists_hot.find('a').each((index, item) => {  // 国内热门城市
                const $item = $(item);  // 找到城市的a标签
                const text = $item.text();  // 获取城市的文本
                const py = pinyin(text, {  // 城市的拼音
                    style: pinyin.STYLE_NORMAL,
                    heteronym: false
                }).toString().replace(/,/g, '');

                domestic_items_hot.push({id: 999 + index, name: text, spell: py});
            });
            domestic_obj['热门城市'] = domestic_items_hot;
            domestic_lists.each((index, list) => {
                // 找到同级上一个元素
                const $list = $(list);
                const title = $(list).prev().text();
                let oAs = $list.find('a');
                let items = [];
                oAs.each((i, item) => {
                    const $item = $(item);  // 找到城市的a标签
                    const text = $item.text();  // 获取城市的文本
                    const py = pinyin(text, {  // 城市的拼音
                        style: pinyin.STYLE_NORMAL,
                        heteronym: false
                    }).toString().replace(/,/g, '');

                    items.push({id: ++domestic_index, name: text, spell: py});
                });
                domestic_obj[title] = items;
            });

            // 境外 #city-foreign
            const foreign = $('#city-foreign');
            const foreign_lists = foreign.find('.mp-list').not('.mp-tr3');  // 取得一个列表集合，在集合中取消热门城市
            const foreign_lists_hot = domestic.find('.mp-tr3');  // 取得热门城市
            let foreign_obj = {};
            let foreign_index = 0;  // 计数
            let foreign_items_hot = [];
            foreign_lists_hot.find('a').each((index, item) => {  // 国内热门城市
                const $item = $(item);  // 找到城市的a标签
                const text = $item.text();  // 获取城市的文本
                const py = pinyin(text, {  // 城市的拼音
                    style: pinyin.STYLE_NORMAL,
                    heteronym: false
                }).toString().replace(/,/g, '');

                foreign_items_hot.push({id: 9999 + index, name: text, spell: py});
            });
            foreign_obj['热门城市'] = foreign_items_hot;

            foreign_lists.each((index, list) => {
                // 找到同级上一个元素
                const $list = $(list);
                const title = $(list).prev().text();
                let oAs = $list.find('a');
                let items = [];
                oAs.each((i, item) => {
                    const $item = $(item);  // 找到城市的a标签
                    const text = $item.text();  // 获取城市的文本
                    const py = pinyin(text, {  // 城市的拼音
                        style: pinyin.STYLE_NORMAL,
                        heteronym: false
                    }).toString().replace(/,/g, '');

                    items.push({id: ++foreign_index, name: text, spell: py});
                });
                foreign_obj[title] = items;
            });
            const data = {
                code: 200,
                msg: "数据爬取成功!",
                city: {
                    domestic: {
                        data: domestic_obj,
                        text: '境内'
                    },
                    foreign: {
                        data: foreign_obj,
                        text: '境外·港澳台'
                    }
                }
            };
            // fn.saveData('city-list-pinyin.json', data);
            res.json(data);
        })
})

// 爬取详情页面  参数 detail_id=唯一ID
app.get('/detail', function(req, res) {
    //设置请求头
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods', '*');

    const detail_id = req.query.detail_id ? req.query.detail_id : 187229;

    superagent.get(baseUrl + '/touch/detail.htm?id=' + detail_id)
        .charset('utf-8')
        .end(function(err, sres) {
            if (err) {
                res.json({code: 400, msg: err});
                return false;
            }
            const $ = cheerio.load(sres.text);

            const header = $('.mp-headfigure');  // 头部
            const header_img = header.find('.mp-headfigure-img').attr('src');  // 图片
            const header_title = header.find('.mp-headfeagure-title').text();  // 地点名
            const header_img_num = header.find('.mp-imgswipeicon-number').text();  // 图片数量

            let head_data = {
                imgUrl: header_img,
                title: header_title,
                imgNum: header_img_num
            };

            const baseinfo = $('.mp-baseinfo');  // 基础信息
            const address = $('#card-adress').text().slice(1, -1);  // 位置
            const score = baseinfo.find('.mp-commentcard-score').text();  // 评分
            const desc = baseinfo.find('.mp-commentcard-desc').text();  // 评价
            const totalcommentnums = baseinfo.find('.mp-totalcommentnum');  // 评论条数和攻略数
            let comment = 0, strategy = 0;
            totalcommentnums.each((index, item) => {
                if(index) {
                    strategy = parseInt($(item).text());
                } else {
                    comment = parseInt($(item).text());
                }
            });

            const recommend_list = $('.mp-promote .mp-ticket-item');  // 推荐去哪儿
            let recommend_data = [];
            recommend_list.each((index, item) => {
                const $item = $(item);
                const title = $item.find('h6').text();
                const price = $item.find('.mp-price-num').text();
                recommend_data.push({
                    title,
                    price
                });
            });

            let data = {
                code: 200,
                msg: '数据爬取成功',
                data: {
                    header: head_data,
                    baseinfo: {
                        address,
                        score,
                        desc,
                        comment,
                        strategy
                    },
                    recommend: recommend_data
                }
            };
            res.json(data);
        })
})

// 周末去哪儿的旅游地点  skuId
app.get('/weekend', function(req, res) {
    //设置请求头
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods', '*');

    const skuId = req.query.skuId ? req.query.skuId : 104;

    superagent.get(baseUrl + '/touch/toSku.htm?skuId=' + skuId)
        .charset('utf-8')
        .end(function(err, sres) {
            if (err) {
                res.json({code: 400, msg: err});
                return false;
            }
            const $ = cheerio.load(sres.text);
            let resArr = [];
            const week_items = $('.mpp-product-item');
            const title = $('h1').text();
            week_items.each(function(index, item) {
                const $item = $(item);
                let resData = {
                    id: index,
                    imgUrl: $item.find('img').attr('data-original-src'),
                    name: $item.find('.product-name').text(),
                    desc: $item.find('.product-desc').text(),
                    price: $item.find('.mpp-product-price em').text()
                };
                resArr.push(resData);
            });
            const data = {
                code: 200,
                msg: "数据爬取成功!",
                data: {
                    title,
                    weekData: resArr
                }
            };
            // fn.saveData('city-list.json', data);
            res.json(data);
        })
});

// 建立http服务
const server = app.listen(8888, function() {
    const host = server.address().address;
    const port = server.address().port;
    console.log("应用实例，访问地址为 http://%s:%s", host, port);
});
