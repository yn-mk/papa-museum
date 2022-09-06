<template>
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
</template>

<script>
export default {
 props: {
    category: {
      type: Object,
      required: true,
    }
  },
  }
</script>
