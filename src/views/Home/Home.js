import MyHeader from '@/components/MyHeader/MyHeader'
import { mapState } from 'vuex'

export default {
  name: 'hello',
  components: {
    MyHeader
  },
  data() {
    return {
    }
  },
  mounted() {
    this.$store.dispatch('getArticleList')
  },
  computed: {
    ...mapState([
      'title'
    ])
  }
}
