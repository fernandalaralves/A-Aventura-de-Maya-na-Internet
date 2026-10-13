
export function html(strings, ...values) {
  return strings.reduce((acc, str, i) => {
    const v = values[i - 1];
    return acc + (v !== undefined ? escape(v) : '') + str;
  });
}

function escape(value) {
  if (value == null) return '';
  if (value instanceof Node) return value;
  if (Array.isArray(value)) return value.map(escape).join('');
  return String(value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}