<template>
  <div id="app">
    <router-view></router-view>
    <div class="app_modal modal" v-if="newPromo">
      <div class="modal_window">
        <router-link :to="{...$route, query: {...$route.query, newPromo: null}}" class="modal_close">
        </router-link>
        <form class="form form-promo">
          <div class="form_input">
            <label for="promo_name" class="form_inputLabel">Nome</label>
            <input id="promo_name" v-model="name" type="text" class="form_inputString">
          </div>
          <div class="form_input">
            <label for="promo_account" class="form_inputLabel">Conta</label>
            <input id="promo_account" v-model="account" type="text" class="form_inputString">
          </div>
          <div class="form_input">
            <label for="promo_day" class="form_inputLabel">Dia</label>
            <input id="promo_day" v-model="day" type="text" class="form_inputString">
          </div>
          <div class="form_input">
            <label for="promo_hour" class="form_inputLabel">Dia</label>
            <input id="promo_hour" v-model="hour" type="text" class="form_inputString">
          </div>
          <div class="form_actions">
            <button class="button form_button" :class="submitButtonClass">Criar</button>
            <button class="button form_button form_button-cancel">Cancelar</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      newPromo: false,
      name: '',
      account: '',
      day: '',
      hour: '',
    }
  },
  computed: {
    filledFields() {
      return this.name && this.account && this.day && this.hour;
    },
    submitButtonClass() {
      return {
        "form_button-inactive": !this.filledFields,
        "form_button-accept": this.filledFields,
      }
    },
  },
  watch: {
    $route: {
      immediate: true,
      handler() {
        this.newPromo = this.$route.query.newPromo ? true : false;
      }
    }
  }
}
</script>
