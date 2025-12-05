import { f as e } from "./vendor-pdHaCqlf.js";
function l(t) {
  return (n) => e(t, (a) => {
    n.use(a);
  });
}
const c = (t) => (t.install = (s) => {
  const n = t?.name || "UnnamedComponent";
  s.component(n, t);
}, t), f = (t, s) => {
  const n = t.__vccOpts || t;
  for (const [a, r] of s)
    n[a] = r;
  return n;
};
export {
  f as _,
  l as m,
  c as w
};
