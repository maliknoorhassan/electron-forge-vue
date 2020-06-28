<template>
    <div>
        <h1>HOME PAGE</h1><p> To test the vue-router</p>
        <router-link to="/">Go Back</router-link>
    </div>
</template>

<script>
    export default{
        name:'Home',
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