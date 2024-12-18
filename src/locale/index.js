import Vue from 'vue'
import Vuei18n from 'vue-i18n'
import zh from './zh'
import en from './en'

Vue.use(Vuei18n);

const i18n = new Vuei18n({
  locale: 'zh',
  // 文案
  messages: {
    zh,
    en
  }
});

export default i18n;

