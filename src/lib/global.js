/**
 * Created by admin on 2020/4/27
 */
import Vue from 'vue';
import underscore, { throttle } from 'underscore';

Vue.prototype.$_ = underscore;
Vue.prototype.$throttle = throttle;
