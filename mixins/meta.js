export default {
  data: () => ({
    _description: {},
    _keywords: {}
  }),

  computed: {
    currentRoute () { return this.$route.name === null ? 'Home' : this.$route.name },
    title () {
      return this.$t('default.' + this.currentRoute + '.meta.title')
    },
    description () {
      return this.$t('default.' + this.currentRoute + '.meta.description')
    },
    keywords () {
      return this.$t('default.' + this.currentRoute + '.meta.keywords')
    }
  },

  watch: {
    $route: 'setMeta',
    meta: {
      deep: true,
      handler: 'setMeta'
    }
  },

  mounted () {
    this.bootstrapMeta()
  },

  methods: {
    bootstrapMeta () {
      this._description = document.querySelector('meta[name="description"]')
      this._keywords = document.querySelector('meta[name="keywords"]')

      this.setMeta()
    },
    setMeta () {
      document.title = this.title
      this._description.setAttribute('content', this.description)
      this._keywords.setAttribute('content', this.keywords)
    }
  }
}
