import { createVNode as _createVNode } from "vue";
// Styles
import "./VVirtualScroll.css";

// Components
import { VVirtualScrollItem } from "./VVirtualScrollItem.mjs"; // Composables
import { makeDimensionProps, useDimension } from "../../composables/dimensions.mjs"; // Utilities
import { computed, ref } from 'vue';
import { convertToUnit, createRange, genericComponent, getPropertyFromItem, useRender } from "../../util/index.mjs"; // Types
const UP = -1;
const DOWN = 1;
export const VVirtualScroll = genericComponent()({
  name: 'VVirtualScroll',
  props: {
    items: {
      type: Array,
      default: () => []
    },
    itemKey: {
      type: String,
      default: 'value'
    },
    itemHeight: [Number, String],
    visibleItems: {
      type: [Number, String],
      default: 30
    },
    ...makeDimensionProps()
  },
  setup(props, _ref) {
    let {
      slots
    } = _ref;
    const first = ref(0);
    const baseItemHeight = ref(props.itemHeight);
    const itemHeight = computed({
      get: () => parseInt(baseItemHeight.value ?? 0, 10),
      set(val) {
        baseItemHeight.value = val;
      }
    });
    const visibleItems = computed(() => parseInt(props.visibleItems, 10));
    const rootEl = ref();
    const ids = new Map(props.items.map((item, index) => [getPropertyFromItem(item, props.itemKey, item), index]));
    const sizes = createRange(props.items.length).map(() => itemHeight.value);
    function handleItemResize(item, height) {
      const index = ids.get(getPropertyFromItem(item, props.itemKey, item));
      if (!index) return;
      sizes[index] = height;
      if (!itemHeight.value) itemHeight.value = height;
    }
    function calculateOffset(index) {
      return sizes.slice(0, index).reduce((curr, value) => curr + (value || itemHeight.value), 0);
    }
    function calculateMidPointIndex(scrollTop) {
      let start = 0;
      let end = props.items.length;
      while (start <= end) {
        const middle = start + Math.floor((end - start) / 2);
        const middleOffset = calculateOffset(middle);
        if (middleOffset === scrollTop) {
          return middle;
        } else if (middleOffset < scrollTop) {
          start = middle + 1;
        } else if (middleOffset > scrollTop) {
          end = middle - 1;
        }
      }
      return start;
    }
    let lastScrollTop = 0;
    function handleScroll() {
      if (!rootEl.value) return;
      const scrollTop = rootEl.value.scrollTop;
      const direction = scrollTop < lastScrollTop ? UP : DOWN;
      const midPointIndex = calculateMidPointIndex(scrollTop);
      const buffer = Math.round(visibleItems.value / 3);
      if (direction === UP && midPointIndex <= first.value) {
        first.value = Math.max(midPointIndex - buffer, 0);
      } else if (direction === DOWN && midPointIndex >= first.value + buffer * 2) {
        first.value = Math.min(Math.max(0, midPointIndex - buffer), props.items.length - visibleItems.value);
      }
      lastScrollTop = rootEl.value.scrollTop;
    }
    const last = computed(() => Math.min(props.items.length, first.value + visibleItems.value));
    const computedItems = computed(() => props.items.slice(first.value, last.value));
    const paddingTop = computed(() => calculateOffset(first.value));
    const paddingBottom = computed(() => calculateOffset(props.items.length) - calculateOffset(last.value));
    const {
      dimensionStyles
    } = useDimension(props);
    useRender(() => _createVNode("div", {
      "ref": rootEl,
      "class": "v-virtual-scroll",
      "onScroll": handleScroll,
      "style": dimensionStyles.value
    }, [_createVNode("div", {
      "class": "v-virtual-scroll__container",
      "style": {
        paddingTop: convertToUnit(paddingTop.value),
        paddingBottom: convertToUnit(paddingBottom.value)
      }
    }, [computedItems.value.map((item, index) => {
      var _slots$default;
      return _createVNode(VVirtualScrollItem, {
        "key": index,
        "dynamicHeight": !props.itemHeight,
        "onUpdate:height": height => handleItemResize(item, height)
      }, {
        default: () => [(_slots$default = slots.default) == null ? void 0 : _slots$default.call(slots, {
          item,
          index: index + first.value
        })]
      });
    })])]));
  }
});
//# sourceMappingURL=VVirtualScroll.mjs.map