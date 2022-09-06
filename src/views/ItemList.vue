<template>
<div class="outer-box">
  <div class="menu">
    <h1>パパの<br>フリマ博物館<span>Papa's Museum<br>everything from flea markets</span></h1>
    <div class="lang-menu">
      <ul>
        <li>JP</li>
        <li>DE</li>
      </ul>
      
    </div>

  <p class="cate-title">Filter<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-filter-left" viewBox="0 0 16 16">
  <path d="M2 10.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5z"/>
</svg></p>
  <ul class="catebox">
    <li class="catename" v-for="category in category_lists" :key="category">
    <input type="checkbox" 
                    v-bind:id="category" 
                    v-bind:value="category" 
                    v-model="preview"
                    @change="find_categories">
                    <label>{{ category }}</label>
                </li>
  </ul>
  </div>
  <div class="home">
    <div class="category-list">
        <ItemCard v-for="item in items" :key="item.id" :item="item"/>
    </div>
  </div>

</div><!--outer-box-->
</template>

<script>
import ItemCard from "@/components/ItemCard.vue";
import EventService from "@/services/EventService.js";

export default {
  name: "ItemList",
  components: {
    ItemCard,
  },
  data() {
    return {
      items: null,
      category_lists: ['plate','beermug','cup','glass','ornament'],
      preview:[]
    };
  },
  created(){
    EventService.getEvents()
    .then(response => {
      this.items = response.data
    })
    .catch(error => {
      console.log(error)
    })
  },
  methods: {
    find_categories: function(){
      var items = this.items;
      var preview = this.preview;
      this.$emit('my-click', this.preview);
      this.$nextTick(function(){
        if(preview.length > 0){
          for (var i = 0; i < items.length; i++) {
            var categories = items[i].category;
            for (var j = 0; j < preview.length; j++) {
              if(categories.indexOf(preview[j]) >= 0){
                items[i].display = true;
                break;
              } else {
                items[i].display = false;
              }
            }
          }
        } else {
          for ( i = 0; i < items.length; i++) {
            categories = items[i].category;
            items[i].display = true;
          }
        }
      })
    }
  }
};
</script>
<style scoped>
.category-list{display: grid;  gap:4vw 2vw; grid-template-columns: repeat(4, 1fr);}
</style>
