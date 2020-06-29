<template>
    <div class="nav" keep-alive>
        <nuxt-link to="/education">
            <span id="ed" @click="sectionHandler('ed')">Education</span> 
        </nuxt-link>
        <nuxt-link to="/experience">
            <span id="ex" @click="sectionHandler('ex')">Experience</span> 
        </nuxt-link>
        <nuxt-link to="/service">
            <span id="sv" @click="sectionHandler('sv')">Service</span> 
        </nuxt-link>
    </div>
</template>

<script>
import store from '../store/store.js';
export default {
    methods: {
        sectionHandler(sec) {
            console.log(this.$store)
            for (let i = 0; i < this.$store.state.headers.length; i++) {
                document.getElementById(this.$store.state.headers[i].id).className -= "active"
            }
            document.getElementById(sec).className += "active"
        }
    }
}
</script>

<style scoped>
    .nav {
        text-align: center;
        font-family: 'Bebas Neue', sans-serif;
        font-size: 150%;
    }

    a {
        text-decoration: none;
        color: #000;
        margin-left: 10%;
        margin-right: 10%;
    }

    a:hover {
        font-weight: bold;
    }

    .active {
        font-weight: bold;
    }
</style>