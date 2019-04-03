<template>
    <ul class="alphabet-list">
        <li
            v-for="item of letters"
            :key="item"
            :ref="item"
            @click="handleLetterClick"
            @touchstart="handleTouchStart"
            @touchmove="handleTouchMove"
            @touchend="handleTouchEnd"
        >
            {{item}}
        </li>
    </ul>
</template>
<style scoped lang="stylus">
@import './../../../assets/styles/varibles.styl';
    .alphabet-list
        position: absolute
        top: 2.63rem
        right: 0
        z-index: 999
        li
            padding: .06rem .12rem
            color: $headbgColor
            text-align: center
</style>
<script>
export default {
    name: 'CityAlphabet',
    props: {
        cityList: {
            type: Object
        }
    },
    data() {
        return {
            startY: 0,  // 列表距离顶部的高度
            touchStatus: false,  // 字母列表是否处于滚动状态
            timer: null
        };
    },
    methods: {
        handleLetterClick(e) {
            this.$emit('change', e.target.innerText);
        },
        handleTouchStart() {
            this.touchStatus = true;
        },
        handleTouchMove(e) {
            const _this = this;
            clearTimeout(_this.timer);
            if(_this.touchStatus) {
                // console.log(this.$refs['A'][0].clientHeight);
                // console.log(document.querySelector('.alphabet-list').offsetTop);
                // console.log(e.touches[0].clientY);
                _this.timer = setTimeout(() => {  // 函数节流滚动
                    const height = _this.$refs['A'][0].clientHeight,
                        touchY = e.touches[0].clientY - _this.startY,
                        index = Math.floor(touchY / height);
                    if(index >= 0 && index < _this.letters.length) {
                        _this.$emit('change', _this.letters[index]);
                    }
                }, 16);
            }
        },
        handleTouchEnd() {
            this.touchStatus = false;
        }
    },
    computed: {
        letters() {
            let letters = [];
            for(let i in this.cityList) {
                if(i.length === 1) {
                    letters.push(i);
                }
            }
            return letters;
        }
    },
    mounted() {},
    updated() {
        this.startY = document.querySelector('.alphabet-list').offsetTop;
    }
};
</script>