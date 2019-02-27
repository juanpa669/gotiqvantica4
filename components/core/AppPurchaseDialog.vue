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
            left
            id="fnacBtn"
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
      amazonUrl: {
        type: String,
        required: false
      },
      fnacUrl: {
        type: String,
        required: false
      },
      name: {
        type: String,
        required: true,
        default: 'gotiqvantica'
      }
    }
  },
  data () {
    return {
      toggle: false,
      currentProduct: this.product.name
    }
  },

  methods: {
    gotoHonore () {
      this.closeDialog()
      window.open(`https//www.editions-saint-honore.com/produit/${this.product.name}/`, '_blank')
    },

    onPurchase (product) {
      console.log(product, 'product')
      if (typeof product === 'boolean') {
        this.toggle = product
      } else {
        this.currentProduct = product
        this.toggle = true
        this.$_bus.$emit('onPurchase')
      }
    },

    closeDialog () {
      // this.toggle = !this.toggle
      this.$emit('onCloseDialog')
    }
  },
  beforeDestroy () {
    return this.$_bus.$off('onPurchase')
  }

}
</script>
