<template>
    <div>
        <h1>{{msg}}</h1>
        <p>The following vue plugins are installed:</p>
        <ul>
            <li><i>vue-router</i>  To Test <router-link to="home">Go to Home</router-link> </li>
            <li><i>vuex</i> <b>{{$store.state.WELCOME}}</b></li>
        </ul>
    </div>
</template>

<script>
    export default{
        name:'Landing',
        data(){
            return{
                msg : '💖 electron-forge-vue with Webpack'
            }
        }
    };
</script>


<style scoped>
    ul {
        list-style: none;
    }

    ul li:before {
      /*content: '✓';*/
      content: '\2611\0020'
    }
</style>