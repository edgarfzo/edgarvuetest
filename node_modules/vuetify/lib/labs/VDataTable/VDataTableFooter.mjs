import { createVNode as _createVNode, createTextVNode as _createTextVNode } from "vue";
// Styles
import "./VDataTableFooter.css";

// Components
import { VBtn } from "../../components/VBtn/index.mjs";
import { VSelect } from "../../components/VSelect/index.mjs"; // Composables
import { usePagination } from "./composables/paginate.mjs"; // Utilities
import { defineComponent } from "../../util/index.mjs"; // Types
export const VDataTableFooter = defineComponent({
  name: 'VDataTableFooter',
  props: {
    prevIcon: {
      type: String,
      default: '$prev'
    },
    nextIcon: {
      type: String,
      default: '$next'
    },
    firstIcon: {
      type: String,
      default: '$first'
    },
    lastIcon: {
      type: String,
      default: '$last'
    },
    itemsPerPageOptions: {
      type: Array,
      default: () => [{
        value: 10,
        title: '10'
      }, {
        value: 25,
        title: '25'
      }, {
        value: 50,
        title: '50'
      }, {
        value: 100,
        title: '100'
      }, {
        value: -1,
        title: 'All'
      }]
    },
    showCurrentPage: Boolean
  },
  setup(props, _ref) {
    let {
      slots
    } = _ref;
    const {
      page,
      pageCount,
      startIndex,
      stopIndex,
      itemsLength,
      itemsPerPage
    } = usePagination();
    return () => {
      var _slots$prepend;
      return _createVNode("div", {
        "class": "v-data-table-footer"
      }, [(_slots$prepend = slots.prepend) == null ? void 0 : _slots$prepend.call(slots), _createVNode("div", {
        "class": "v-data-table-footer__items-per-page"
      }, [_createVNode("span", null, [_createTextVNode("Items per page:")]), _createVNode(VSelect, {
        "items": props.itemsPerPageOptions,
        "modelValue": itemsPerPage.value,
        "onUpdate:modelValue": v => itemsPerPage.value = Number(v),
        "density": "compact",
        "variant": "outlined",
        "hide-details": true
      }, null)]), _createVNode("div", {
        "class": "v-data-table-footer__info"
      }, [_createVNode("div", null, [(startIndex.value ?? -1) + 1, _createTextVNode(" - "), stopIndex.value ?? 0, _createTextVNode(" of "), itemsLength.value ?? 0])]), _createVNode("div", {
        "class": "v-data-table-footer__pagination"
      }, [_createVNode(VBtn, {
        "icon": props.firstIcon,
        "variant": "plain",
        "onClick": () => page.value = 1,
        "disabled": page.value === 1
      }, null), _createVNode(VBtn, {
        "icon": props.prevIcon,
        "variant": "plain",
        "onClick": () => page.value = Math.max(1, page.value - 1),
        "disabled": page.value === 1
      }, null), props.showCurrentPage && _createVNode("div", {
        "key": "page"
      }, [_createTextVNode("page.value")]), _createVNode(VBtn, {
        "icon": props.nextIcon,
        "variant": "plain",
        "onClick": () => page.value = Math.min(pageCount.value, page.value + 1),
        "disabled": page.value === pageCount.value
      }, null), _createVNode(VBtn, {
        "icon": props.lastIcon,
        "variant": "plain",
        "onClick": () => page.value = pageCount.value,
        "disabled": page.value === pageCount.value
      }, null)])]);
    };
  }
});
//# sourceMappingURL=VDataTableFooter.mjs.map