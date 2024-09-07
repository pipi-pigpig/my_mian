<template>
  <div class="logo">
    <logo-mode></logo-mode>
  </div>
  <div class="nav">
    <router-link to="/mainMode" :class="{ 'active':( $route.path == '/mainMode')}">
      
      <index-nav :is-active="$route.path === '/mainMode'"></index-nav>
    </router-link>
    <router-link to="/healthPage" :class="{ 'active':( $route.path == '/healthPage') }">
      <health-nav :is-active="$route.path === '/healthPage'">
      </health-nav>
    </router-link>
    <router-link to="/personPage" :class="{ 'active': ($route.path == '/personPage')}">
      <person-nav  :is-active="$route.path == '/personPage'">
        
      </person-nav>
    </router-link>
    

  </div>

</template>

<script>
import {onMounted } from 'vue'
import { useRouter } from 'vue-router'
import logoMode from './logo/logoMode.vue'
import healthNav from './nav/healthNav.vue'
import indexNav from './nav/indexNav.vue'
import personNav from './nav/personNav.vue'
export default {
  name: 'sideNav',
  setup(){
    const router = useRouter()
    onMounted(() => {
      router.push({path: '/mainMode'})
    })
    return{
      
    }
  },
  components: {
  logoMode,
  indexNav,
  healthNav,
  personNav
  },
  
}
</script>

<style scoped>

.nav {
  display: flex;
  flex-direction: column;
  gap: 2.5vw;
  height: 50%;
  padding: auto;
  align-items: center;
  justify-content: center;
}
</style>