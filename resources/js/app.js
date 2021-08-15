require('./bootstrap');

import Vue from 'vue';
import App from './todo/app';

const app = new Vue({
	el: '#app',
	components: {App}
});
