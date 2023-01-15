import { mergeProps as _mergeProps, createVNode as _createVNode } from "vue";
// Styles
import "./VMenu.css";

// Components
import { VDialogTransition } from "../transitions/index.mjs";
import { VDefaultsProvider } from "../VDefaultsProvider/index.mjs";
import { VOverlay } from "../VOverlay/index.mjs"; // Composables
import { forwardRefs } from "../../composables/forwardRefs.mjs";
import { useProxiedModel } from "../../composables/proxiedModel.mjs";
import { useScopeId } from "../../composables/scopeId.mjs"; // Utilities
import { computed, inject, mergeProps, provide, ref, watch } from 'vue';
import { genericComponent, getUid, omit, useRender } from "../../util/index.mjs";
import { filterVOverlayProps, makeVOverlayProps } from "../VOverlay/VOverlay.mjs";
import { VMenuSymbol } from "./shared.mjs"; // Types
export const VMenu = genericComponent()({
  name: 'VMenu',
  props: {
    // TODO
    // disableKeys: Boolean,
    id: String,
    ...omit(makeVOverlayProps({
      closeDelay: 250,
      closeOnContentClick: true,
      locationStrategy: 'connected',
      openDelay: 300,
      scrim: false,
      scrollStrategy: 'reposition',
      transition: {
        component: VDialogTransition
      }
    }), ['absolute'])
  },
  emits: {
    'update:modelValue': value => true
  },
  setup(props, _ref) {
    let {
      slots
    } = _ref;
    const isActive = useProxiedModel(props, 'modelValue');
    const {
      scopeId
    } = useScopeId();
    const uid = getUid();
    const id = computed(() => props.id || `v-menu-${uid}`);
    const overlay = ref();
    const parent = inject(VMenuSymbol, null);
    let openChildren = 0;
    provide(VMenuSymbol, {
      register() {
        ++openChildren;
      },
      unregister() {
        --openChildren;
      },
      closeParents() {
        setTimeout(() => {
          if (!openChildren) {
            isActive.value = false;
            parent == null ? void 0 : parent.closeParents();
          }
        }, 40);
      }
    });
    watch(isActive, val => {
      val ? parent == null ? void 0 : parent.register() : parent == null ? void 0 : parent.unregister();
    });
    function onClickOutside() {
      parent == null ? void 0 : parent.closeParents();
    }
    useRender(() => {
      const [overlayProps] = filterVOverlayProps(props);
      return _createVNode(VOverlay, _mergeProps({
        "ref": overlay,
        "class": ['v-menu']
      }, overlayProps, {
        "modelValue": isActive.value,
        "onUpdate:modelValue": $event => isActive.value = $event,
        "absolute": true,
        "activatorProps": mergeProps({
          'aria-haspopup': 'menu',
          'aria-expanded': String(isActive.value),
          'aria-owns': id.value
        }, props.activatorProps),
        "onClick:outside": onClickOutside
      }, scopeId), {
        activator: slots.activator,
        default: function () {
          var _slots$default;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          return _createVNode(VDefaultsProvider, {
            "root": true
          }, {
            default: () => [(_slots$default = slots.default) == null ? void 0 : _slots$default.call(slots, ...args)]
          });
        }
      });
    });
    return forwardRefs({
      id
    }, overlay);
  }
});
//# sourceMappingURL=VMenu.mjs.map