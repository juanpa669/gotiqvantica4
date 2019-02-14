export default {
  methods: {
    addSnotify (toast) {
      const options = {
        timeout: toast.timeout || 6000,
        position: toast.position || 'rightTop',
        showProgressBar: true,
        closeOnClick: true,
        pauseOnHover: false
      }
      switch (toast.type) {
        case 'success': return this.$snotify.success(toast.text, options)
        case 'info': return this.$snotify.info(toast.text, options)
        case 'warning': return this.$snotify.warning(toast.text, options)
        case 'error': return this.$snotify.error(toast.text, options)
      }
    }
  }
}
