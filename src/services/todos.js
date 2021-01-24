export function query() {
  return fetch('/api/todos').then(res => res.json());
}
export function remove(id) {
  return fetch(`/api/todos/${id}`, { method: 'DELETE' }).then(res => res.json());
}
