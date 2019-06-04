<<<<<<< HEAD
<template>
    <div class="tab-nav">
        <ul class="tab-list">
            <li class="tab-item"
                v-for="(item, index) of cityClass"
                :key="item.id"
                :class="index === classIndex ? 'active': ''"
                @touchstart="switchClass(item.id)"
            >{{item.text}}</li>
        </ul>
    </div>
</template>
<style scoped lang="stylus">
@import './../../../assets/styles/varibles.styl';
    .tab-nav
        padding: .2rem 1rem
        background: $headbgColor
        .tab-list
            border: 1px solid #fff
            border-raduis: .03rem
            overflow: hidden
        .tab-item
            float: left
            width: 50%
            height: .45rem
            line-height: .45rem
            font-size: .28rem
            text-align: center
            text-decoration: none
            color: #fff
            box-sizing: border-box
        .active
            color: $headbgColor
            background: #fff

</style>
<script>
export default {
    name: 'CityTabNav',
    props: {
        cityClass: {
            type: Array
        }
    },
    methods: {
        switchClass(index) {
            this.$emit('changClass', index);
            // console.log(index);
        }
    },
    computed: {
        classIndex() {  // 境内境外切换
            return this.$store.state.cityListIndex === 'domestic'? 0 : 1;
        }
    }
};
=======
<template>
    <div class="tab-nav">
        <ul class="tab-list">
            <li class="tab-item"
                v-for="(item, index) of cityClass"
                :key="item.id"
                :class="index === classIndex ? 'active': ''"
                @touchstart="switchClass(item.id)"
            >{{item.text}}</li>
        </ul>
    </div>
</template>
<style scoped lang="stylus">
@import './../../../assets/styles/varibles.styl';
    .tab-nav
        padding: .2rem 1rem
        background: $headbgColor
        .tab-list
            border: 1px solid #fff
            border-raduis: .03rem
            overflow: hidden
        .tab-item
            float: left
            width: 50%
            height: .45rem
            line-height: .45rem
            font-size: .28rem
            text-align: center
            text-decoration: none
            color: #fff
            box-sizing: border-box
        .active
            color: $headbgColor
            background: #fff

</style>
<script>
export default {
    name: 'CityTabNav',
    props: {
        cityClass: {
            type: Array
        }
    },
    methods: {
        switchClass(index) {
            this.$emit('changClass', index);
            // console.log(index);
        }
    },
    computed: {
        classIndex() {  // 境内境外切换
            return this.$store.state.cityListIndex === 'domestic'? 0 : 1;
        }
    }
};
>>>>>>> 抽离接口到api文件，增加serve端文件
</script>