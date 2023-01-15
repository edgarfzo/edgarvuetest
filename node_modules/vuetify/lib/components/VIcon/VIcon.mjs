import { createVNode as _createVNode } from "vue";
// Styles
import "./VIcon.css";

// Composables
import { IconValue, useIcon } from "../../composables/icons.mjs";
import { makeSizeProps, useSize } from "../../composables/size.mjs";
import { makeTagProps } from "../../composables/tag.mjs";
import { makeThemeProps, provideTheme } from "../../composables/theme.mjs";
import { useTextColor } from "../../composables/color.mjs"; // Utilities
import { computed, Text, toRef } from 'vue';
import { convertToUnit, defineComponent, propsFactory, useRender } from "../../util/index.mjs"; // Types
export const makeVIconProps = propsFactory({
  color: String,
  start: Boolean,
  end: Boolean,
  icon: IconValue,
  ...makeSizeProps(),
  ...makeTagProps({
    tag: 'i'
  }),
  ...makeThemeProps()
}, 'v-icon');
export const VIcon = defineComponent({
  name: 'VIcon',
  props: makeVIconProps(),
  setup(props, _ref) {
    let {
      attrs,
      slots
    } = _ref;
    let slotIcon;
    if (slots.default) {
      slotIcon = computed(() => {
        var _slots$default, _slot$filter$;
        const slot = (_slots$default = slots.default) == null ? void 0 : _slots$default.call(slots);
        if (!slot) return;
        return (_slot$filter$ = slot.filter(node => node.type === Text && node.children && typeof node.children === 'string')[0]) == null ? void 0 : _slot$filter$.children;
      });
    }
    const {
      themeClasses
    } = provideTheme(props);
    const {
      iconData
    } = useIcon(slotIcon || props);
    const {
      sizeClasses
    } = useSize(props);
    const {
      textColorClasses,
      textColorStyles
    } = useTextColor(toRef(props, 'color'));
    useRender(() => {
      var _slots$default2;
      return _createVNode(iconData.value.component, {
        "tag": props.tag,
        "icon": iconData.value.icon,
        "class": ['v-icon', 'notranslate', themeClasses.value, sizeClasses.value, textColorClasses.value, {
          'v-icon--clickable': !!attrs.onClick,
          'v-icon--start': props.start,
          'v-icon--end': props.end
        }],
        "style": [!sizeClasses.value ? {
          fontSize: convertToUnit(props.size),
          height: convertToUnit(props.size),
          width: convertToUnit(props.size)
        } : undefined, textColorStyles.value],
        "role": attrs.onClick ? 'button' : undefined,
        "aria-hidden": !attrs.onClick
      }, {
        default: () => [(_slots$default2 = slots.default) == null ? void 0 : _slots$default2.call(slots)]
      });
    });
    return {};
  }
});
//# sourceMappingURL=VIcon.mjs.map