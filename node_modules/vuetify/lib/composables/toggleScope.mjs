import { effectScope, onScopeDispose, watch } from 'vue';
export function useToggleScope(source, cb) {
  let scope;
  watch(source, active => {
    if (active && !scope) {
      scope = effectScope();
      scope.run(cb);
    } else if (!active) {
      var _scope;
      (_scope = scope) == null ? void 0 : _scope.stop();
      scope = undefined;
    }
  }, {
    immediate: true
  });
  onScopeDispose(() => {
    var _scope2;
    (_scope2 = scope) == null ? void 0 : _scope2.stop();
  });
}
//# sourceMappingURL=toggleScope.mjs.map