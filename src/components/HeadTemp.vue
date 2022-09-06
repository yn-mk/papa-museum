<template>
  <div class="menu">
    <h1>パパの<br>フリマ博物館<span>Papa's Museum<br>everything from flea markets</span></h1>
    <div class="lang-menu">
      <ul>
        <li>JP</li>
        <li>DE</li>
      </ul>
      
    </div>
      <nav>
    <router-link :to="{ name: 'ItemList' }">Back to Item List</router-link>
    <!--<router-link :to="{ name: 'about' }">About</router-link>-->
    </nav>
  </div>
</template>

<script>

</script>
