<<<<<<< HEAD
<template>
    <div id="city">
        <city-header></city-header>
        <city-search></city-search>
        <city-tab-nav :city-class="cityClass" @changClass="changClassIndex"></city-tab-nav>
        <city-list
            :city-list="cityList[cityListIndex]"
            :letter="letter"
        ></city-list>
        <city-alphabet
            :city-list="cityList[cityListIndex]"
            @change="handleLetterChange"
        ></city-alphabet>
    </div>
</template>
<style scoped lang="stylus">
    #city
        font-size: 14px;
</style>
<script>
import CityHeader from './components/CityHeader.vue';
import CitySearch from './components/CitySearch.vue';
import CityList from './components/CityList.vue';
import CityTabNav from './components/CityTabNav.vue';
import CityAlphabet from './components/CityAlphabet.vue';
export default {
    name: 'City',
    components: {
        CityHeader,
        CitySearch,
        CityList,
        CityTabNav,
        CityAlphabet
    },
    data() {
        return {
            cityList: {},  // 地区列表
            cityClass: [],  // 境内境外
            cityListIndex: '',  // 当前所在是境内还是境外
            letter: null
        };
    },
    methods: {
        getCityList() {  // 获取地区列表
            const _this = this;
            _this.$axios.get('/showcity?' + 'time=' + new Date().getTime())
            .then(({data}) => {
                console.log(data);
                if(data.code === 200) {
                    for(let i in data.city) {
                        _this.cityClass.push({text: data.city[i].text, id: i});
                        _this.cityList[i] = data.city[i].data;
                    }
                }
                // console.log(_this.cityList);
                // console.log(_this.cityClass);
            })
            .catch(err => {
                console.log(err);
            });
        },
        handleLetterChange(letter) {  // 监听子组件返回的letter
            // console.log(letter);
            this.letter = letter;
        },
        changClassIndex(index) {
            // console.log('父' + index);
            this.cityListIndex = index;
            this.$store.commit('changeClassIndex', index);
            console.log(this.cityListIndex);
        }
    },
    // beforeMount() {
    //     this.getCityList();
    // },
    mounted() {
        this.getCityList();
    },
    updated() {
        this.cityListIndex = this.$store.state.cityListIndex;
    }
};
=======
<template>
    <div id="city">
        <city-header></city-header>
        <city-search></city-search>
        <city-tab-nav :city-class="cityClass" @changClass="changClassIndex"></city-tab-nav>
        <city-list
            :city-list="cityList[cityListIndex]"
            :letter="letter"
        ></city-list>
        <city-alphabet
            :city-list="cityList[cityListIndex]"
            @change="handleLetterChange"
        ></city-alphabet>
    </div>
</template>
<style scoped lang="stylus">
    #city
        font-size: 14px;
</style>
<script>
import CityHeader from './components/CityHeader.vue';
import CitySearch from './components/CitySearch.vue';
import CityList from './components/CityList.vue';
import CityTabNav from './components/CityTabNav.vue';
import CityAlphabet from './components/CityAlphabet.vue';
export default {
    name: 'City',
    components: {
        CityHeader,
        CitySearch,
        CityList,
        CityTabNav,
        CityAlphabet
    },
    data() {
        return {
            cityList: {},  // 地区列表
            cityClass: [],  // 境内境外
            cityListIndex: '',  // 当前所在是境内还是境外
            letter: null
        };
    },
    methods: {
        getCityList() {  // 获取地区列表
            const _this = this;
            _this.$axios.get('/showcity?' + 'time=' + new Date().getTime())
            .then(({data}) => {
                console.log(data);
                if(data.code === 200) {
                    for(let i in data.city) {
                        _this.cityClass.push({text: data.city[i].text, id: i});
                        _this.cityList[i] = data.city[i].data;
                    }
                }
                // console.log(_this.cityList);
                // console.log(_this.cityClass);
            })
            .catch(err => {
                console.log(err);
            });
        },
        handleLetterChange(letter) {  // 监听子组件返回的letter
            // console.log(letter);
            this.letter = letter;
        },
        changClassIndex(index) {
            // console.log('父' + index);
            this.cityListIndex = index;
            this.$store.commit('changeClassIndex', index);
            console.log(this.cityListIndex);
        }
    },
    // beforeMount() {
    //     this.getCityList();
    // },
    mounted() {
        this.getCityList();
    },
    updated() {
        this.cityListIndex = this.$store.state.cityListIndex;
    }
};
>>>>>>> 抽离接口到api文件，增加serve端文件
</script>