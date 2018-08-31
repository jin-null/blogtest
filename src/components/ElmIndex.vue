<template>
    <div class="view-container">
        <div class="content" v-if="indexData">
            <ul>
                <li v-for="(item,index) in  indexData" :key="index">
                    <p class="abstract" v-html="item.abstract"></p>
                    <img :src="item.large_image_url" alt="">
                </li>
            </ul>
        </div>
    </div>
</template>
<script>
  import axios from 'axios'

  export default {
    name: 'elmIndex',
    data () {
      return {
        indexData: []
      }
    },
    created () {
      this.initIndexData()
      // this.indexData = appData.data
      // console.log(this.indexData)
    },
    methods: {
      initIndexData: function () {
        // axios({
        //   method: 'get',
        //   baseURI: '/api',
        //   url: 'http://api.newblog.test/api/v1/user',
        // }).then(function (response) {
        //     console.log(response)
        //   })
        //   .catch(function (error) {
        //     console.log(error)
        //   })
        this.$http({
          method: 'get',
          url: 'http://api.newblog.test/api/v1/user',
        }).then(function (response) {
          console.log(response)
        })
          .catch(function (error) {
            console.log(error)
          })
      }
    }
  }
</script>
<style>
    img {
        max-width: 100%;
    }

    .view-container .content {
        width: 100%;
        padding: 2%;
    }

    .content ul li .abstract {
        text-align: initial
    }
</style>
