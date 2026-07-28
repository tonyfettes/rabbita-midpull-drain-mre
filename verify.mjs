// Headless reproduction: drives the built app with happy-dom and asserts the
// missed re-render. Run `npm run verify` (or `moon build --target js --release
// && node verify.mjs`).
import { GlobalRegistrator } from "@happy-dom/global-registrator";

GlobalRegistrator.register();
document.body.innerHTML = '<div id="app"></div>';

await import("./_build/js/release/build/main/main.js");

const frame = () =>
  new Promise((resolve) => requestAnimationFrame(() => setTimeout(resolve, 0)));

const click = (prefix) => {
  const button = [...document.querySelectorAll("button")].find((b) =>
    b.textContent.trim().startsWith(prefix),
  );
  if (!button) throw new Error(`button ${prefix} not found`);
  button.click();
};

const dialogVisible = () => document.body.textContent.includes("DIALOG IS OPEN");

let failures = 0;
const check = (label, actual, expected) => {
  const ok = actual === expected;
  if (!ok) failures += 1;
  console.log(`${ok ? "ok " : "FAIL"} ${label}: dialog visible = ${actual} (expected ${expected})`);
};

await frame(); // initial paint

const skipNavigate = process.env.SKIP_NAVIGATE === "1";
if (!skipNavigate) {
  click("1."); // navigate: switch_by creates a branch whose init emits into the dialog store
  await frame();
} else {
  console.log("control run: skipping the navigate click");
}

click("2."); // open dialog: message lands in the store damaged by step 1
await frame();
await frame();
check("after 'open dialog' click", dialogVisible(), true);
const missedRender = !dialogVisible();

click("3."); // unrelated store write repairs the graph spine
await frame();
check("after 'cycle theme' click", dialogVisible(), true);

if (missedRender && dialogVisible()) {
  console.log(
    "\nBUG REPRODUCED: the dialog store accepted OpenDialog (see console line" +
      " above) but the view did not re-render until an unrelated store was" +
      " written.",
  );
}
process.exit(failures > 0 ? 1 : 0);
