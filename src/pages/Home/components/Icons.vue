<<<<<<< HEAD
<template>
    <div class="icon-group">
        <swiper :options="swiperOption">
            <swiper-slide v-for="(page, index) of pages" :key="index">
                <div class="icon" v-for="item of page" :key="item.id">
                    <div class="icon-img">
                        <img class="icon-img-content" :src="item.imgUrl" alt="">
                    </div>
                    <p class="icon-title">{{item.title}}</p>
                </div>
            </swiper-slide>
            <div class="swiper-pagination" slot="pagination"></div>
        </swiper>
    </div>
</template>
<style scoped lang="stylus">
    @import '~./../../../assets/styles/varibles.styl';
    @import '~./../../../assets/styles/mixins.styl';
    .icon-group >>> .swiper-container
        padding-bottom: 50%
        height: .4rem
    .icon-group >>> .swiper-pagination
        bottom: 0
    .icon-group
        background: #fff
        // padding-bottom: 50%
        // height: 0
        // overflow: hidden
    .icon
        position: relative
        padding-bottom: 25%
        float: left
        width: 25%
        height: 0
        text-align: center
        overflow: hidden
        .icon-img
            position: absolute
            left: 0
            right: 0
            top: 0
            bottom: .44rem
            .icon-img-content
                padding: 0 .2rem
                height: 100%
                box-sizing: border-box
        .icon-title
            position: absolute
            left: 0
            right: 0
            bottom: 0
            height: .44rem
            line-height: .44rem
            font-size: .28rem
            ellipsis()

</style>
<script>
export default {
    name: 'HeadIcons',
    props: {
        iconList: {
            type: Array
        }
    },
    data() {
        return {
            swiperOption: {
                pagination: {
                    el: '.swiper-pagination',
                    type: 'bullets',
                }
            },
            // iconList: [
            //     {
            //         id: 1,
            //         iconUrl: 'http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png',
            //         title: '景点门票'
            //     },{
            //         id: 2,
            //         iconUrl: 'http://img1.qunarzz.com/piao/fusion/1804/ff/fdf170ee89594b02.png',
            //         title: '广州必游'
            //     },{
            //         id: 3,
            //         iconUrl: 'http://img1.qunarzz.com/piao/fusion/1803/76/eb88861d78fb9902.png',
            //         title: '动植物园'
            //     },{
            //         id: 4,
            //         iconUrl: 'http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20192/23e0e0f2e3ab69f6644e5625b31c35a1.png',
            //         title: '女神节特惠'
            //     },{
            //         id: 5,
            //         iconUrl: 'http://img1.qunarzz.com/piao/fusion/1803/3e/86314b2af03b7502.png',
            //         title: '珠江夜游'
            //     },{
            //         id: 6,
            //         iconUrl: 'http://img1.qunarzz.com/piao/fusion/1803/ab/6f7d6e44963c9302.png',
            //         title: '泡温泉'
            //     },{
            //         id: 7,
            //         iconUrl: 'http://img1.qunarzz.com/piao/fusion/1804/5a/13ceb38dcf262f02.png',
            //         title: '一日游'
            //     },{
            //         id: 8,
            //         iconUrl: 'http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20193/184e261814a5d07a5d3d08cd29cf590d.png',
            //         title: '长隆度假区'
            //     },{
            //         id: 9,
            //         iconUrl: 'http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20193/c032ae43b15a3dac34b5e07bb0e46850.png',
            //         title: '广州塔'
            //     },{
            //         id: 10,
            //         iconUrl: 'http://img1.qunarzz.com/piao/fusion/1803/bd/9f7b9b2b60c1502.png',
            //         title: '踏青赏花'
            //     }
            // ]
        };
    },
    computed: {
        pages() {
            const pages = [];
            this.iconList.forEach((item, index) => {
                const page = Math.floor(index / 8);
                if(!pages[page]) {
                    pages[page] = [];
                }
                pages[page].push(item);
            });
            return pages;
        }
    }
};
=======
<template>
    <div class="icon-group">
        <swiper :options="swiperOption">
            <swiper-slide v-for="(page, index) of pages" :key="index">
                <div class="icon" v-for="item of page" :key="item.id">
                    <div class="icon-img">
                        <img class="icon-img-content" :src="item.imgUrl" alt="">
                    </div>
                    <p class="icon-title">{{item.title}}</p>
                </div>
            </swiper-slide>
            <div class="swiper-pagination" slot="pagination"></div>
        </swiper>
    </div>
</template>
<style scoped lang="stylus">
    @import '~./../../../assets/styles/varibles.styl';
    @import '~./../../../assets/styles/mixins.styl';
    .icon-group >>> .swiper-container
        padding-bottom: 50%
        height: .4rem
    .icon-group >>> .swiper-pagination
        bottom: 0
    .icon-group
        background: #fff
        // padding-bottom: 50%
        // height: 0
        // overflow: hidden
    .icon
        position: relative
        padding-bottom: 25%
        float: left
        width: 25%
        height: 0
        text-align: center
        overflow: hidden
        .icon-img
            position: absolute
            left: 0
            right: 0
            top: 0
            bottom: .44rem
            .icon-img-content
                padding: 0 .2rem
                height: 100%
                box-sizing: border-box
        .icon-title
            position: absolute
            left: 0
            right: 0
            bottom: 0
            height: .44rem
            line-height: .44rem
            font-size: .28rem
            ellipsis()

</style>
<script>
export default {
    name: 'HeadIcons',
    props: {
        iconList: {
            type: Array
        }
    },
    data() {
        return {
            swiperOption: {
                pagination: {
                    el: '.swiper-pagination',
                    type: 'bullets',
                }
            },
            // iconList: [
            //     {
            //         id: 1,
            //         iconUrl: 'http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png',
            //         title: '景点门票'
            //     },{
            //         id: 2,
            //         iconUrl: 'http://img1.qunarzz.com/piao/fusion/1804/ff/fdf170ee89594b02.png',
            //         title: '广州必游'
            //     },{
            //         id: 3,
            //         iconUrl: 'http://img1.qunarzz.com/piao/fusion/1803/76/eb88861d78fb9902.png',
            //         title: '动植物园'
            //     },{
            //         id: 4,
            //         iconUrl: 'http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20192/23e0e0f2e3ab69f6644e5625b31c35a1.png',
            //         title: '女神节特惠'
            //     },{
            //         id: 5,
            //         iconUrl: 'http://img1.qunarzz.com/piao/fusion/1803/3e/86314b2af03b7502.png',
            //         title: '珠江夜游'
            //     },{
            //         id: 6,
            //         iconUrl: 'http://img1.qunarzz.com/piao/fusion/1803/ab/6f7d6e44963c9302.png',
            //         title: '泡温泉'
            //     },{
            //         id: 7,
            //         iconUrl: 'http://img1.qunarzz.com/piao/fusion/1804/5a/13ceb38dcf262f02.png',
            //         title: '一日游'
            //     },{
            //         id: 8,
            //         iconUrl: 'http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20193/184e261814a5d07a5d3d08cd29cf590d.png',
            //         title: '长隆度假区'
            //     },{
            //         id: 9,
            //         iconUrl: 'http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20193/c032ae43b15a3dac34b5e07bb0e46850.png',
            //         title: '广州塔'
            //     },{
            //         id: 10,
            //         iconUrl: 'http://img1.qunarzz.com/piao/fusion/1803/bd/9f7b9b2b60c1502.png',
            //         title: '踏青赏花'
            //     }
            // ]
        };
    },
    computed: {
        pages() {
            const pages = [];
            this.iconList.forEach((item, index) => {
                const page = Math.floor(index / 8);
                if(!pages[page]) {
                    pages[page] = [];
                }
                pages[page].push(item);
            });
            return pages;
        }
    }
};
>>>>>>> 抽离接口到api文件，增加serve端文件
</script>