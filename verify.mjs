// Headless reproduction: drives the built app with happy-dom and asserts the
// missed re-render. Run `npm run verify` (or `moon build --target js --release
// && node verify.mjs`).
import { GlobalRegistrator } from "@happy-dom/global-registrator";

GlobalRegistrator.register();
document.body.innerHTML = '<div id="app"></div>';

await import("./_build/js/release/build/main/main.js");

const frame = () =>
  new Promise((resolve) => requestAnimationFrame(() => setTimeout(resolve, 0)));

const click = (label) => {
  const button = [...document.querySelectorAll("button")].find(
    (b) => b.textContent.trim() === label,
  );
  if (!button) throw new Error(`button "${label}" not found`);
  button.click();
};

const shownCount = () => {
  const match = document.body.textContent.match(/count: (\d+)/);
  if (!match) throw new Error("count not found in DOM");
  return Number(match[1]);
};

let failures = 0;
const check = (label, expected) => {
  const actual = shownCount();
  const ok = actual === expected;
  if (!ok) failures += 1;
  console.log(`${ok ? "ok " : "FAIL"} ${label}: view shows count ${actual} (expected ${expected})`);
};

await frame(); // initial paint

click("+1");
await frame();
check("before any tab switch, +1 renders", 1);

click("switch tab"); // switch_by creates a branch whose init pings the counter store
await frame();

click("+1"); // model goes to 2, but the view is frozen
await frame();
await frame();
check("after a tab switch, +1 renders", 2);
const frozen = shownCount() !== 2;

click("switch tab"); // unrelated store write repairs the graph spine
await frame();
check("after switching tabs again, view catches up", 2);

if (frozen && shownCount() === 2) {
  console.log(
    "\nBUG REPRODUCED: the counter store accepted the increment (see store" +
      " log above) but the view stayed frozen until an unrelated store was" +
      " written.",
  );
}
process.exit(failures > 0 ? 1 : 0);
