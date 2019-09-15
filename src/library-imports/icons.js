// Icons
import Vue from 'vue'
import { library } from '@fortawesome/fontawesome-svg-core'

import { faClone, faClock, faUpload, faAngleDown, faAngleRight, faAngleLeft, faAngleUp, faVideo, faPlusCircle, faTrash, faTimes, faPaperPlane } from '@fortawesome/free-solid-svg-icons'

library.add([faClone, faClock, faUpload, faAngleDown, faAngleRight, faAngleLeft, faAngleUp, faVideo, faPlusCircle, faTrash, faTimes, faPaperPlane]);

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
Vue.component('fa-icon', FontAwesomeIcon)