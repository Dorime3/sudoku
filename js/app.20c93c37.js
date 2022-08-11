(function(){"use strict";var c={5801:function(c,t,e){var o=e(6369),i=function(){var c=this,t=c._self._c;return t("div",[t("NavBar"),t("div",{staticClass:"sudoku-wrapper"},[t("div",{staticStyle:{display:"flex","align-items":"center"}},[t("h1",{staticClass:"main-title"},[c._v(" Решалкин судок ")]),t("div",{staticStyle:{display:"inline-block",margin:"5px 0 0 10px"}},[t("vs-tooltip",{attrs:{shadow:"",bottom:"","not-hover":""},scopedSlots:c._u([{key:"tooltip",fn:function(){return[t("div",{staticClass:"content-tooltip"},[t("div",{staticClass:"body"},[t("vs-avatar",{ref:"avatarContent",attrs:{circle:"",size:"80"}},[t("img",{attrs:{src:"https://banner2.cleanpng.com/20180528/lyp/kisspng-citron-cactus-m-cartoon-flowerpot-prickly-5b0cb1d8b18e71.3609451315275586167273.jpg",alt:""},on:{load:c.closeLoading}})])],1),t("footer",[c._v(" Для поиска решения используется алгоритм DFS(в глубину), рекурсивно вызывающий функцию обратного вызова для перебора всех подходящих значений для каждой ячейки таблицы. Натягивая сову на глобус, я частично смог провалидировать вводимые данные и извещать об ошибке пользователя. Поэтому есть вероятность не выйти из цикла, что приведет к забитию колстека, выделяемым вкладке браузером. "),t("div",{staticStyle:{display:"flex","justify-content":"center"}},[t("vs-button",{attrs:{gradient:""},on:{click:function(t){c.showInfo=!c.showInfo}}},[c._v(" Я понял, давай пока 👋 ")])],1)])])]},proxy:!0}]),model:{value:c.showInfo,callback:function(t){c.showInfo=t},expression:"showInfo"}},[t("vs-button",{attrs:{icon:"",warn:"",gradient:"","animation-type":"rotate"},on:{click:function(t){c.showInfo=!c.showInfo}},scopedSlots:c._u([{key:"animate",fn:function(){return[t("i",{staticClass:"bx bxs-cog"})]},proxy:!0}])},[t("i",{staticClass:"bx bx-cog"})])],1)],1)]),t("div",{staticClass:"grid-sudoku"},c._l(c.table,(function(e,o){return t("div",{key:o,staticClass:"grid-row"},c._l(e,(function(e,i){return t("div",{key:i,staticClass:"grid-cell"},[t("input",{key:i,staticClass:"grid-cell-editor",attrs:{type:"text"},domProps:{value:c.table[o][i]},on:{input:function(t){return c.setNumber(t,o,i)}}})])})),0)})),0),t("div",{staticStyle:{display:"flex","margin-top":"5px"}},[t("vs-button",{attrs:{color:"rgb(59,222,200)",gradient:"",disabled:!c.isShowLogs},on:{click:function(t){c.activeDialog=!c.activeDialog}}},[c._v(" Показать логи ")]),t("vs-button",{attrs:{gradient:"",danger:""},on:{click:c.clearTable}},[c._v("Очистить поле")]),t("vs-button",{attrs:{gradient:""},on:{click:c.resolveSudoku}},[c._v("Решить судоку")])],1),t("vs-dialog",{attrs:{blur:""},scopedSlots:c._u([{key:"header",fn:function(){return[t("h4",[c._v(" Отслеживание логов ")])]},proxy:!0}]),model:{value:c.activeDialog,callback:function(t){c.activeDialog=t},expression:"activeDialog"}},[t("div",[c._v(" "+c._s(c.logs)+" ")])]),t("div",{staticClass:"promo-block"},[t("PromoBlock")],1)],1),t("div",{staticStyle:{display:"flex","justify-content":"space-between"}},[t("div",{staticStyle:{width:"50px"}},[t("vs-switch",{attrs:{dark:""},on:{click:c.changeTheme},scopedSlots:c._u([{key:"circle",fn:function(){return[c.darkTheme?t("i",{staticClass:"bx bxs-moon",staticStyle:{color:"#fff"}}):t("i",{staticClass:"bx bxs-sun"})]},proxy:!0}]),model:{value:c.darkTheme,callback:function(t){c.darkTheme=t},expression:"darkTheme"}})],1),c._m(0)])],1)},s=[function(){var c=this,t=c._self._c;return t("div",{staticStyle:{"font-size":"12px",display:"flex","align-items":"flex-end"}},[t("p",[c._v("@created by Родион")])])}],a=function(){var c=this,t=c._self._c;return t("div",[t("vs-navbar",{attrs:{"center-collapsed":""},scopedSlots:c._u([{key:"left",fn:function(){return[t("img",{staticStyle:{width:"44px",height:"44px"},attrs:{src:e(9135),alt:""}})]},proxy:!0},{key:"right",fn:function(){return[t("vs-button",{attrs:{href:"https://github.com/Dorime3",transparent:"",size:"small",circle:""}},[t("i",[t("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",width:"36px",height:"36px"}},[t("path",{attrs:{fill:"#283D5B",d:"M346.4,231.4c-3.2-7.2-6.5-14.5-6.5-22.6c0-6.8,3.1-12.4,3.8-18.9c0.3-2.6,0.2-4.3-2.6-5c-2.8-0.6-5.4-0.5-8.1,0.4c-5.3,1.7-11.4,5.1-15,9.7c-0.2,3.5-4.1,6.8-7.7,4c-12.7-9.8-31.6-10.1-46.9-9.5c-14.4,0.6-29.8,2.3-43.5,7c-0.8,0.3-1.7,0.4-2.4,0.3c-1.2,0-2.5-0.5-3.6-1.5c-3.8-3.7-7.7-7.3-11.9-10.5c-4.4-3.3-10.1-7.8-15.8-8.1c-11.2-0.6-4.1,19.8-1.5,28.9c2.1,1.4,3.2,4.2,1.5,6.9c-4.8,7.2-13.5,12.8-16.5,21.2c-2.9,8.2-2.6,16.7-0.6,25.1c1.7,7.6,4.7,14.4,9.5,20.6c3.7,4.8,9.9,12.6,16.9,11.3c1.5-0.3,2.8,0.1,3.8,0.8c12.8,1.9,23.3,12,26.3,24.6c3.4,14.6-4.9,27.3-18.8,32.1c-14.6,5.1-28.1,0.4-35-13.4c-2.3-4.5-3.6-9.8-6.5-14c-1.9-2.7-4.3-3.8-7.1-4c2.2,10.8,1,22.9,9.4,31.1c9.5,9.2,22.5,7,34.5,8c9,0.8,15.6,5.7,13.8,15.5c-1.1,6.2-3.6,12.3-5.7,18.3c-2.1,6.1-2.5,11.3-2.6,17.5c1.5,0.2,3.1,0.5,4.6,0.7c29.4,3.7,59.2-1.1,86.4-12.5c-0.6-1.5-0.6-3.3,0.7-5c1.8-2.4,1.7-6.5,1.6-9.3c-0.2-4.8-0.9-9.7-2.1-14.4c-1.9-7.8-4.1-16.4-8.6-23.1c-5.3-8-12.9-15.6-14.2-25.5c-1.1-8.4,3.4-21.5,13.1-22.4c1.2-0.1,2.3,0.2,3.1,0.7c9.4-1.2,19-2.8,27.9-6.1c8.5-3.2,15.4-7.6,21.7-14.1c5.4-5.6,9.9-12.6,10.4-20.5C352.7,246.9,349.9,239.1,346.4,231.4z"}}),t("path",{attrs:{fill:"#D6E5E5",d:"M405.9,222.7c-11-49-51-88.4-98.4-103.1c-22.4-6.9-46.3-9.3-69.4-5.1c-20.5,3.7-39.1,12.9-56.4,24.3c-18.5,12.3-36.1,27-49.3,45.1c-9.3,12.8-16.7,28.3-16.2,44.2c0,0.1-0.1,0.3-0.1,0.4c-0.3,5.6-0.9,11.1-1.4,16.7c-0.5,0.2-0.9,0.3-1.4,0.4c-0.6,6.6-1.6,13.3-1.8,20c-0.2,7-0.2,14,0.2,21.1c0.7,13.8,2.5,27.6,6.2,40.9c5.6,19.8,15,38.9,30.3,53c13.9,12.8,31.1,20.6,49.2,24.7v-0.7c0-0.2,0-0.5,0-0.7c0.1-4.9,0.5-9.5,2.2-14.5c2-6.2,4.8-12.5,6-18.9c0.6-3.4,0.6-3.9-2.8-4.4c-5.1-0.7-10.4-0.3-15.6-0.6c-6.1-0.4-12.4-1.3-17.9-4c-5.6-2.8-9.3-6.6-13.1-11.5c-8-10.4-5-24-9.6-35.6c-0.9-2.3,0.5-5.8,3.1-6.4c10.1-2.3,19.6-0.4,24.7,9.4c3.9,7.3,6,18.8,14.6,22.2c11,4.3,27.8-4.4,27-17.2c-0.7-11.3-9.4-20.2-20.6-21.3c-0.5,0-0.9-0.1-1.3-0.3c-8.4,0.2-15.8-5.7-21.1-12c-6-7.1-10.6-15.1-13-24.1c-2.8-10.6-3.7-21.3-0.7-31.9c2.7-9.5,10.3-15.4,16.1-22.7c-1.4-9.1-5.8-17.7-5.5-27.1c0.2-7.2,5.3-15.5,13.1-16.2c13.8-1.2,26.4,10.2,36,19.6c14.9-4.6,30.9-6.5,46.4-6.9c14.9-0.4,32.3,0.4,45.7,8c4.8-5.5,12.1-9.5,18.8-11.7c7-2.3,16.7-2.1,21.5,4.3c4.6,6,1.7,14.3-0.3,20.7c-2.9,9.4,0.4,17.7,4.3,26.2c4.1,9.1,7.7,19.1,6.7,29.3c-1,9.3-5,17.4-11.1,24.4c-6.9,7.9-15.1,14.2-25,17.9c-11.2,4.2-22.8,6.5-34.6,7.9c-0.9,0.1-1.7,0-2.4-0.2c-1,1.2-2.4,3.9-2.7,4.9c-0.7,2-0.8,4.1-0.4,6.2c0.9,4.6,3.9,8.8,6.6,12.5c4.8,6.6,9,12.9,11.8,20.7c3,8.4,5.4,17.4,6.2,26.3c0.4,4.4,0.5,9-0.6,13.3c15.7-7.8,30.2-17.9,43-29.8C390.2,325.7,417.6,274.8,405.9,222.7z"}}),t("path",{attrs:{fill:"#D6E5E5",d:"M477.2,172.1c-21.3-43.4-61.6-77.5-104.2-99C330.3,51.4,280.8,40,232.9,47.6C154,60,77.6,117.9,55,195.5c0,0.9-0.2,1.7-0.7,2.6c-0.4,1.4-0.8,2.9-1.1,4.3c-0.5,1-1,2-1.4,3.1c-0.1,0.9-0.3,1.9-0.4,2.7c-0.9,4.1-2,8.2-2.7,12.3c-1.4,7.7-1.1,15.7-3.8,23c-0.2,2.1-0.5,4.2-0.8,6.3c0,0.3,0,0.5,0,0.7c-0.5,4.4-0.9,8.8-1.3,13.2c-0.8,9.2-1.2,18.4-1.1,27.6c0.3,18.1,2.4,36.2,6.9,53.7c8.7,33.3,25.5,64.8,52,87.3c18.2,15.5,39.5,25.7,62.4,32.3c25,7.3,51,11.4,77.1,11.5c51.5,0.1,103.2-13.9,145.6-43.7C464.1,377.2,523.2,265.6,477.2,172.1z M248.3,418.3c-46.2,4.2-96.9-9.2-123.2-50.1c-11.4-17.7-18-38.1-21.1-58.8c-1.6-10.8-2.5-21.7-2.5-32.6c0-5.7,0.1-11.4,0.4-17.1c0.4-6.3,1.6-12.5,1.8-18.7c0.1-2.4,1.6-4.1,3.5-4.8c-3.5-21.2,5.1-41.9,17.8-59c15-20.3,35.2-37,56.6-50.2c17.7-10.9,36.5-19.5,57.2-22.8c23-3.7,47.1-1.8,69.4,5.1c46.6,14.5,88.1,49.6,103.6,96.9C445.4,308.6,346.2,409.4,248.3,418.3z"}}),t("path",{attrs:{d:"M228,38.3c-8.6,1.5-17.1,3.5-25.5,5.9h124.2C294.6,35.3,260.8,32.6,228,38.3z"}}),t("path",{attrs:{d:"M476.9,151.2c-25.2-40.4-65.9-71.6-108.7-91.6c-13.4-6.2-27.3-11.4-41.6-15.4H202.5C130.4,65.3,65.6,121.4,45.1,193.9c-3.3,5.5-3.8,13.1-5.2,19.2c-1,4.3-1.7,8.7-2.3,13.1c-0.1,0.4-0.1,0.9-0.2,1.3c-0.1,0.3-0.2,0.5-0.2,0.8c-0.8,4.2-1.5,8.4-2.1,12.6c0,0.1-0.1,0.1-0.1,0.2c-0.5,1.2-0.6,2.3-0.4,3.2c-1,8.1-1.7,16.2-2.3,24.3c-0.8,11.4-0.9,22.9-0.3,34.3c1.3,22.3,5.6,44.5,13.3,65.5c15.3,41.8,45.5,76.5,86.1,95.3c23.1,10.6,48.8,16.7,73.9,20c25.5,3.3,51.5,3.1,77-0.6c50.9-7.4,98.5-29.7,136.1-64.8c36.4-33.9,65-77.6,78.1-125.8C509.7,244.6,503.4,193.6,476.9,151.2z M385.6,432.5c-42.4,29.8-94.1,43.8-145.6,43.7C214,476.1,188,472,163,464.7c-22.9-6.7-44.2-16.8-62.4-32.3c-26.5-22.5-43.3-54-52-87.3c-4.6-17.5-6.6-35.6-6.9-53.7c-0.2-9.2,0.2-18.4,1.1-27.6c0.4-4.4,0.8-8.8,1.3-13.2c0-0.2,0-0.5,0-0.7c0.3-2.1,0.6-4.2,0.8-6.3c2.7-7.3,2.4-15.4,3.8-23c0.8-4.1,1.8-8.2,2.7-12.3c0.2-0.8,0.3-1.7,0.4-2.7c0.4-1,0.9-2.1,1.4-3.1c0.4-1.4,0.7-2.9,1.1-4.3c0.5-0.9,0.8-1.8,0.7-2.6C77.6,117.9,154,60,232.9,47.6c47.9-7.6,97.3,3.8,140.1,25.5c42.6,21.5,82.8,55.7,104.2,99C523.2,265.6,464.1,377.2,385.6,432.5z"}}),t("path",{attrs:{fill:"#010101",d:"M411.7,206.3c-15.6-47.3-57-82.4-103.6-96.9c-22.3-6.9-46.3-8.8-69.4-5.1c-20.7,3.3-39.5,11.8-57.2,22.8c-21.4,13.2-41.5,30-56.6,50.2c-12.7,17.1-21.3,37.8-17.8,59c-1.8,0.7-3.4,2.3-3.5,4.8c-0.2,6.2-1.5,12.5-1.8,18.7c-0.3,5.7-0.4,11.4-0.4,17.1c0.1,10.9,0.9,21.8,2.5,32.6c3.1,20.7,9.7,41.1,21.1,58.8c26.3,40.8,77,54.2,123.2,50.1C346.2,409.4,445.4,308.6,411.7,206.3z M299.2,390.3c-1.3,1.7-1.3,3.5-0.7,5c-27.2,11.4-57,16.2-86.4,12.5c-1.5-0.2-3.1-0.4-4.6-0.7c0.1-6.2,0.5-11.4,2.6-17.5c2-6,4.5-12.1,5.7-18.3c1.8-9.8-4.9-14.7-13.8-15.5c-12.1-1-25,1.1-34.5-8c-8.5-8.1-7.2-20.3-9.4-31.1c2.8,0.1,5.2,1.2,7.1,4c2.9,4.2,4.3,9.4,6.5,14c6.9,13.9,20.4,18.5,35,13.4c13.8-4.8,22.2-17.5,18.8-32.1c-3-12.6-13.5-22.7-26.3-24.6c-1-0.7-2.2-1.1-3.8-0.8c-7,1.3-13.1-6.5-16.9-11.3c-4.8-6.2-7.7-13-9.5-20.6c-1.9-8.4-2.3-16.9,0.6-25.1c3-8.4,11.7-13.9,16.5-21.2c1.8-2.7,0.6-5.5-1.5-6.9c-2.6-9.2-9.7-29.5,1.5-28.9c5.8,0.3,11.5,4.8,15.8,8.1c4.2,3.2,8.2,6.8,11.9,10.5c1.1,1.1,2.3,1.5,3.6,1.5c0.8,0.1,1.6,0,2.4-0.3c13.7-4.7,29.1-6.5,43.5-7c15.3-0.6,34.2-0.3,46.9,9.5c3.6,2.8,7.5-0.5,7.7-4c3.6-4.6,9.6-8,15-9.7c2.8-0.9,5.3-1,8.1-0.4c2.9,0.6,2.9,2.4,2.6,5c-0.7,6.5-3.8,12.1-3.8,18.9c0,8,3.2,15.4,6.5,22.6c3.5,7.7,6.3,15.6,5.7,24.1c-0.5,8-5,14.9-10.4,20.5c-6.3,6.5-13.2,11-21.7,14.1c-8.9,3.3-18.5,5-27.9,6.1c-0.8-0.5-1.8-0.8-3.1-0.7c-9.7,0.9-14.2,14-13.1,22.4c1.3,9.9,8.9,17.5,14.2,25.5c4.5,6.7,6.7,15.3,8.6,23.1c1.1,4.7,1.8,9.5,2.1,14.4C301,383.8,301.1,387.9,299.2,390.3z M353,360.3c-12.8,11.9-27.4,22-43,29.8c1.1-4.3,1-8.9,0.6-13.3c-0.8-8.9-3.2-17.9-6.2-26.3c-2.8-7.8-7-14-11.8-20.7c-2.7-3.8-5.7-7.9-6.6-12.5c-0.4-2.1-0.3-4.2,0.4-6.2c0.3-1,1.7-3.7,2.7-4.9c0.7,0.2,1.5,0.4,2.4,0.2c11.8-1.4,23.4-3.7,34.6-7.9c9.9-3.7,18-10,25-17.9c6.1-7,10.2-15.1,11.1-24.4c1-10.2-2.6-20.2-6.7-29.3c-3.8-8.6-7.2-16.8-4.3-26.2c2-6.4,4.9-14.7,0.3-20.7c-4.8-6.4-14.5-6.6-21.5-4.3c-6.7,2.2-14,6.2-18.8,11.7c-13.4-7.7-30.8-8.4-45.7-8c-15.5,0.4-31.5,2.2-46.4,6.9c-9.6-9.4-22.2-20.8-36-19.6c-7.8,0.7-12.9,9.1-13.1,16.2c-0.3,9.3,4.1,18,5.5,27.1c-5.8,7.3-13.4,13.3-16.1,22.7c-3,10.6-2.1,21.3,0.7,31.9c2.4,9,7,17,13,24.1c5.3,6.3,12.7,12.2,21.1,12c0.4,0.1,0.8,0.2,1.3,0.3c11.2,1.1,19.9,9.9,20.6,21.3c0.8,12.7-16.1,21.4-27,17.2c-8.6-3.4-10.8-14.8-14.6-22.2c-5.1-9.8-14.6-11.7-24.7-9.4c-2.6,0.6-4,4-3.1,6.4c4.6,11.6,1.5,25.2,9.6,35.6c3.8,4.9,7.5,8.7,13.1,11.5c5.5,2.7,11.8,3.6,17.9,4c5.2,0.3,10.4-0.1,15.6,0.6c3.4,0.5,3.4,1,2.8,4.4c-1.2,6.4-4,12.7-6,18.9c-1.6,5-2.1,9.6-2.2,14.5c0,0.2,0,0.5,0,0.7v0.7c-18.2-4.1-35.3-11.9-49.2-24.7c-15.3-14.1-24.8-33.2-30.3-53c-3.7-13.3-5.5-27.1-6.2-40.9c-0.4-7-0.4-14-0.2-21.1c0.2-6.7,1.2-13.3,1.8-20c0.5-0.1,1-0.2,1.4-0.4c0.5-5.6,1.1-11.1,1.4-16.7c0-0.1,0-0.3,0.1-0.4c-0.5-15.9,6.9-31.3,16.2-44.2c13.1-18.1,30.7-32.8,49.3-45.1c17.2-11.4,35.9-20.6,56.4-24.3c23.2-4.2,47-1.8,69.4,5.1c47.4,14.7,87.4,54.1,98.4,103.1C417.6,274.8,390.2,325.7,353,360.3z"}})])])]),t("vs-button",{attrs:{href:"https://steamcommunity.com/profiles/76561198286490898",transparent:"",size:"small",circle:""}},[t("i",[t("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 48 48",width:"36px",height:"36px"}},[t("path",{attrs:{fill:"#4b7bb2",d:"M19.325,43.979c7.857,2.062,16.683-1.18,21.837-7.336c1.572-1.878,2.847-4.016,3.564-6.34 c1.301-4.219,0.693-8.817-0.776-12.983c-1.036-2.939-2.543-5.801-4.907-7.88c-1.115-0.98-2.394-1.763-3.67-2.533 c-2.386-1.439-4.872-2.881-7.646-3.274c-3.945-0.558-7.831,1.075-11.468,2.67c-2.062,0.905-4.16,1.832-5.848,3.302 c-2.378,2.072-3.724,5.025-4.878,7.929c-1.41,3.55-2.653,7.391-1.83,11.113c0.333,1.507,0.993,2.925,1.72,4.293 c0.445,0.838,0.921,1.668,1.551,2.383c0.671,0.762,1.5,1.374,2.322,1.979c1.924,1.417,3.06,2.453,4.984,3.87 c1.706,1.256,4.315,2.94,6.439,3.158"}}),t("path",{attrs:{fill:"#d6e5e5",d:"M38.299,17.764c-0.221-1.247-0.387-3.398-1.116-4.433c-1.45-2.056-4.148-2.959-6.659-2.799 c-3.047,0.195-6.113,2.002-7.15,4.873c-0.336,0.929-0.452,1.927-0.444,2.915c0.003,0.38,0.023,0.771-0.103,1.13 c-0.101,0.288-0.288,0.536-0.473,0.779c-1.191,1.566-1.382,3.133-2.574,4.699c-0.241,0.317-0.498,0.647-0.862,0.81 c-0.4,0.179-1.858,0.126-2.296,0.152c-1.032,0.059-2.027,0.596-2.643,1.427L13.9,27.627c-3.346-1.339-6.596-3.423-9.856-4.719 c0,0-0.603,1.531-0.603,3.505c0,1.728,0.778,3.622,0.778,3.622c2.753,1.022,5.505,2.044,8.258,3.067l-0.023,0.087 c-0.046,0.971,0.356,1.955,1.068,2.616c0.385,0.357,0.849,0.62,1.328,0.836c1.519,0.684,3.293,0.91,4.866,0.36 c1.573-0.55,2.883-1.956,3.07-3.612c0.062-0.547,0.017-1.143,0.323-1.601c0.165-0.248,0.415-0.424,0.659-0.594 c1.849-1.29,3.967-2.479,5.816-3.769c2.914-0.252,6.048-0.906,7.674-3.338C38.59,22.094,38.718,20.124,38.299,17.764z"}}),t("path",{attrs:{fill:"#010101",d:"M45.8,22.893c-0.508-4.363-2.103-8.995-4.968-12.386c-1.514-1.791-3.468-3.01-5.453-4.211 c-1.897-1.148-3.815-2.36-5.994-2.894c-4.502-1.104-9.26,0.366-13.341,2.23c-1.979,0.904-3.937,1.964-5.627,3.345 c-1.686,1.378-2.919,3.212-3.883,5.146c-1.037,2.081-1.911,4.294-2.593,6.516c-0.714,2.328-1.136,4.782-0.78,7.212 c0.346,2.36,1.476,4.717,2.809,6.678c0.947,1.393,2.195,2.431,3.514,3.459c2.881,2.246,5.792,4.42,9.191,5.822 c0.796,0.328,1.612,0.622,2.46,0.785c3.945,0.697,7.981,0.406,11.692-1.155c3.697-1.555,6.88-4.228,9.318-7.391 c1.379-1.789,2.496-3.798,3.132-5.973C45.955,27.753,46.079,25.289,45.8,22.893z M43.047,32.853 c-3.648,6.735-10.955,11.405-18.679,11.104c-0.997-0.039-1.986-0.153-2.968-0.326c-3.257-0.627-6.163-2.613-8.788-4.535 c-1.386-1.014-2.78-2.032-4.07-3.166c-1.395-1.226-2.326-2.768-3.133-4.429c-1.079-2.219-1.574-4.516-1.297-6.981 c0.264-2.357,1.073-4.627,1.942-6.819c0.761-1.917,1.596-3.829,2.78-5.528c1.216-1.745,2.833-3.018,4.652-4.089 c3.641-2.144,7.891-3.902,12.163-4.018c2.267-0.062,4.333,0.379,6.349,1.423c1.882,0.974,3.762,2.108,5.494,3.329 c3.585,2.526,5.551,6.599,6.656,10.74C45.335,24.007,45.278,28.734,43.047,32.853z"}}),t("path",{attrs:{fill:"#010101",d:"M4.086,30.517c2.832,1.052,5.663,2.103,8.495,3.155c1.297,0.482,2.606,1.086,3.961,1.38 c1.075,0.233,2.251,0.203,3.117-0.559c1.683-1.482,1.58-4.429-0.38-5.586c-0.947-0.559-2.06-0.722-3.104-1.013 c-1.288-0.359-2.53-0.866-3.74-1.433c-2.776-1.3-5.41-2.888-8.258-4.034c-0.597-0.24-0.856,0.727-0.266,0.964 c4.355,1.753,8.229,4.55,12.835,5.681c0.89,0.219,1.935,0.429,2.581,1.136c0.792,0.867,0.612,2.315-0.041,3.212 c-0.733,1.006-2.014,0.83-3.064,0.516c-1.183-0.354-2.334-0.84-3.491-1.269c-2.793-1.037-5.587-2.075-8.38-3.112 C3.747,29.328,3.487,30.295,4.086,30.517L4.086,30.517z"}}),t("path",{attrs:{fill:"#010101",d:"M11.954,33.188c-0.049,3.006,2.982,4.514,5.634,4.616c2.529,0.097,5.202-1.466,5.656-4.105 c0.106-0.614-0.028-1.35,0.451-1.824c0.563-0.557,1.382-0.965,2.047-1.388c0.657-0.418,1.319-0.826,1.978-1.241 c0.327-0.206,0.654-0.414,0.979-0.625c0.322-0.21,0.658-0.525,1.01-0.673c0.483-0.203,1.221-0.164,1.751-0.248 c0.637-0.101,1.27-0.233,1.889-0.416c1.162-0.344,2.272-0.865,3.2-1.653c2.098-1.782,2.696-4.611,2.35-7.232 c-0.305-2.313-0.455-4.877-2.344-6.493c-3.773-3.228-10.315-2.173-12.983,1.978c-0.877,1.364-1.143,2.955-1.141,4.553 c0.001,0.472-0.03,0.845-0.291,1.246c-0.239,0.366-0.517,0.701-0.739,1.079c-0.44,0.75-0.745,1.567-1.12,2.349 c-0.32,0.667-0.808,1.793-1.506,2.138c-0.443,0.219-1.114,0.128-1.595,0.132c-1.399,0.012-2.662,0.451-3.553,1.582 c-0.394,0.5,0.309,1.212,0.707,0.707c0.782-0.993,1.78-1.278,2.991-1.291c0.984-0.01,1.862,0.01,2.561-0.783 c0.89-1.009,1.36-2.252,1.924-3.451c0.534-1.136,1.563-2.067,1.623-3.366c0.066-1.444,0.084-2.793,0.821-4.09 c0.575-1.011,1.434-1.834,2.423-2.437c1.973-1.203,4.427-1.56,6.655-0.935c1.15,0.322,2.228,0.912,3.04,1.798 c0.773,0.843,0.991,1.918,1.174,3.015c0.398,2.382,0.88,4.836-0.335,7.07c-1.184,2.177-3.404,3.081-5.741,3.489 c-0.564,0.098-1.132,0.162-1.702,0.219C29.11,26.974,28.546,27.53,28,27.882c-1.206,0.778-2.438,1.515-3.636,2.305 c-0.533,0.352-1.179,0.696-1.578,1.207c-0.393,0.503-0.426,1.104-0.475,1.717c-0.109,1.35-0.939,2.48-2.112,3.127 c-2.42,1.336-7.299,0.303-7.244-3.051C12.964,32.544,11.964,32.544,11.954,33.188L11.954,33.188z"}}),t("path",{attrs:{fill:"#010101",d:"M35.565,17.868c-0.492-2.308-2.591-3.998-4.895-4.23c-0.082-0.008-0.153,0.002-0.213,0.024 c-2.28,0.148-3.978,1.938-4.406,4.145c-0.217,1.122-0.211,2.38,0.348,3.406c0.475,0.872,1.31,1.481,2.215,1.85 c0.818,0.333,1.854,0.594,2.725,0.336c0.432-0.128,0.844-0.316,1.264-0.476c0.399-0.152,0.813-0.243,1.201-0.429 C35.57,21.648,35.94,19.628,35.565,17.868z M33.773,21.352c-0.542,0.409-1.272,0.542-1.897,0.79 c-0.32,0.127-0.654,0.28-0.994,0.345c-0.336,0.064-0.711-0.017-1.041-0.089c-0.781-0.168-1.548-0.497-2.117-1.071 c-0.67-0.676-0.839-1.584-0.795-2.507c0.099-2.102,1.49-4.141,3.742-4.182c1.608,0.162,3.106,1.28,3.716,2.779 C34.888,18.65,34.942,20.468,33.773,21.352z"}})])])]),t("vs-tooltip",{attrs:{shadow:"",bottom:"","not-hover":"",color:"#afd4ff"},scopedSlots:c._u([{key:"tooltip",fn:function(){return[t("div",{staticStyle:{"font-size":"20px"}},[c._v("🙅")])]},proxy:!0}]),model:{value:c.showBan,callback:function(t){c.showBan=t},expression:"showBan"}},[t("vs-button",{attrs:{transparent:"",size:"small",circle:""},on:{click:function(t){c.showBan=!c.showBan}}},[t("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",width:"36px",height:"36px"}},[t("path",{attrs:{fill:"#71C598",d:"M166.1,75c-4.2-0.1-8.3-0.2-12.5,0c0.7,29.1,5.4,59.3-2,87.8c1.9,0.3,3.7,0.7,5.5,1.3c2,0.6,3.6,1.4,5,2.4c1.7-4.8,1.8-10.5,1.9-15.3c0.2-7.2,0-14.5,0.2-21.7c0.3-9.4,2.1-18.6,2.2-28C166.5,92.6,166.2,83.8,166.1,75z"}}),t("path",{attrs:{fill:"#FCBF95",d:"M312.5,177.2c-23.1-15.5-53.1-20.5-79.7-11.8c-25,8.1-47.1,26.4-48.5,54.2c-0.1,2.1-1.1,3.5-2.5,4.2c-3.2,31.2,5,67.6,33.4,85c32.2,19.7,74.7,21.9,108.5,4.7C379.7,284.9,355.3,205.9,312.5,177.2z M316.3,290.9c-15.4,12.3-36,17.2-55.5,16.6c-18.7-0.6-41-6.5-53.1-21.9c-15.9-20.2-11.9-46.3-7-69.8c0-0.7,0.1-1.4,0.5-2.2c0-0.2,0.1-0.4,0.1-0.6c0.3-1.5,1-2.6,2-3.3c31.5-53.8,118.3-27.9,130.5,29.2C337.9,258.6,332.1,278.3,316.3,290.9z"}}),t("path",{attrs:{fill:"#283D5B",d:"M306 212c-26.3-25-75.1-31.4-94.2 5.5-4.8 22.8-10.3 52.3 11.8 67.6 16.3 11.3 38.5 13.4 57.5 9.5 17.2-3.6 35.6-13.2 41.1-31.2C327.8 245.3 319.2 224.5 306 212zM293 255.3c0 1.7-.6 3.6-2.2 4.5-13.9 7.8-33.5 14.1-48.3 4.9-4.7-2.9-7.3-7.7-8.1-13.1-.5-3.3.3-9-2.1-11.7-3-3.3-.7-7.9 2.4-8.9 6-12.9 24.8-17.7 37.7-15.1 7.9 1.6 15.4 5.9 18.8 13.5C294.7 237.8 293.1 246.7 293 255.3zM406.9 101.2c-8.2-3.2-17.4-2.7-26-2.5-5.6.1-16.9-2.1-21.2 2.8-3.6 4.2-2.6 11.8-2.4 16.9.1 4.4.4 8.9 0 13.3-.4 4-2 9.2.4 12.8.5.1 1 .2 1.5.4 6.2 2.6 12.5 3.8 19.3 3.2 5.4-.5 10.2-.7 15.6-.1 7.7.8 18.9 3.3 22.6-5.5C421.8 130.3 421.2 106.8 406.9 101.2z"}}),t("path",{attrs:{fill:"#283D5B",d:"M282.6,235.3c-2.1-5.9-7.3-8.9-13.3-9.7c-9.1-1.2-22.7,1.6-26.3,11.3c-0.2,0.5-0.4,0.9-0.6,1.2c0.7,1.8,1.1,3.8,1.3,5.9c0.3,3.5-0.1,7.9,2.3,10.8c3.9,4.7,13.1,4.8,18.5,4.1c6.6-0.9,12.8-3.2,18.7-6.2C283.6,246.9,284.5,240.6,282.6,235.3z"}}),t("path",{attrs:{fill:"#C56528",d:"M446.1,117.8C436.5,98,417.8,84.5,397,78.3c-24.4-7.3-48.8-5.4-73.8-3.1c-31.3,2.9-62.8,6.6-94.3,5.1c-11.7-0.5-23.3-1.9-35-3.2c0,18.9-0.6,37.8-1.5,56.6c-0.5,10.5-0.9,21-2.1,31.4c-0.3,2.5-0.5,6.1-1.4,9h2.7c0.8,0,1.5,0.2,2.1,0.4c21.1-19.6,54.4-28.2,82.2-23.6c18.4,3,35.4,11,49.6,22.3c0.7-0.4,1.5-0.6,2.5-0.6c24.7,0,49.5,0.5,74.2,0.6c12.4,0.1,24.7,0.1,37.1-0.2c3.3-0.1,6.6-0.1,9.8-0.2c2.2-0.1,4.8-0.4,7.2-0.4C456.5,153.7,454.3,134.6,446.1,117.8z M422,152.6c-7.7,7.9-19.8,6-29.8,5c-6.4-0.6-12.6,0.6-19,0.4c-6.4-0.2-12.4-1.9-18.4-4.4c-0.9-0.4-1.5-0.8-1.9-1.4c-1.1-0.2-2.1-0.8-3-1.8c-6.1-7.2-2.2-18.4-2.4-26.8c-0.2-7.8-1.4-16.9,1.8-24.3c3.2-7.4,10.9-10.4,18.5-10.7c9.9-0.5,20.3-0.7,30.2,0.3c9.2,0.9,19.1,3.9,24.6,12c5,7.3,6.8,16.9,6.7,25.7C429.2,135.2,428.3,146.1,422,152.6z"}}),t("path",{attrs:{fill:"#4B7BB2",d:"M176.1,75.5c0.2,9.7,0.5,19.3,0.1,29c-0.4,8.9-2.1,17.6-2.2,26.5c-0.1,8.2,0.1,16.4-0.4,24.6c-0.4,6.1-0.8,13-4.1,18.4c-0.1,0.1-0.1,0.2-0.2,0.3h9c0.1-0.9,0.5-1.8,1-2.6c0-0.1,0-0.2,0.1-0.3c0.3-1.2,0.5-2.4,0.7-3.7c0.5-3.5,0.8-6.9,1.1-10.4c0.8-10,1.3-20.1,1.7-30.1c0.6-16.5,1.1-33,1.2-49.5c0-0.5,0.1-1,0.2-1.4C181.5,75.9,178.8,75.7,176.1,75.5z"}}),t("path",{attrs:{fill:"#C56528",d:"M94.9,133.9c-1-12.7-3.1-25.5-3.7-38.2c-5.6,4.2-10.8,8.8-15.7,13.7c0,0.2,0,0.3,0,0.5c0,23,1,45.9,1.9,68.9c0.1,0,0.1,0,0.2,0h15c0.2,0,0.5,0,0.7,0.1c-1.3-2.4-0.7-5.7,1.9-7c0-0.1,0-0.3,0.1-0.5c0.1-0.5,0.2-1,0.3-1.5c0.5-3.1,0.6-6.2,0.6-9.3C96.2,151.6,95.6,142.7,94.9,133.9z"}}),t("path",{attrs:{fill:"#D6E5E5",d:"M158.1,177.3c-1.3-3.4-4.4-4.1-7.7-4.6c-7.2-1.1-14.4-0.5-21.6-0.5c-5.8,0-13.4,0.9-18.3,4.2c-4.1,2.7-5.8,6.7-6.3,11.3c0.9,0.1,1.8,0.5,2.6,1.3c6.5,6,19.2,4.3,27.1,3.2c8.4-1.1,16.9-2.9,24.8-5.9C159,183.2,159.2,179.9,158.1,177.3z"}}),t("path",{attrs:{fill:"#FCBF95",d:"M452.4,285.9c-2.7-27.6,0-54.6,2.3-82.1c0.6-6.7,1.1-13.5,1.4-20.5c-0.1-0.1-0.3-0.2-0.4-0.3c0,0,0,0-0.1-0.1c-0.4,0.1-0.9,0.1-1.7-0.1l-2,0.1c-1.3,0-2.6,0.1-3.9,0.1c-2.6,0.1-5.2,0.1-7.9,0.2c-5.2,0.1-10.4,0.2-15.6,0.2c-10.4,0.1-20.8,0-31.1-0.1c-19.1-0.2-38.3-0.5-57.5-0.5c17.9,18.4,29.7,42.9,31.6,69.2c1.9,26.3-7.9,52-30.6,66.8c-24.2,15.8-56,21-84.4,15.8c-26-4.8-53.2-17-67.4-40.3c-13.4-21.9-17.3-48-14.4-73.2c0.2-1.9,1.2-3.2,2.4-4c0.8-12.6,5.3-23.6,12.1-32.9h-15.4c-0.5,0-1-0.1-1.4-0.2c0,1.8,0,3.5,0,5.3c0,2.4-1.1,4.1-3.3,5.1c-10.6,4.6-22.8,7.2-34.3,8.1c-10,0.8-22.8,1.2-30.7-6.1c-0.2-0.2-0.4-0.4-0.5-0.6c-2.7,0.6-5.7-0.8-5.7-4.3c0-1,0.1-2,0.1-3c-0.2,0-0.5,0.1-0.8,0.1h-15c-0.2,0-0.4,0-0.6,0c0.4,10.6,0.7,21.2,0.9,31.9c0.2,15.3,0.4,30.7-0.8,46c-1.1,14.4-3.1,28.8-4.8,43.2c-3.3,27.8-7.1,59.4,3.6,86.2c16.9,42.5,69.5,44.9,108.4,42c31.7-2.3,63.4-6.9,95.3-7.1c26.1-0.2,51.9,4.4,78,4.7c22.5,0.3,46.9-2,66.2-14.8c20.8-13.8,30.4-36.2,32.4-60.5C459,335.4,454.8,310.6,452.4,285.9z"}}),t("path",{attrs:{fill:"#EF4823",d:"M108.5,84.9c-2.5,1.3-5,2.6-7.4,4.1c0.2,16.8,3.2,33.7,4.3,50.4c0.6,9.3,1.2,18.8,0.5,28.1c3.7-2.1,7.9-3.5,12.2-4.3V80.9C114.8,82.1,111.6,83.4,108.5,84.9z"}}),t("path",{attrs:{fill:"#FEBF10",d:"M143.6,75.6c-5.2,0.5-10.5,1.3-15.6,2.5v84.2c0,0,0,0,0,0c4.1-0.1,8.4-0.3,12.6-0.3c0.2-1.1,0.7-1.9,1.4-2.6C148.8,132.2,144.3,103.4,143.6,75.6z"}}),t("path",{attrs:{d:"M333.7 239c-12.2-57.1-99-83-130.5-29.2-1 .8-1.7 1.9-2 3.3 0 .2-.1.4-.1.6-.3.8-.5 1.5-.5 2.2-4.9 23.5-8.9 49.5 7 69.8 12.1 15.4 34.5 21.3 53.1 21.9 19.5.6 40.1-4.3 55.5-16.6C332.1 278.3 337.9 258.6 333.7 239zM322.3 263.4c-5.5 17.9-23.9 27.6-41.1 31.2-19.1 3.9-41.2 1.8-57.5-9.5-22-15.3-16.6-44.9-11.8-67.6 19.1-36.9 67.9-30.5 94.2-5.5C319.2 224.5 327.8 245.3 322.3 263.4zM422.5 101c-5.4-8-15.4-11-24.6-12-9.8-1-20.3-.8-30.2-.3-7.6.3-15.3 3.3-18.5 10.7-3.2 7.4-2 16.4-1.8 24.3.2 8.5-3.7 19.7 2.4 26.8.9 1 1.9 1.6 3 1.8.5.6 1.1 1 1.9 1.4 5.9 2.4 11.9 4.2 18.4 4.4 6.4.2 12.6-1 19-.4 10 1 22 2.9 29.8-5 6.3-6.5 7.3-17.4 7.3-25.9C429.3 118 427.5 108.4 422.5 101zM416.7 142.3c-3.7 8.8-14.9 6.3-22.6 5.5-5.4-.5-10.2-.3-15.6.1-6.7.6-13-.7-19.3-3.2-.5-.2-1-.3-1.5-.4-2.4-3.6-.8-8.8-.4-12.8.4-4.4.1-8.9 0-13.3-.1-5.1-1.2-12.7 2.4-16.9 4.3-4.9 15.5-2.7 21.2-2.8 8.6-.2 17.9-.7 26 2.5C421.2 106.8 421.8 130.3 416.7 142.3z"}}),t("path",{attrs:{d:"M467,331.1c-1.5-24.6-6.2-49-6.1-73.7c0.1-29.7,5.7-59.1,5.3-88.9c-0.3-25.7-5.5-52.8-22.9-72.6c-14.4-16.4-34.8-25.8-55.9-30.2c-25.8-5.3-52.3-1.6-78.2,0.9c-31.7,3-63.4,5.8-95.2,2.8c-12.8-1.2-25.7-2.8-38.5-3.7c-1.5-2.9-5.9-2.9-8.2-0.5c-5.6-0.2-11.2-0.3-16.9,0c-1.1-0.3-2.5-0.3-3.6,0.2c-3.5,0.2-7,0.6-10.4,1c-27.5,3.8-50.3,18.3-69.6,37.6c-1.6,1.6-1.7,3.5-1,5c-0.2,0.5-0.3,1.1-0.3,1.7c0,32.4,2,64.7,2.9,97.1c0.5,16.1,0.6,32.3,0.1,48.4c-0.4,14.4-2.4,28.7-4.2,42.9c-3.6,28.5-7.3,58-1.1,86.4c4.8,21.9,16.8,39.5,36.6,50.3c18.3,10,40.1,12.6,60.6,13c28.2,0.5,56.5-3.9,84.6-6.2c15.8-1.3,31.7-2.1,47.5-1.7c13.4,0.3,26.7,2,40,3.2c23.1,2,46.5,2.6,69.2-2.9c22.6-5.5,42.4-19.1,53.9-39.5C467.6,380.4,468.4,354.7,467,331.1z M190.5,165.2c1.2-10.4,1.6-20.9,2.1-31.4c0.8-18.9,1.4-37.8,1.5-56.6c11.7,1.2,23.3,2.6,35,3.2c31.5,1.5,63-2.2,94.3-5.1c25-2.3,49.4-4.2,73.8,3.1c20.8,6.2,39.5,19.7,49.1,39.5c8.2,16.8,10.4,35.9,10.3,54.8c-2.4-0.1-4.9,0.3-7.2,0.4c-3.3,0.1-6.5,0.2-9.8,0.2c-12.4,0.2-24.7,0.2-37.1,0.2c-24.7-0.1-49.5-0.6-74.2-0.6c-1,0-1.8,0.2-2.5,0.6C311.5,162,294.5,154,276.1,151c-27.8-4.5-61.2,4-82.2,23.6c-0.6-0.3-1.3-0.4-2.1-0.4H189C190,171.3,190.2,167.8,190.5,165.2z M323.7,313.5c-33.8,17.2-76.2,15-108.5-4.7c-28.4-17.4-36.6-53.9-33.4-85c1.4-0.7,2.4-2.1,2.5-4.2c1.4-27.9,23.5-46.1,48.5-54.2c26.7-8.7,56.6-3.7,79.7,11.8C355.3,205.9,379.7,284.9,323.7,313.5z M169.5,174c3.3-5.4,3.8-12.2,4.1-18.4c0.5-8.2,0.3-16.4,0.4-24.6c0.1-8.9,1.8-17.6,2.2-26.5c0.4-9.7,0.1-19.3-0.1-29c2.7,0.2,5.4,0.4,8.1,0.7c-0.1,0.4-0.2,0.9-0.2,1.4c0,16.5-0.5,33-1.2,49.5c-0.4,10-0.8,20.1-1.7,30.1c-0.3,3.5-0.6,7-1.1,10.4c-0.2,1.2-0.4,2.5-0.7,3.7c0,0.1-0.1,0.2-0.1,0.3c-0.6,0.8-0.9,1.7-1,2.6h-9C169.4,174.1,169.4,174.1,169.5,174z M153.6,74.9c4.2-0.1,8.3-0.1,12.5,0c0.1,8.8,0.4,17.6,0.3,26.4c-0.2,9.4-2,18.6-2.2,28c-0.2,7.2,0,14.5-0.2,21.7c-0.1,4.8-0.2,10.5-1.9,15.3c-1.4-1-3-1.8-5-2.4c-1.8-0.6-3.6-1-5.5-1.3C159,134.3,154.3,104,153.6,74.9z M150.4,172.7c3.3,0.5,6.4,1.2,7.7,4.6c1,2.6,0.8,5.9,0.6,9c-8,3-16.4,4.8-24.8,5.9c-7.9,1-20.6,2.8-27.1-3.2c-0.8-0.8-1.7-1.2-2.6-1.3c0.5-4.5,2.2-8.6,6.3-11.3c5-3.3,12.5-4.2,18.3-4.2C136,172.2,143.2,171.6,150.4,172.7z M128,78.1c5.1-1.2,10.4-2,15.6-2.5c0.7,27.8,5.2,56.6-1.5,83.8c-0.7,0.6-1.2,1.5-1.4,2.6c-4.2,0-8.5,0.2-12.6,0.3c0,0,0,0,0,0V78.1z M108.5,84.9c3.1-1.5,6.3-2.9,9.6-4v82.3c-4.3,0.8-8.5,2.2-12.2,4.3c0.7-9.3,0.1-18.8-0.5-28.1c-1.1-16.7-4.2-33.6-4.3-50.4C103.4,87.6,105.9,86.2,108.5,84.9z M91.2,95.7c0.6,12.7,2.7,25.5,3.7,38.2c0.7,8.8,1.3,17.7,1.3,26.6c0,3.1-0.1,6.2-0.6,9.3c-0.1,0.5-0.2,1-0.3,1.5c0,0.2-0.1,0.4-0.1,0.5c-2.6,1.3-3.1,4.7-1.9,7c-0.2,0-0.5-0.1-0.7-0.1h-15c-0.1,0-0.1,0-0.2,0c-0.9-23-1.9-45.9-1.9-68.9c0-0.2,0-0.3,0-0.5C80.4,104.5,85.7,99.9,91.2,95.7z M457,360.3c-2,24.4-11.6,46.7-32.4,60.5c-19.3,12.8-43.7,15-66.2,14.8c-26.1-0.3-51.9-4.9-78-4.7c-31.9,0.2-63.5,4.8-95.3,7.1c-39,2.9-91.5,0.5-108.4-42c-10.6-26.8-6.9-58.3-3.6-86.2c1.7-14.4,3.7-28.7,4.8-43.2c1.2-15.3,1-30.7,0.8-46c-0.2-10.6-0.5-21.3-0.9-31.9c0.2,0,0.4,0,0.6,0h15c0.3,0,0.5,0,0.8-0.1c-0.1,1-0.1,2-0.1,3c-0.1,3.5,2.9,4.9,5.7,4.3c0.2,0.2,0.3,0.4,0.5,0.6c7.9,7.3,20.7,7,30.7,6.1c11.5-1,23.6-3.5,34.3-8.1c2.2-1,3.3-2.7,3.3-5.1c0-1.8,0-3.5,0-5.3c0.4,0.1,0.9,0.2,1.4,0.2h15.4c-6.9,9.2-11.3,20.2-12.1,32.9c-1.3,0.7-2.2,2-2.4,4c-2.8,25.2,1,51.3,14.4,73.2c14.3,23.3,41.4,35.6,67.4,40.3c28.3,5.2,60.1,0,84.4-15.8c22.7-14.8,32.5-40.5,30.6-66.8c-1.9-26.3-13.7-50.8-31.6-69.2c19.2,0.1,38.3,0.4,57.5,0.5c10.4,0.1,20.8,0.1,31.1,0.1c5.2,0,10.4-0.1,15.6-0.2c2.6,0,5.2-0.1,7.9-0.2c1.3,0,2.6-0.1,3.9-0.1l2-0.1c0.8,0.2,1.3,0.2,1.7,0.1c0,0,0,0,0.1,0.1c0.1,0.1,0.3,0.2,0.4,0.3c-0.3,6.9-0.8,13.8-1.4,20.5c-2.3,27.5-5,54.5-2.3,82.1C454.8,310.6,459,335.4,457,360.3z"}}),t("path",{attrs:{d:"M291.1,229.5c-3.4-7.6-10.9-11.9-18.8-13.5c-12.9-2.6-31.7,2.2-37.7,15.1c-3.1,0.9-5.4,5.6-2.4,8.9c2.5,2.7,1.7,8.3,2.1,11.7c0.8,5.4,3.4,10.2,8.1,13.1c14.9,9.2,34.4,2.9,48.3-4.9c1.6-0.9,2.2-2.8,2.2-4.5C293.1,246.7,294.7,237.8,291.1,229.5z M283.2,252.7c-5.9,3.1-12.1,5.3-18.7,6.2c-5.4,0.8-14.6,0.6-18.5-4.1c-2.4-2.8-2-7.3-2.3-10.8c-0.2-2.1-0.6-4.1-1.3-5.9c0.2-0.3,0.5-0.7,0.6-1.2c3.6-9.7,17.1-12.5,26.3-11.3c6,0.8,11.2,3.8,13.3,9.7C284.5,240.6,283.6,246.9,283.2,252.7z"}}),t("g",[t("path",{attrs:{fill:"#D6E5E5",d:"M247.9,203c-9.5-2.9-19.3,2-20.9,12.2c-1.7,10.9,7,18.4,17.3,18.7c3.8,0.1,5-3.3,4.2-6.1c2.2-0.6,3.4-3.1,3.4-5.2v-15C252,205.1,249.9,203.6,247.9,203z M242,215.5c-2.2,1.2-3.3,4-2.8,6.2c0,0.2,0,0.5,0,0.7c-1.6-1.2-2.6-3.1-2.3-5.3c0.3-3.4,2.4-4.8,5.1-4.9V215.5z"}})])])])],1)]},proxy:!0}])},[[t("div",{staticClass:"header-title"},[c._v("Sudoku")])]],2)],1)},r=[],n={data(){return{showBan:!1}}},l=n,d=e(1001),u=(0,d.Z)(l,a,r,!1,null,"b37dfd08",null),h=u.exports,f=function(){var c=this,t=c._self._c;return t("vs-card",{staticStyle:{width:"150px"},scopedSlots:c._u([{key:"title",fn:function(){return[t("p",{staticClass:"card-title"},[c._v("Здесь могла бы быть моя фотография")])]},proxy:!0},{key:"img",fn:function(){return[t("img",{staticStyle:{width:"150px",height:"100px","object-fit":"scale-down"},attrs:{src:"https://vseraskraski.com/images/8/8/2/kaktus.png",alt:""}})]},proxy:!0},{key:"text",fn:function(){return[t("p",{staticClass:"card-subtitle"},[c._v(" но пока кактус ")])]},proxy:!0}])})},p=[],v={data(){return{}}},g=v,b=(0,d.Z)(g,f,p,!1,null,"6d6c4615",null),m=b.exports,y={components:{PromoBlock:m,NavBar:h},data(){return{table:[["5","3","","","7","","","",""],["6","","","1","9","5","","",""],["","9","8","","","","","6",""],["8","","","","6","","","","3"],["4","","","8","","3","","","1"],["7","","","","2","","","","6"],["","6","","","","","2","8",""],["","","","4","1","9","","","5"],["","","","","8","","","7","9"]],tableSize:9,boxSize:3,activeDialog:!1,globalLoading:null,isShowLogs:!1,showInfo:!1,darkTheme:!1,logs:"",loadingAvatar:null}},watch:{showInfo(c){setTimeout((()=>{c&&(this.loadingAvatar=this.$vs.loading({target:this.$refs.avatarContent,type:"waves",color:"#d5397b"}))}),0)}},mounted(){const c=localStorage.getItem("vsTheme");console.log("currentTheme",c),"light"!==c&&(this.darkTheme=!0,this.$vs.toggleTheme("light"),document.body.classList.add("darken"),document.body.style.background="#18191c",document.body.style.color="#fff",localStorage.setItem("vsTheme","dark")),this.globalLoading=this.$vs.loading({type:"waves",color:"#d5397b"}),window.addEventListener("load",(()=>{setTimeout((()=>{this.globalLoading.close()}),1e3)}))},methods:{closeLoading(){this.loadingAvatar.close()},setNumber(c,t,e){let i=c.target.value[c.target.value.length-1];i=i?.match(/[1-9]/)||""===i?i:"",o["default"].set(this.table[t],e,i)},changeTheme(){this.toggleTheme(this.darkTheme?"dark":"light")},toggleTheme(c){this.$vs.toggleTheme(c),"light"===c?(document.body.classList.add("darken"),document.body.style.background="#18191c",document.body.style.color="#fff"):(document.body.classList.remove("darken"),document.body.style.background="none",document.body.style.color="rgb(44, 62, 80)")},findEmpty(){for(let c=0;c<this.tableSize;c++)for(let t=0;t<this.tableSize;t++){if(this.table[c][t].length>1)return"error";if(""===this.table[c][t])return[c,t]}return null},validate(c,[t,e]){for(let s=0;s<this.tableSize;s++){if(this.table[s][e]===c&&s!==t)return!1;if(this.table[t][s]===c&&s!==e)return!1}const o=Math.floor(t/this.boxSize)*this.boxSize,i=Math.floor(e/this.boxSize)*this.boxSize;for(let s=o;s<o+this.boxSize;s++)for(let o=i;o<i+this.boxSize;o++)if(this.table[s][o]===c&&s!==t&&o!==e)return!1;return!0},isSolved(){const c=this.findEmpty();if(null===c)return!0;if("error"===c)return!1;for(let t=1;t<=this.tableSize;t++){const e=t.toString(),i=this.validate(e,c);if(this.logs+=`curPos, ${c}, curNum, ${e}, isValid, ${i}, `,i){const[t,i]=c;if(o["default"].set(this.table[t],i,e),this.isSolved())return!0;o["default"].set(this.table[t],i,"")}}return!1},resolveSudoku(){const c=this.isSolved();this.logs+=`isResult, ${this.table}`,this.isShowLogs=!0,c?this.$vs.notification({color:"success",position:"top-right",duration:"8000",title:"Эксельсиор!",text:"Решение для вашего судоку найдено"}):this.$vs.notification({color:"danger",position:"top-right",duration:"8000",title:"Увы :(",text:"Этот судоку не решаем."})},clearTable(){for(let c=0;c<this.tableSize;c++)for(let t=0;t<this.tableSize;t++)o["default"].set(this.table[c],t,"")}}},C=y,x=(0,d.Z)(C,i,s,!1,null,null,null),z=x.exports,k=e(8833),w=e.n(k);o["default"].config.productionTip=!1,o["default"].use(w(),{colors:{primary:"#5b3cc4",success:"rgb(23, 201, 100)",danger:"rgb(242, 19, 93)",warning:"rgb(255, 130, 0)",dark:"rgb(36, 33, 69)"}}),new o["default"]({render:c=>c(z)}).$mount("#app")},9135:function(c,t,e){c.exports=e.p+"img/311528.f3c11445.png"}},t={};function e(o){var i=t[o];if(void 0!==i)return i.exports;var s=t[o]={exports:{}};return c[o].call(s.exports,s,s.exports,e),s.exports}e.m=c,function(){var c=[];e.O=function(t,o,i,s){if(!o){var a=1/0;for(d=0;d<c.length;d++){o=c[d][0],i=c[d][1],s=c[d][2];for(var r=!0,n=0;n<o.length;n++)(!1&s||a>=s)&&Object.keys(e.O).every((function(c){return e.O[c](o[n])}))?o.splice(n--,1):(r=!1,s<a&&(a=s));if(r){c.splice(d--,1);var l=i();void 0!==l&&(t=l)}}return t}s=s||0;for(var d=c.length;d>0&&c[d-1][2]>s;d--)c[d]=c[d-1];c[d]=[o,i,s]}}(),function(){e.n=function(c){var t=c&&c.__esModule?function(){return c["default"]}:function(){return c};return e.d(t,{a:t}),t}}(),function(){e.d=function(c,t){for(var o in t)e.o(t,o)&&!e.o(c,o)&&Object.defineProperty(c,o,{enumerable:!0,get:t[o]})}}(),function(){e.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(c){if("object"===typeof window)return window}}()}(),function(){e.o=function(c,t){return Object.prototype.hasOwnProperty.call(c,t)}}(),function(){e.r=function(c){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(c,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(c,"__esModule",{value:!0})}}(),function(){e.p="/sudokuVuesax/"}(),function(){var c={143:0};e.O.j=function(t){return 0===c[t]};var t=function(t,o){var i,s,a=o[0],r=o[1],n=o[2],l=0;if(a.some((function(t){return 0!==c[t]}))){for(i in r)e.o(r,i)&&(e.m[i]=r[i]);if(n)var d=n(e)}for(t&&t(o);l<a.length;l++)s=a[l],e.o(c,s)&&c[s]&&c[s][0](),c[s]=0;return e.O(d)},o=self["webpackChunkvue2sudoku"]=self["webpackChunkvue2sudoku"]||[];o.forEach(t.bind(null,0)),o.push=t.bind(null,o.push.bind(o))}();var o=e.O(void 0,[998],(function(){return e(5801)}));o=e.O(o)})();
//# sourceMappingURL=app.20c93c37.js.map