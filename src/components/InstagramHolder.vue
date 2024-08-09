<!-- <template>
  <vue-instagram :token="token" :count="5"  mediaType="image">
    <template v-slot:loading="props">
      <h1 v-if="props.loading" class="fancy-loading">Loading, please wait...</h1>
    </template>
    <template v-slot:feeds="props">
      <li class="fancy-list"> {{ props.feed.link }} </li>
    </template>
    <template v-slot:error="props">
      <div class="fancy-alert"> {{ props.error.error_message }} </div>
    </template>
  </vue-instagram>
</template>
  
  
  <script>
  import _ from 'lodash'
  import axios from 'axios'
  
  export default {
    name: 'VueInstagram',
  
    props: 
    {
      /*
      * Instagram access token.
      */
      token:
      {
        type:String,
        default:"IGQWROamlqZAE5CbTZADVVBMM2xKbnpWeldaUk5yTl9rbHI0aEw1MjY5bXUzVi00VElSWDctbkZAsZAi00S0tJUWdiakJSQUNsUENwSi1McFhYUzdsR3ltNHVzUVNacUVOUVFmMUs2dU53ZAFl3WFlQakNKNUJNZAGtyWm8ZD",
      },
      /*
      * Numbers of feed.
      */
      count: 
      {
        type: Number,
        default: 3,
        required: false
      },
  
      /*
      * Filter by media type, ex: video, image.
      */
      mediaType: 
      {
        type: String,
        default: '',
        required: false
      },
  
      /*
      * Filter by tags.
      */
      tags: 
      {
        type: Array,
        default: () => [],
        required: false
      },
  
      // class for container div
      containerClass: 
      {
        type: String,
        default: '',
        required: false
      }
    },
  
    data: () => ({
      error: '',
      loading: false,
      feeds: []
    }),
  
    mounted () 
    {
      this.getUserFeed()
    },
  
    methods: {
      getUserFeed () 
      {
        this.loading = true
        axios.get('https://api.instagram.com/v1/users/self/media/recent', {params: { access_token: this.token, count: this.count }})
        .then(response => 
        {
            this.loading = false
            if (response.data.meta.code === 400) this.error = response.data.meta
            if (response.data.meta.code === 200) 
            {
              if (response.data.meta.code === 200) 
              {
                let { data } = response.data
                const types = ['image', 'video']
  
                if (this.mediaType && types.indexOf(this.mediaType) > -1) 
                {
                  data = _.filter(data, item => this.mediaType === item.type)
                }
  
                if (this.tags.length) 
                {
                  data = _.filter(data, item => _.intersection(this.tags, item.tags).length)
                }
  
                this.feeds = _.slice(_.values(data), 0, this.count)
              }
            }
          }
          )
          .catch(error => { throw error })
      }
    }
  }
  </script> -->