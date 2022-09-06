<template>
  <router-view />  
</template>

<script>

</script>


<style>
.outer-box {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  display: flex;
  align-items: flex-start;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}

h4 {
  font-size:14px;
}
ul{
  list-style: none;
  padding: 0;
}
li{
  display:block;
  text-align: left;
}
body{font-family: 'Noto Serif JP', serif;color: #3a3a3a;}
.menu{min-width: 240px;margin: 40px;position: sticky;top:40px;left:0;}
.menu > div:first-child{position: sticky;top:40px;}
h1{font-family:  'Kaisei Tokumin', serif;}
h1 span{display: block;font-size: .45em;margin-top: 1em;}
.lang-menu li{display: inline-block;}
.lang-menu li:first-child::after{content:"/";margin:0 8px;}
.lang-menu, .main-menu{margin:2em 0;}
.cate-title{
    text-align: left;
    border-bottom: 1px solid;
    padding-bottom: 0.5em;
    margin-top: 40px;
}
</style>
