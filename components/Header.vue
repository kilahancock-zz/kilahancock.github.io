<template>
    <div class="headWrap">
        <div class="header">
            <nuxt-link to="/">
                <h1 class="name" @click="sectionHandler('')" :class="{active: activeID == ''}">Kila Hancock</h1>
            </nuxt-link>
            <hr>
        </div>
        <div class="nav">
            <nuxt-link :to="{ path: '/', hash: '#ed'}">
                <span id="ed" @click="sectionHandler('ed')" :class="{active: activeID == 'ed'}">Education</span> 
            </nuxt-link>
            <nuxt-link :to="{ path: '/', hash: '#ex'}">
                <span id="ex" @click="sectionHandler('ex')" :class="{active: activeID == 'ex'}">Experience</span> 
            </nuxt-link>
            <nuxt-link :to="{ path: '/', hash: '#sv'}">
                <span id="sv" @click="sectionHandler('sv')" :class="{active: activeID == 'sv'}">Service</span> 
            </nuxt-link>
        </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
    methods: {
        sectionHandler(sec) {
            this.$store.commit('navActive', sec)
        }
    },
    computed: {
        ...mapGetters({
            activeID: 'getActiveID'
        })
    },
}
</script>

<style scoped>
    @import url('https://fonts.googleapis.com/css2?family=Montserrat&family=Bebas+Neue&display=swap');

    .headWrap {
        background-color: #90a4ae;
    }
    .name {
        font-size: 400%;
        font-family: 'Bebas Neue', sans-serif;
        text-align: left;
        letter-spacing: 2px;
    }
    .header {
        margin-top: 5%;
        margin-bottom: 3%;
    }
    hr {
        width: 40%;
        height: 5px;
        background-color: #fff;
    }
    a {
        text-decoration: none;
        color: #000;
    }
    .nav {
        text-align: center;
        font-family: 'Bebas Neue', sans-serif;
        font-size: 150%;
        margin-bottom: 3%;
    }

    .nav a {
        margin-left: 10%;
        margin-right: 10%;
    }

    .nav a:hover {
        font-weight: bold;
    }

    .active {
        font-weight: bold;
        text-decoration: underline;
    }
</style>