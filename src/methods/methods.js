export function linkToProduct (itemId, vm) {
  vm.$router.push({ name: 'item', params: { id: itemId } })
}
