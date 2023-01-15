import { createVNode as _createVNode } from "vue";
// Composables
import { useResizeObserver } from "../../composables/resizeObserver.mjs"; // Utilities
import { defineComponent } from "../../util/defineComponent.mjs";
import { useRender } from "../../util/index.mjs";
export const VVirtualScrollItem = defineComponent({
  name: 'VVirtualScrollItem',
  props: {
    dynamicHeight: Boolean
  },
  emits: {
    'update:height': height => true
  },
  setup(props, _ref) {
    let {
      emit,
      slots
    } = _ref;
    const {
      resizeRef
    } = useResizeObserver(entries => {
      if (!entries.length) return;
      const contentRect = entries[0].contentRect;
      emit('update:height', contentRect.height);
    });
    useRender(() => {
      var _slots$default;
      return _createVNode("div", {
        "ref": props.dynamicHeight ? resizeRef : undefined,
        "class": "v-virtual-scroll__item"
      }, [(_slots$default = slots.default) == null ? void 0 : _slots$default.call(slots)]);
    });
  }
});
//# sourceMappingURL=VVirtualScrollItem.mjs.map