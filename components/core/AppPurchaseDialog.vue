<template lang="pug">
  v-dialog(
    v-model="dialog"
    persistant
  )
    v-card(dark style="background-color:#222!important;max-width:320px").mx-auto
      v-card-title.headline
        v-flex.text-xs-center {{$t('Dialog.title')}}
      v-card-text
        v-flex(v-html="$t('Dialog.alert')").text-xs-center
        v-flex(text-xs-center mt-2)
          img(src="/img/icons/st-honore.jpg" alt="amazon" width="150px")

      v-card-actions
        v-layout
          v-flex(xs12 text-xs-center)
            v-btn(
              color="orange"
              outline
              @click.native="gotoHonore"

            ) {{ $t('Button.purchaseDialog') }}
      v-divider.my-2

      v-flex.text-xs-center {{ $t('Dialog.availableText') }}

      v-layout(justify-space-around py-3 wrap)
        v-flex.xs2
          v-btn(
            id="amazonBtn"
            icon
            :href="product.amazonUrl"
            target="_blank"
          )
            img(src="/img/icons/amazon-icon-22.png" alt="amazon" width="75px")

        v-flex.xs2
          v-btn(
            left id="amazonBtn"
            icon
            :href="product.fnacUrl" target="_blank"
          )
            img(src="/img/icons/logo-fnac.png" alt="amazon" width="50px")
      v-layout(justify-center wrap)
        v-flex.xs4
          v-btn(
            outline
            color="orange"
            v-t="'Button.close'"
            @click.native.prevent.stop="closeDialog"
          )
</template>

<script>
export default {
  name: 'AppPurchaseDialog',
  props: {
    dialog: {
      type: Boolean,
      required: false,
      default: false
    },
    product: {
      type: Object,
      required: true,
      default: {
        amazonUrl: {
          type: String,
          required: true,
          default: 'https://www.amazon.fr/Gotiqvantica-Rina-Sestito-Arce/dp/2407004094/ref=sr_1_1?ie=UTF8&qid=1512692037&sr=8-1&keywords=gotiqvantica'
        },
        fnacUrl: {
          type: String,
          required: false,
          default: 'https://livre.fnac.com/a11193768/Rina-Sestito-Arce-Gotiqvantica/'
        },
        name: {
          type: String,
          required: false,
          default: 'gotiqvantica'
        }
      }
    }
  },

  data () {
    return {
      toggle: false,
      currentProduct: 'gotiqvantica'
    }
  },
  mounted () {
    // this.$_bus.$on('onPurchase', this.onPurchase)
  },

  methods: {
    gotoHonore () {
      this.closeDialog()
      window.open(`http://www.editions-saint-honore.com/produit/${this.currentProduct}/`, '_blank')
    },

    onPurchase (product) {
      console.log(product, 'product')
      if (typeof product === 'boolean') {
        this.toggle = product
      } else {
        this.currentProduct = product
        this.toggle = true
        this.$_bus.$emit('onPurchase', 'gotivantica')
      }
    },

    closeDialog () {
      // this.toggle = !this.toggle
      this.$emit('onCloseDialog')
    }
  }

}
</script>
