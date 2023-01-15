import { createVNode as _createVNode } from "vue";
// Utility
import { defineComponent, useRender } from "../../util/index.mjs";
export const VBreadcrumbsDivider = defineComponent({
  name: 'VBreadcrumbsDivider',
  props: {
    divider: [Number, String]
  },
  setup(props, _ref) {
    let {
      slots
    } = _ref;
    useRender(() => {
      var _slots$default;
      return _createVNode("li", {
        "class": "v-breadcrumbs-divider"
      }, [(slots == null ? void 0 : (_slots$default = slots.default) == null ? void 0 : _slots$default.call(slots)) ?? props.divider]);
    });
    return {};
  }
});
//# sourceMappingURL=VBreadcrumbsDivider.mjs.map