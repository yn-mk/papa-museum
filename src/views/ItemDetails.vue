<template>
<div class="outer-box">
    <HeadTempVue></HeadTempVue>
    <div class="home">
        <div v-if="item" class="item-detail">
            <img :src="'/img/' + item.id + '.png'"/>
            <div class="item-description">
                <h1>{{ item.title }}</h1>
                <p>{{ item.category }}</p>
                <p>Purchase Date: {{ item.date }}</p>
                <p> {{ item.description }}</p>
            </div>
        </div>
    </div>
</div>
</template>

<script>
import EventService from '@/services/EventService'
import HeadTempVue from '@/components/HeadTemp.vue'

export default {
    props: ['id'],
    data(){
        return{
            item: null,
        }
    },
    created(){
        EventService.getEvent(this.id)
        .then(response => {
            this.item = response.data
        })
        .catch(error => {
            console.log(error)
        })
    },
    components:{
        HeadTempVue
    }
}
</script>

<style scoped>
.item-detail{
    display: flex;
    align-items: center;
}
.item-description{
    text-align: left;
}
</style>
