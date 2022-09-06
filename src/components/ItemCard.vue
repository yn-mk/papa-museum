<template>
  <li class="item-card" :deta-cate="item.category" v-show="item.display">
    <router-link :to="{ name: 'ItemDetails', params: {id: item.id} } ">
      <img :src="'/img/' + item.id + '.png'"/>
      <div class="tag">no.{{ item.id }} <span class="title">{{ item.title }}</span> {{ item.category }}</div>
    </router-link>
  </li>
</template>

<script>
export default {
  props: {
    item: {
      type: Object,
      required: true,
    }
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.category-list li{position: relative;}
.item-card img{width: 100%;}
.tag{
  /*position: absolute;bottom: 0;left: 0;*/
  padding:1em;
  margin: 0;
  font-family: 'Averia Libre', cursive;
  font-size: 14px;
  color: #787878;
  border-bottom: 1px solid #ccc;
}
.tag span{display: block;font-size: 1.25em;}
</style>
