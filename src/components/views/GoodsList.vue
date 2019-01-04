<template>
    <div>
      <nav-header></nav-header>
      <nav-bread>
        <span slot="bread">Goods</span>
      </nav-bread>
      <div class="accessory-result-page accessory-page">
        <div class="container">
          <div class="filter-nav">
            <span class="sortby">Sort by:</span>
            <a href="javascript:void(0)" class="default cur">Default</a>
            <a href="javascript:void(0)" class="price">Price <svg class="icon icon-arrow-short"><use xlink:href="#icon-arrow-short"></use></svg></a>
            <a href="javascript:void(0)" class="filterby stopPop" @click="showFilterPop">Filter by</a>
          </div>
          <div class="accessory-result">
            <!-- filter -->
            <div class="filter stopPop" id="filter" :class="{'filterby-show':filterBy}">
              <dl class="filter-price">
                <dt>Price:</dt>
                <dd><a href="javascript:void(0)" :class="{'cur':pickPrice== 'all'}" @click="setPickPrice('all')">All</a></dd>
                <dd v-for="(price,index) in priceFilter" :key="index">
                  <a href="javascript:void(0)" @click="setPickPrice(index)" :class="{'cur':pickPrice==index}">{{price.startPrice}} - {{price.endPrice}}</a>
                </dd>
              </dl>
            </div>

            <!-- search result accessories list -->
            <div class="accessory-list-wrap">
              <div class="accessory-list col-4">
                <ul>
                  <li v-for="goods in goodsList" :key="goods.productId">
                    <div class="pic">
                      <a href="#"><img v-lazy="goods.productImg"></a>
                    </div>
                    <div class="main">
                      <div class="name">{{goods.productName}}</div>
                      <div class="price">{{goods.productPrice}}</div>
                      <div class="btn-area">
                        <a href="javascript:;" class="btn btn--m">加入购物车</a>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="md-overlay" v-show="overLayFlag" @click.stop="closePop"></div>
      <nav-footer></nav-footer>
    </div>
</template>

<script>
  export default {
      name: "GoodsList",
    data(){
      return{
        goodsList:[],
        priceFilter:[
          {
            startPrice:'0.00',
            endPrice:'100.00'
          },
          {
            startPrice:'100.00',
            endPrice:'200.00'
          },
          {
            startPrice:'200.00',
            endPrice:'300.00'
          },
          {
            startPrice:'300.00',
            endPrice:'400.00'
          }
        ],
        pickPrice:'all',
        filterBy:false,
        overLayFlag:false
      }
    },
    created(){
      this.getGoodsList();
    },
    methods:{
      getGoodsList(){
        this.$axios.get("goods")
          .then(res =>{
            this.goodsList = res.data.message;
            console.log(res.data.message);
          })
          .catch(err=>console.log('商品列表获取失败',err))
      },
      setPickPrice(index){
        this.pickPrice = index;
        this.closePop();
      },
      showFilterPop(){
        this.filterBy=true;
        this.overLayFlag=true;
      },
      closePop(){
        this.filterBy=false;
        this.overLayFlag=false;
      }
    }
  }

</script>

<style scoped>

</style>
