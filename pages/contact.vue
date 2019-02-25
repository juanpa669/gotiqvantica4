<template lang="pug">
v-container(grid-list-xs)
  v-flex(xs12 white--text pa-4 id="contact-container" v-cloak)
    v-layout(row wrap align-center)
      v-flex(xs12 lg8 offset-lg2)

        v-card(dark class="mcForm" width="40vw")


        v-card-title
          v-flex(tag="h1" class="headline text-xs-center white--text") {{ $t('Form.title') }}
          v-flex.xs12
            v-form(ref="form")
              v-text-field(
              dark
              height="32"
              browser-autocomplete
              :label="$t('Form.lastName')"
              v-model="contact.lastName"
              v-validate="'required|max:25'"
              data-vv-name="contact.lastName"
              :data-vv-as="$t('Form.lastName')"
              :error-messages="errors.collect('contact.lastName')"
              name="name"
              id="name"
              color="white"
              )

              v-text-field(
              dark
              height="32"
              browser-autocomplete
              :label="$t('Form.firstName')"
              v-model="contact.firstName"
              v-validate="'required|max:25'"
              data-vv-name="contact.firstName"
              :data-vv-as="$t('Form.firstName')"
              :error-messages="errors.collect('contact.firstName')"
              color="white"
              )

              v-text-field(
              dark
              height="32"
              v-model="contact.email"
              browser-autocomplete
              :label="$t('Form.email')"
              v-validate="'required|email'"
              data-vv-name="e-mail"
              :error-messages="errors.collect('contact.email')"
              color="white"
              )

              v-textarea(
              dark
              height="150"
              :label="$t('Form.content')"
              v-model="contact.comment"
              v-validate="'required|max:2000'"
              data-vv-name="contact.comment"
              :error-messages="errors.collect('contact.comment')"
              color="white"
              )

              v-text-field(
              height="32"
              :label="$t('Form.humanTest')"
              name="human"
              data-vv-name="contact.human"
              :data-vv-as="$t('Form.humanTest')"
              hint="6 + 6 = ?"
              v-validate="'required'"
              v-model="contact.human"
              color="white"
              )

          v-layout(
            row
            wrap
            :justify-space-between="$vuetify.breakpoint.mdAndUp"
            :justify-space-around="$vuetify.breakpoint.xs"
            )
            v-flex.xs4.text-xs-center
              v-btn(
              small
              round
              outline
              color="white"
              @click.native.stop="onSubmit"
              )
                | {{ $t('Button.submit') }}

            v-flex.xs4.text-xs-center
              v-btn(small round outline color="white" @click.native.stop="cleanForm()")
                | {{ $t('Button.reset') }}

</template>

<script>
import axios from 'axios'
import { mapGetters } from 'vuex'
import addSnotify from '~/mixins/addSnotification.js'
// import dictionary from '@/i18n/validateDictionary'

export default {
  name: 'ContactForm',
  nuxtI18n: {
    locales: ['en', 'fr', 'es', 'it', 'de']
  },
  data: () => ({
    contact: {
      firstName: '',
      lastName: '',
      email: '',
      comment: '',
      human: ''
    }
  }),

  mixins: [addSnotify],
  head () {
    return {
      title: this.$t('Contact.meta.title'),
      meta: [
        { hid: 'description', name: 'description', content: this.$t('Contact.meta.description') },
        { hid: 'keywords', name: 'keywords', content: this.$t('Contact.meta.keywords') },
        { name: 'twitter:card', content: this.$t('Contact.meta.description') },
        { name: 'twitter:site', content: '@juanpa' },
        { name: 'twitter:creator', content: '@Rina' },
        { name: 'twitter:title', content: this.$t('Contact.meta.title') },
        { name: 'twitter:description', content: this.$t('Contact.meta.description') },
        { name: 'twitter:image', content: 'https://cathedrale-gothique.com/img/main/book/retable.png' },
        { property: 'og:title', content: this.$t('Home.mainTitle') },
        { property: 'og:type', content: 'book' },
        { property: 'og:url', content: 'https://www.cathedrale-gothique.com/' },
        { property: 'og:description', content: this.$t('Contact.meta.description') },
        { property: 'og:image', content: 'https://cathedrale-gothique.com/img/main/book/retable.png' },
        { property: 'fb:app_id', content: '2008683959352956' }
      ]
    }
  },
  computed: {
    ...mapGetters('app', { locale: 'locale' }),
    humanAnswer: _ => '12'
  },

  mounted () {
    // this.$validator.localize(this.locale);
    // this.$validator.locale === this.locale
  },

  methods: {
    onSubmit () {
      if (this.contact.human !== this.humanAnswer) {
        return this.addSnotify({
          text: this.$t('Contact.incorrectHuman'),
          type: 'error',
          position: 'centerTop',
          timeout: 5000,
          bodyMaxLength: '2000px'
        })
      }
      this.$validator.validateAll().then((result) => {
        if (result) {
          this.addSnotify({
            text: this.$t('Contact.submitted'),
            type: 'success',
            position: 'rightTop',
            timeout: 5000
          })
          return this.sendMessage()
        }
        this.addSnotify({
          text: this.$t('Contact.errors'),
          type: 'error',
          postion: 'rightTop',
          timeout: 5000
        })
        return false
      })
    },
    getMsg () {
      return {
        text: `Demande de contact\n\rNom:\t${this.contact.firstName} ${this.contact.lastName}\n\re-mail: ${this.contact.email}\n\rComment:\n\r${this.contact.comment}`,
        html: `<div><table style="background-color: #f6f6f6; font-size: 14px; width: 100%; background-color: #f6f6f6; margin: 0; padding: 0;" bgcolor="#f6f6f6">
        <tbody><tr style="font-size: 14px; margin: 0; padding: 0;">
        <td style="font-size: 14px; vertical-align: top; margin: 0; padding: 0;" valign="top">&nbsp;</td>
        <td style="font-size: 14px; vertical-align: top; display: block; max-width: 600px; clear: both; width: 100%; margin: 0 auto; padding: 0;" valign="top" width="600">
        <div style="font-size: 14px; max-width: 600px; display: block; margin: 0 auto; padding: 10px;">
        <table style="border-collapse: collapse; background-color: #fff; font-size: 14px; border-radius: 3px; background-color: #fff; margin: 0; padding: 0; border: 1px solid #e9e9e9;" width="100%" cellspacing="0" cellpadding="0" bgcolor="#fff">
        <tbody><tr style="font-size: 14px; margin: 0; padding: 0;">
        <td style="font-family: 'Helvetica Neue', 'Helvetica', Helvetica, Arial, sans-serif; font-size: 16px; vertical-align: top; color: #fff; font-weight: 500; text-align: center; border-radius: 3px 3px 0 0; background-color: #ff9f00; margin: 0; padding: 20px;" align="center" valign="top" bgcolor="#ff9f00">Nouveau message.</td></tr>
        <tr style="font-size: 14px; margin: 0; padding: 0;">
        <td style="font-size: 14px; vertical-align: top; margin: 0; padding: 20px;" valign="top">
        <table style="border-collapse: collapse; font-size: 14px; margin: 0; padding: 0;" width="100%" cellspacing="0" cellpadding="0"><tbody>
        <tr style="font-size: 14px; margin: 0; padding: 0;">
        <td style="font-size: 14px; vertical-align: top; margin: 0; padding: 0 0 20px;" valign="top"> <p>Hello Rina voici une nouvelle demande de contact de ${this.contact.firstName} !</p>
        <p><h4><u>Nom</u></h4>${this.contact.firstName}&nbsp;${this.contact.lastName}</p>
        <p><h4><u>e-mail</u></h4>${this.contact.email}</p></td></tr>
        <td style="font-size: 14px; vertical-align: top; margin: 0; padding: 0 0 20px;" valign="top"><p><h4><u>Contenu</u></h4><br />${this.contact.comment}</p></td></tr>
        <tr style="font-size: 14px; margin: 0; padding: 0;">
        <td style="font-size: 14px; vertical-align: top; margin: 0; padding: 0 0 20px;" valign="top">&nbsp;</td></tr>
        <tr style="font-size: 14px; margin: 0; padding: 0;">
        <td style="font-size: 14px; vertical-align: top; margin: 0; padding: 0 0 20px;" valign="top"><small><i><a href="https://cathedrale-gothique.com">Gotiqvantica</a></i></small></td></tr>
        <tr style="font-size: 14px; margin: 0; padding: 0;">
        <td style="font-size: 14px; vertical-align: top; margin: 0; padding: 0 0 20px;" valign="top"><small><i>e-mail envoyé depuis le formulaire de contact rina-sestito-arce-com</i></small></td>
        </tr></tbody></table></td></tr></tbody></table></div></td>
        <td style="font-size: 14px; vertical-align: top; margin: 0; padding: 0;" valign="top">&nbsp;</td></tr></tbody></table></div>`
      }
    },
    sendMessage () {
      let content = this.getMsg()
      let text = content.text
      let html = content.html
      let params = new URLSearchParams()
      let header = { headers: { 'Content-Type': 'application/x-www-form-urlencoded' } }
      params.append('text', text)
      params.append('html', html)
      params.append('to', this.contact.email)
      axios.post('https://cathedrale-gothique.com/php/email.php', params, header)
        .then(response => {
          if (response.status === 200) {
            this.addSnotify({
              text: this.$t('Contact.messageSend'),
              type: 'success',
              postion: 'rightTop',
              timeout: 6000
            })
            this.cleanForm()
          }
        }).catch(error => {
          this.alertErrors({
            text: this.$t('Contact.emailError'),
            errorCode: error.code,
            errorMessage: error.message,
            type: 'error',
            color: 'error',
            postion: 'rightTop',
            timeout: 5000
          })
        })
    },
    cleanForm () {
      this.contact.firstName = ''
      this.contact.lastName = ''
      this.contact.email = ''
      this.contact.comment = ''
      this.contact.human = ''
      this.$validator.reset()
    },
    alertErrors (_obj) {
      return this.addSnotify(_obj)
    }
  }
}
</script>
<style scoped>
h1 {
  font-family: papyrus!important;
}

</style>
