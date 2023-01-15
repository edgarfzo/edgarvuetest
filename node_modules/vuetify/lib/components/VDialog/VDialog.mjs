import { mergeProps as _mergeProps, createVNode as _createVNode } from "vue";
// Styles
import "./VDialog.css";

// Components
import { VDialogTransition } from "../transitions/index.mjs";
import { VDefaultsProvider } from "../VDefaultsProvider/index.mjs";
import { VOverlay } from "../VOverlay/index.mjs"; // Composables
import { useProxiedModel } from "../../composables/proxiedModel.mjs";
import { useScopeId } from "../../composables/scopeId.mjs";
import { forwardRefs } from "../../composables/forwardRefs.mjs"; // Utilities
import { mergeProps, nextTick, ref, watch } from 'vue';
import { genericComponent, IN_BROWSER, useRender } from "../../util/index.mjs";
import { filterVOverlayProps, makeVOverlayProps } from "../VOverlay/VOverlay.mjs"; // Types
export const VDialog = genericComponent()({
  name: 'VDialog',
  props: {
    fullscreen: Boolean,
    retainFocus: {
      type: Boolean,
      default: true
    },
    scrollable: Boolean,
    ...makeVOverlayProps({
      origin: 'center center',
      scrollStrategy: 'block',
      transition: {
        component: VDialogTransition
      },
      zIndex: 2400
    })
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
    const overlay = ref();
    function onFocusin(e) {
      var _overlay$value, _overlay$value2;
      const before = e.relatedTarget;
      const after = e.target;
      if (before !== after && (_overlay$value = overlay.value) != null && _overlay$value.contentEl && // We're the topmost dialog
      (_overlay$value2 = overlay.value) != null && _overlay$value2.globalTop &&
      // It isn't the document or the dialog body
      ![document, overlay.value.contentEl].includes(after) &&
      // It isn't inside the dialog body
      !overlay.value.contentEl.contains(after)) {
        const focusable = [...overlay.value.contentEl.querySelectorAll('button, [href], input:not([type="hidden"]), select, textarea, [tabindex]:not([tabindex="-1"])')].filter(el => !el.hasAttribute('disabled') && !el.matches('[tabindex="-1"]'));
        if (!focusable.length) return;
        const firstElement = focusable[0];
        const lastElement = focusable[focusable.length - 1];
        if (before === firstElement) {
          lastElement.focus();
        } else {
          firstElement.focus();
        }
      }
    }
    if (IN_BROWSER) {
      watch(() => isActive.value && props.retainFocus, val => {
        val ? document.addEventListener('focusin', onFocusin) : document.removeEventListener('focusin', onFocusin);
      }, {
        immediate: true
      });
    }
    watch(isActive, async val => {
      await nextTick();
      if (val) {
        var _contentEl;
        (_contentEl = overlay.value.contentEl) == null ? void 0 : _contentEl.focus({
          preventScroll: true
        });
      } else {
        var _activatorEl;
        (_activatorEl = overlay.value.activatorEl) == null ? void 0 : _activatorEl.focus({
          preventScroll: true
        });
      }
    });
    useRender(() => {
      const [overlayProps] = filterVOverlayProps(props);
      return _createVNode(VOverlay, _mergeProps({
        "ref": overlay,
        "class": ['v-dialog', {
          'v-dialog--fullscreen': props.fullscreen,
          'v-dialog--scrollable': props.scrollable
        }]
      }, overlayProps, {
        "modelValue": isActive.value,
        "onUpdate:modelValue": $event => isActive.value = $event,
        "aria-role": "dialog",
        "aria-modal": "true",
        "activatorProps": mergeProps({
          'aria-haspopup': 'dialog',
          'aria-expanded': String(isActive.value)
        }, props.activatorProps)
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
    return forwardRefs({}, overlay);
  }
});
//# sourceMappingURL=VDialog.mjs.map