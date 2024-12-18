import Vue from 'vue';
import dayObject from './day';

Object.keys(dayObject).forEach(key => {
  Vue.filter(key, dayObject[key]);
})
