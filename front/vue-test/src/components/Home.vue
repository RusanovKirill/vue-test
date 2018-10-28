<template>
  <div class="main__wrap--table">
    <div
      v-for="item in post" 
      :key="item.alias"
      class="main__wrap--coloum"
      >
      {{item.alias}}
      <div class="main__wrap--content"
      >
        <router-link v-if="item.status=='SUCCESS'" :to="'/InfoPage/'+item.alias" class="main__link">
          <i class="fas fa-plus"></i>
        </router-link>
        <router-link v-else-if="item.status=='CRASH'" :to="'/InfoPage/'+item.alias" class="main__link wrap--style">
          <i class="fas fa-times"></i>
        </router-link>
        <div v-if="item.status == 'NO_DATA'">
          <router-link :to="'/Noinfo/'" class="main__link">
            <i class="fas fa-minus"></i>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import axios from 'axios';
import InfoPage from './InfoPage.vue';

export default {
  data () {
    return {
      post: [],
      error: []
    }
  },
  mounted() {
    axios
      .get('http://localhost:3001/mainpage')
      .then(res => {
        this.post = res.data
      })
      .catch( e => {
        this.error.push(e)
      })
  },
  components:{
    'secondaryPage':InfoPage
  },
  methods:{
      gameData: function() {
        this.post
    }
  }

}
</script>

<style scoped>
.main__wrap--table{
  display: flex;
  width: 500px;
  margin: 40px;
  border: 1px solid #000;
  margin-left: auto;
  margin-right: auto;
}
.main__wrap--content{
  border-top: 1px solid #000;
}
.main__wrap--coloum{
  width: 33.3333%;
  text-align: center;
  font-size: 20px
}
.main__link {
  font-size: 14px;
  font-weight: 300;
  text-transform: uppercase;
  color: #000;
}
.fa-plus{
  color: green;
}
.fa-times{
  color: red;
}
.fa-minus{
  color: #000;
}
</style>
