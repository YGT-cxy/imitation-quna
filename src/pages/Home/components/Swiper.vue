<template>
    <div class="wrapper">
        <swiper :options="swiperOption" ref="mySwiper">
            <!-- slides -->
            <swiper-slide v-for="item of swiperList" :key="item.id">
                <img class="swiper-img" :src="item.imgUrl" alt="">
            </swiper-slide>
            <!-- Optional controls -->
            <div class="swiper-pagination" slot="pagination"></div>
        </swiper>
    </div>
</template>
<style scoped lang="stylus">
    .wrapper >>> .swiper-pagination-bullet-active
        background-color: #fff
    .wrapper
        padding-bottom: 28.25%
        width: 100%
        height: 0
        overflow: hidden
        .swiper-img
            width: 100%
            height: 100%
</style>
<script>
export default {
    name: 'HomeSwiper',
    props: {
        swiperList: {
            type: Array
        }
    },
    data() {
        return {
            swiperOption: {
                autoplay: true,
                autoHeight: true,
                loop: true,
                pagination: {
                    el: '.swiper-pagination',
                    type: 'bullets',
                }
            },
            // swiperList: [
            //     {
            //         id: 1001,
            //         imgUrl: 'http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20193/5d157b6ab21b9f6606dd006765f84558.jpg_750x200_f93e4649.jpg'
            //     },
            //     {
            //         id: 1002,
            //         imgUrl: 'http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20193/0a8f7c789d0e62966e2485d33bf7ebd3.jpg_750x200_b455610d.jpg'
            //     },
            //     {
            //         id: 1003,
            //         imgUrl: 'http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20193/700528b360c39d630dda13930a92a1a6.jpg_750x200_80f6150c.jpg'
            //     }
            // ]
        };
    }
};
</script>