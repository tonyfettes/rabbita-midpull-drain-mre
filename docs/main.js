function _M0DTP319moonbit_2dcommunity7rabbita3cmd3Cmd5Batch(param0) {
  this._0 = param0;
}
_M0DTP319moonbit_2dcommunity7rabbita3cmd3Cmd5Batch.prototype.$tag = 0;
function _M0DTP319moonbit_2dcommunity7rabbita3cmd3Cmd6Effect(param0, param1) {
  this._0 = param0;
  this._1 = param1;
}
_M0DTP319moonbit_2dcommunity7rabbita3cmd3Cmd6Effect.prototype.$tag = 1;
function _M0DTP319moonbit_2dcommunity7rabbita3cmd3Cmd7Message(param0, param1) {
  this._0 = param0;
  this._1 = param1;
}
_M0DTP319moonbit_2dcommunity7rabbita3cmd3Cmd7Message.prototype.$tag = 2;
function _M0DTP319moonbit_2dcommunity7rabbita3cmd3Cmd13LegacyMessage(param0) {
  this._0 = param0;
}
_M0DTP319moonbit_2dcommunity7rabbita3cmd3Cmd13LegacyMessage.prototype.$tag = 3;
function _M0TP419moonbit_2dcommunity7rabbita8internal6duplix5Scope(param0, param1, param2, param3) {
  this.id = param0;
  this.parent = param1;
  this.sub_scopes = param2;
  this.cleanups = param3;
}
function _M0TPB9ArrayViewGRP419moonbit_2dcommunity7rabbita8internal7slotmap2IdE(param0, param1, param2) {
  this.buf = param0;
  this.start = param1;
  this.end = param2;
}
function _M0TPB13StringBuilder(param0) {
  this.val = param0;
}
function $compare_int(a, b) {
  return (a >= b) - (a <= b);
}
const _M0FPB12random__seed = () => {
  if (globalThis.crypto?.getRandomValues) {
    const array = new Uint32Array(1);
    globalThis.crypto.getRandomValues(array);
    return array[0] | 0; // Convert to signed 32
  } else {
    return Math.floor(Math.random() * 0x100000000) | 0; // Fallback to Math.random
  }
};
function _M0TPB6Hasher(param0) {
  this.acc = param0;
}
class $PanicError extends Error {}
function $panic() {
  throw new $PanicError();
}
function _M0TPC16string10StringView(param0, param1, param2) {
  this.str = param0;
  this.start = param1;
  this.end = param2;
}
const _M0FPB19int__to__string__js = (x, radix) => {
  return x.toString(radix);
};
function _M0TPB4IterGUsWRP319moonbit_2dcommunity7rabbita3dom5EventRP319moonbit_2dcommunity7rabbita3cmd9SchedulerEuEE(param0, param1) {
  this.f = param0;
  this.size_hint = param1;
}
function $bound_check(arr, index) {
  if (index < 0 || index >= arr.length) throw new Error("Index out of bounds");
}
const _M0MPB7JSArray4push = (arr, val) => { arr.push(val); };
function _M0DTPC16option6OptionGRP319moonbit_2dcommunity7rabbita2js5ValueE4None() {}
_M0DTPC16option6OptionGRP319moonbit_2dcommunity7rabbita2js5ValueE4None.prototype.$tag = 0;
const _M0DTPC16option6OptionGRP319moonbit_2dcommunity7rabbita2js5ValueE4None__ = new _M0DTPC16option6OptionGRP319moonbit_2dcommunity7rabbita2js5ValueE4None();
function _M0DTPC16option6OptionGRP319moonbit_2dcommunity7rabbita2js5ValueE4Some(param0) {
  this._0 = param0;
}
_M0DTPC16option6OptionGRP319moonbit_2dcommunity7rabbita2js5ValueE4Some.prototype.$tag = 1;
function $make_array_len_and_init(a, b) {
  const arr = new Array(a);
  arr.fill(b);
  return arr;
}
function _M0TPB3MapGsRP419moonbit_2dcommunity7rabbita8internal7runtime5INodeE(param0, param1, param2, param3, param4, param5, param6) {
  this.entries = param0;
  this.size = param1;
  this.capacity = param2;
  this.capacity_mask = param3;
  this.grow_at = param4;
  this.head = param5;
  this.tail = param6;
}
function _M0TPB5EntryGsRPC13ref3RefGWRP319moonbit_2dcommunity7rabbita3dom5EventRP319moonbit_2dcommunity7rabbita3cmd9SchedulerEuEE(param0, param1, param2, param3, param4, param5) {
  this.prev = param0;
  this.next = param1;
  this.psl = param2;
  this.hash = param3;
  this.key = param4;
  this.value = param5;
}
function _M0TPB5EntryGsRP419moonbit_2dcommunity7rabbita8internal7runtime5INodeE(param0, param1, param2, param3, param4, param5) {
  this.prev = param0;
  this.next = param1;
  this.psl = param2;
  this.hash = param3;
  this.key = param4;
  this.value = param5;
}
function _M0TPB5EntryGsRP319moonbit_2dcommunity7rabbita3sub10RunningSubE(param0, param1, param2, param3, param4, param5) {
  this.prev = param0;
  this.next = param1;
  this.psl = param2;
  this.hash = param3;
  this.key = param4;
  this.value = param5;
}
function _M0TPB5EntryGsURPC15error5ErrorRP319moonbit_2dcommunity7rabbita3sub9SubLoaderEE(param0, param1, param2, param3, param4, param5) {
  this.prev = param0;
  this.next = param1;
  this.psl = param2;
  this.hash = param3;
  this.key = param4;
  this.value = param5;
}
function _M0TPB5EntryGssE(param0, param1, param2, param3, param4, param5) {
  this.prev = param0;
  this.next = param1;
  this.psl = param2;
  this.hash = param3;
  this.key = param4;
  this.value = param5;
}
function _M0TPB5EntryGsRP319moonbit_2dcommunity7rabbita7variant7VariantE(param0, param1, param2, param3, param4, param5) {
  this.prev = param0;
  this.next = param1;
  this.psl = param2;
  this.hash = param3;
  this.key = param4;
  this.value = param5;
}
function _M0TPB5EntryGsWRP319moonbit_2dcommunity7rabbita3dom5EventRP319moonbit_2dcommunity7rabbita3cmd9SchedulerEuE(param0, param1, param2, param3, param4, param5) {
  this.prev = param0;
  this.next = param1;
  this.psl = param2;
  this.hash = param3;
  this.key = param4;
  this.value = param5;
}
function _M0TPB8MutLocalGORPB5EntryGsWRP319moonbit_2dcommunity7rabbita3dom5EventRP319moonbit_2dcommunity7rabbita3cmd9SchedulerEuEE(param0) {
  this.val = param0;
}
function _M0TPB8MutLocalGiE(param0) {
  this.val = param0;
}
const _M0MPB7JSArray11set__length = (arr, len) => { arr.length = len; };
const _M0MPB7JSArray3pop = (arr) => arr.pop();
const _M0MPB7JSArray6splice = (arr, idx, cnt) => arr.splice(idx, cnt);
function _M0TPB9ArrayViewGRP419moonbit_2dcommunity7rabbita8internal6duplix9DirtyFlagE(param0, param1, param2) {
  this.buf = param0;
  this.start = param1;
  this.end = param2;
}
function _M0TPB9ArrayViewGsE(param0, param1, param2) {
  this.buf = param0;
  this.start = param1;
  this.end = param2;
}
function _M0TPC13ref3RefGORP219moonbit_2dcommunity7rabbita5GraphE(param0) {
  this.val = param0;
}
function _M0TPC13ref3RefGRP419moonbit_2dcommunity7rabbita8internal7slotmap2IdE(param0) {
  this.val = param0;
}
function _M0TPC13ref3RefGdE(param0) {
  this.val = param0;
}
function _M0TPC13ref3RefGiE(param0) {
  this.val = param0;
}
function _M0TPC13ref3RefGWRP319moonbit_2dcommunity7rabbita3dom5EventRP319moonbit_2dcommunity7rabbita3cmd9SchedulerEuE(param0) {
  this.val = param0;
}
function _M0TPC13set3SetGRP419moonbit_2dcommunity7rabbita8internal7slotmap2IdE(param0, param1, param2, param3, param4, param5, param6) {
  this.entries = param0;
  this.size = param1;
  this.capacity = param2;
  this.capacity_mask = param3;
  this.grow_at = param4;
  this.head = param5;
  this.tail = param6;
}
function _M0TPC13set3SetGiE(param0, param1, param2, param3, param4, param5, param6) {
  this.entries = param0;
  this.size = param1;
  this.capacity = param2;
  this.capacity_mask = param3;
  this.grow_at = param4;
  this.head = param5;
  this.tail = param6;
}
function _M0TPC13set5EntryGiE(param0, param1, param2, param3, param4) {
  this.prev = param0;
  this.next = param1;
  this.psl = param2;
  this.hash = param3;
  this.key = param4;
}
function _M0TPC13set5EntryGRP419moonbit_2dcommunity7rabbita8internal7slotmap2IdE(param0, param1, param2, param3, param4) {
  this.prev = param0;
  this.next = param1;
  this.psl = param2;
  this.hash = param3;
  this.key = param4;
}
function _M0TPB8MutLocalGORPC13set5EntryGRP419moonbit_2dcommunity7rabbita8internal7slotmap2IdEE(param0) {
  this.val = param0;
}
function _M0TPC15queue5QueueGURP419moonbit_2dcommunity7rabbita8internal7slotmap2IdRP419moonbit_2dcommunity7rabbita8internal3any3AnyEE(param0, param1, param2) {
  this.length = param0;
  this.first = param1;
  this.last = param2;
}
function _M0TPC15queue4ConsGURP419moonbit_2dcommunity7rabbita8internal7slotmap2IdRP419moonbit_2dcommunity7rabbita8internal3any3AnyEE(param0, param1) {
  this.content = param0;
  this.next = param1;
}
function _M0TPC15queue4ConsGWRP319moonbit_2dcommunity7rabbita3cmd9SchedulerEuE(param0, param1) {
  this.content = param0;
  this.next = param1;
}
function _M0TP319moonbit_2dcommunity7rabbita6common5Mouse(param0, param1, param2) {
  this.screen = param0;
  this.offset = param1;
  this.client = param2;
}
function _M0TP319moonbit_2dcommunity7rabbita6common8Keyboard(param0, param1, param2, param3, param4, param5, param6, param7, param8) {
  this.key_value = param0;
  this.code_value = param1;
  this.alt_pressed = param2;
  this.ctrl_pressed = param3;
  this.shift_pressed = param4;
  this.meta_pressed = param5;
  this.composing = param6;
  this.repeated = param7;
  this.location_value = param8;
}
function _M0TP319moonbit_2dcommunity7rabbita6common6Scroll(param0, param1, param2) {
  this.scroll_offset = param0;
  this.scroll_width = param1;
  this.scroll_height = param2;
}
function _M0TP419moonbit_2dcommunity7rabbita8internal3any7WrapperGRP310tonyfettes31rabbita_2dmidpull_2ddrain_2dmre4main10CounterMsgE(param0) {
  this.value = param0;
}
function _M0TP419moonbit_2dcommunity7rabbita8internal3any7WrapperGRP310tonyfettes31rabbita_2dmidpull_2ddrain_2dmre4main6TabMsgE(param0) {
  this.value = param0;
}
function _M0TP419moonbit_2dcommunity7rabbita8internal3any7WrapperGuE(param0) {
  this.value = param0;
}
function _M0TP419moonbit_2dcommunity7rabbita8internal7slotmap7SlotMapGRP419moonbit_2dcommunity7rabbita8internal7runtime5StoreE(param0, param1, param2) {
  this.slots = param0;
  this.gens = param1;
  this.free = param2;
}
function _M0TP419moonbit_2dcommunity7rabbita8internal7slotmap2Id(param0, param1) {
  this.gen = param0;
  this.idx = param1;
}
const _M0MP319moonbit_2dcommunity7rabbita2js5Value4null = () => null;
const _M0MP319moonbit_2dcommunity7rabbita2js5Value8is__null = (n) => Object.is(n, null);
const _M0MP319moonbit_2dcommunity7rabbita2js5Value13is__undefined = (n) => Object.is(n, undefined);
function _M0DTPC16option6OptionGRP319moonbit_2dcommunity7rabbita3dom10MouseEventE4None() {}
_M0DTPC16option6OptionGRP319moonbit_2dcommunity7rabbita3dom10MouseEventE4None.prototype.$tag = 0;
const _M0DTPC16option6OptionGRP319moonbit_2dcommunity7rabbita3dom10MouseEventE4None__ = new _M0DTPC16option6OptionGRP319moonbit_2dcommunity7rabbita3dom10MouseEventE4None();
function _M0DTPC16option6OptionGRP319moonbit_2dcommunity7rabbita3dom10MouseEventE4Some(param0) {
  this._0 = param0;
}
_M0DTPC16option6OptionGRP319moonbit_2dcommunity7rabbita3dom10MouseEventE4Some.prototype.$tag = 1;
const _M0MP319moonbit_2dcommunity7rabbita3dom6Window12current__url = (self) => { return self.location.href; };
const _M0MP319moonbit_2dcommunity7rabbita3dom6Window25request__animation__frame = (self,f) => self.requestAnimationFrame(f);
const _M0FP319moonbit_2dcommunity7rabbita3dom6window = () => window;
const _M0FP319moonbit_2dcommunity7rabbita3dom21ffi__to__svg__element = (x) => x instanceof SVGElement ? x : null;
const _M0FP319moonbit_2dcommunity7rabbita3dom10get__style = (self) => self.style;
const _M0FP319moonbit_2dcommunity7rabbita3dom21ffi__set__node__value = (x,v) => x.nodeValue = v;
const _M0FP319moonbit_2dcommunity7rabbita3dom18ffi__next__sibling = (x) => x.nextSibling;
const _M0FP319moonbit_2dcommunity7rabbita3dom22ffi__previous__sibling = (x) => x.previousSibling;
const _M0FP319moonbit_2dcommunity7rabbita3dom17ffi__parent__node = (x) => x.parentNode;
const _M0FP319moonbit_2dcommunity7rabbita3dom18ffi__append__child = (p,c) => p.appendChild(c);
const _M0FP319moonbit_2dcommunity7rabbita3dom18ffi__remove__child = (p,c) => p.removeChild(c);
const _M0FP319moonbit_2dcommunity7rabbita3dom14insert__before = (p,value,before) => p.insertBefore(value,before);
const _M0FP319moonbit_2dcommunity7rabbita3dom19ffi__is__same__node = (x, other) => x === other;
const _M0FP319moonbit_2dcommunity7rabbita3dom21ffi__to__mouse__event = (e) => e instanceof MouseEvent ? e : null;
const _M0FP319moonbit_2dcommunity7rabbita3dom28ffi__mouse__event__client__x = (e) => e.clientX;
const _M0FP319moonbit_2dcommunity7rabbita3dom28ffi__mouse__event__client__y = (e) => e.clientY;
const _M0FP319moonbit_2dcommunity7rabbita3dom28ffi__mouse__event__ctrl__key = (e) => e.ctrlKey;
const _M0FP319moonbit_2dcommunity7rabbita3dom28ffi__mouse__event__meta__key = (e) => e.metaKey;
const _M0FP319moonbit_2dcommunity7rabbita3dom28ffi__mouse__event__offset__x = (e) => e.offsetX;
const _M0FP319moonbit_2dcommunity7rabbita3dom28ffi__mouse__event__offset__y = (e) => e.offsetY;
const _M0FP319moonbit_2dcommunity7rabbita3dom28ffi__mouse__event__screen__x = (e) => e.screenX;
const _M0FP319moonbit_2dcommunity7rabbita3dom28ffi__mouse__event__screen__y = (e) => e.screenY;
const _M0FP319moonbit_2dcommunity7rabbita3dom24ffi__to__keyboard__event = (e) => e instanceof KeyboardEvent ? e : null;
const _M0MP319moonbit_2dcommunity7rabbita3dom13KeyboardEvent3key = (e) => e.key;
const _M0MP319moonbit_2dcommunity7rabbita3dom13KeyboardEvent4code = (e) => e.code;
const _M0MP319moonbit_2dcommunity7rabbita3dom13KeyboardEvent8alt__key = (e) => e.altKey;
const _M0MP319moonbit_2dcommunity7rabbita3dom13KeyboardEvent9ctrl__key = (e) => e.ctrlKey;
const _M0MP319moonbit_2dcommunity7rabbita3dom13KeyboardEvent10shift__key = (e) => e.shiftKey;
const _M0MP319moonbit_2dcommunity7rabbita3dom13KeyboardEvent9meta__key = (e) => e.metaKey;
const _M0MP319moonbit_2dcommunity7rabbita3dom13KeyboardEvent13is__composing = (e) => e.isComposing;
const _M0MP319moonbit_2dcommunity7rabbita3dom13KeyboardEvent6repeat = (e) => e.repeat;
const _M0MP319moonbit_2dcommunity7rabbita3dom13KeyboardEvent8location = (e) => e.location;
const _M0FP319moonbit_2dcommunity7rabbita3dom22ffi__to__html__element = (x) => x instanceof HTMLElement ? x : null;
const _M0FP319moonbit_2dcommunity7rabbita3dom30ffi__html__element__get__style = (s) => s.style;
const _M0FP319moonbit_2dcommunity7rabbita3dom12console__log = (x) => console.log(x);
const _M0FP319moonbit_2dcommunity7rabbita3dom25ffi__add__event__listener = (target, type, listener) => target.addEventListener(type, listener);
const _M0FP319moonbit_2dcommunity7rabbita3dom16ffi__to__element = (x) => x.nodeType===1 ? x : null;
const _M0FP319moonbit_2dcommunity7rabbita3dom18ffi__event__target = (self) => self.target;
const _M0FP319moonbit_2dcommunity7rabbita3dom27ffi__event__current__target = (self) => self.currentTarget;
const _M0FP319moonbit_2dcommunity7rabbita3dom28ffi__event__prevent__default = (self) => self.preventDefault();
const _M0FP319moonbit_2dcommunity7rabbita3dom28ffi__element__set__attribute = (self,attr,value) => self.setAttribute(attr, value);
const _M0FP319moonbit_2dcommunity7rabbita3dom31ffi__element__remove__attribute = (self,attr) => self.removeAttribute(attr);
const _M0FP319moonbit_2dcommunity7rabbita3dom27ffi__element__set__property = (self,prop,value) => self[prop] = value;
const _M0FP319moonbit_2dcommunity7rabbita3dom27ffi__element__get__property = (self,prop) => self[prop];
const _M0FP319moonbit_2dcommunity7rabbita3dom30ffi__element__remove__property = (self,prop) => delete self[prop];
const _M0FP319moonbit_2dcommunity7rabbita3dom30ffi__element__get__scroll__top = (self) => self.scrollTop;
const _M0FP319moonbit_2dcommunity7rabbita3dom31ffi__element__get__scroll__left = (self) => self.scrollLeft;
const _M0FP319moonbit_2dcommunity7rabbita3dom32ffi__element__get__scroll__width = (self) => self.scrollWidth;
const _M0FP319moonbit_2dcommunity7rabbita3dom33ffi__element__get__scroll__height = (self) => self.scrollHeight;
const _M0FP319moonbit_2dcommunity7rabbita3dom30ffi__element__set__inner__html = (self,html) => self.innerHTML = html;
const _M0MP319moonbit_2dcommunity7rabbita3dom19CSSStyleDeclaration13set__property = (self, property, value) => self.setProperty(property, value);
const _M0MP319moonbit_2dcommunity7rabbita3dom19CSSStyleDeclaration16remove__property = (self, property) => self.removeProperty(property);
const _M0FP319moonbit_2dcommunity7rabbita3dom8document = () => document;
const _M0MP319moonbit_2dcommunity7rabbita3dom8Document15create__element = (doc,tag) => doc.createElement(tag);
const _M0MP319moonbit_2dcommunity7rabbita3dom8Document27create__element__ns_2einner = (doc,namespace,qualifiedName) => doc.createElementNS(namespace, qualifiedName);
const _M0MP319moonbit_2dcommunity7rabbita3dom8Document18create__text__node = (doc,str) => doc.createTextNode(str);
const _M0MP319moonbit_2dcommunity7rabbita3dom8Document15create__comment = (doc,str) => doc.createComment(str);
const _M0MP319moonbit_2dcommunity7rabbita3dom8Document26create__document__fragment = (doc) => doc.createDocumentFragment();
const _M0MP319moonbit_2dcommunity7rabbita3dom8Document20get__element__by__id = (doc,id) => doc.getElementById(id);
function _M0TP419moonbit_2dcommunity7rabbita8internal6duplix9DirtyFlag(param0, param1, param2) {
  this.id = param0;
  this.dirty = param1;
  this.parents = param2;
}
function _M0TP419moonbit_2dcommunity7rabbita8internal6duplix4NodeGRP319moonbit_2dcommunity7rabbita4html4HtmlE(param0, param1, param2, param3, param4, param5, param6, param7) {
  this.id = param0;
  this.value = param1;
  this.compute = param2;
  this.changed_at = param3;
  this.recomputed_at = param4;
  this.scope = param5;
  this.childs = param6;
  this.dirty_flag = param7;
}
function _M0DTPC16option6OptionGOiE4None() {}
_M0DTPC16option6OptionGOiE4None.prototype.$tag = 0;
const _M0DTPC16option6OptionGOiE4None__ = new _M0DTPC16option6OptionGOiE4None();
function _M0DTPC16option6OptionGOiE4Some(param0) {
  this._0 = param0;
}
_M0DTPC16option6OptionGOiE4Some.prototype.$tag = 1;
function _M0DTPC16option6OptionGObE4None() {}
_M0DTPC16option6OptionGObE4None.prototype.$tag = 0;
const _M0DTPC16option6OptionGObE4None__ = new _M0DTPC16option6OptionGObE4None();
function _M0DTPC16option6OptionGObE4Some(param0) {
  this._0 = param0;
}
_M0DTPC16option6OptionGObE4Some.prototype.$tag = 1;
function _M0DTPC16option6OptionGOuE4None() {}
_M0DTPC16option6OptionGOuE4None.prototype.$tag = 0;
const _M0DTPC16option6OptionGOuE4None__ = new _M0DTPC16option6OptionGOuE4None();
function _M0DTPC16option6OptionGOuE4Some(param0) {
  this._0 = param0;
}
_M0DTPC16option6OptionGOuE4Some.prototype.$tag = 1;
function _M0TPB9ArrayViewGURP419moonbit_2dcommunity7rabbita8internal6duplix9DirtyFlagbEE(param0, param1, param2) {
  this.buf = param0;
  this.start = param1;
  this.end = param2;
}
function _M0TP419moonbit_2dcommunity7rabbita8internal6duplix4NodeGOiE(param0, param1, param2, param3, param4, param5, param6, param7) {
  this.id = param0;
  this.value = param1;
  this.compute = param2;
  this.changed_at = param3;
  this.recomputed_at = param4;
  this.scope = param5;
  this.childs = param6;
  this.dirty_flag = param7;
}
function _M0TP419moonbit_2dcommunity7rabbita8internal6duplix4NodeGObE(param0, param1, param2, param3, param4, param5, param6, param7) {
  this.id = param0;
  this.value = param1;
  this.compute = param2;
  this.changed_at = param3;
  this.recomputed_at = param4;
  this.scope = param5;
  this.childs = param6;
  this.dirty_flag = param7;
}
function _M0TP419moonbit_2dcommunity7rabbita8internal6duplix4NodeGOuE(param0, param1, param2, param3, param4, param5, param6, param7) {
  this.id = param0;
  this.value = param1;
  this.compute = param2;
  this.changed_at = param3;
  this.recomputed_at = param4;
  this.scope = param5;
  this.childs = param6;
  this.dirty_flag = param7;
}
function _M0TP419moonbit_2dcommunity7rabbita8internal6duplix4NodeGRP419moonbit_2dcommunity7rabbita8internal7runtime5VNodeE(param0, param1, param2, param3, param4, param5, param6, param7) {
  this.id = param0;
  this.value = param1;
  this.compute = param2;
  this.changed_at = param3;
  this.recomputed_at = param4;
  this.scope = param5;
  this.childs = param6;
  this.dirty_flag = param7;
}
function _M0TP419moonbit_2dcommunity7rabbita8internal6duplix4NodeGiE(param0, param1, param2, param3, param4, param5, param6, param7) {
  this.id = param0;
  this.value = param1;
  this.compute = param2;
  this.changed_at = param3;
  this.recomputed_at = param4;
  this.scope = param5;
  this.childs = param6;
  this.dirty_flag = param7;
}
function _M0TP419moonbit_2dcommunity7rabbita8internal6duplix4NodeGbE(param0, param1, param2, param3, param4, param5, param6, param7) {
  this.id = param0;
  this.value = param1;
  this.compute = param2;
  this.changed_at = param3;
  this.recomputed_at = param4;
  this.scope = param5;
  this.childs = param6;
  this.dirty_flag = param7;
}
function _M0TP419moonbit_2dcommunity7rabbita8internal6duplix4NodeGuE(param0, param1, param2, param3, param4, param5, param6, param7) {
  this.id = param0;
  this.value = param1;
  this.compute = param2;
  this.changed_at = param3;
  this.recomputed_at = param4;
  this.scope = param5;
  this.childs = param6;
  this.dirty_flag = param7;
}
function _M0TPB9ArrayViewGiE(param0, param1, param2) {
  this.buf = param0;
  this.start = param1;
  this.end = param2;
}
function _M0TPB8MutLocalGORP419moonbit_2dcommunity7rabbita8internal6duplix9DirtyFlagE(param0) {
  this.val = param0;
}
function _M0TPB8MutLocalGOUsRP419moonbit_2dcommunity7rabbita8internal6duplix4NodeGuERP419moonbit_2dcommunity7rabbita8internal7slotmap2IdEE(param0) {
  this.val = param0;
}
function _M0TPB9ArrayViewGUsURPC15error5ErrorRP319moonbit_2dcommunity7rabbita3sub9SubLoaderEEE(param0, param1, param2) {
  this.buf = param0;
  this.start = param1;
  this.end = param2;
}
function _M0DTPC16option6OptionGRP319moonbit_2dcommunity7rabbita3dom4NodeE4None() {}
_M0DTPC16option6OptionGRP319moonbit_2dcommunity7rabbita3dom4NodeE4None.prototype.$tag = 0;
function _M0DTPC16option6OptionGRP319moonbit_2dcommunity7rabbita3dom4NodeE4Some(param0) {
  this._0 = param0;
}
_M0DTPC16option6OptionGRP319moonbit_2dcommunity7rabbita3dom4NodeE4Some.prototype.$tag = 1;
function _M0DTP419moonbit_2dcommunity7rabbita8internal7runtime5INode4Elem(param0, param1, param2, param3, param4) {
  this._0 = param0;
  this._1 = param1;
  this._2 = param2;
  this._3 = param3;
  this._4 = param4;
}
_M0DTP419moonbit_2dcommunity7rabbita8internal7runtime5INode4Elem.prototype.$tag = 0;
function _M0DTP419moonbit_2dcommunity7rabbita8internal7runtime5INode4Text(param0, param1) {
  this._0 = param0;
  this._1 = param1;
}
_M0DTP419moonbit_2dcommunity7rabbita8internal7runtime5INode4Text.prototype.$tag = 1;
function _M0DTP419moonbit_2dcommunity7rabbita8internal7runtime5INode4Frag(param0, param1, param2) {
  this._0 = param0;
  this._1 = param1;
  this._2 = param2;
}
_M0DTP419moonbit_2dcommunity7rabbita8internal7runtime5INode4Frag.prototype.$tag = 2;
function _M0DTP419moonbit_2dcommunity7rabbita8internal7runtime5INode5Thunk(param0, param1) {
  this._0 = param0;
  this._1 = param1;
}
_M0DTP419moonbit_2dcommunity7rabbita8internal7runtime5INode5Thunk.prototype.$tag = 3;
function _M0DTP419moonbit_2dcommunity7rabbita8internal7runtime8ChildrenGRP419moonbit_2dcommunity7rabbita8internal7runtime5INodeE5Array(param0) {
  this._0 = param0;
}
_M0DTP419moonbit_2dcommunity7rabbita8internal7runtime8ChildrenGRP419moonbit_2dcommunity7rabbita8internal7runtime5INodeE5Array.prototype.$tag = 0;
function _M0DTP419moonbit_2dcommunity7rabbita8internal7runtime8ChildrenGRP419moonbit_2dcommunity7rabbita8internal7runtime5INodeE3Map(param0) {
  this._0 = param0;
}
_M0DTP419moonbit_2dcommunity7rabbita8internal7runtime8ChildrenGRP419moonbit_2dcommunity7rabbita8internal7runtime5INodeE3Map.prototype.$tag = 1;
function _M0TPB9ArrayViewGUsRP419moonbit_2dcommunity7rabbita8internal7runtime5INodeEE(param0, param1, param2) {
  this.buf = param0;
  this.start = param1;
  this.end = param2;
}
function _M0TPB9ArrayViewGUsRPC13ref3RefGWRP319moonbit_2dcommunity7rabbita3dom5EventRP319moonbit_2dcommunity7rabbita3cmd9SchedulerEuEEE(param0, param1, param2) {
  this.buf = param0;
  this.start = param1;
  this.end = param2;
}
function _M0TP419moonbit_2dcommunity7rabbita8internal7runtime5Props(param0, param1, param2, param3, param4) {
  this.slots = param0;
  this.handlers = param1;
  this.attrs = param2;
  this.props = param3;
  this.styles = param4;
}
function _M0TPB9ArrayViewGUsWRP319moonbit_2dcommunity7rabbita3dom5EventRP319moonbit_2dcommunity7rabbita3cmd9SchedulerEuEE(param0, param1, param2) {
  this.buf = param0;
  this.start = param1;
  this.end = param2;
}
function _M0TPB9ArrayViewGUssEE(param0, param1, param2) {
  this.buf = param0;
  this.start = param1;
  this.end = param2;
}
function _M0TPB9ArrayViewGUsRP319moonbit_2dcommunity7rabbita7variant7VariantEE(param0, param1, param2) {
  this.buf = param0;
  this.start = param1;
  this.end = param2;
}
function _M0DTP419moonbit_2dcommunity7rabbita8internal7runtime8ChildrenGRP419moonbit_2dcommunity7rabbita8internal7runtime5VNodeE5Array(param0) {
  this._0 = param0;
}
_M0DTP419moonbit_2dcommunity7rabbita8internal7runtime8ChildrenGRP419moonbit_2dcommunity7rabbita8internal7runtime5VNodeE5Array.prototype.$tag = 0;
function _M0DTP419moonbit_2dcommunity7rabbita8internal7runtime8ChildrenGRP419moonbit_2dcommunity7rabbita8internal7runtime5VNodeE3Map(param0) {
  this._0 = param0;
}
_M0DTP419moonbit_2dcommunity7rabbita8internal7runtime8ChildrenGRP419moonbit_2dcommunity7rabbita8internal7runtime5VNodeE3Map.prototype.$tag = 1;
function _M0TPB9ArrayViewGUsRP319moonbit_2dcommunity7rabbita3sub10RunningSubEE(param0, param1, param2) {
  this.buf = param0;
  this.start = param1;
  this.end = param2;
}
function _M0TPB8MutLocalGRPB3MapGsRP319moonbit_2dcommunity7rabbita3sub10RunningSubEE(param0) {
  this.val = param0;
}
function _M0TP419moonbit_2dcommunity7rabbita8internal7runtime5Store(param0, param1) {
  this.id = param0;
  this.on_update = param1;
}
function _M0TPB8MutLocalGORP419moonbit_2dcommunity7rabbita8internal7runtime7SandboxE(param0) {
  this.val = param0;
}
function _M0TPB9ArrayViewGURP419moonbit_2dcommunity7rabbita8internal7slotmap2IdRP419moonbit_2dcommunity7rabbita8internal3any3AnyEE(param0, param1, param2) {
  this.buf = param0;
  this.start = param1;
  this.end = param2;
}
function _M0TP319moonbit_2dcommunity7rabbita3cmd5Hooks(param0, param1) {
  this.url_request = param0;
  this.url_changed = param1;
}
function _M0TPB9ArrayViewGWRP319moonbit_2dcommunity7rabbita3cmd9SchedulerEuE(param0, param1, param2) {
  this.buf = param0;
  this.start = param1;
  this.end = param2;
}
function _M0TP419moonbit_2dcommunity7rabbita8internal7runtime7Sandbox(param0, param1, param2, param3, param4, param5, param6, param7, param8) {
  this.after_render_queue = param0;
  this.msg_queue = param1;
  this.root_view = param2;
  this.drain_scheduled = param3;
  this.paint_scheduled = param4;
  this.inode = param5;
  this.captured_link_listener = param6;
  this.mount = param7;
  this.hooks = param8;
}
function _M0TP319moonbit_2dcommunity7rabbita6common3Pos(param0, param1) {
  this.x = param0;
  this.y = param1;
}
const _M0FP319moonbit_2dcommunity7rabbita4html28scroll__event__as__ui__event = (event) => event;
function _M0DTP319moonbit_2dcommunity7rabbita7variant7Variant7Boolean(param0) {
  this._0 = param0;
}
_M0DTP319moonbit_2dcommunity7rabbita7variant7Variant7Boolean.prototype.$tag = 0;
function _M0DTP319moonbit_2dcommunity7rabbita7variant7Variant7Integer(param0) {
  this._0 = param0;
}
_M0DTP319moonbit_2dcommunity7rabbita7variant7Variant7Integer.prototype.$tag = 1;
function _M0DTP319moonbit_2dcommunity7rabbita7variant7Variant8Floating(param0) {
  this._0 = param0;
}
_M0DTP319moonbit_2dcommunity7rabbita7variant7Variant8Floating.prototype.$tag = 2;
function _M0DTP319moonbit_2dcommunity7rabbita7variant7Variant6String(param0) {
  this._0 = param0;
}
_M0DTP319moonbit_2dcommunity7rabbita7variant7Variant6String.prototype.$tag = 3;
function _M0DTP419moonbit_2dcommunity7rabbita8internal7runtime5VNode4Elem(param0, param1, param2, param3) {
  this._0 = param0;
  this._1 = param1;
  this._2 = param2;
  this._3 = param3;
}
_M0DTP419moonbit_2dcommunity7rabbita8internal7runtime5VNode4Elem.prototype.$tag = 0;
function _M0DTP419moonbit_2dcommunity7rabbita8internal7runtime5VNode4Text(param0) {
  this._0 = param0;
}
_M0DTP419moonbit_2dcommunity7rabbita8internal7runtime5VNode4Text.prototype.$tag = 1;
function _M0DTP419moonbit_2dcommunity7rabbita8internal7runtime5VNode4Frag(param0) {
  this._0 = param0;
}
_M0DTP419moonbit_2dcommunity7rabbita8internal7runtime5VNode4Frag.prototype.$tag = 2;
function _M0DTP419moonbit_2dcommunity7rabbita8internal7runtime5VNode5Thunk(param0, param1) {
  this._0 = param0;
  this._1 = param1;
}
_M0DTP419moonbit_2dcommunity7rabbita8internal7runtime5VNode5Thunk.prototype.$tag = 3;
function _M0TP219moonbit_2dcommunity7rabbita5Graph(param0) {
  this.sandbox = param0;
}
function _M0TP219moonbit_2dcommunity7rabbita3App(param0, param1, param2) {
  this.sandbox = param0;
  this.builder = param1;
  this.init_cmd = param2;
}
function _M0DTPC16option6OptionGRPB5ArrayGsEE4None() {}
_M0DTPC16option6OptionGRPB5ArrayGsEE4None.prototype.$tag = 0;
const _M0DTPC16option6OptionGRPB5ArrayGsEE4None__ = new _M0DTPC16option6OptionGRPB5ArrayGsEE4None();
function _M0DTPC16option6OptionGRPB5ArrayGsEE4Some(param0) {
  this._0 = param0;
}
_M0DTPC16option6OptionGRPB5ArrayGsEE4Some.prototype.$tag = 1;
const _M0FP0138moonbit_2dcommunity_2frabbita_2finternal_2fduplix_2fNode_5bInt_5d_24as_24_40moonbit_2dcommunity_2frabbita_2finternal_2fduplix_2eErasedNode = { method_0: _M0IP419moonbit_2dcommunity7rabbita8internal6duplix4NodeP419moonbit_2dcommunity7rabbita8internal6duplix10ErasedNode7get__idGiE, method_1: _M0IP419moonbit_2dcommunity7rabbita8internal6duplix4NodeP419moonbit_2dcommunity7rabbita8internal6duplix10ErasedNode6childsGiE, method_2: _M0IP419moonbit_2dcommunity7rabbita8internal6duplix4NodeP419moonbit_2dcommunity7rabbita8internal6duplix10ErasedNode11changed__atGiE, method_3: _M0IP419moonbit_2dcommunity7rabbita8internal6duplix4NodeP419moonbit_2dcommunity7rabbita8internal6duplix10ErasedNode11dirty__flagGiE, method_4: _M0IP419moonbit_2dcommunity7rabbita8internal6duplix4NodeP419moonbit_2dcommunity7rabbita8internal6duplix10ErasedNode9recomputeGiE };
const _M0FP0141moonbit_2dcommunity_2frabbita_2finternal_2fduplix_2fNode_5bInt_3f_5d_24as_24_40moonbit_2dcommunity_2frabbita_2finternal_2fduplix_2eErasedNode = { method_0: _M0IP419moonbit_2dcommunity7rabbita8internal6duplix4NodeP419moonbit_2dcommunity7rabbita8internal6duplix10ErasedNode7get__idGOiE, method_1: _M0IP419moonbit_2dcommunity7rabbita8internal6duplix4NodeP419moonbit_2dcommunity7rabbita8internal6duplix10ErasedNode6childsGOiE, method_2: _M0IP419moonbit_2dcommunity7rabbita8internal6duplix4NodeP419moonbit_2dcommunity7rabbita8internal6duplix10ErasedNode11changed__atGOiE, method_3: _M0IP419moonbit_2dcommunity7rabbita8internal6duplix4NodeP419moonbit_2dcommunity7rabbita8internal6duplix10ErasedNode11dirty__flagGOiE, method_4: _M0IP419moonbit_2dcommunity7rabbita8internal6duplix4NodeP419moonbit_2dcommunity7rabbita8internal6duplix10ErasedNode9recomputeGOiE };
const _M0FP0193moonbit_2dcommunity_2frabbita_2finternal_2fduplix_2fNode_5bmoonbit_2dcommunity_2frabbita_2finternal_2fruntime_2fVNode_5d_24as_24_40moonbit_2dcommunity_2frabbita_2finternal_2fduplix_2eErasedNode = { method_0: _M0IP419moonbit_2dcommunity7rabbita8internal6duplix4NodeP419moonbit_2dcommunity7rabbita8internal6duplix10ErasedNode7get__idGRP419moonbit_2dcommunity7rabbita8internal7runtime5VNodeE, method_1: _M0IP419moonbit_2dcommunity7rabbita8internal6duplix4NodeP419moonbit_2dcommunity7rabbita8internal6duplix10ErasedNode6childsGRP419moonbit_2dcommunity7rabbita8internal7runtime5VNodeE, method_2: _M0IP419moonbit_2dcommunity7rabbita8internal6duplix4NodeP419moonbit_2dcommunity7rabbita8internal6duplix10ErasedNode11changed__atGRP419moonbit_2dcommunity7rabbita8internal7runtime5VNodeE, method_3: _M0IP419moonbit_2dcommunity7rabbita8internal6duplix4NodeP419moonbit_2dcommunity7rabbita8internal6duplix10ErasedNode11dirty__flagGRP419moonbit_2dcommunity7rabbita8internal7runtime5VNodeE, method_4: _M0IP419moonbit_2dcommunity7rabbita8internal6duplix4NodeP419moonbit_2dcommunity7rabbita8internal6duplix10ErasedNode9recomputeGRP419moonbit_2dcommunity7rabbita8internal7runtime5VNodeE };
const _M0FP0178moonbit_2dcommunity_2frabbita_2finternal_2fduplix_2fNode_5bmoonbit_2dcommunity_2frabbita_2fhtml_2fHtml_5d_24as_24_40moonbit_2dcommunity_2frabbita_2finternal_2fduplix_2eErasedNode = { method_0: _M0IP419moonbit_2dcommunity7rabbita8internal6duplix4NodeP419moonbit_2dcommunity7rabbita8internal6duplix10ErasedNode7get__idGRP319moonbit_2dcommunity7rabbita4html4HtmlE, method_1: _M0IP419moonbit_2dcommunity7rabbita8internal6duplix4NodeP419moonbit_2dcommunity7rabbita8internal6duplix10ErasedNode6childsGRP319moonbit_2dcommunity7rabbita4html4HtmlE, method_2: _M0IP419moonbit_2dcommunity7rabbita8internal6duplix4NodeP419moonbit_2dcommunity7rabbita8internal6duplix10ErasedNode11changed__atGRP319moonbit_2dcommunity7rabbita4html4HtmlE, method_3: _M0IP419moonbit_2dcommunity7rabbita8internal6duplix4NodeP419moonbit_2dcommunity7rabbita8internal6duplix10ErasedNode11dirty__flagGRP319moonbit_2dcommunity7rabbita4html4HtmlE, method_4: _M0IP419moonbit_2dcommunity7rabbita8internal6duplix4NodeP419moonbit_2dcommunity7rabbita8internal6duplix10ErasedNode9recomputeGRP319moonbit_2dcommunity7rabbita4html4HtmlE };
const _M0FP0139moonbit_2dcommunity_2frabbita_2finternal_2fduplix_2fNode_5bBool_5d_24as_24_40moonbit_2dcommunity_2frabbita_2finternal_2fduplix_2eErasedNode = { method_0: _M0IP419moonbit_2dcommunity7rabbita8internal6duplix4NodeP419moonbit_2dcommunity7rabbita8internal6duplix10ErasedNode7get__idGbE, method_1: _M0IP419moonbit_2dcommunity7rabbita8internal6duplix4NodeP419moonbit_2dcommunity7rabbita8internal6duplix10ErasedNode6childsGbE, method_2: _M0IP419moonbit_2dcommunity7rabbita8internal6duplix4NodeP419moonbit_2dcommunity7rabbita8internal6duplix10ErasedNode11changed__atGbE, method_3: _M0IP419moonbit_2dcommunity7rabbita8internal6duplix4NodeP419moonbit_2dcommunity7rabbita8internal6duplix10ErasedNode11dirty__flagGbE, method_4: _M0IP419moonbit_2dcommunity7rabbita8internal6duplix4NodeP419moonbit_2dcommunity7rabbita8internal6duplix10ErasedNode9recomputeGbE };
const _M0FP0142moonbit_2dcommunity_2frabbita_2finternal_2fduplix_2fNode_5bUnit_3f_5d_24as_24_40moonbit_2dcommunity_2frabbita_2finternal_2fduplix_2eErasedNode = { method_0: _M0IP419moonbit_2dcommunity7rabbita8internal6duplix4NodeP419moonbit_2dcommunity7rabbita8internal6duplix10ErasedNode7get__idGOuE, method_1: _M0IP419moonbit_2dcommunity7rabbita8internal6duplix4NodeP419moonbit_2dcommunity7rabbita8internal6duplix10ErasedNode6childsGOuE, method_2: _M0IP419moonbit_2dcommunity7rabbita8internal6duplix4NodeP419moonbit_2dcommunity7rabbita8internal6duplix10ErasedNode11changed__atGOuE, method_3: _M0IP419moonbit_2dcommunity7rabbita8internal6duplix4NodeP419moonbit_2dcommunity7rabbita8internal6duplix10ErasedNode11dirty__flagGOuE, method_4: _M0IP419moonbit_2dcommunity7rabbita8internal6duplix4NodeP419moonbit_2dcommunity7rabbita8internal6duplix10ErasedNode9recomputeGOuE };
const _M0FP0118moonbit_2dcommunity_2frabbita_2finternal_2fruntime_2fSandbox_24as_24_40moonbit_2dcommunity_2frabbita_2fcmd_2eScheduler = { method_0: _M0IP419moonbit_2dcommunity7rabbita8internal7runtime7SandboxP319moonbit_2dcommunity7rabbita3cmd9Scheduler11run__effect, method_1: _M0IP419moonbit_2dcommunity7rabbita8internal7runtime7SandboxP319moonbit_2dcommunity7rabbita3cmd9Scheduler14queue__message, method_2: _M0IP419moonbit_2dcommunity7rabbita8internal7runtime7SandboxP319moonbit_2dcommunity7rabbita3cmd9Scheduler14drain__message, method_3: _M0IP016_24default__implP319moonbit_2dcommunity7rabbita3cmd9Scheduler3addGRP419moonbit_2dcommunity7rabbita8internal7runtime7SandboxE, method_4: _M0IP419moonbit_2dcommunity7rabbita8internal7runtime7SandboxP319moonbit_2dcommunity7rabbita3cmd9Scheduler5hooks };
const _M0FP0142moonbit_2dcommunity_2frabbita_2finternal_2fduplix_2fNode_5bBool_3f_5d_24as_24_40moonbit_2dcommunity_2frabbita_2finternal_2fduplix_2eErasedNode = { method_0: _M0IP419moonbit_2dcommunity7rabbita8internal6duplix4NodeP419moonbit_2dcommunity7rabbita8internal6duplix10ErasedNode7get__idGObE, method_1: _M0IP419moonbit_2dcommunity7rabbita8internal6duplix4NodeP419moonbit_2dcommunity7rabbita8internal6duplix10ErasedNode6childsGObE, method_2: _M0IP419moonbit_2dcommunity7rabbita8internal6duplix4NodeP419moonbit_2dcommunity7rabbita8internal6duplix10ErasedNode11changed__atGObE, method_3: _M0IP419moonbit_2dcommunity7rabbita8internal6duplix4NodeP419moonbit_2dcommunity7rabbita8internal6duplix10ErasedNode11dirty__flagGObE, method_4: _M0IP419moonbit_2dcommunity7rabbita8internal6duplix4NodeP419moonbit_2dcommunity7rabbita8internal6duplix10ErasedNode9recomputeGObE };
const _M0FP092moonbitlang_2fcore_2fbuiltin_2fStringBuilder_24as_24_40moonbitlang_2fcore_2fbuiltin_2eLogger = { method_0: _M0IPB13StringBuilderPB6Logger13write__string, method_1: _M0IP016_24default__implPB6Logger16write__substringGRPB13StringBuilderE, method_2: _M0IPB13StringBuilderPB6Logger11write__view, method_3: _M0IPB13StringBuilderPB6Logger11write__char, method_4: _M0IP016_24default__implPB6Logger28write__string__interpolationGRPB13StringBuilderE, method_5: _M0IP016_24default__implPB6Logger5writeGRPB13StringBuilderE };
const _M0FP0139moonbit_2dcommunity_2frabbita_2finternal_2fduplix_2fNode_5bUnit_5d_24as_24_40moonbit_2dcommunity_2frabbita_2finternal_2fduplix_2eErasedNode = { method_0: _M0IP419moonbit_2dcommunity7rabbita8internal6duplix4NodeP419moonbit_2dcommunity7rabbita8internal6duplix10ErasedNode7get__idGuE, method_1: _M0IP419moonbit_2dcommunity7rabbita8internal6duplix4NodeP419moonbit_2dcommunity7rabbita8internal6duplix10ErasedNode6childsGuE, method_2: _M0IP419moonbit_2dcommunity7rabbita8internal6duplix4NodeP419moonbit_2dcommunity7rabbita8internal6duplix10ErasedNode11changed__atGuE, method_3: _M0IP419moonbit_2dcommunity7rabbita8internal6duplix4NodeP419moonbit_2dcommunity7rabbita8internal6duplix10ErasedNode11dirty__flagGuE, method_4: _M0IP419moonbit_2dcommunity7rabbita8internal6duplix4NodeP419moonbit_2dcommunity7rabbita8internal6duplix10ErasedNode9recomputeGuE };
const _M0MPB4Iter4nextN6constrS9310GUsWRP319moonbit_2dcommunity7rabbita3dom5EventRP319moonbit_2dcommunity7rabbita3cmd9SchedulerEuEE = 0;
const _M0MPB4Iter4nextN6constrS9311GUsWRP319moonbit_2dcommunity7rabbita3dom5EventRP319moonbit_2dcommunity7rabbita3cmd9SchedulerEuEE = 0;
const _M0MPB4Iter3newN6constrS9318GUsWRP319moonbit_2dcommunity7rabbita3dom5EventRP319moonbit_2dcommunity7rabbita3cmd9SchedulerEuEE = 0;
const _M0FP419moonbit_2dcommunity7rabbita8internal3key3key = undefined;
const _M0FP319moonbit_2dcommunity7rabbita3cmd4none = new _M0DTP319moonbit_2dcommunity7rabbita3cmd3Cmd5Batch([]);
const _M0MP419moonbit_2dcommunity7rabbita8internal7runtime7Sandbox3newN7_2abindS1191 = "";
const _M0FP319moonbit_2dcommunity7rabbita4html11push__styleN7_2abindS1976 = ";";
const _M0FPB4seed = _M0FPB12random__seed();
const _M0FP419moonbit_2dcommunity7rabbita8internal6duplix14global__scopes = _M0MP419moonbit_2dcommunity7rabbita8internal7slotmap7SlotMap7SlotMapGRP419moonbit_2dcommunity7rabbita8internal7runtime5StoreE();
const _M0FP419moonbit_2dcommunity7rabbita8internal6duplix11root__scope = _M0MP419moonbit_2dcommunity7rabbita8internal7slotmap7SlotMap14allocate__withGRP419moonbit_2dcommunity7rabbita8internal6duplix5ScopeE(_M0FP419moonbit_2dcommunity7rabbita8internal6duplix14global__scopes, (id) => {
  const _bind = [];
  return new _M0TP419moonbit_2dcommunity7rabbita8internal6duplix5Scope(id, undefined, _M0MPC13set3Set3SetGRP419moonbit_2dcommunity7rabbita8internal7slotmap2IdE(new _M0TPB9ArrayViewGRP419moonbit_2dcommunity7rabbita8internal7slotmap2IdE(_bind, 0, 0), undefined), []);
});
const _M0FP419moonbit_2dcommunity7rabbita8internal6duplix14current__scope = _M0MPC13ref3Ref3RefGRP419moonbit_2dcommunity7rabbita8internal7slotmap2IdE(_M0FP419moonbit_2dcommunity7rabbita8internal6duplix11root__scope);
const _M0FP419moonbit_2dcommunity7rabbita8internal6duplix4uuid = _M0MPC13ref3Ref3RefGiE(0);
const _M0FP419moonbit_2dcommunity7rabbita8internal6duplix5clock = _M0MPC13ref3Ref3RefGdE(0);
const _M0FP310tonyfettes31rabbita_2dmidpull_2ddrain_2dmre4main6renderN6constrS53 = "button";
const _M0FP310tonyfettes31rabbita_2dmidpull_2ddrain_2dmre4main6renderN6constrS54 = "button";
const _M0FP419moonbit_2dcommunity7rabbita8internal7runtime14global__stores = _M0MP419moonbit_2dcommunity7rabbita8internal7slotmap7SlotMap7SlotMapGRP419moonbit_2dcommunity7rabbita8internal7runtime5StoreE();
const _M0FP219moonbit_2dcommunity7rabbita14ambient__graph = _M0MPC13ref3Ref3RefGORP219moonbit_2dcommunity7rabbita5GraphE(undefined);
function _M0FPB13consume4__acc(acc, input) {
  const _p = (acc >>> 0) + ((Math.imul(input, -1028477379) | 0) >>> 0) | 0;
  const _p$2 = 17;
  return Math.imul(_p << _p$2 | (_p >>> (32 - _p$2 | 0) | 0), 668265263) | 0;
}
function _M0MPB6Hasher8consume4(self, input) {
  self.acc = _M0FPB13consume4__acc(self.acc, input);
}
function _M0MPB6Hasher13combine__uint(self, value) {
  self.acc = (self.acc >>> 0) + (4 >>> 0) | 0;
  _M0MPB6Hasher8consume4(self, value);
}
function _M0MPB13StringBuilder13write__objectGiE(self, obj) {
  _M0IP016_24default__implPB4Show6outputGiE(obj, { self: self, method_table: _M0FP092moonbitlang_2fcore_2fbuiltin_2fStringBuilder_24as_24_40moonbitlang_2fcore_2fbuiltin_2eLogger });
}
function _M0MPB13StringBuilder13write__objectGsE(self, obj) {
  _M0IP016_24default__implPB4Show6outputGsE(obj, { self: self, method_table: _M0FP092moonbitlang_2fcore_2fbuiltin_2fStringBuilder_24as_24_40moonbitlang_2fcore_2fbuiltin_2eLogger });
}
function _M0MPB13StringBuilder21StringBuilder_2einner(size_hint) {
  return new _M0TPB13StringBuilder("");
}
function _M0IPB13StringBuilderPB6Logger11write__char(self, ch) {
  self.val = `${self.val}${String.fromCodePoint(ch)}`;
}
function _M0MPC16uint166UInt1623is__trailing__surrogate(self) {
  return _M0IP016_24default__implPB7Compare6op__geGkE(self, 56320) && _M0IP016_24default__implPB7Compare6op__leGkE(self, 57343);
}
function _M0IPB13StringBuilderPB6Logger13write__string(self, str) {
  self.val = `${self.val}${str}`;
}
function _M0MPB6Hasher12combine__int(self, value) {
  _M0MPB6Hasher13combine__uint(self, value);
}
function _M0MPB6Hasher7combineGRP419moonbit_2dcommunity7rabbita8internal7slotmap2IdE(self, value) {
  _M0IP419moonbit_2dcommunity7rabbita8internal7slotmap2IdPB4Hash13hash__combine(value, self);
}
function _M0IP016_24default__implPB2Eq10not__equalGOsE(x, y) {
  return !_M0IPC16option6OptionPB2Eq5equalGsE(x, y);
}
function _M0IP016_24default__implPB2Eq10not__equalGRP319moonbit_2dcommunity7rabbita7variant7VariantE(x, y) {
  return !_M0IP319moonbit_2dcommunity7rabbita7variant7VariantPB2Eq5equal(x, y);
}
function _M0IP016_24default__implPB7Compare6op__leGkE(x, y) {
  return $compare_int(x, y) <= 0;
}
function _M0IP016_24default__implPB7Compare6op__geGkE(x, y) {
  return $compare_int(x, y) >= 0;
}
function _M0MPB6Hasher14Hasher_2einner(seed) {
  return new _M0TPB6Hasher((seed >>> 0) + (374761393 >>> 0) | 0);
}
function _M0MPB6Hasher6Hasher(seed$46$opt) {
  let seed;
  if (seed$46$opt === undefined) {
    seed = _M0FPB4seed;
  } else {
    const _Some = seed$46$opt;
    seed = _Some;
  }
  return _M0MPB6Hasher14Hasher_2einner(seed);
}
function _M0FPB14avalanche__acc(acc) {
  let acc$2 = acc;
  acc$2 = acc$2 ^ (acc$2 >>> 15 | 0);
  acc$2 = Math.imul(acc$2, -2048144777) | 0;
  acc$2 = acc$2 ^ (acc$2 >>> 13 | 0);
  acc$2 = Math.imul(acc$2, -1028477379) | 0;
  acc$2 = acc$2 ^ (acc$2 >>> 16 | 0);
  return acc$2;
}
function _M0FPB13finalize__acc(acc) {
  return _M0FPB14avalanche__acc(acc);
}
function _M0MPB6Hasher8finalize(self) {
  return _M0FPB13finalize__acc(self.acc);
}
function _M0IP016_24default__implPB4Hash4hashGRP419moonbit_2dcommunity7rabbita8internal7slotmap2IdE(self) {
  const h = _M0MPB6Hasher6Hasher(undefined);
  _M0MPB6Hasher7combineGRP419moonbit_2dcommunity7rabbita8internal7slotmap2IdE(h, self);
  return _M0MPB6Hasher8finalize(h);
}
function _M0IP016_24default__implPB6Logger28write__string__interpolationGRPB13StringBuilderE(self, show) {
  show.method_table.method_0(show.self, { self: self, method_table: _M0FP092moonbitlang_2fcore_2fbuiltin_2fStringBuilder_24as_24_40moonbitlang_2fcore_2fbuiltin_2eLogger });
}
function _M0IP016_24default__implPB6Logger5writeGRPB13StringBuilderE(self, show) {
  show.method_table.method_0(show.self, { self: self, method_table: _M0FP092moonbitlang_2fcore_2fbuiltin_2fStringBuilder_24as_24_40moonbitlang_2fcore_2fbuiltin_2eLogger });
}
function _M0MPC16string6String11sub_2einner(self, start, end) {
  const len = self.length;
  let end$2;
  if (end === undefined) {
    end$2 = len;
  } else {
    const _Some = end;
    const _end = _Some;
    end$2 = _end;
  }
  if (start >= 0 && (start <= end$2 && end$2 <= len)) {
    if (start < len) {
      if (!_M0MPC16uint166UInt1623is__trailing__surrogate(self.charCodeAt(start))) {
      } else {
        $panic();
      }
    }
    if (end$2 < len) {
      if (!_M0MPC16uint166UInt1623is__trailing__surrogate(self.charCodeAt(end$2))) {
      } else {
        $panic();
      }
    }
    return new _M0TPC16string10StringView(self, start, end$2);
  } else {
    return $panic();
  }
}
function _M0IP016_24default__implPB6Logger16write__substringGRPB13StringBuilderE(self, value, start, len) {
  _M0IPB13StringBuilderPB6Logger11write__view(self, _M0MPC16string6String11sub_2einner(value, start, start + len | 0));
}
function _M0IP016_24default__implPB4Show6outputGiE(self, logger) {
  logger.method_table.method_0(logger.self, _M0IPC13int3IntPB4Show10to__string(self));
}
function _M0IP016_24default__implPB4Show6outputGsE(self, logger) {
  logger.method_table.method_0(logger.self, self);
}
function _M0MPB4Iter4nextGUsWRP319moonbit_2dcommunity7rabbita3dom5EventRP319moonbit_2dcommunity7rabbita3cmd9SchedulerEuEE(self) {
  const _func = self.f;
  const result = _func();
  const _bind = self.size_hint;
  if (result === undefined) {
    self.size_hint = _M0MPB4Iter4nextN6constrS9311GUsWRP319moonbit_2dcommunity7rabbita3dom5EventRP319moonbit_2dcommunity7rabbita3cmd9SchedulerEuEE;
  } else {
    if (_bind === undefined) {
    } else {
      const _Some = _bind;
      const _n = _Some;
      self.size_hint = _n > 0 ? _n - 1 | 0 : _M0MPB4Iter4nextN6constrS9310GUsWRP319moonbit_2dcommunity7rabbita3dom5EventRP319moonbit_2dcommunity7rabbita3cmd9SchedulerEuEE;
    }
  }
  return result;
}
function _M0MPC13int3Int18to__string_2einner(self, radix) {
  return _M0FPB19int__to__string__js(self, radix);
}
function _M0MPB4Iter3newGUsWRP319moonbit_2dcommunity7rabbita3dom5EventRP319moonbit_2dcommunity7rabbita3cmd9SchedulerEuEE(f, size_hint) {
  let size_hint$2;
  if (size_hint === undefined) {
    size_hint$2 = undefined;
  } else {
    const _Some = size_hint;
    const _n = _Some;
    size_hint$2 = _n > 0 ? _n : _M0MPB4Iter3newN6constrS9318GUsWRP319moonbit_2dcommunity7rabbita3dom5EventRP319moonbit_2dcommunity7rabbita3cmd9SchedulerEuEE;
  }
  return new _M0TPB4IterGUsWRP319moonbit_2dcommunity7rabbita3dom5EventRP319moonbit_2dcommunity7rabbita3cmd9SchedulerEuEE(f, size_hint$2);
}
function _M0MPC16string10StringView9to__owned(self) {
  return self.str.substring(self.start, self.end);
}
function _M0IPB13StringBuilderPB6Logger11write__view(self, str) {
  self.val = `${self.val}${_M0MPC16string10StringView9to__owned(str)}`;
}
function _M0MPC15array5Array4pushGRP419moonbit_2dcommunity7rabbita8internal7runtime5INodeE(self, value) {
  _M0MPB7JSArray4push(self, value);
}
function _M0MPC15array5Array4pushGjE(self, value) {
  _M0MPB7JSArray4push(self, value);
}
function _M0MPC15array5Array4pushGORP419moonbit_2dcommunity7rabbita8internal7runtime5StoreE(self, value) {
  _M0MPB7JSArray4push(self, value);
}
function _M0MPC15array5Array4pushGiE(self, value) {
  _M0MPB7JSArray4push(self, value);
}
function _M0IPC16string6StringPB12ToStringView16to__string__view(self) {
  return new _M0TPC16string10StringView(self, 0, self.length);
}
function _M0IPC13int3IntPB4Show10to__string(self) {
  return _M0MPC13int3Int18to__string_2einner(self, 10);
}
function _M0MPC15array9ArrayView6searchGRP419moonbit_2dcommunity7rabbita8internal6duplix9DirtyFlagE(self, value) {
  const _bind = self.end - self.start | 0;
  let _tmp = 0;
  while (true) {
    const i = _tmp;
    if (i < _bind) {
      const x = self.buf[self.start + i | 0];
      if (x.id === value.id) {
        return i;
      }
      _tmp = i + 1 | 0;
      continue;
    } else {
      return undefined;
    }
  }
}
function _M0MPC15array9ArrayView4joinGsE(self, separator) {
  if ((self.end - self.start | 0) === 0) {
    return "";
  } else {
    const _hd = self.buf[self.start];
    const _x_buf = self.buf;
    const _x_start = 1 + self.start | 0;
    const _x_end = self.end;
    const hd = _M0IPC16string6StringPB12ToStringView16to__string__view(_hd);
    const _bind = _x_end - _x_start | 0;
    let size_hint;
    let _tmp = 0;
    let _tmp$2 = hd.end - hd.start | 0;
    while (true) {
      const _ = _tmp;
      const size_hint$2 = _tmp$2;
      if (_ < _bind) {
        const s = _x_buf[_x_start + _ | 0];
        _tmp = _ + 1 | 0;
        const _bind$2 = _M0IPC16string6StringPB12ToStringView16to__string__view(s);
        _tmp$2 = (size_hint$2 + (_bind$2.end - _bind$2.start | 0) | 0) + (separator.end - separator.start | 0) | 0;
        continue;
      } else {
        size_hint = size_hint$2;
        break;
      }
    }
    const size_hint$2 = size_hint << 1;
    const buf = _M0MPB13StringBuilder21StringBuilder_2einner(size_hint$2);
    _M0IPB13StringBuilderPB6Logger11write__view(buf, hd);
    if ((separator.end - separator.start | 0) === 0) {
      const _bind$2 = _x_end - _x_start | 0;
      let _tmp$3 = 0;
      while (true) {
        const _ = _tmp$3;
        if (_ < _bind$2) {
          const s = _x_buf[_x_start + _ | 0];
          const s$2 = _M0IPC16string6StringPB12ToStringView16to__string__view(s);
          _M0IPB13StringBuilderPB6Logger11write__view(buf, s$2);
          _tmp$3 = _ + 1 | 0;
          continue;
        } else {
          break;
        }
      }
    } else {
      const _bind$2 = _x_end - _x_start | 0;
      let _tmp$3 = 0;
      while (true) {
        const _ = _tmp$3;
        if (_ < _bind$2) {
          const s = _x_buf[_x_start + _ | 0];
          const s$2 = _M0IPC16string6StringPB12ToStringView16to__string__view(s);
          _M0IPB13StringBuilderPB6Logger11write__view(buf, separator);
          _M0IPB13StringBuilderPB6Logger11write__view(buf, s$2);
          _tmp$3 = _ + 1 | 0;
          continue;
        } else {
          break;
        }
      }
    }
    return buf.val;
  }
}
function _M0IPC16option6OptionPB2Eq5equalGsE(self, other) {
  if (self === undefined) {
    return other === undefined;
  } else {
    const _Some = self;
    const _x = _Some;
    if (other === undefined) {
      return false;
    } else {
      const _Some$2 = other;
      const _y = _Some$2;
      return _x === _y;
    }
  }
}
function _M0IPC16option6OptionPB2Eq5equalGiE(self, other) {
  if (self === undefined) {
    return other === undefined;
  } else {
    const _Some = self;
    const _x = _Some;
    if (other === undefined) {
      return false;
    } else {
      const _Some$2 = other;
      const _y = _Some$2;
      return _x === _y;
    }
  }
}
function _M0IPC16option6OptionPB2Eq5equalGbE(self, other) {
  if (self === -1) {
    return other === -1;
  } else {
    const _Some = self;
    const _x = _Some;
    if (other === -1) {
      return false;
    } else {
      const _Some$2 = other;
      const _y = _Some$2;
      return _x === _y;
    }
  }
}
function _M0IPC16option6OptionPB2Eq5equalGuE(self, other) {
  if (self === -1) {
    return other === -1;
  } else {
    if (other === -1) {
      return false;
    } else {
      return true;
    }
  }
}
function _M0MPC16option6Option6unwrapGRP319moonbit_2dcommunity7rabbita3dom7ElementE(self) {
  if (self.$tag === 0) {
    return $panic();
  } else {
    const _Some = self;
    return _Some._0;
  }
}
function _M0MPC16option6Option6unwrapGOiE(self) {
  if (self.$tag === 0) {
    return $panic();
  } else {
    const _Some = self;
    return _Some._0;
  }
}
function _M0MPC16option6Option6unwrapGObE(self) {
  if (self.$tag === 0) {
    return $panic();
  } else {
    const _Some = self;
    return _Some._0;
  }
}
function _M0MPC16option6Option6unwrapGOuE(self) {
  if (self.$tag === 0) {
    return $panic();
  } else {
    const _Some = self;
    return _Some._0;
  }
}
function _M0MPC16option6Option16unwrap__or__elseGRP319moonbit_2dcommunity7rabbita2js5ValueE(self, default_) {
  if (self.$tag === 0) {
    return default_();
  } else {
    const _Some = self;
    const _t = _Some._0;
    return _t;
  }
}
function _M0MPC16option6Option3mapGsRP319moonbit_2dcommunity7rabbita2js5ValueE(self, f) {
  if (self === undefined) {
    return _M0DTPC16option6OptionGRP319moonbit_2dcommunity7rabbita2js5ValueE4None__;
  } else {
    const _Some = self;
    const _t = _Some;
    return new _M0DTPC16option6OptionGRP319moonbit_2dcommunity7rabbita2js5ValueE4Some(f(_t));
  }
}
function _M0MPC16option6Option3mapGRP319moonbit_2dcommunity7rabbita3dom4NodeRP319moonbit_2dcommunity7rabbita2js5ValueE(self, f) {
  if (self.$tag === 1) {
    const _Some = self;
    const _t = _Some._0;
    return new _M0DTPC16option6OptionGRP319moonbit_2dcommunity7rabbita2js5ValueE4Some(f(_t));
  } else {
    return _M0DTPC16option6OptionGRP319moonbit_2dcommunity7rabbita2js5ValueE4None__;
  }
}
function _M0MPC13int3Int20next__power__of__two(self) {
  if (self >= 0) {
    if (self <= 1) {
      return 1;
    }
    if (self > 1073741824) {
      return 1073741824;
    }
    return (2147483647 >> (Math.clz32(self - 1 | 0) - 1 | 0)) + 1 | 0;
  } else {
    return $panic();
  }
}
function _M0FPB8new__mapGsRP419moonbit_2dcommunity7rabbita8internal7runtime5INodeE(capacity) {
  const capacity$2 = _M0MPC13int3Int20next__power__of__two(capacity);
  const _bind = capacity$2 - 1 | 0;
  const _bind$2 = (Math.imul(capacity$2, 13) | 0) / 16 | 0;
  const _bind$3 = $make_array_len_and_init(capacity$2, undefined);
  const _bind$4 = undefined;
  return new _M0TPB3MapGsRP419moonbit_2dcommunity7rabbita8internal7runtime5INodeE(_bind$3, 0, capacity$2, _bind, _bind$2, _bind$4, -1);
}
function _M0FPB21capacity__for__length(length) {
  let capacity = _M0MPC13int3Int20next__power__of__two(length);
  const _p = capacity;
  if (length > ((Math.imul(_p, 13) | 0) / 16 | 0)) {
    capacity = Math.imul(capacity, 2) | 0;
  }
  return capacity;
}
function _M0MPB3Map20add__entry__to__tailGsRPC13ref3RefGWRP319moonbit_2dcommunity7rabbita3dom5EventRP319moonbit_2dcommunity7rabbita3cmd9SchedulerEuEE(self, idx, entry) {
  const _bind = self.tail;
  if (_bind === -1) {
    self.head = entry;
  } else {
    const _tmp = self.entries;
    $bound_check(_tmp, _bind);
    const _p = _tmp[_bind];
    let _tmp$2;
    if (_p === undefined) {
      _tmp$2 = $panic();
    } else {
      const _p$2 = _p;
      _tmp$2 = _p$2;
    }
    _tmp$2.next = entry;
  }
  self.tail = idx;
  const _tmp = self.entries;
  $bound_check(_tmp, idx);
  _tmp[idx] = entry;
  self.size = self.size + 1 | 0;
}
function _M0MPB3Map10set__entryGsRPC13ref3RefGWRP319moonbit_2dcommunity7rabbita3dom5EventRP319moonbit_2dcommunity7rabbita3cmd9SchedulerEuEE(self, entry, new_idx) {
  const _tmp = self.entries;
  $bound_check(_tmp, new_idx);
  _tmp[new_idx] = entry;
  const _bind = entry.next;
  if (_bind === undefined) {
    self.tail = new_idx;
    return;
  } else {
    const _Some = _bind;
    const _next = _Some;
    _next.prev = new_idx;
    return;
  }
}
function _M0MPB3Map10push__awayGsRPC13ref3RefGWRP319moonbit_2dcommunity7rabbita3dom5EventRP319moonbit_2dcommunity7rabbita3cmd9SchedulerEuEE(self, idx, entry) {
  let _tmp = entry.psl + 1 | 0;
  let _tmp$2 = idx + 1 & self.capacity_mask;
  let _tmp$3 = entry;
  while (true) {
    const psl = _tmp;
    const idx$2 = _tmp$2;
    const entry$2 = _tmp$3;
    const _tmp$4 = self.entries;
    $bound_check(_tmp$4, idx$2);
    const _bind = _tmp$4[idx$2];
    if (_bind === undefined) {
      entry$2.psl = psl;
      _M0MPB3Map10set__entryGsRPC13ref3RefGWRP319moonbit_2dcommunity7rabbita3dom5EventRP319moonbit_2dcommunity7rabbita3cmd9SchedulerEuEE(self, entry$2, idx$2);
      return;
    } else {
      const _Some = _bind;
      const _curr_entry = _Some;
      if (psl > _curr_entry.psl) {
        entry$2.psl = psl;
        _M0MPB3Map10set__entryGsRPC13ref3RefGWRP319moonbit_2dcommunity7rabbita3dom5EventRP319moonbit_2dcommunity7rabbita3cmd9SchedulerEuEE(self, entry$2, idx$2);
        _tmp = _curr_entry.psl + 1 | 0;
        _tmp$2 = idx$2 + 1 & self.capacity_mask;
        _tmp$3 = _curr_entry;
        continue;
      } else {
        _tmp = psl + 1 | 0;
        _tmp$2 = idx$2 + 1 & self.capacity_mask;
        continue;
      }
    }
  }
}
function _M0MPB3Map20rehash__place__entryGsRPC13ref3RefGWRP319moonbit_2dcommunity7rabbita3dom5EventRP319moonbit_2dcommunity7rabbita3cmd9SchedulerEuEE(self, outer) {
  const hash = outer.hash;
  let _tmp = 0;
  let _tmp$2 = hash & self.capacity_mask;
  while (true) {
    const psl = _tmp;
    const idx = _tmp$2;
    const _tmp$3 = self.entries;
    $bound_check(_tmp$3, idx);
    const _bind = _tmp$3[idx];
    if (_bind === undefined) {
      outer.psl = psl;
      outer.prev = self.tail;
      _M0MPB3Map20add__entry__to__tailGsRPC13ref3RefGWRP319moonbit_2dcommunity7rabbita3dom5EventRP319moonbit_2dcommunity7rabbita3cmd9SchedulerEuEE(self, idx, outer);
      return undefined;
    } else {
      const _Some = _bind;
      const _curr = _Some;
      if (psl > _curr.psl) {
        _M0MPB3Map10push__awayGsRPC13ref3RefGWRP319moonbit_2dcommunity7rabbita3dom5EventRP319moonbit_2dcommunity7rabbita3cmd9SchedulerEuEE(self, idx, _curr);
        outer.psl = psl;
        outer.prev = self.tail;
        _M0MPB3Map20add__entry__to__tailGsRPC13ref3RefGWRP319moonbit_2dcommunity7rabbita3dom5EventRP319moonbit_2dcommunity7rabbita3cmd9SchedulerEuEE(self, idx, outer);
        return undefined;
      } else {
        _tmp = psl + 1 | 0;
        _tmp$2 = idx + 1 & self.capacity_mask;
        continue;
      }
    }
  }
}
function _M0MPB3Map4growGsRPC13ref3RefGWRP319moonbit_2dcommunity7rabbita3dom5EventRP319moonbit_2dcommunity7rabbita3cmd9SchedulerEuEE(self) {
  const old_head = self.head;
  const new_capacity = self.capacity << 1;
  self.entries = $make_array_len_and_init(new_capacity, undefined);
  self.capacity = new_capacity;
  self.capacity_mask = new_capacity - 1 | 0;
  const _p = self.capacity;
  self.grow_at = (Math.imul(_p, 13) | 0) / 16 | 0;
  self.size = 0;
  self.head = undefined;
  self.tail = -1;
  let _tmp = old_head;
  while (true) {
    const x = _tmp;
    if (x === undefined) {
      return;
    } else {
      const _Some = x;
      const _e = _Some;
      const next_in_chain = _e.next;
      _e.next = undefined;
      _M0MPB3Map20rehash__place__entryGsRPC13ref3RefGWRP319moonbit_2dcommunity7rabbita3dom5EventRP319moonbit_2dcommunity7rabbita3cmd9SchedulerEuEE(self, _e);
      _tmp = next_in_chain;
      continue;
    }
  }
}
function _M0MPB3Map15set__with__hashGsRPC13ref3RefGWRP319moonbit_2dcommunity7rabbita3dom5EventRP319moonbit_2dcommunity7rabbita3cmd9SchedulerEuEE(self, key, value, hash) {
  let _tmp = 0;
  let _tmp$2 = hash & self.capacity_mask;
  while (true) {
    const psl = _tmp;
    const idx = _tmp$2;
    const _tmp$3 = self.entries;
    $bound_check(_tmp$3, idx);
    const _bind = _tmp$3[idx];
    if (_bind === undefined) {
      if (self.size >= self.grow_at) {
        _M0MPB3Map4growGsRPC13ref3RefGWRP319moonbit_2dcommunity7rabbita3dom5EventRP319moonbit_2dcommunity7rabbita3cmd9SchedulerEuEE(self);
        _tmp = 0;
        _tmp$2 = hash & self.capacity_mask;
        continue;
      }
      const _bind$2 = self.tail;
      const _bind$3 = undefined;
      const entry = new _M0TPB5EntryGsRPC13ref3RefGWRP319moonbit_2dcommunity7rabbita3dom5EventRP319moonbit_2dcommunity7rabbita3cmd9SchedulerEuEE(_bind$2, _bind$3, psl, hash, key, value);
      _M0MPB3Map20add__entry__to__tailGsRPC13ref3RefGWRP319moonbit_2dcommunity7rabbita3dom5EventRP319moonbit_2dcommunity7rabbita3cmd9SchedulerEuEE(self, idx, entry);
      return undefined;
    } else {
      const _Some = _bind;
      const _curr_entry = _Some;
      if (_curr_entry.hash === hash && _curr_entry.key === key) {
        _curr_entry.value = value;
        return undefined;
      }
      if (psl > _curr_entry.psl) {
        if (self.size >= self.grow_at) {
          _M0MPB3Map4growGsRPC13ref3RefGWRP319moonbit_2dcommunity7rabbita3dom5EventRP319moonbit_2dcommunity7rabbita3cmd9SchedulerEuEE(self);
          _tmp = 0;
          _tmp$2 = hash & self.capacity_mask;
          continue;
        }
        _M0MPB3Map10push__awayGsRPC13ref3RefGWRP319moonbit_2dcommunity7rabbita3dom5EventRP319moonbit_2dcommunity7rabbita3cmd9SchedulerEuEE(self, idx, _curr_entry);
        const _bind$2 = self.tail;
        const _bind$3 = undefined;
        const entry = new _M0TPB5EntryGsRPC13ref3RefGWRP319moonbit_2dcommunity7rabbita3dom5EventRP319moonbit_2dcommunity7rabbita3cmd9SchedulerEuEE(_bind$2, _bind$3, psl, hash, key, value);
        _M0MPB3Map20add__entry__to__tailGsRPC13ref3RefGWRP319moonbit_2dcommunity7rabbita3dom5EventRP319moonbit_2dcommunity7rabbita3cmd9SchedulerEuEE(self, idx, entry);
        return undefined;
      }
      _tmp = psl + 1 | 0;
      _tmp$2 = idx + 1 & self.capacity_mask;
      continue;
    }
  }
}
function _M0MPB3Map15set__with__hashGsRP419moonbit_2dcommunity7rabbita8internal7runtime5INodeE(self, key, value, hash) {
  let _tmp = 0;
  let _tmp$2 = hash & self.capacity_mask;
  while (true) {
    const psl = _tmp;
    const idx = _tmp$2;
    const _tmp$3 = self.entries;
    $bound_check(_tmp$3, idx);
    const _bind = _tmp$3[idx];
    if (_bind === undefined) {
      if (self.size >= self.grow_at) {
        _M0MPB3Map4growGsRPC13ref3RefGWRP319moonbit_2dcommunity7rabbita3dom5EventRP319moonbit_2dcommunity7rabbita3cmd9SchedulerEuEE(self);
        _tmp = 0;
        _tmp$2 = hash & self.capacity_mask;
        continue;
      }
      const _bind$2 = self.tail;
      const _bind$3 = undefined;
      const entry = new _M0TPB5EntryGsRP419moonbit_2dcommunity7rabbita8internal7runtime5INodeE(_bind$2, _bind$3, psl, hash, key, value);
      _M0MPB3Map20add__entry__to__tailGsRPC13ref3RefGWRP319moonbit_2dcommunity7rabbita3dom5EventRP319moonbit_2dcommunity7rabbita3cmd9SchedulerEuEE(self, idx, entry);
      return undefined;
    } else {
      const _Some = _bind;
      const _curr_entry = _Some;
      if (_curr_entry.hash === hash && _curr_entry.key === key) {
        _curr_entry.value = value;
        return undefined;
      }
      if (psl > _curr_entry.psl) {
        if (self.size >= self.grow_at) {
          _M0MPB3Map4growGsRPC13ref3RefGWRP319moonbit_2dcommunity7rabbita3dom5EventRP319moonbit_2dcommunity7rabbita3cmd9SchedulerEuEE(self);
          _tmp = 0;
          _tmp$2 = hash & self.capacity_mask;
          continue;
        }
        _M0MPB3Map10push__awayGsRPC13ref3RefGWRP319moonbit_2dcommunity7rabbita3dom5EventRP319moonbit_2dcommunity7rabbita3cmd9SchedulerEuEE(self, idx, _curr_entry);
        const _bind$2 = self.tail;
        const _bind$3 = undefined;
        const entry = new _M0TPB5EntryGsRP419moonbit_2dcommunity7rabbita8internal7runtime5INodeE(_bind$2, _bind$3, psl, hash, key, value);
        _M0MPB3Map20add__entry__to__tailGsRPC13ref3RefGWRP319moonbit_2dcommunity7rabbita3dom5EventRP319moonbit_2dcommunity7rabbita3cmd9SchedulerEuEE(self, idx, entry);
        return undefined;
      }
      _tmp = psl + 1 | 0;
      _tmp$2 = idx + 1 & self.capacity_mask;
      continue;
    }
  }
}
function _M0MPB3Map15set__with__hashGsRP319moonbit_2dcommunity7rabbita3sub10RunningSubE(self, key, value, hash) {
  let _tmp = 0;
  let _tmp$2 = hash & self.capacity_mask;
  while (true) {
    const psl = _tmp;
    const idx = _tmp$2;
    const _tmp$3 = self.entries;
    $bound_check(_tmp$3, idx);
    const _bind = _tmp$3[idx];
    if (_bind === undefined) {
      if (self.size >= self.grow_at) {
        _M0MPB3Map4growGsRPC13ref3RefGWRP319moonbit_2dcommunity7rabbita3dom5EventRP319moonbit_2dcommunity7rabbita3cmd9SchedulerEuEE(self);
        _tmp = 0;
        _tmp$2 = hash & self.capacity_mask;
        continue;
      }
      const _bind$2 = self.tail;
      const _bind$3 = undefined;
      const entry = new _M0TPB5EntryGsRP319moonbit_2dcommunity7rabbita3sub10RunningSubE(_bind$2, _bind$3, psl, hash, key, value);
      _M0MPB3Map20add__entry__to__tailGsRPC13ref3RefGWRP319moonbit_2dcommunity7rabbita3dom5EventRP319moonbit_2dcommunity7rabbita3cmd9SchedulerEuEE(self, idx, entry);
      return undefined;
    } else {
      const _Some = _bind;
      const _curr_entry = _Some;
      if (_curr_entry.hash === hash && _curr_entry.key === key) {
        _curr_entry.value = value;
        return undefined;
      }
      if (psl > _curr_entry.psl) {
        if (self.size >= self.grow_at) {
          _M0MPB3Map4growGsRPC13ref3RefGWRP319moonbit_2dcommunity7rabbita3dom5EventRP319moonbit_2dcommunity7rabbita3cmd9SchedulerEuEE(self);
          _tmp = 0;
          _tmp$2 = hash & self.capacity_mask;
          continue;
        }
        _M0MPB3Map10push__awayGsRPC13ref3RefGWRP319moonbit_2dcommunity7rabbita3dom5EventRP319moonbit_2dcommunity7rabbita3cmd9SchedulerEuEE(self, idx, _curr_entry);
        const _bind$2 = self.tail;
        const _bind$3 = undefined;
        const entry = new _M0TPB5EntryGsRP319moonbit_2dcommunity7rabbita3sub10RunningSubE(_bind$2, _bind$3, psl, hash, key, value);
        _M0MPB3Map20add__entry__to__tailGsRPC13ref3RefGWRP319moonbit_2dcommunity7rabbita3dom5EventRP319moonbit_2dcommunity7rabbita3cmd9SchedulerEuEE(self, idx, entry);
        return undefined;
      }
      _tmp = psl + 1 | 0;
      _tmp$2 = idx + 1 & self.capacity_mask;
      continue;
    }
  }
}
function _M0MPB3Map15set__with__hashGsURPC15error5ErrorRP319moonbit_2dcommunity7rabbita3sub9SubLoaderEE(self, key, value, hash) {
  let _tmp = 0;
  let _tmp$2 = hash & self.capacity_mask;
  while (true) {
    const psl = _tmp;
    const idx = _tmp$2;
    const _tmp$3 = self.entries;
    $bound_check(_tmp$3, idx);
    const _bind = _tmp$3[idx];
    if (_bind === undefined) {
      if (self.size >= self.grow_at) {
        _M0MPB3Map4growGsRPC13ref3RefGWRP319moonbit_2dcommunity7rabbita3dom5EventRP319moonbit_2dcommunity7rabbita3cmd9SchedulerEuEE(self);
        _tmp = 0;
        _tmp$2 = hash & self.capacity_mask;
        continue;
      }
      const _bind$2 = self.tail;
      const _bind$3 = undefined;
      const entry = new _M0TPB5EntryGsURPC15error5ErrorRP319moonbit_2dcommunity7rabbita3sub9SubLoaderEE(_bind$2, _bind$3, psl, hash, key, value);
      _M0MPB3Map20add__entry__to__tailGsRPC13ref3RefGWRP319moonbit_2dcommunity7rabbita3dom5EventRP319moonbit_2dcommunity7rabbita3cmd9SchedulerEuEE(self, idx, entry);
      return undefined;
    } else {
      const _Some = _bind;
      const _curr_entry = _Some;
      if (_curr_entry.hash === hash && _curr_entry.key === key) {
        _curr_entry.value = value;
        return undefined;
      }
      if (psl > _curr_entry.psl) {
        if (self.size >= self.grow_at) {
          _M0MPB3Map4growGsRPC13ref3RefGWRP319moonbit_2dcommunity7rabbita3dom5EventRP319moonbit_2dcommunity7rabbita3cmd9SchedulerEuEE(self);
          _tmp = 0;
          _tmp$2 = hash & self.capacity_mask;
          continue;
        }
        _M0MPB3Map10push__awayGsRPC13ref3RefGWRP319moonbit_2dcommunity7rabbita3dom5EventRP319moonbit_2dcommunity7rabbita3cmd9SchedulerEuEE(self, idx, _curr_entry);
        const _bind$2 = self.tail;
        const _bind$3 = undefined;
        const entry = new _M0TPB5EntryGsURPC15error5ErrorRP319moonbit_2dcommunity7rabbita3sub9SubLoaderEE(_bind$2, _bind$3, psl, hash, key, value);
        _M0MPB3Map20add__entry__to__tailGsRPC13ref3RefGWRP319moonbit_2dcommunity7rabbita3dom5EventRP319moonbit_2dcommunity7rabbita3cmd9SchedulerEuEE(self, idx, entry);
        return undefined;
      }
      _tmp = psl + 1 | 0;
      _tmp$2 = idx + 1 & self.capacity_mask;
      continue;
    }
  }
}
function _M0MPB3Map15set__with__hashGssE(self, key, value, hash) {
  let _tmp = 0;
  let _tmp$2 = hash & self.capacity_mask;
  while (true) {
    const psl = _tmp;
    const idx = _tmp$2;
    const _tmp$3 = self.entries;
    $bound_check(_tmp$3, idx);
    const _bind = _tmp$3[idx];
    if (_bind === undefined) {
      if (self.size >= self.grow_at) {
        _M0MPB3Map4growGsRPC13ref3RefGWRP319moonbit_2dcommunity7rabbita3dom5EventRP319moonbit_2dcommunity7rabbita3cmd9SchedulerEuEE(self);
        _tmp = 0;
        _tmp$2 = hash & self.capacity_mask;
        continue;
      }
      const _bind$2 = self.tail;
      const _bind$3 = undefined;
      const entry = new _M0TPB5EntryGssE(_bind$2, _bind$3, psl, hash, key, value);
      _M0MPB3Map20add__entry__to__tailGsRPC13ref3RefGWRP319moonbit_2dcommunity7rabbita3dom5EventRP319moonbit_2dcommunity7rabbita3cmd9SchedulerEuEE(self, idx, entry);
      return undefined;
    } else {
      const _Some = _bind;
      const _curr_entry = _Some;
      if (_curr_entry.hash === hash && _curr_entry.key === key) {
        _curr_entry.value = value;
        return undefined;
      }
      if (psl > _curr_entry.psl) {
        if (self.size >= self.grow_at) {
          _M0MPB3Map4growGsRPC13ref3RefGWRP319moonbit_2dcommunity7rabbita3dom5EventRP319moonbit_2dcommunity7rabbita3cmd9SchedulerEuEE(self);
          _tmp = 0;
          _tmp$2 = hash & self.capacity_mask;
          continue;
        }
        _M0MPB3Map10push__awayGsRPC13ref3RefGWRP319moonbit_2dcommunity7rabbita3dom5EventRP319moonbit_2dcommunity7rabbita3cmd9SchedulerEuEE(self, idx, _curr_entry);
        const _bind$2 = self.tail;
        const _bind$3 = undefined;
        const entry = new _M0TPB5EntryGssE(_bind$2, _bind$3, psl, hash, key, value);
        _M0MPB3Map20add__entry__to__tailGsRPC13ref3RefGWRP319moonbit_2dcommunity7rabbita3dom5EventRP319moonbit_2dcommunity7rabbita3cmd9SchedulerEuEE(self, idx, entry);
        return undefined;
      }
      _tmp = psl + 1 | 0;
      _tmp$2 = idx + 1 & self.capacity_mask;
      continue;
    }
  }
}
function _M0MPB3Map15set__with__hashGsRP319moonbit_2dcommunity7rabbita7variant7VariantE(self, key, value, hash) {
  let _tmp = 0;
  let _tmp$2 = hash & self.capacity_mask;
  while (true) {
    const psl = _tmp;
    const idx = _tmp$2;
    const _tmp$3 = self.entries;
    $bound_check(_tmp$3, idx);
    const _bind = _tmp$3[idx];
    if (_bind === undefined) {
      if (self.size >= self.grow_at) {
        _M0MPB3Map4growGsRPC13ref3RefGWRP319moonbit_2dcommunity7rabbita3dom5EventRP319moonbit_2dcommunity7rabbita3cmd9SchedulerEuEE(self);
        _tmp = 0;
        _tmp$2 = hash & self.capacity_mask;
        continue;
      }
      const _bind$2 = self.tail;
      const _bind$3 = undefined;
      const entry = new _M0TPB5EntryGsRP319moonbit_2dcommunity7rabbita7variant7VariantE(_bind$2, _bind$3, psl, hash, key, value);
      _M0MPB3Map20add__entry__to__tailGsRPC13ref3RefGWRP319moonbit_2dcommunity7rabbita3dom5EventRP319moonbit_2dcommunity7rabbita3cmd9SchedulerEuEE(self, idx, entry);
      return undefined;
    } else {
      const _Some = _bind;
      const _curr_entry = _Some;
      if (_curr_entry.hash === hash && _curr_entry.key === key) {
        _curr_entry.value = value;
        return undefined;
      }
      if (psl > _curr_entry.psl) {
        if (self.size >= self.grow_at) {
          _M0MPB3Map4growGsRPC13ref3RefGWRP319moonbit_2dcommunity7rabbita3dom5EventRP319moonbit_2dcommunity7rabbita3cmd9SchedulerEuEE(self);
          _tmp = 0;
          _tmp$2 = hash & self.capacity_mask;
          continue;
        }
        _M0MPB3Map10push__awayGsRPC13ref3RefGWRP319moonbit_2dcommunity7rabbita3dom5EventRP319moonbit_2dcommunity7rabbita3cmd9SchedulerEuEE(self, idx, _curr_entry);
        const _bind$2 = self.tail;
        const _bind$3 = undefined;
        const entry = new _M0TPB5EntryGsRP319moonbit_2dcommunity7rabbita7variant7VariantE(_bind$2, _bind$3, psl, hash, key, value);
        _M0MPB3Map20add__entry__to__tailGsRPC13ref3RefGWRP319moonbit_2dcommunity7rabbita3dom5EventRP319moonbit_2dcommunity7rabbita3cmd9SchedulerEuEE(self, idx, entry);
        return undefined;
      }
      _tmp = psl + 1 | 0;
      _tmp$2 = idx + 1 & self.capacity_mask;
      continue;
    }
  }
}
function _M0MPB3Map15set__with__hashGsWRP319moonbit_2dcommunity7rabbita3dom5EventRP319moonbit_2dcommunity7rabbita3cmd9SchedulerEuE(self, key, value, hash) {
  let _tmp = 0;
  let _tmp$2 = hash & self.capacity_mask;
  while (true) {
    const psl = _tmp;
    const idx = _tmp$2;
    const _tmp$3 = self.entries;
    $bound_check(_tmp$3, idx);
    const _bind = _tmp$3[idx];
    if (_bind === undefined) {
      if (self.size >= self.grow_at) {
        _M0MPB3Map4growGsRPC13ref3RefGWRP319moonbit_2dcommunity7rabbita3dom5EventRP319moonbit_2dcommunity7rabbita3cmd9SchedulerEuEE(self);
        _tmp = 0;
        _tmp$2 = hash & self.capacity_mask;
        continue;
      }
      const _bind$2 = self.tail;
      const _bind$3 = undefined;
      const entry = new _M0TPB5EntryGsWRP319moonbit_2dcommunity7rabbita3dom5EventRP319moonbit_2dcommunity7rabbita3cmd9SchedulerEuE(_bind$2, _bind$3, psl, hash, key, value);
      _M0MPB3Map20add__entry__to__tailGsRPC13ref3RefGWRP319moonbit_2dcommunity7rabbita3dom5EventRP319moonbit_2dcommunity7rabbita3cmd9SchedulerEuEE(self, idx, entry);
      return undefined;
    } else {
      const _Some = _bind;
      const _curr_entry = _Some;
      if (_curr_entry.hash === hash && _curr_entry.key === key) {
        _curr_entry.value = value;
        return undefined;
      }
      if (psl > _curr_entry.psl) {
        if (self.size >= self.grow_at) {
          _M0MPB3Map4growGsRPC13ref3RefGWRP319moonbit_2dcommunity7rabbita3dom5EventRP319moonbit_2dcommunity7rabbita3cmd9SchedulerEuEE(self);
          _tmp = 0;
          _tmp$2 = hash & self.capacity_mask;
          continue;
        }
        _M0MPB3Map10push__awayGsRPC13ref3RefGWRP319moonbit_2dcommunity7rabbita3dom5EventRP319moonbit_2dcommunity7rabbita3cmd9SchedulerEuEE(self, idx, _curr_entry);
        const _bind$2 = self.tail;
        const _bind$3 = undefined;
        const entry = new _M0TPB5EntryGsWRP319moonbit_2dcommunity7rabbita3dom5EventRP319moonbit_2dcommunity7rabbita3cmd9SchedulerEuE(_bind$2, _bind$3, psl, hash, key, value);
        _M0MPB3Map20add__entry__to__tailGsRPC13ref3RefGWRP319moonbit_2dcommunity7rabbita3dom5EventRP319moonbit_2dcommunity7rabbita3cmd9SchedulerEuEE(self, idx, entry);
        return undefined;
      }
      _tmp = psl + 1 | 0;
      _tmp$2 = idx + 1 & self.capacity_mask;
      continue;
    }
  }
}
function _M0MPB3Map3setGsRPC13ref3RefGWRP319moonbit_2dcommunity7rabbita3dom5EventRP319moonbit_2dcommunity7rabbita3cmd9SchedulerEuEE(self, key, value) {
  _M0MPB3Map15set__with__hashGsRPC13ref3RefGWRP319moonbit_2dcommunity7rabbita3dom5EventRP319moonbit_2dcommunity7rabbita3cmd9SchedulerEuEE(self, key, value, _M0IPC16string6StringPB4Hash4hash(key));
}
function _M0MPB3Map3setGsRP419moonbit_2dcommunity7rabbita8internal7runtime5INodeE(self, key, value) {
  _M0MPB3Map15set__with__hashGsRP419moonbit_2dcommunity7rabbita8internal7runtime5INodeE(self, key, value, _M0IPC16string6StringPB4Hash4hash(key));
}
function _M0MPB3Map3setGsRP319moonbit_2dcommunity7rabbita3sub10RunningSubE(self, key, value) {
  _M0MPB3Map15set__with__hashGsRP319moonbit_2dcommunity7rabbita3sub10RunningSubE(self, key, value, _M0IPC16string6StringPB4Hash4hash(key));
}
function _M0MPB3Map3setGsURPC15error5ErrorRP319moonbit_2dcommunity7rabbita3sub9SubLoaderEE(self, key, value) {
  _M0MPB3Map15set__with__hashGsURPC15error5ErrorRP319moonbit_2dcommunity7rabbita3sub9SubLoaderEE(self, key, value, _M0IPC16string6StringPB4Hash4hash(key));
}
function _M0MPB3Map3setGssE(self, key, value) {
  _M0MPB3Map15set__with__hashGssE(self, key, value, _M0IPC16string6StringPB4Hash4hash(key));
}
function _M0MPB3Map3setGsRP319moonbit_2dcommunity7rabbita7variant7VariantE(self, key, value) {
  _M0MPB3Map15set__with__hashGsRP319moonbit_2dcommunity7rabbita7variant7VariantE(self, key, value, _M0IPC16string6StringPB4Hash4hash(key));
}
function _M0MPB3Map3setGsWRP319moonbit_2dcommunity7rabbita3dom5EventRP319moonbit_2dcommunity7rabbita3cmd9SchedulerEuE(self, key, value) {
  _M0MPB3Map15set__with__hashGsWRP319moonbit_2dcommunity7rabbita3dom5EventRP319moonbit_2dcommunity7rabbita3cmd9SchedulerEuE(self, key, value, _M0IPC16string6StringPB4Hash4hash(key));
}
function _M0MPB3Map3MapGsRP419moonbit_2dcommunity7rabbita8internal7runtime5INodeE(arr, capacity) {
  const length = arr.end - arr.start | 0;
  let capacity$2;
  if (capacity === undefined) {
    capacity$2 = length === 0 ? 8 : _M0FPB21capacity__for__length(length);
  } else {
    const _Some = capacity;
    const _capacity = _Some;
    const _p = _M0FPB21capacity__for__length(length);
    capacity$2 = _capacity > _p ? _capacity : _p;
  }
  const m = _M0FPB8new__mapGsRP419moonbit_2dcommunity7rabbita8internal7runtime5INodeE(capacity$2);
  const _bind = arr.end - arr.start | 0;
  let _tmp = 0;
  while (true) {
    const _ = _tmp;
    if (_ < _bind) {
      const e = arr.buf[arr.start + _ | 0];
      _M0MPB3Map3setGsRP419moonbit_2dcommunity7rabbita8internal7runtime5INodeE(m, e._0, e._1);
      _tmp = _ + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return m;
}
function _M0MPB3Map3MapGsRP319moonbit_2dcommunity7rabbita3sub10RunningSubE(arr, capacity) {
  const length = arr.end - arr.start | 0;
  let capacity$2;
  if (capacity === undefined) {
    capacity$2 = length === 0 ? 8 : _M0FPB21capacity__for__length(length);
  } else {
    const _Some = capacity;
    const _capacity = _Some;
    const _p = _M0FPB21capacity__for__length(length);
    capacity$2 = _capacity > _p ? _capacity : _p;
  }
  const m = _M0FPB8new__mapGsRP419moonbit_2dcommunity7rabbita8internal7runtime5INodeE(capacity$2);
  const _bind = arr.end - arr.start | 0;
  let _tmp = 0;
  while (true) {
    const _ = _tmp;
    if (_ < _bind) {
      const e = arr.buf[arr.start + _ | 0];
      _M0MPB3Map3setGsRP319moonbit_2dcommunity7rabbita3sub10RunningSubE(m, e._0, e._1);
      _tmp = _ + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return m;
}
function _M0MPB3Map3MapGsURPC15error5ErrorRP319moonbit_2dcommunity7rabbita3sub9SubLoaderEE(arr, capacity) {
  const length = arr.end - arr.start | 0;
  let capacity$2;
  if (capacity === undefined) {
    capacity$2 = length === 0 ? 8 : _M0FPB21capacity__for__length(length);
  } else {
    const _Some = capacity;
    const _capacity = _Some;
    const _p = _M0FPB21capacity__for__length(length);
    capacity$2 = _capacity > _p ? _capacity : _p;
  }
  const m = _M0FPB8new__mapGsRP419moonbit_2dcommunity7rabbita8internal7runtime5INodeE(capacity$2);
  const _bind = arr.end - arr.start | 0;
  let _tmp = 0;
  while (true) {
    const _ = _tmp;
    if (_ < _bind) {
      const e = arr.buf[arr.start + _ | 0];
      _M0MPB3Map3setGsURPC15error5ErrorRP319moonbit_2dcommunity7rabbita3sub9SubLoaderEE(m, e._0, e._1);
      _tmp = _ + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return m;
}
function _M0MPB3Map3MapGssE(arr, capacity) {
  const length = arr.end - arr.start | 0;
  let capacity$2;
  if (capacity === undefined) {
    capacity$2 = length === 0 ? 8 : _M0FPB21capacity__for__length(length);
  } else {
    const _Some = capacity;
    const _capacity = _Some;
    const _p = _M0FPB21capacity__for__length(length);
    capacity$2 = _capacity > _p ? _capacity : _p;
  }
  const m = _M0FPB8new__mapGsRP419moonbit_2dcommunity7rabbita8internal7runtime5INodeE(capacity$2);
  const _bind = arr.end - arr.start | 0;
  let _tmp = 0;
  while (true) {
    const _ = _tmp;
    if (_ < _bind) {
      const e = arr.buf[arr.start + _ | 0];
      _M0MPB3Map3setGssE(m, e._0, e._1);
      _tmp = _ + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return m;
}
function _M0MPB3Map3MapGsRP319moonbit_2dcommunity7rabbita7variant7VariantE(arr, capacity) {
  const length = arr.end - arr.start | 0;
  let capacity$2;
  if (capacity === undefined) {
    capacity$2 = length === 0 ? 8 : _M0FPB21capacity__for__length(length);
  } else {
    const _Some = capacity;
    const _capacity = _Some;
    const _p = _M0FPB21capacity__for__length(length);
    capacity$2 = _capacity > _p ? _capacity : _p;
  }
  const m = _M0FPB8new__mapGsRP419moonbit_2dcommunity7rabbita8internal7runtime5INodeE(capacity$2);
  const _bind = arr.end - arr.start | 0;
  let _tmp = 0;
  while (true) {
    const _ = _tmp;
    if (_ < _bind) {
      const e = arr.buf[arr.start + _ | 0];
      _M0MPB3Map3setGsRP319moonbit_2dcommunity7rabbita7variant7VariantE(m, e._0, e._1);
      _tmp = _ + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return m;
}
function _M0MPB3Map3MapGsWRP319moonbit_2dcommunity7rabbita3dom5EventRP319moonbit_2dcommunity7rabbita3cmd9SchedulerEuE(arr, capacity) {
  const length = arr.end - arr.start | 0;
  let capacity$2;
  if (capacity === undefined) {
    capacity$2 = length === 0 ? 8 : _M0FPB21capacity__for__length(length);
  } else {
    const _Some = capacity;
    const _capacity = _Some;
    const _p = _M0FPB21capacity__for__length(length);
    capacity$2 = _capacity > _p ? _capacity : _p;
  }
  const m = _M0FPB8new__mapGsRP419moonbit_2dcommunity7rabbita8internal7runtime5INodeE(capacity$2);
  const _bind = arr.end - arr.start | 0;
  let _tmp = 0;
  while (true) {
    const _ = _tmp;
    if (_ < _bind) {
      const e = arr.buf[arr.start + _ | 0];
      _M0MPB3Map3setGsWRP319moonbit_2dcommunity7rabbita3dom5EventRP319moonbit_2dcommunity7rabbita3cmd9SchedulerEuE(m, e._0, e._1);
      _tmp = _ + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return m;
}
function _M0MPB3Map3MapGsRPC13ref3RefGWRP319moonbit_2dcommunity7rabbita3dom5EventRP319moonbit_2dcommunity7rabbita3cmd9SchedulerEuEE(arr, capacity) {
  const length = arr.end - arr.start | 0;
  let capacity$2;
  if (capacity === undefined) {
    capacity$2 = length === 0 ? 8 : _M0FPB21capacity__for__length(length);
  } else {
    const _Some = capacity;
    const _capacity = _Some;
    const _p = _M0FPB21capacity__for__length(length);
    capacity$2 = _capacity > _p ? _capacity : _p;
  }
  const m = _M0FPB8new__mapGsRP419moonbit_2dcommunity7rabbita8internal7runtime5INodeE(capacity$2);
  const _bind = arr.end - arr.start | 0;
  let _tmp = 0;
  while (true) {
    const _ = _tmp;
    if (_ < _bind) {
      const e = arr.buf[arr.start + _ | 0];
      _M0MPB3Map3setGsRPC13ref3RefGWRP319moonbit_2dcommunity7rabbita3dom5EventRP319moonbit_2dcommunity7rabbita3cmd9SchedulerEuEE(m, e._0, e._1);
      _tmp = _ + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return m;
}
function _M0MPB3Map3getGsRPC13ref3RefGWRP319moonbit_2dcommunity7rabbita3dom5EventRP319moonbit_2dcommunity7rabbita3cmd9SchedulerEuEE(self, key) {
  const hash = _M0IPC16string6StringPB4Hash4hash(key);
  let _tmp = 0;
  let _tmp$2 = hash & self.capacity_mask;
  while (true) {
    const i = _tmp;
    const idx = _tmp$2;
    const _tmp$3 = self.entries;
    $bound_check(_tmp$3, idx);
    const _bind = _tmp$3[idx];
    if (_bind === undefined) {
      return undefined;
    } else {
      const _Some = _bind;
      const _entry = _Some;
      if (_entry.hash === hash && _entry.key === key) {
        return _entry.value;
      }
      if (i > _entry.psl) {
        return undefined;
      }
      _tmp = i + 1 | 0;
      _tmp$2 = idx + 1 & self.capacity_mask;
      continue;
    }
  }
}
function _M0MPB3Map3getGssE(self, key) {
  const hash = _M0IPC16string6StringPB4Hash4hash(key);
  let _tmp = 0;
  let _tmp$2 = hash & self.capacity_mask;
  while (true) {
    const i = _tmp;
    const idx = _tmp$2;
    const _tmp$3 = self.entries;
    $bound_check(_tmp$3, idx);
    const _bind = _tmp$3[idx];
    if (_bind === undefined) {
      return undefined;
    } else {
      const _Some = _bind;
      const _entry = _Some;
      if (_entry.hash === hash && _entry.key === key) {
        return _entry.value;
      }
      if (i > _entry.psl) {
        return undefined;
      }
      _tmp = i + 1 | 0;
      _tmp$2 = idx + 1 & self.capacity_mask;
      continue;
    }
  }
}
function _M0MPB3Map3getGsRP319moonbit_2dcommunity7rabbita7variant7VariantE(self, key) {
  const hash = _M0IPC16string6StringPB4Hash4hash(key);
  let _tmp = 0;
  let _tmp$2 = hash & self.capacity_mask;
  while (true) {
    const i = _tmp;
    const idx = _tmp$2;
    const _tmp$3 = self.entries;
    $bound_check(_tmp$3, idx);
    const _bind = _tmp$3[idx];
    if (_bind === undefined) {
      return undefined;
    } else {
      const _Some = _bind;
      const _entry = _Some;
      if (_entry.hash === hash && _entry.key === key) {
        return _entry.value;
      }
      if (i > _entry.psl) {
        return undefined;
      }
      _tmp = i + 1 | 0;
      _tmp$2 = idx + 1 & self.capacity_mask;
      continue;
    }
  }
}
function _M0MPB3Map3getGsRP419moonbit_2dcommunity7rabbita8internal7runtime5INodeE(self, key) {
  const hash = _M0IPC16string6StringPB4Hash4hash(key);
  let _tmp = 0;
  let _tmp$2 = hash & self.capacity_mask;
  while (true) {
    const i = _tmp;
    const idx = _tmp$2;
    const _tmp$3 = self.entries;
    $bound_check(_tmp$3, idx);
    const _bind = _tmp$3[idx];
    if (_bind === undefined) {
      return undefined;
    } else {
      const _Some = _bind;
      const _entry = _Some;
      if (_entry.hash === hash && _entry.key === key) {
        return _entry.value;
      }
      if (i > _entry.psl) {
        return undefined;
      }
      _tmp = i + 1 | 0;
      _tmp$2 = idx + 1 & self.capacity_mask;
      continue;
    }
  }
}
function _M0MPB3Map3getGsWRP319moonbit_2dcommunity7rabbita3dom5EventRP319moonbit_2dcommunity7rabbita3cmd9SchedulerEuE(self, key) {
  const hash = _M0IPC16string6StringPB4Hash4hash(key);
  let _tmp = 0;
  let _tmp$2 = hash & self.capacity_mask;
  while (true) {
    const i = _tmp;
    const idx = _tmp$2;
    const _tmp$3 = self.entries;
    $bound_check(_tmp$3, idx);
    const _bind = _tmp$3[idx];
    if (_bind === undefined) {
      return undefined;
    } else {
      const _Some = _bind;
      const _entry = _Some;
      if (_entry.hash === hash && _entry.key === key) {
        return _entry.value;
      }
      if (i > _entry.psl) {
        return undefined;
      }
      _tmp = i + 1 | 0;
      _tmp$2 = idx + 1 & self.capacity_mask;
      continue;
    }
  }
}
function _M0MPB3Map8containsGsWRP319moonbit_2dcommunity7rabbita3dom5EventRP319moonbit_2dcommunity7rabbita3cmd9SchedulerEuE(self, key) {
  const hash = _M0IPC16string6StringPB4Hash4hash(key);
  let _tmp = 0;
  let _tmp$2 = hash & self.capacity_mask;
  while (true) {
    const i = _tmp;
    const idx = _tmp$2;
    const _tmp$3 = self.entries;
    $bound_check(_tmp$3, idx);
    const _bind = _tmp$3[idx];
    if (_bind === undefined) {
      return false;
    } else {
      const _Some = _bind;
      const _entry = _Some;
      if (_entry.hash === hash && _entry.key === key) {
        return true;
      }
      if (i > _entry.psl) {
        return false;
      }
      _tmp = i + 1 | 0;
      _tmp$2 = idx + 1 & self.capacity_mask;
      continue;
    }
  }
}
function _M0MPB3Map8containsGssE(self, key) {
  const hash = _M0IPC16string6StringPB4Hash4hash(key);
  let _tmp = 0;
  let _tmp$2 = hash & self.capacity_mask;
  while (true) {
    const i = _tmp;
    const idx = _tmp$2;
    const _tmp$3 = self.entries;
    $bound_check(_tmp$3, idx);
    const _bind = _tmp$3[idx];
    if (_bind === undefined) {
      return false;
    } else {
      const _Some = _bind;
      const _entry = _Some;
      if (_entry.hash === hash && _entry.key === key) {
        return true;
      }
      if (i > _entry.psl) {
        return false;
      }
      _tmp = i + 1 | 0;
      _tmp$2 = idx + 1 & self.capacity_mask;
      continue;
    }
  }
}
function _M0MPB3Map8containsGsRP319moonbit_2dcommunity7rabbita7variant7VariantE(self, key) {
  const hash = _M0IPC16string6StringPB4Hash4hash(key);
  let _tmp = 0;
  let _tmp$2 = hash & self.capacity_mask;
  while (true) {
    const i = _tmp;
    const idx = _tmp$2;
    const _tmp$3 = self.entries;
    $bound_check(_tmp$3, idx);
    const _bind = _tmp$3[idx];
    if (_bind === undefined) {
      return false;
    } else {
      const _Some = _bind;
      const _entry = _Some;
      if (_entry.hash === hash && _entry.key === key) {
        return true;
      }
      if (i > _entry.psl) {
        return false;
      }
      _tmp = i + 1 | 0;
      _tmp$2 = idx + 1 & self.capacity_mask;
      continue;
    }
  }
}
function _M0MPB3Map8containsGsRP419moonbit_2dcommunity7rabbita8internal7runtime5VNodeE(self, key) {
  const hash = _M0IPC16string6StringPB4Hash4hash(key);
  let _tmp = 0;
  let _tmp$2 = hash & self.capacity_mask;
  while (true) {
    const i = _tmp;
    const idx = _tmp$2;
    const _tmp$3 = self.entries;
    $bound_check(_tmp$3, idx);
    const _bind = _tmp$3[idx];
    if (_bind === undefined) {
      return false;
    } else {
      const _Some = _bind;
      const _entry = _Some;
      if (_entry.hash === hash && _entry.key === key) {
        return true;
      }
      if (i > _entry.psl) {
        return false;
      }
      _tmp = i + 1 | 0;
      _tmp$2 = idx + 1 & self.capacity_mask;
      continue;
    }
  }
}
function _M0MPB3Map8containsGsURPC15error5ErrorRP319moonbit_2dcommunity7rabbita3sub9SubLoaderEE(self, key) {
  const hash = _M0IPC16string6StringPB4Hash4hash(key);
  let _tmp = 0;
  let _tmp$2 = hash & self.capacity_mask;
  while (true) {
    const i = _tmp;
    const idx = _tmp$2;
    const _tmp$3 = self.entries;
    $bound_check(_tmp$3, idx);
    const _bind = _tmp$3[idx];
    if (_bind === undefined) {
      return false;
    } else {
      const _Some = _bind;
      const _entry = _Some;
      if (_entry.hash === hash && _entry.key === key) {
        return true;
      }
      if (i > _entry.psl) {
        return false;
      }
      _tmp = i + 1 | 0;
      _tmp$2 = idx + 1 & self.capacity_mask;
      continue;
    }
  }
}
function _M0MPB3Map8containsGsRP319moonbit_2dcommunity7rabbita3sub10RunningSubE(self, key) {
  const hash = _M0IPC16string6StringPB4Hash4hash(key);
  let _tmp = 0;
  let _tmp$2 = hash & self.capacity_mask;
  while (true) {
    const i = _tmp;
    const idx = _tmp$2;
    const _tmp$3 = self.entries;
    $bound_check(_tmp$3, idx);
    const _bind = _tmp$3[idx];
    if (_bind === undefined) {
      return false;
    } else {
      const _Some = _bind;
      const _entry = _Some;
      if (_entry.hash === hash && _entry.key === key) {
        return true;
      }
      if (i > _entry.psl) {
        return false;
      }
      _tmp = i + 1 | 0;
      _tmp$2 = idx + 1 & self.capacity_mask;
      continue;
    }
  }
}
function _M0MPB3Map4iterGsWRP319moonbit_2dcommunity7rabbita3dom5EventRP319moonbit_2dcommunity7rabbita3cmd9SchedulerEuE(self) {
  const curr_entry = new _M0TPB8MutLocalGORPB5EntryGsWRP319moonbit_2dcommunity7rabbita3dom5EventRP319moonbit_2dcommunity7rabbita3cmd9SchedulerEuEE(self.head);
  const len = self.size;
  const remaining = new _M0TPB8MutLocalGiE(len);
  return _M0MPB4Iter3newGUsWRP319moonbit_2dcommunity7rabbita3dom5EventRP319moonbit_2dcommunity7rabbita3cmd9SchedulerEuEE(() => {
    _L: {
      if (remaining.val > 0) {
        const _bind = curr_entry.val;
        if (_bind === undefined) {
          break _L;
        } else {
          const _Some = _bind;
          const _x = _Some;
          const _key = _x.key;
          const _value = _x.value;
          const _next = _x.next;
          curr_entry.val = _next;
          remaining.val = remaining.val - 1 | 0;
          return { _0: _key, _1: _value };
        }
      } else {
        break _L;
      }
    }
    return undefined;
  }, len);
}
function _M0MPB3Map5iter2GsWRP319moonbit_2dcommunity7rabbita3dom5EventRP319moonbit_2dcommunity7rabbita3cmd9SchedulerEuE(self) {
  return _M0MPB3Map4iterGsWRP319moonbit_2dcommunity7rabbita3dom5EventRP319moonbit_2dcommunity7rabbita3cmd9SchedulerEuE(self);
}
function _M0MPB3Map9to__arrayGsRP419moonbit_2dcommunity7rabbita8internal7runtime5VNodeE(self) {
  const arr = new Array(self.size);
  let i = 0;
  let _tmp = self.head;
  while (true) {
    const x = _tmp;
    if (x === undefined) {
      break;
    } else {
      const _Some = x;
      const _x = _Some;
      const _key = _x.key;
      const _value = _x.value;
      const _next = _x.next;
      arr[i] = { _0: _key, _1: _value };
      i = i + 1 | 0;
      _tmp = _next;
      continue;
    }
  }
  return arr;
}
function _M0MPB3Map3mapGsRP419moonbit_2dcommunity7rabbita8internal7runtime5VNodeRP419moonbit_2dcommunity7rabbita8internal7runtime5INodeE(self, f) {
  const _bind = self.capacity;
  const _bind$2 = $make_array_len_and_init(self.capacity, undefined);
  const _bind$3 = self.size;
  const _bind$4 = self.capacity_mask;
  const _bind$5 = self.grow_at;
  const _bind$6 = undefined;
  const _bind$7 = self.tail;
  const other = new _M0TPB3MapGsRP419moonbit_2dcommunity7rabbita8internal7runtime5INodeE(_bind$2, _bind$3, _bind, _bind$4, _bind$5, _bind$6, _bind$7);
  if (self.size === 0) {
    return other;
  }
  const _tmp = self.entries;
  const _tmp$2 = self.tail;
  $bound_check(_tmp, _tmp$2);
  const _bind$8 = _tmp[_tmp$2];
  if (_bind$8 === undefined) {
    return $panic();
  } else {
    const _Some = _bind$8;
    const _last = _Some;
    let _tmp$3 = _last;
    let _tmp$4 = self.tail;
    let _tmp$5 = undefined;
    while (true) {
      const entry = _tmp$3;
      const idx = _tmp$4;
      const next = _tmp$5;
      const _prev = entry.prev;
      const _psl = entry.psl;
      const _hash = entry.hash;
      const _key = entry.key;
      const _value = entry.value;
      const new_value = f(_key, _value);
      const new_entry = new _M0TPB5EntryGsRP419moonbit_2dcommunity7rabbita8internal7runtime5INodeE(_prev, next, _psl, _hash, _key, new_value);
      const _tmp$6 = other.entries;
      $bound_check(_tmp$6, idx);
      _tmp$6[idx] = new_entry;
      if (_prev !== -1) {
        const _tmp$7 = self.entries;
        $bound_check(_tmp$7, _prev);
        const _p = _tmp$7[_prev];
        if (_p === undefined) {
          _tmp$3 = $panic();
        } else {
          const _p$2 = _p;
          _tmp$3 = _p$2;
        }
        _tmp$4 = _prev;
        _tmp$5 = new_entry;
        continue;
      } else {
        other.head = new_entry;
        break;
      }
    }
    return other;
  }
}
function _M0MPB5Iter24nextGsWRP319moonbit_2dcommunity7rabbita3dom5EventRP319moonbit_2dcommunity7rabbita3cmd9SchedulerEuE(self) {
  return _M0MPB4Iter4nextGUsWRP319moonbit_2dcommunity7rabbita3dom5EventRP319moonbit_2dcommunity7rabbita3cmd9SchedulerEuEE(self);
}
function _M0IPC16string6StringPB4Hash4hash(self) {
  let acc = (_M0FPB4seed >>> 0) + (374761393 >>> 0) | 0;
  const _bind = self.length;
  let _tmp = 0;
  while (true) {
    const i = _tmp;
    if (i < _bind) {
      acc = (acc >>> 0) + (4 >>> 0) | 0;
      const v = self.charCodeAt(i);
      acc = _M0FPB13consume4__acc(acc, v);
      _tmp = i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return _M0FPB13finalize__acc(acc);
}
function _M0IPC13int3IntPB4Hash13hash__combine(self, hasher) {
  _M0MPB6Hasher12combine__int(hasher, self);
}
function _M0IPC13int3IntPB4Hash4hash(self) {
  const acc = (((_M0FPB4seed >>> 0) + (374761393 >>> 0) | 0) >>> 0) + (4 >>> 0) | 0;
  return _M0FPB13finalize__acc(_M0FPB13consume4__acc(acc, self));
}
function _M0IPC14uint4UIntPB4Hash13hash__combine(self, hasher) {
  _M0MPB6Hasher13combine__uint(hasher, self);
}
function _M0MPC16double6Double7to__int(self) {
  return self !== self ? 0 : self >= 2147483647 ? 2147483647 : self <= -2147483648 ? -2147483648 : self | 0;
}
function _M0FPB7printlnGsE(input) {
  console.log(input);
}
function _M0MPC15array5Array28unsafe__truncate__to__lengthGRP419moonbit_2dcommunity7rabbita8internal6duplix9DirtyFlagE(self, new_len) {
  _M0MPB7JSArray11set__length(self, new_len);
}
function _M0MPC15array5Array11unsafe__popGiE(self) {
  return _M0MPB7JSArray3pop(self);
}
function _M0MPC15array5Array11unsafe__popGURP419moonbit_2dcommunity7rabbita8internal6duplix10ErasedNodebEE(self) {
  return _M0MPB7JSArray3pop(self);
}
function _M0MPC15array5Array3popGiE(self) {
  if (self.length === 0) {
    return undefined;
  } else {
    const v = _M0MPC15array5Array11unsafe__popGiE(self);
    return v;
  }
}
function _M0MPC15array5Array3popGURP419moonbit_2dcommunity7rabbita8internal6duplix10ErasedNodebEE(self) {
  if (self.length === 0) {
    return undefined;
  } else {
    const v = _M0MPC15array5Array11unsafe__popGURP419moonbit_2dcommunity7rabbita8internal6duplix10ErasedNodebEE(self);
    return v;
  }
}
function _M0MPC15array5Array6removeGRP419moonbit_2dcommunity7rabbita8internal6duplix9DirtyFlagE(self, index) {
  if (index >= 0 && index < self.length) {
    $bound_check(self, index);
    const value = self[index];
    _M0MPB7JSArray6splice(self, index, 1);
    return value;
  } else {
    const _string_builder = _M0MPB13StringBuilder21StringBuilder_2einner(60);
    _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, "index out of bounds: the len is from 0 to ");
    _M0MPB13StringBuilder13write__objectGiE(_string_builder, self.length);
    _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, " but the index is ");
    _M0MPB13StringBuilder13write__objectGiE(_string_builder, index);
    return $panic();
  }
}
function _M0MPC15array5Array2atGjE(self, index) {
  const len = self.length;
  return index >= 0 && index < len ? self[index] : $panic();
}
function _M0MPC15array5Array2atGORP419moonbit_2dcommunity7rabbita8internal7runtime5StoreE(self, index) {
  const len = self.length;
  return index >= 0 && index < len ? self[index] : $panic();
}
function _M0MPC15array5Array2atGRP419moonbit_2dcommunity7rabbita8internal7runtime5INodeE(self, index) {
  const len = self.length;
  return index >= 0 && index < len ? self[index] : $panic();
}
function _M0MPC15array5Array3setGORP419moonbit_2dcommunity7rabbita8internal7runtime5StoreE(self, index, value) {
  const len = self.length;
  if (index >= 0 && index < len) {
    self[index] = value;
    return;
  } else {
    $panic();
    return;
  }
}
function _M0MPC15array5Array3setGjE(self, index, value) {
  const len = self.length;
  if (index >= 0 && index < len) {
    self[index] = value;
    return;
  } else {
    $panic();
    return;
  }
}
function _M0MPC15array5Array5clearGRP419moonbit_2dcommunity7rabbita8internal6duplix9DirtyFlagE(self) {
  _M0MPC15array5Array28unsafe__truncate__to__lengthGRP419moonbit_2dcommunity7rabbita8internal6duplix9DirtyFlagE(self, 0);
}
function _M0MPC15array5Array3revGRP419moonbit_2dcommunity7rabbita8internal7runtime5INodeE(self) {
  const len = self.length;
  const arr = new Array(len);
  let _tmp = 0;
  while (true) {
    const i = _tmp;
    if (i < len) {
      arr[i] = self[(len - i | 0) - 1 | 0];
      _tmp = i + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return arr;
}
function _M0MPC15array5Array6searchGRP419moonbit_2dcommunity7rabbita8internal6duplix9DirtyFlagE(self, value) {
  return _M0MPC15array9ArrayView6searchGRP419moonbit_2dcommunity7rabbita8internal6duplix9DirtyFlagE(new _M0TPB9ArrayViewGRP419moonbit_2dcommunity7rabbita8internal6duplix9DirtyFlagE(self, 0, self.length), value);
}
function _M0MPC15array5Array4joinGsE(self, separator) {
  return _M0MPC15array9ArrayView4joinGsE(new _M0TPB9ArrayViewGsE(self, 0, self.length), separator);
}
function _M0MPC13ref3Ref3RefGORP219moonbit_2dcommunity7rabbita5GraphE(x) {
  return new _M0TPC13ref3RefGORP219moonbit_2dcommunity7rabbita5GraphE(x);
}
function _M0MPC13ref3Ref3RefGRP419moonbit_2dcommunity7rabbita8internal7slotmap2IdE(x) {
  return new _M0TPC13ref3RefGRP419moonbit_2dcommunity7rabbita8internal7slotmap2IdE(x);
}
function _M0MPC13ref3Ref3RefGdE(x) {
  return new _M0TPC13ref3RefGdE(x);
}
function _M0MPC13ref3Ref3RefGiE(x) {
  return new _M0TPC13ref3RefGiE(x);
}
function _M0FPC13ref3newGWRP319moonbit_2dcommunity7rabbita3dom5EventRP319moonbit_2dcommunity7rabbita3cmd9SchedulerEuE(x) {
  return new _M0TPC13ref3RefGWRP319moonbit_2dcommunity7rabbita3dom5EventRP319moonbit_2dcommunity7rabbita3cmd9SchedulerEuE(x);
}
function _M0MPC13ref3Ref7protectGRP419moonbit_2dcommunity7rabbita8internal7slotmap2IduE(self, a, f) {
  const old = self.val;
  self.val = a;
  f();
  self.val = old;
}
function _M0MPC13ref3Ref7protectGRP419moonbit_2dcommunity7rabbita8internal7slotmap2IdRP419moonbit_2dcommunity7rabbita8internal6duplix4NodeGuEE(self, a, f) {
  const old = self.val;
  self.val = a;
  const _bind = f();
  self.val = old;
  return _bind;
}
function _M0FPC13set8new__setGRP419moonbit_2dcommunity7rabbita8internal7slotmap2IdE(capacity) {
  const capacity$2 = _M0MPC13int3Int20next__power__of__two(capacity);
  const _bind = capacity$2 - 1 | 0;
  const _bind$2 = (Math.imul(capacity$2, 13) | 0) / 16 | 0;
  const _bind$3 = $make_array_len_and_init(capacity$2, undefined);
  const _bind$4 = undefined;
  return new _M0TPC13set3SetGRP419moonbit_2dcommunity7rabbita8internal7slotmap2IdE(_bind$3, 0, capacity$2, _bind, _bind$2, _bind$4, -1);
}
function _M0FPC13set8new__setGiE(capacity) {
  const capacity$2 = _M0MPC13int3Int20next__power__of__two(capacity);
  const _bind = capacity$2 - 1 | 0;
  const _bind$2 = (Math.imul(capacity$2, 13) | 0) / 16 | 0;
  const _bind$3 = $make_array_len_and_init(capacity$2, undefined);
  const _bind$4 = undefined;
  return new _M0TPC13set3SetGiE(_bind$3, 0, capacity$2, _bind, _bind$2, _bind$4, -1);
}
function _M0FPC13set21capacity__for__length(length) {
  let capacity = _M0MPC13int3Int20next__power__of__two(length);
  const _p = capacity;
  if (length > ((Math.imul(_p, 13) | 0) / 16 | 0)) {
    capacity = Math.imul(capacity, 2) | 0;
  }
  return capacity;
}
function _M0MPC13set3Set20add__entry__to__tailGiE(self, idx, entry) {
  const _bind = self.tail;
  if (_bind === -1) {
    self.head = entry;
  } else {
    const _tmp = self.entries;
    $bound_check(_tmp, _bind);
    const _p = _tmp[_bind];
    let _tmp$2;
    if (_p === undefined) {
      _tmp$2 = $panic();
    } else {
      const _p$2 = _p;
      _tmp$2 = _p$2;
    }
    _tmp$2.next = entry;
  }
  self.tail = idx;
  const _tmp = self.entries;
  $bound_check(_tmp, idx);
  _tmp[idx] = entry;
  self.size = self.size + 1 | 0;
}
function _M0MPC13set3Set20add__entry__to__tailGRP419moonbit_2dcommunity7rabbita8internal7slotmap2IdE(self, idx, entry) {
  const _bind = self.tail;
  if (_bind === -1) {
    self.head = entry;
  } else {
    const _tmp = self.entries;
    $bound_check(_tmp, _bind);
    const _p = _tmp[_bind];
    let _tmp$2;
    if (_p === undefined) {
      _tmp$2 = $panic();
    } else {
      const _p$2 = _p;
      _tmp$2 = _p$2;
    }
    _tmp$2.next = entry;
  }
  self.tail = idx;
  const _tmp = self.entries;
  $bound_check(_tmp, idx);
  _tmp[idx] = entry;
  self.size = self.size + 1 | 0;
}
function _M0MPC13set3Set10set__entryGRP419moonbit_2dcommunity7rabbita8internal7slotmap2IdE(self, entry, new_idx) {
  const _tmp = self.entries;
  $bound_check(_tmp, new_idx);
  _tmp[new_idx] = entry;
  const _bind = entry.next;
  if (_bind === undefined) {
    self.tail = new_idx;
    return;
  } else {
    const _Some = _bind;
    const _next = _Some;
    _next.prev = new_idx;
    return;
  }
}
function _M0MPC13set3Set10set__entryGiE(self, entry, new_idx) {
  const _tmp = self.entries;
  $bound_check(_tmp, new_idx);
  _tmp[new_idx] = entry;
  const _bind = entry.next;
  if (_bind === undefined) {
    self.tail = new_idx;
    return;
  } else {
    const _Some = _bind;
    const _next = _Some;
    _next.prev = new_idx;
    return;
  }
}
function _M0MPC13set3Set10push__awayGiE(self, idx, entry) {
  let _tmp = entry.psl + 1 | 0;
  let _tmp$2 = idx + 1 & self.capacity_mask;
  let _tmp$3 = entry;
  while (true) {
    const psl = _tmp;
    const idx$2 = _tmp$2;
    const entry$2 = _tmp$3;
    const _tmp$4 = self.entries;
    $bound_check(_tmp$4, idx$2);
    const _bind = _tmp$4[idx$2];
    if (_bind === undefined) {
      entry$2.psl = psl;
      _M0MPC13set3Set10set__entryGiE(self, entry$2, idx$2);
      return;
    } else {
      const _Some = _bind;
      const _curr_entry = _Some;
      if (psl > _curr_entry.psl) {
        entry$2.psl = psl;
        _M0MPC13set3Set10set__entryGiE(self, entry$2, idx$2);
        _tmp = _curr_entry.psl + 1 | 0;
        _tmp$2 = idx$2 + 1 & self.capacity_mask;
        _tmp$3 = _curr_entry;
        continue;
      } else {
        _tmp = psl + 1 | 0;
        _tmp$2 = idx$2 + 1 & self.capacity_mask;
        continue;
      }
    }
  }
}
function _M0MPC13set3Set10push__awayGRP419moonbit_2dcommunity7rabbita8internal7slotmap2IdE(self, idx, entry) {
  let _tmp = entry.psl + 1 | 0;
  let _tmp$2 = idx + 1 & self.capacity_mask;
  let _tmp$3 = entry;
  while (true) {
    const psl = _tmp;
    const idx$2 = _tmp$2;
    const entry$2 = _tmp$3;
    const _tmp$4 = self.entries;
    $bound_check(_tmp$4, idx$2);
    const _bind = _tmp$4[idx$2];
    if (_bind === undefined) {
      entry$2.psl = psl;
      _M0MPC13set3Set10set__entryGRP419moonbit_2dcommunity7rabbita8internal7slotmap2IdE(self, entry$2, idx$2);
      return;
    } else {
      const _Some = _bind;
      const _curr_entry = _Some;
      if (psl > _curr_entry.psl) {
        entry$2.psl = psl;
        _M0MPC13set3Set10set__entryGRP419moonbit_2dcommunity7rabbita8internal7slotmap2IdE(self, entry$2, idx$2);
        _tmp = _curr_entry.psl + 1 | 0;
        _tmp$2 = idx$2 + 1 & self.capacity_mask;
        _tmp$3 = _curr_entry;
        continue;
      } else {
        _tmp = psl + 1 | 0;
        _tmp$2 = idx$2 + 1 & self.capacity_mask;
        continue;
      }
    }
  }
}
function _M0MPC13set3Set20rehash__place__entryGiE(self, outer) {
  const hash = outer.hash;
  let _tmp = 0;
  let _tmp$2 = hash & self.capacity_mask;
  while (true) {
    const psl = _tmp;
    const idx = _tmp$2;
    const _tmp$3 = self.entries;
    $bound_check(_tmp$3, idx);
    const _bind = _tmp$3[idx];
    if (_bind === undefined) {
      outer.psl = psl;
      outer.prev = self.tail;
      _M0MPC13set3Set20add__entry__to__tailGiE(self, idx, outer);
      return undefined;
    } else {
      const _Some = _bind;
      const _curr = _Some;
      if (psl > _curr.psl) {
        _M0MPC13set3Set10push__awayGiE(self, idx, _curr);
        outer.psl = psl;
        outer.prev = self.tail;
        _M0MPC13set3Set20add__entry__to__tailGiE(self, idx, outer);
        return undefined;
      } else {
        _tmp = psl + 1 | 0;
        _tmp$2 = idx + 1 & self.capacity_mask;
        continue;
      }
    }
  }
}
function _M0MPC13set3Set20rehash__place__entryGRP419moonbit_2dcommunity7rabbita8internal7slotmap2IdE(self, outer) {
  const hash = outer.hash;
  let _tmp = 0;
  let _tmp$2 = hash & self.capacity_mask;
  while (true) {
    const psl = _tmp;
    const idx = _tmp$2;
    const _tmp$3 = self.entries;
    $bound_check(_tmp$3, idx);
    const _bind = _tmp$3[idx];
    if (_bind === undefined) {
      outer.psl = psl;
      outer.prev = self.tail;
      _M0MPC13set3Set20add__entry__to__tailGRP419moonbit_2dcommunity7rabbita8internal7slotmap2IdE(self, idx, outer);
      return undefined;
    } else {
      const _Some = _bind;
      const _curr = _Some;
      if (psl > _curr.psl) {
        _M0MPC13set3Set10push__awayGRP419moonbit_2dcommunity7rabbita8internal7slotmap2IdE(self, idx, _curr);
        outer.psl = psl;
        outer.prev = self.tail;
        _M0MPC13set3Set20add__entry__to__tailGRP419moonbit_2dcommunity7rabbita8internal7slotmap2IdE(self, idx, outer);
        return undefined;
      } else {
        _tmp = psl + 1 | 0;
        _tmp$2 = idx + 1 & self.capacity_mask;
        continue;
      }
    }
  }
}
function _M0MPC13set3Set4growGiE(self) {
  const old_head = self.head;
  const new_capacity = self.capacity << 1;
  self.entries = $make_array_len_and_init(new_capacity, undefined);
  self.capacity = new_capacity;
  self.capacity_mask = new_capacity - 1 | 0;
  const _p = self.capacity;
  self.grow_at = (Math.imul(_p, 13) | 0) / 16 | 0;
  self.size = 0;
  self.head = undefined;
  self.tail = -1;
  let _tmp = old_head;
  while (true) {
    const x = _tmp;
    if (x === undefined) {
      return;
    } else {
      const _Some = x;
      const _e = _Some;
      const next_in_chain = _e.next;
      _e.next = undefined;
      _M0MPC13set3Set20rehash__place__entryGiE(self, _e);
      _tmp = next_in_chain;
      continue;
    }
  }
}
function _M0MPC13set3Set4growGRP419moonbit_2dcommunity7rabbita8internal7slotmap2IdE(self) {
  const old_head = self.head;
  const new_capacity = self.capacity << 1;
  self.entries = $make_array_len_and_init(new_capacity, undefined);
  self.capacity = new_capacity;
  self.capacity_mask = new_capacity - 1 | 0;
  const _p = self.capacity;
  self.grow_at = (Math.imul(_p, 13) | 0) / 16 | 0;
  self.size = 0;
  self.head = undefined;
  self.tail = -1;
  let _tmp = old_head;
  while (true) {
    const x = _tmp;
    if (x === undefined) {
      return;
    } else {
      const _Some = x;
      const _e = _Some;
      const next_in_chain = _e.next;
      _e.next = undefined;
      _M0MPC13set3Set20rehash__place__entryGRP419moonbit_2dcommunity7rabbita8internal7slotmap2IdE(self, _e);
      _tmp = next_in_chain;
      continue;
    }
  }
}
function _M0MPC13set3Set15add__with__hashGiE(self, key, hash) {
  if (self.size >= self.grow_at) {
    _M0MPC13set3Set4growGiE(self);
  }
  let idx;
  let psl;
  _L: {
    let _tmp = 0;
    let _tmp$2 = hash & self.capacity_mask;
    while (true) {
      const psl$2 = _tmp;
      const idx$2 = _tmp$2;
      const _tmp$3 = self.entries;
      $bound_check(_tmp$3, idx$2);
      const _bind = _tmp$3[idx$2];
      if (_bind === undefined) {
        idx = idx$2;
        psl = psl$2;
        break _L;
      } else {
        const _Some = _bind;
        const _curr_entry = _Some;
        if (_curr_entry.hash === hash && _curr_entry.key === key) {
          return undefined;
        }
        if (psl$2 > _curr_entry.psl) {
          _M0MPC13set3Set10push__awayGiE(self, idx$2, _curr_entry);
          idx = idx$2;
          psl = psl$2;
          break _L;
        }
        _tmp = psl$2 + 1 | 0;
        _tmp$2 = idx$2 + 1 & self.capacity_mask;
        continue;
      }
    }
  }
  const _bind = self.tail;
  const _bind$2 = undefined;
  const entry = new _M0TPC13set5EntryGiE(_bind, _bind$2, psl, hash, key);
  _M0MPC13set3Set20add__entry__to__tailGiE(self, idx, entry);
}
function _M0MPC13set3Set15add__with__hashGRP419moonbit_2dcommunity7rabbita8internal7slotmap2IdE(self, key, hash) {
  if (self.size >= self.grow_at) {
    _M0MPC13set3Set4growGRP419moonbit_2dcommunity7rabbita8internal7slotmap2IdE(self);
  }
  let idx;
  let psl;
  _L: {
    let _tmp = 0;
    let _tmp$2 = hash & self.capacity_mask;
    while (true) {
      const psl$2 = _tmp;
      const idx$2 = _tmp$2;
      const _tmp$3 = self.entries;
      $bound_check(_tmp$3, idx$2);
      const _bind = _tmp$3[idx$2];
      if (_bind === undefined) {
        idx = idx$2;
        psl = psl$2;
        break _L;
      } else {
        const _Some = _bind;
        const _curr_entry = _Some;
        let _tmp$4;
        if (_curr_entry.hash === hash) {
          const _p = _curr_entry.key;
          _tmp$4 = _p.gen === key.gen && _p.idx === key.idx;
        } else {
          _tmp$4 = false;
        }
        if (_tmp$4) {
          return undefined;
        }
        if (psl$2 > _curr_entry.psl) {
          _M0MPC13set3Set10push__awayGRP419moonbit_2dcommunity7rabbita8internal7slotmap2IdE(self, idx$2, _curr_entry);
          idx = idx$2;
          psl = psl$2;
          break _L;
        }
        _tmp = psl$2 + 1 | 0;
        _tmp$2 = idx$2 + 1 & self.capacity_mask;
        continue;
      }
    }
  }
  const _bind = self.tail;
  const _bind$2 = undefined;
  const entry = new _M0TPC13set5EntryGRP419moonbit_2dcommunity7rabbita8internal7slotmap2IdE(_bind, _bind$2, psl, hash, key);
  _M0MPC13set3Set20add__entry__to__tailGRP419moonbit_2dcommunity7rabbita8internal7slotmap2IdE(self, idx, entry);
}
function _M0MPC13set3Set3addGiE(self, key) {
  _M0MPC13set3Set15add__with__hashGiE(self, key, _M0IPC13int3IntPB4Hash4hash(key));
}
function _M0MPC13set3Set3addGRP419moonbit_2dcommunity7rabbita8internal7slotmap2IdE(self, key) {
  _M0MPC13set3Set15add__with__hashGRP419moonbit_2dcommunity7rabbita8internal7slotmap2IdE(self, key, _M0IP016_24default__implPB4Hash4hashGRP419moonbit_2dcommunity7rabbita8internal7slotmap2IdE(key));
}
function _M0MPC13set3Set3SetGRP419moonbit_2dcommunity7rabbita8internal7slotmap2IdE(arr, capacity) {
  const length = arr.end - arr.start | 0;
  let capacity$2;
  if (capacity === undefined) {
    capacity$2 = length === 0 ? 8 : _M0FPC13set21capacity__for__length(length);
  } else {
    const _Some = capacity;
    const _capacity = _Some;
    const _p = _M0FPC13set21capacity__for__length(length);
    capacity$2 = _capacity > _p ? _capacity : _p;
  }
  const m = _M0FPC13set8new__setGRP419moonbit_2dcommunity7rabbita8internal7slotmap2IdE(capacity$2);
  const _bind = arr.end - arr.start | 0;
  let _tmp = 0;
  while (true) {
    const _ = _tmp;
    if (_ < _bind) {
      const e = arr.buf[arr.start + _ | 0];
      _M0MPC13set3Set3addGRP419moonbit_2dcommunity7rabbita8internal7slotmap2IdE(m, e);
      _tmp = _ + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return m;
}
function _M0MPC13set3Set3SetGiE(arr, capacity) {
  const length = arr.end - arr.start | 0;
  let capacity$2;
  if (capacity === undefined) {
    capacity$2 = length === 0 ? 8 : _M0FPC13set21capacity__for__length(length);
  } else {
    const _Some = capacity;
    const _capacity = _Some;
    const _p = _M0FPC13set21capacity__for__length(length);
    capacity$2 = _capacity > _p ? _capacity : _p;
  }
  const m = _M0FPC13set8new__setGiE(capacity$2);
  const _bind = arr.end - arr.start | 0;
  let _tmp = 0;
  while (true) {
    const _ = _tmp;
    if (_ < _bind) {
      const e = arr.buf[arr.start + _ | 0];
      _M0MPC13set3Set3addGiE(m, e);
      _tmp = _ + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return m;
}
function _M0MPC13set3Set8containsGiE(self, key) {
  const hash = _M0IPC13int3IntPB4Hash4hash(key);
  let _tmp = 0;
  let _tmp$2 = hash & self.capacity_mask;
  while (true) {
    const i = _tmp;
    const idx = _tmp$2;
    const _tmp$3 = self.entries;
    $bound_check(_tmp$3, idx);
    const _bind = _tmp$3[idx];
    if (_bind === undefined) {
      return false;
    } else {
      const _Some = _bind;
      const _entry = _Some;
      if (_entry.hash === hash && _entry.key === key) {
        return true;
      }
      if (i > _entry.psl) {
        return false;
      }
      _tmp = i + 1 | 0;
      _tmp$2 = idx + 1 & self.capacity_mask;
      continue;
    }
  }
}
function _M0MPC13set3Set13remove__entryGRP419moonbit_2dcommunity7rabbita8internal7slotmap2IdE(self, entry) {
  const _bind = entry.prev;
  if (_bind === -1) {
    self.head = entry.next;
  } else {
    const _tmp = self.entries;
    $bound_check(_tmp, _bind);
    const _p = _tmp[_bind];
    let _tmp$2;
    if (_p === undefined) {
      _tmp$2 = $panic();
    } else {
      const _p$2 = _p;
      _tmp$2 = _p$2;
    }
    _tmp$2.next = entry.next;
  }
  const _bind$2 = entry.next;
  if (_bind$2 === undefined) {
    self.tail = entry.prev;
    return;
  } else {
    const _Some = _bind$2;
    const _next = _Some;
    _next.prev = entry.prev;
    return;
  }
}
function _M0MPC13set3Set11shift__backGRP419moonbit_2dcommunity7rabbita8internal7slotmap2IdE(self, idx) {
  let _tmp = idx;
  while (true) {
    const cur = _tmp;
    const next = cur + 1 & self.capacity_mask;
    _L: {
      const _tmp$2 = self.entries;
      $bound_check(_tmp$2, next);
      const _bind = _tmp$2[next];
      if (_bind === undefined) {
        break _L;
      } else {
        const _Some = _bind;
        const _x = _Some;
        const _x$2 = _x.psl;
        if (_x$2 === 0) {
          break _L;
        } else {
          _x.psl = _x.psl - 1 | 0;
          _M0MPC13set3Set10set__entryGRP419moonbit_2dcommunity7rabbita8internal7slotmap2IdE(self, _x, cur);
          _tmp = next;
          continue;
        }
      }
    }
    const _tmp$2 = self.entries;
    $bound_check(_tmp$2, cur);
    _tmp$2[cur] = undefined;
    return;
  }
}
function _M0MPC13set3Set6removeGRP419moonbit_2dcommunity7rabbita8internal7slotmap2IdE(self, key) {
  const hash = _M0IP016_24default__implPB4Hash4hashGRP419moonbit_2dcommunity7rabbita8internal7slotmap2IdE(key);
  let _tmp = 0;
  let _tmp$2 = hash & self.capacity_mask;
  while (true) {
    const i = _tmp;
    const idx = _tmp$2;
    const _tmp$3 = self.entries;
    $bound_check(_tmp$3, idx);
    const _bind = _tmp$3[idx];
    if (_bind === undefined) {
      return;
    } else {
      const _Some = _bind;
      const _entry = _Some;
      let _tmp$4;
      if (_entry.hash === hash) {
        const _p = _entry.key;
        _tmp$4 = _p.gen === key.gen && _p.idx === key.idx;
      } else {
        _tmp$4 = false;
      }
      if (_tmp$4) {
        _M0MPC13set3Set13remove__entryGRP419moonbit_2dcommunity7rabbita8internal7slotmap2IdE(self, _entry);
        _M0MPC13set3Set11shift__backGRP419moonbit_2dcommunity7rabbita8internal7slotmap2IdE(self, idx);
        self.size = self.size - 1 | 0;
        return;
      }
      if (i > _entry.psl) {
        return;
      }
      _tmp = i + 1 | 0;
      _tmp$2 = idx + 1 & self.capacity_mask;
      continue;
    }
  }
}
function _M0MPC13set3Set4iterGRP419moonbit_2dcommunity7rabbita8internal7slotmap2IdE(self) {
  const curr_entry = new _M0TPB8MutLocalGORPC13set5EntryGRP419moonbit_2dcommunity7rabbita8internal7slotmap2IdEE(self.head);
  const len = self.size;
  const remaining = new _M0TPB8MutLocalGiE(len);
  return _M0MPB4Iter3newGUsWRP319moonbit_2dcommunity7rabbita3dom5EventRP319moonbit_2dcommunity7rabbita3cmd9SchedulerEuEE(() => {
    _L: {
      if (remaining.val > 0) {
        const _bind = curr_entry.val;
        if (_bind === undefined) {
          break _L;
        } else {
          const _Some = _bind;
          const _x = _Some;
          const _key = _x.key;
          const _next = _x.next;
          curr_entry.val = _next;
          remaining.val = remaining.val - 1 | 0;
          return _key;
        }
      } else {
        break _L;
      }
    }
    return undefined;
  }, len);
}
function _M0FPC15queue10new__queueGURP419moonbit_2dcommunity7rabbita8internal7slotmap2IdRP419moonbit_2dcommunity7rabbita8internal3any3AnyEE() {
  return new _M0TPC15queue5QueueGURP419moonbit_2dcommunity7rabbita8internal7slotmap2IdRP419moonbit_2dcommunity7rabbita8internal3any3AnyEE(0, undefined, undefined);
}
function _M0MPC15queue5Queue5QueueGURP419moonbit_2dcommunity7rabbita8internal7slotmap2IdRP419moonbit_2dcommunity7rabbita8internal3any3AnyEE(arr) {
  if ((arr.end - arr.start | 0) > 0) {
    const length = arr.end - arr.start | 0;
    const _bind = length - 1 | 0;
    if (_bind < 0 || _bind >= (arr.end - arr.start | 0)) {
      $panic();
    }
    const last = new _M0TPC15queue4ConsGURP419moonbit_2dcommunity7rabbita8internal7slotmap2IdRP419moonbit_2dcommunity7rabbita8internal3any3AnyEE(arr.buf[arr.start + _bind | 0], undefined);
    let first;
    let _tmp = length - 2 | 0;
    let _tmp$2 = last;
    while (true) {
      const i = _tmp;
      const x = _tmp$2;
      if (i >= 0) {
        _tmp = i - 1 | 0;
        if (i < 0 || i >= (arr.end - arr.start | 0)) {
          $panic();
        }
        _tmp$2 = new _M0TPC15queue4ConsGURP419moonbit_2dcommunity7rabbita8internal7slotmap2IdRP419moonbit_2dcommunity7rabbita8internal3any3AnyEE(arr.buf[arr.start + i | 0], x);
        continue;
      } else {
        first = x;
        break;
      }
    }
    return new _M0TPC15queue5QueueGURP419moonbit_2dcommunity7rabbita8internal7slotmap2IdRP419moonbit_2dcommunity7rabbita8internal3any3AnyEE(length, first, last);
  } else {
    return _M0FPC15queue10new__queueGURP419moonbit_2dcommunity7rabbita8internal7slotmap2IdRP419moonbit_2dcommunity7rabbita8internal3any3AnyEE();
  }
}
function _M0MPC15queue5Queue5clearGWRP319moonbit_2dcommunity7rabbita3cmd9SchedulerEuE(self) {
  self.length = 0;
  self.first = undefined;
  self.last = undefined;
}
function _M0MPC15queue5Queue4pushGWRP319moonbit_2dcommunity7rabbita3cmd9SchedulerEuE(self, x) {
  const cell = new _M0TPC15queue4ConsGWRP319moonbit_2dcommunity7rabbita3cmd9SchedulerEuE(x, undefined);
  const _bind = self.last;
  if (_bind === undefined) {
    self.length = 1;
    self.first = cell;
    self.last = cell;
    return;
  } else {
    const _Some = _bind;
    const _last = _Some;
    _last.next = cell;
    self.length = self.length + 1 | 0;
    self.last = cell;
    return;
  }
}
function _M0MPC15queue5Queue3popGWRP319moonbit_2dcommunity7rabbita3cmd9SchedulerEuE(self) {
  const _bind = self.first;
  if (_bind === undefined) {
    return undefined;
  } else {
    const _Some = _bind;
    const _x = _Some;
    const _content = _x.content;
    const _x$2 = _x.next;
    if (_x$2 === undefined) {
      _M0MPC15queue5Queue5clearGWRP319moonbit_2dcommunity7rabbita3cmd9SchedulerEuE(self);
      return _content;
    } else {
      self.length = self.length - 1 | 0;
      self.first = _x$2;
      return _content;
    }
  }
}
function _M0MP319moonbit_2dcommunity7rabbita6common5Mouse3new(screen, offset, client) {
  return new _M0TP319moonbit_2dcommunity7rabbita6common5Mouse(screen, offset, client);
}
function _M0MP319moonbit_2dcommunity7rabbita6common8Keyboard3new(key, code, alt_key, ctrl_key, shift_key, meta_key, is_composing, repeat, location) {
  return new _M0TP319moonbit_2dcommunity7rabbita6common8Keyboard(key, code, alt_key, ctrl_key, shift_key, meta_key, is_composing, repeat, location);
}
function _M0MP319moonbit_2dcommunity7rabbita6common6Scroll3new(offset, width, height) {
  return new _M0TP319moonbit_2dcommunity7rabbita6common6Scroll(offset, width, height);
}
function _M0FP419moonbit_2dcommunity7rabbita8internal3any5eraseGRP310tonyfettes31rabbita_2dmidpull_2ddrain_2dmre4main10CounterMsgE(x) {
  return new _M0TP419moonbit_2dcommunity7rabbita8internal3any7WrapperGRP310tonyfettes31rabbita_2dmidpull_2ddrain_2dmre4main10CounterMsgE(x);
}
function _M0FP419moonbit_2dcommunity7rabbita8internal3any5eraseGRP310tonyfettes31rabbita_2dmidpull_2ddrain_2dmre4main6TabMsgE(x) {
  return new _M0TP419moonbit_2dcommunity7rabbita8internal3any7WrapperGRP310tonyfettes31rabbita_2dmidpull_2ddrain_2dmre4main6TabMsgE(x);
}
function _M0FP419moonbit_2dcommunity7rabbita8internal3any5eraseGuE(x) {
  return new _M0TP419moonbit_2dcommunity7rabbita8internal3any7WrapperGuE(x);
}
function _M0IP419moonbit_2dcommunity7rabbita8internal7slotmap2IdPB4Hash13hash__combine(_x_37, _x_38) {
  _M0IPC14uint4UIntPB4Hash13hash__combine(_x_37.gen, _x_38);
  _M0IPC13int3IntPB4Hash13hash__combine(_x_37.idx, _x_38);
}
function _M0MP419moonbit_2dcommunity7rabbita8internal7slotmap7SlotMap7SlotMapGRP419moonbit_2dcommunity7rabbita8internal7runtime5StoreE() {
  return new _M0TP419moonbit_2dcommunity7rabbita8internal7slotmap7SlotMapGRP419moonbit_2dcommunity7rabbita8internal7runtime5StoreE([], [], []);
}
function _M0MP419moonbit_2dcommunity7rabbita8internal7slotmap7SlotMap8allocateGRP419moonbit_2dcommunity7rabbita8internal7runtime5StoreE(arena) {
  const _bind = _M0MPC15array5Array3popGiE(arena.free);
  if (_bind === undefined) {
    const idx = arena.slots.length;
    _M0MPC15array5Array4pushGjE(arena.gens, 0);
    _M0MPC15array5Array4pushGORP419moonbit_2dcommunity7rabbita8internal7runtime5StoreE(arena.slots, undefined);
    return new _M0TP419moonbit_2dcommunity7rabbita8internal7slotmap2Id(0, idx);
  } else {
    const _Some = _bind;
    const _idx = _Some;
    const gen = _M0MPC15array5Array2atGjE(arena.gens, _idx);
    _M0MPC15array5Array3setGORP419moonbit_2dcommunity7rabbita8internal7runtime5StoreE(arena.slots, _idx, undefined);
    return new _M0TP419moonbit_2dcommunity7rabbita8internal7slotmap2Id(gen, _idx);
  }
}
function _M0MP419moonbit_2dcommunity7rabbita8internal7slotmap7SlotMap5writeGRP419moonbit_2dcommunity7rabbita8internal7runtime5StoreE(arena, id, value) {
  const _gen = id.gen;
  const _idx = id.idx;
  if (_idx !== -1) {
    if (_M0MPC15array5Array2atGjE(arena.gens, _idx) === _gen) {
      _M0MPC15array5Array3setGORP419moonbit_2dcommunity7rabbita8internal7runtime5StoreE(arena.slots, _idx, value);
      return;
    } else {
      $panic();
      return;
    }
  } else {
    $panic();
    return;
  }
}
function _M0MP419moonbit_2dcommunity7rabbita8internal7slotmap7SlotMap14allocate__withGRP419moonbit_2dcommunity7rabbita8internal6duplix5ScopeE(arena, f) {
  const id = _M0MP419moonbit_2dcommunity7rabbita8internal7slotmap7SlotMap8allocateGRP419moonbit_2dcommunity7rabbita8internal7runtime5StoreE(arena);
  _M0MP419moonbit_2dcommunity7rabbita8internal7slotmap7SlotMap5writeGRP419moonbit_2dcommunity7rabbita8internal7runtime5StoreE(arena, id, f(id));
  return id;
}
function _M0MP419moonbit_2dcommunity7rabbita8internal7slotmap7SlotMap4freeGRP419moonbit_2dcommunity7rabbita8internal7runtime5StoreE(arena, id) {
  const _gen = id.gen;
  const _idx = id.idx;
  if (_idx !== -1) {
    if (_M0MPC15array5Array2atGjE(arena.gens, _idx) === _gen) {
      const _bind = _M0MPC15array5Array2atGORP419moonbit_2dcommunity7rabbita8internal7runtime5StoreE(arena.slots, _idx);
      if (_bind === undefined) {
        $panic();
        return;
      } else {
        _M0MPC15array5Array3setGORP419moonbit_2dcommunity7rabbita8internal7runtime5StoreE(arena.slots, _idx, undefined);
        const _array_1 = arena.gens;
        _M0MPC15array5Array3setGjE(_array_1, _idx, (_M0MPC15array5Array2atGjE(_array_1, _idx) >>> 0) + (1 >>> 0) | 0);
        _M0MPC15array5Array4pushGiE(arena.free, _idx);
        return;
      }
    } else {
      $panic();
      return;
    }
  } else {
    $panic();
    return;
  }
}
function _M0MP419moonbit_2dcommunity7rabbita8internal7slotmap7SlotMap3getGRP419moonbit_2dcommunity7rabbita8internal7runtime5StoreE(arena, id) {
  const _gen = id.gen;
  const _idx = id.idx;
  return _idx !== -1 ? (_M0MPC15array5Array2atGjE(arena.gens, _idx) === _gen ? _M0MPC15array5Array2atGORP419moonbit_2dcommunity7rabbita8internal7runtime5StoreE(arena.slots, _idx) : undefined) : undefined;
}
function _M0MP419moonbit_2dcommunity7rabbita8internal7slotmap7SlotMap4readGRP419moonbit_2dcommunity7rabbita8internal6duplix5ScopeE(arena, id) {
  const _gen = id.gen;
  const _idx = id.idx;
  if (_idx !== -1) {
    if (_M0MPC15array5Array2atGjE(arena.gens, _idx) === _gen) {
      const _bind = _M0MPC15array5Array2atGORP419moonbit_2dcommunity7rabbita8internal7runtime5StoreE(arena.slots, _idx);
      if (_bind === undefined) {
        return $panic();
      } else {
        const _Some = _bind;
        return _Some;
      }
    } else {
      return $panic();
    }
  } else {
    return $panic();
  }
}
function _M0MP319moonbit_2dcommunity7rabbita2js5Value10cast__fromGsE(value) {
  return value;
}
function _M0MP319moonbit_2dcommunity7rabbita2js5Value10cast__fromGRP319moonbit_2dcommunity7rabbita3dom4NodeE(value) {
  return value;
}
function _M0MP319moonbit_2dcommunity7rabbita2js8Optional13is__undefinedGsE(self) {
  return _M0MP319moonbit_2dcommunity7rabbita2js5Value13is__undefined(self);
}
function _M0MP319moonbit_2dcommunity7rabbita2js8Optional6unwrapGsE(self) {
  if (_M0MP319moonbit_2dcommunity7rabbita2js8Optional13is__undefinedGsE(self)) {
    $panic();
  }
  return self;
}
function _M0MP319moonbit_2dcommunity7rabbita2js8Nullable8is__nullGRP319moonbit_2dcommunity7rabbita3dom7ElementE(self) {
  return _M0MP319moonbit_2dcommunity7rabbita2js5Value8is__null(self);
}
function _M0MP319moonbit_2dcommunity7rabbita2js8Nullable6unwrapGRP319moonbit_2dcommunity7rabbita3dom7ElementE(self) {
  if (_M0MP319moonbit_2dcommunity7rabbita2js8Nullable8is__nullGRP319moonbit_2dcommunity7rabbita3dom7ElementE(self)) {
    $panic();
  }
  return self;
}
function _M0MP319moonbit_2dcommunity7rabbita2js8Nullable10to__optionGRP319moonbit_2dcommunity7rabbita3dom10MouseEventE(self) {
  return !_M0MP319moonbit_2dcommunity7rabbita2js5Value8is__null(self) ? new _M0DTPC16option6OptionGRP319moonbit_2dcommunity7rabbita3dom10MouseEventE4Some(_M0MP319moonbit_2dcommunity7rabbita2js8Nullable6unwrapGRP319moonbit_2dcommunity7rabbita3dom7ElementE(self)) : _M0DTPC16option6OptionGRP319moonbit_2dcommunity7rabbita3dom10MouseEventE4None__;
}
function _M0MP319moonbit_2dcommunity7rabbita2js8Nullable4nullGRP319moonbit_2dcommunity7rabbita3dom4NodeE() {
  return _M0MP319moonbit_2dcommunity7rabbita2js5Value4null();
}
function _M0MP319moonbit_2dcommunity7rabbita2js8Nullable12from__optionGsE(value) {
  return _M0MPC16option6Option16unwrap__or__elseGRP319moonbit_2dcommunity7rabbita2js5ValueE(_M0MPC16option6Option3mapGsRP319moonbit_2dcommunity7rabbita2js5ValueE(value, _M0MP319moonbit_2dcommunity7rabbita2js5Value10cast__fromGsE), _M0MP319moonbit_2dcommunity7rabbita2js5Value4null);
}
function _M0MP319moonbit_2dcommunity7rabbita2js8Nullable12from__optionGRP319moonbit_2dcommunity7rabbita3dom4NodeE(value) {
  return _M0MPC16option6Option16unwrap__or__elseGRP319moonbit_2dcommunity7rabbita2js5ValueE(_M0MPC16option6Option3mapGRP319moonbit_2dcommunity7rabbita3dom4NodeRP319moonbit_2dcommunity7rabbita2js5ValueE(value, _M0MP319moonbit_2dcommunity7rabbita2js5Value10cast__fromGRP319moonbit_2dcommunity7rabbita3dom4NodeE), _M0MP319moonbit_2dcommunity7rabbita2js5Value4null);
}
function _M0IP016_24default__implP319moonbit_2dcommunity7rabbita3cmd9Scheduler3addN2goS29GRP419moonbit_2dcommunity7rabbita8internal7runtime7SandboxE(self, cmd) {
  switch (cmd.$tag) {
    case 0: {
      const _Batch = cmd;
      const _xs = _Batch._0;
      const _p = _xs.length;
      let _tmp = 0;
      while (true) {
        const _p$2 = _tmp;
        if (_p$2 < _p) {
          const _p$3 = _xs[_p$2];
          _M0IP016_24default__implP319moonbit_2dcommunity7rabbita3cmd9Scheduler3addN2goS29GRP419moonbit_2dcommunity7rabbita8internal7runtime7SandboxE(self, _p$3);
          _tmp = _p$2 + 1 | 0;
          continue;
        } else {
          return;
        }
      }
    }
    case 1: {
      const _Effect = cmd;
      const _k = _Effect._0;
      const _f = _Effect._1;
      _M0IP419moonbit_2dcommunity7rabbita8internal7runtime7SandboxP319moonbit_2dcommunity7rabbita3cmd9Scheduler11run__effect(self, _k, _f);
      return;
    }
    case 2: {
      const _Message = cmd;
      const _id = _Message._0;
      const _msg = _Message._1;
      _M0IP419moonbit_2dcommunity7rabbita8internal7runtime7SandboxP319moonbit_2dcommunity7rabbita3cmd9Scheduler14queue__message(self, _id, _msg);
      return;
    }
    default: {
      const _LegacyMessage = cmd;
      const _f$2 = _LegacyMessage._0;
      _f$2({ self: self, method_table: _M0FP0118moonbit_2dcommunity_2frabbita_2finternal_2fruntime_2fSandbox_24as_24_40moonbit_2dcommunity_2frabbita_2fcmd_2eScheduler });
      return;
    }
  }
}
function _M0IP016_24default__implP319moonbit_2dcommunity7rabbita3cmd9Scheduler3addGRP419moonbit_2dcommunity7rabbita8internal7runtime7SandboxE(self, cmd) {
  _M0IP016_24default__implP319moonbit_2dcommunity7rabbita3cmd9Scheduler3addN2goS29GRP419moonbit_2dcommunity7rabbita8internal7runtime7SandboxE(self, cmd);
  _M0IP419moonbit_2dcommunity7rabbita8internal7runtime7SandboxP319moonbit_2dcommunity7rabbita3cmd9Scheduler14drain__message(self);
}
function _M0FP319moonbit_2dcommunity7rabbita3cmd13make__emitterGRP310tonyfettes31rabbita_2dmidpull_2ddrain_2dmre4main10CounterMsgE(id) {
  return (msg) => new _M0DTP319moonbit_2dcommunity7rabbita3cmd3Cmd7Message(id, _M0FP419moonbit_2dcommunity7rabbita8internal3any5eraseGRP310tonyfettes31rabbita_2dmidpull_2ddrain_2dmre4main10CounterMsgE(msg));
}
function _M0FP319moonbit_2dcommunity7rabbita3cmd13make__emitterGRP310tonyfettes31rabbita_2dmidpull_2ddrain_2dmre4main6TabMsgE(id) {
  return (msg) => new _M0DTP319moonbit_2dcommunity7rabbita3cmd3Cmd7Message(id, _M0FP419moonbit_2dcommunity7rabbita8internal3any5eraseGRP310tonyfettes31rabbita_2dmidpull_2ddrain_2dmre4main6TabMsgE(msg));
}
function _M0FP319moonbit_2dcommunity7rabbita3cmd13make__emitterGuE(id) {
  return (msg) => new _M0DTP319moonbit_2dcommunity7rabbita3cmd3Cmd7Message(id, _M0FP419moonbit_2dcommunity7rabbita8internal3any5eraseGuE(msg));
}
function _M0IP016_24default__implP319moonbit_2dcommunity7rabbita3dom12IsSVGElement10get__styleGRP319moonbit_2dcommunity7rabbita3dom10SVGElementE(s) {
  return _M0FP319moonbit_2dcommunity7rabbita3dom10get__style(s);
}
function _M0IP016_24default__implP319moonbit_2dcommunity7rabbita3dom6IsNode16set__node__valueGRP319moonbit_2dcommunity7rabbita3dom7ElementE(s, v) {
  _M0FP319moonbit_2dcommunity7rabbita3dom21ffi__set__node__value(s, v);
}
function _M0IP016_24default__implP319moonbit_2dcommunity7rabbita3dom6IsNode8as__nodeGRP319moonbit_2dcommunity7rabbita3dom7ElementE(s) {
  return s;
}
function _M0IP016_24default__implP319moonbit_2dcommunity7rabbita3dom6IsNode8as__nodeGRP319moonbit_2dcommunity7rabbita3dom7CommentE(s) {
  return s;
}
function _M0IP016_24default__implP319moonbit_2dcommunity7rabbita3dom6IsNode8as__nodeGRP319moonbit_2dcommunity7rabbita3dom16DocumentFragmentE(s) {
  return s;
}
function _M0IP016_24default__implP319moonbit_2dcommunity7rabbita3dom6IsNode8as__nodeGRP319moonbit_2dcommunity7rabbita3dom4NodeE(s) {
  return s;
}
function _M0IP016_24default__implP319moonbit_2dcommunity7rabbita3dom6IsNode18get__next__siblingGRP319moonbit_2dcommunity7rabbita3dom4NodeE(s) {
  return _M0FP319moonbit_2dcommunity7rabbita3dom18ffi__next__sibling(s);
}
function _M0IP016_24default__implP319moonbit_2dcommunity7rabbita3dom6IsNode22get__previous__siblingGRP319moonbit_2dcommunity7rabbita3dom4NodeE(s) {
  return _M0FP319moonbit_2dcommunity7rabbita3dom22ffi__previous__sibling(s);
}
function _M0IP016_24default__implP319moonbit_2dcommunity7rabbita3dom6IsNode17get__parent__nodeGRP319moonbit_2dcommunity7rabbita3dom4NodeE(s) {
  return _M0FP319moonbit_2dcommunity7rabbita3dom17ffi__parent__node(s);
}
function _M0IP016_24default__implP319moonbit_2dcommunity7rabbita3dom6IsNode17get__parent__nodeGRP319moonbit_2dcommunity7rabbita3dom7CommentE(s) {
  return _M0FP319moonbit_2dcommunity7rabbita3dom17ffi__parent__node(s);
}
function _M0IP016_24default__implP319moonbit_2dcommunity7rabbita3dom6IsNode13append__childGRP319moonbit_2dcommunity7rabbita3dom16DocumentFragmentE(s, child) {
  _M0FP319moonbit_2dcommunity7rabbita3dom18ffi__append__child(s, child);
}
function _M0IP016_24default__implP319moonbit_2dcommunity7rabbita3dom6IsNode13remove__childGRP319moonbit_2dcommunity7rabbita3dom4NodeE(s, child) {
  _M0FP319moonbit_2dcommunity7rabbita3dom18ffi__remove__child(s, child);
}
function _M0IP016_24default__implP319moonbit_2dcommunity7rabbita3dom6IsNode14insert__beforeGRP319moonbit_2dcommunity7rabbita3dom4NodeE(s, value, before) {
  _M0FP319moonbit_2dcommunity7rabbita3dom14insert__before(s, value, before);
}
function _M0IP016_24default__implP319moonbit_2dcommunity7rabbita3dom6IsNode14is__same__nodeGRP319moonbit_2dcommunity7rabbita3dom4NodeE(s, other) {
  return _M0FP319moonbit_2dcommunity7rabbita3dom19ffi__is__same__node(s, other);
}
function _M0IP016_24default__implP319moonbit_2dcommunity7rabbita3dom12IsMouseEvent14get__client__xGRP319moonbit_2dcommunity7rabbita3dom10MouseEventE(s) {
  return _M0FP319moonbit_2dcommunity7rabbita3dom28ffi__mouse__event__client__x(s);
}
function _M0IP016_24default__implP319moonbit_2dcommunity7rabbita3dom12IsMouseEvent14get__client__yGRP319moonbit_2dcommunity7rabbita3dom10MouseEventE(s) {
  return _M0FP319moonbit_2dcommunity7rabbita3dom28ffi__mouse__event__client__y(s);
}
function _M0IP016_24default__implP319moonbit_2dcommunity7rabbita3dom12IsMouseEvent14get__ctrl__keyGRP319moonbit_2dcommunity7rabbita3dom10MouseEventE(s) {
  return _M0FP319moonbit_2dcommunity7rabbita3dom28ffi__mouse__event__ctrl__key(s);
}
function _M0IP016_24default__implP319moonbit_2dcommunity7rabbita3dom12IsMouseEvent14get__meta__keyGRP319moonbit_2dcommunity7rabbita3dom10MouseEventE(s) {
  return _M0FP319moonbit_2dcommunity7rabbita3dom28ffi__mouse__event__meta__key(s);
}
function _M0IP016_24default__implP319moonbit_2dcommunity7rabbita3dom12IsMouseEvent14get__offset__xGRP319moonbit_2dcommunity7rabbita3dom10MouseEventE(s) {
  return _M0FP319moonbit_2dcommunity7rabbita3dom28ffi__mouse__event__offset__x(s);
}
function _M0IP016_24default__implP319moonbit_2dcommunity7rabbita3dom12IsMouseEvent14get__offset__yGRP319moonbit_2dcommunity7rabbita3dom10MouseEventE(s) {
  return _M0FP319moonbit_2dcommunity7rabbita3dom28ffi__mouse__event__offset__y(s);
}
function _M0IP016_24default__implP319moonbit_2dcommunity7rabbita3dom12IsMouseEvent14get__screen__xGRP319moonbit_2dcommunity7rabbita3dom10MouseEventE(s) {
  return _M0FP319moonbit_2dcommunity7rabbita3dom28ffi__mouse__event__screen__x(s);
}
function _M0IP016_24default__implP319moonbit_2dcommunity7rabbita3dom12IsMouseEvent14get__screen__yGRP319moonbit_2dcommunity7rabbita3dom10MouseEventE(s) {
  return _M0FP319moonbit_2dcommunity7rabbita3dom28ffi__mouse__event__screen__y(s);
}
function _M0IP016_24default__implP319moonbit_2dcommunity7rabbita3dom13IsHtmlElement17as__html__elementGRP319moonbit_2dcommunity7rabbita3dom11HTMLElementE(s) {
  return s;
}
function _M0IP016_24default__implP319moonbit_2dcommunity7rabbita3dom13IsHtmlElement10get__styleGRP319moonbit_2dcommunity7rabbita3dom11HTMLElementE(s) {
  return _M0FP319moonbit_2dcommunity7rabbita3dom30ffi__html__element__get__style(_M0IP016_24default__implP319moonbit_2dcommunity7rabbita3dom13IsHtmlElement17as__html__elementGRP319moonbit_2dcommunity7rabbita3dom11HTMLElementE(s));
}
function _M0FP319moonbit_2dcommunity7rabbita3dom27default__exception__handlerGRP319moonbit_2dcommunity7rabbita3dom12DOMExceptionRP319moonbit_2dcommunity7rabbita3dom7ElementE(exception) {
  _M0FP319moonbit_2dcommunity7rabbita3dom12console__log(exception);
  return $panic();
}
function _M0IP016_24default__implP319moonbit_2dcommunity7rabbita3dom13IsEventTarget20add__event__listenerGRP319moonbit_2dcommunity7rabbita3dom7ElementE(s, type_, callback) {
  _M0FP319moonbit_2dcommunity7rabbita3dom25ffi__add__event__listener(s, type_, callback);
}
function _M0IP016_24default__implP319moonbit_2dcommunity7rabbita3dom13IsEventTarget11to__elementGRP319moonbit_2dcommunity7rabbita3dom11EventTargetE(s) {
  const _lhs = _M0FP319moonbit_2dcommunity7rabbita3dom16ffi__to__element(s);
  return _M0MP319moonbit_2dcommunity7rabbita2js8Nullable10to__optionGRP319moonbit_2dcommunity7rabbita3dom10MouseEventE(_lhs);
}
function _M0IP016_24default__implP319moonbit_2dcommunity7rabbita3dom13IsEventTarget17to__html__elementGRP319moonbit_2dcommunity7rabbita3dom7ElementE(s) {
  const _lhs = _M0FP319moonbit_2dcommunity7rabbita3dom22ffi__to__html__element(s);
  return _M0MP319moonbit_2dcommunity7rabbita2js8Nullable10to__optionGRP319moonbit_2dcommunity7rabbita3dom10MouseEventE(_lhs);
}
function _M0IP016_24default__implP319moonbit_2dcommunity7rabbita3dom13IsEventTarget16to__svg__elementGRP319moonbit_2dcommunity7rabbita3dom7ElementE(s) {
  const _lhs = _M0FP319moonbit_2dcommunity7rabbita3dom21ffi__to__svg__element(s);
  return _M0MP319moonbit_2dcommunity7rabbita2js8Nullable10to__optionGRP319moonbit_2dcommunity7rabbita3dom10MouseEventE(_lhs);
}
function _M0IP016_24default__implP319moonbit_2dcommunity7rabbita3dom7IsEvent6targetGRP319moonbit_2dcommunity7rabbita3dom7UIEventE(s) {
  return _M0FP319moonbit_2dcommunity7rabbita3dom18ffi__event__target(s);
}
function _M0IP016_24default__implP319moonbit_2dcommunity7rabbita3dom7IsEvent15current__targetGRP319moonbit_2dcommunity7rabbita3dom5EventE(s) {
  return _M0FP319moonbit_2dcommunity7rabbita3dom27ffi__event__current__target(s);
}
function _M0IP016_24default__implP319moonbit_2dcommunity7rabbita3dom7IsEvent16prevent__defaultGRP319moonbit_2dcommunity7rabbita3dom5EventE(s) {
  _M0FP319moonbit_2dcommunity7rabbita3dom28ffi__event__prevent__default(_M0IP016_24default__implP319moonbit_2dcommunity7rabbita3dom7IsEvent9as__eventGRP319moonbit_2dcommunity7rabbita3dom5EventE(s));
}
function _M0IP016_24default__implP319moonbit_2dcommunity7rabbita3dom7IsEvent9as__eventGRP319moonbit_2dcommunity7rabbita3dom5EventE(s) {
  return s;
}
function _M0IP016_24default__implP319moonbit_2dcommunity7rabbita3dom7IsEvent16to__mouse__eventGRP319moonbit_2dcommunity7rabbita3dom5EventE(s) {
  const _lhs = _M0FP319moonbit_2dcommunity7rabbita3dom21ffi__to__mouse__event(s);
  return _M0MP319moonbit_2dcommunity7rabbita2js8Nullable10to__optionGRP319moonbit_2dcommunity7rabbita3dom10MouseEventE(_lhs);
}
function _M0IP016_24default__implP319moonbit_2dcommunity7rabbita3dom7IsEvent19to__keyboard__eventGRP319moonbit_2dcommunity7rabbita3dom5EventE(s) {
  const _lhs = _M0FP319moonbit_2dcommunity7rabbita3dom24ffi__to__keyboard__event(s);
  return _M0MP319moonbit_2dcommunity7rabbita2js8Nullable10to__optionGRP319moonbit_2dcommunity7rabbita3dom10MouseEventE(_lhs);
}
function _M0IP016_24default__implP319moonbit_2dcommunity7rabbita3dom9IsElement14set__attributeGRP319moonbit_2dcommunity7rabbita3dom7ElementE(s, attr, value) {
  _M0FP319moonbit_2dcommunity7rabbita3dom28ffi__element__set__attribute(s, attr, value);
}
function _M0IP016_24default__implP319moonbit_2dcommunity7rabbita3dom9IsElement17remove__attributeGRP319moonbit_2dcommunity7rabbita3dom7ElementE(s, attr) {
  _M0FP319moonbit_2dcommunity7rabbita3dom31ffi__element__remove__attribute(s, attr);
}
function _M0IP016_24default__implP319moonbit_2dcommunity7rabbita3dom9IsElement13set__propertyGRP319moonbit_2dcommunity7rabbita3dom7ElementE(s, prop, value) {
  _M0FP319moonbit_2dcommunity7rabbita3dom27ffi__element__set__property(s, prop, value);
}
function _M0IP016_24default__implP319moonbit_2dcommunity7rabbita3dom9IsElement13get__propertyGRP319moonbit_2dcommunity7rabbita3dom7ElementE(s, prop) {
  return _M0FP319moonbit_2dcommunity7rabbita3dom27ffi__element__get__property(s, prop);
}
function _M0IP016_24default__implP319moonbit_2dcommunity7rabbita3dom9IsElement16remove__propertyGRP319moonbit_2dcommunity7rabbita3dom7ElementE(s, prop) {
  _M0FP319moonbit_2dcommunity7rabbita3dom30ffi__element__remove__property(s, prop);
}
function _M0IP016_24default__implP319moonbit_2dcommunity7rabbita3dom9IsElement16get__scroll__topGRP319moonbit_2dcommunity7rabbita3dom7ElementE(s) {
  return _M0FP319moonbit_2dcommunity7rabbita3dom30ffi__element__get__scroll__top(s);
}
function _M0IP016_24default__implP319moonbit_2dcommunity7rabbita3dom9IsElement17get__scroll__leftGRP319moonbit_2dcommunity7rabbita3dom7ElementE(s) {
  return _M0FP319moonbit_2dcommunity7rabbita3dom31ffi__element__get__scroll__left(s);
}
function _M0IP016_24default__implP319moonbit_2dcommunity7rabbita3dom9IsElement18get__scroll__widthGRP319moonbit_2dcommunity7rabbita3dom7ElementE(s) {
  return _M0FP319moonbit_2dcommunity7rabbita3dom32ffi__element__get__scroll__width(s);
}
function _M0IP016_24default__implP319moonbit_2dcommunity7rabbita3dom9IsElement19get__scroll__heightGRP319moonbit_2dcommunity7rabbita3dom7ElementE(s) {
  return _M0FP319moonbit_2dcommunity7rabbita3dom33ffi__element__get__scroll__height(s);
}
function _M0IP016_24default__implP319moonbit_2dcommunity7rabbita3dom9IsElement16set__inner__htmlGRP319moonbit_2dcommunity7rabbita3dom7ElementE(s, html) {
  _M0FP319moonbit_2dcommunity7rabbita3dom30ffi__element__set__inner__html(s, html);
}
function _M0MP319moonbit_2dcommunity7rabbita3dom8Document19create__element__ns(self, namespace_uri, qualified_name, on_namespace_error$46$opt, on_invalid_character_error$46$opt) {
  let on_namespace_error;
  if (on_namespace_error$46$opt === undefined) {
    on_namespace_error = _M0FP319moonbit_2dcommunity7rabbita3dom27default__exception__handlerGRP319moonbit_2dcommunity7rabbita3dom12DOMExceptionRP319moonbit_2dcommunity7rabbita3dom7ElementE;
  } else {
    const _Some = on_namespace_error$46$opt;
    on_namespace_error = _Some;
  }
  let on_invalid_character_error;
  if (on_invalid_character_error$46$opt === undefined) {
    on_invalid_character_error = _M0FP319moonbit_2dcommunity7rabbita3dom27default__exception__handlerGRP319moonbit_2dcommunity7rabbita3dom12DOMExceptionRP319moonbit_2dcommunity7rabbita3dom7ElementE;
  } else {
    const _Some = on_invalid_character_error$46$opt;
    on_invalid_character_error = _Some;
  }
  return _M0MP319moonbit_2dcommunity7rabbita3dom8Document27create__element__ns_2einner(self, namespace_uri, qualified_name, on_namespace_error, on_invalid_character_error);
}
function _M0FP419moonbit_2dcommunity7rabbita8internal6duplix9get__uuid() {
  _M0FP419moonbit_2dcommunity7rabbita8internal6duplix4uuid.val = _M0FP419moonbit_2dcommunity7rabbita8internal6duplix4uuid.val + 1 | 0;
  return _M0FP419moonbit_2dcommunity7rabbita8internal6duplix4uuid.val;
}
function _M0FP419moonbit_2dcommunity7rabbita8internal6duplix9map__nodeGRP319moonbit_2dcommunity7rabbita4html4HtmlE(childs, compute) {
  const _bind = [];
  const _bind$2 = _M0FP419moonbit_2dcommunity7rabbita8internal6duplix9get__uuid();
  const dirty = new _M0TP419moonbit_2dcommunity7rabbita8internal6duplix9DirtyFlag(_bind$2, true, _bind);
  const _bind$3 = _M0FP419moonbit_2dcommunity7rabbita8internal6duplix9get__uuid();
  const _bind$4 = _M0FP419moonbit_2dcommunity7rabbita8internal6duplix14current__scope.val;
  const _bind$5 = undefined;
  return new _M0TP419moonbit_2dcommunity7rabbita8internal6duplix4NodeGRP319moonbit_2dcommunity7rabbita4html4HtmlE(_bind$3, _bind$5, compute, 0, 0, _bind$4, childs, dirty);
}
function _M0MP419moonbit_2dcommunity7rabbita8internal6duplix4Node4map2GRP319moonbit_2dcommunity7rabbita4html4HtmluRP319moonbit_2dcommunity7rabbita4html4HtmlE(a, b, f) {
  return _M0FP419moonbit_2dcommunity7rabbita8internal6duplix9map__nodeGRP319moonbit_2dcommunity7rabbita4html4HtmlE([{ self: a, method_table: _M0FP0178moonbit_2dcommunity_2frabbita_2finternal_2fduplix_2fNode_5bmoonbit_2dcommunity_2frabbita_2fhtml_2fHtml_5d_24as_24_40moonbit_2dcommunity_2frabbita_2finternal_2fduplix_2eErasedNode }, { self: b, method_table: _M0FP0139moonbit_2dcommunity_2frabbita_2finternal_2fduplix_2fNode_5bUnit_5d_24as_24_40moonbit_2dcommunity_2frabbita_2finternal_2fduplix_2eErasedNode }], () => {
    const _p = a.value;
    let _tmp;
    if (_p === undefined) {
      _tmp = $panic();
    } else {
      const _p$2 = _p;
      _tmp = _p$2;
    }
    const _tmp$2 = _tmp;
    const _p$2 = b.value;
    if (_p$2 === -1) {
      $panic();
    }
    return f(_tmp$2, undefined);
  });
}
function _M0MP419moonbit_2dcommunity7rabbita8internal6duplix4Node4map2GibRP319moonbit_2dcommunity7rabbita4html4HtmlE(a, b, f) {
  return _M0FP419moonbit_2dcommunity7rabbita8internal6duplix9map__nodeGRP319moonbit_2dcommunity7rabbita4html4HtmlE([{ self: a, method_table: _M0FP0138moonbit_2dcommunity_2frabbita_2finternal_2fduplix_2fNode_5bInt_5d_24as_24_40moonbit_2dcommunity_2frabbita_2finternal_2fduplix_2eErasedNode }, { self: b, method_table: _M0FP0139moonbit_2dcommunity_2frabbita_2finternal_2fduplix_2fNode_5bBool_5d_24as_24_40moonbit_2dcommunity_2frabbita_2finternal_2fduplix_2eErasedNode }], () => {
    const _p = a.value;
    let _tmp;
    if (_p === undefined) {
      _tmp = $panic();
    } else {
      const _p$2 = _p;
      _tmp = _p$2;
    }
    const _tmp$2 = _tmp;
    const _p$2 = b.value;
    return f(_tmp$2, _p$2 === -1 ? $panic() : _p$2);
  });
}
function _M0FP419moonbit_2dcommunity7rabbita8internal6duplix10get__scope() {
  return _M0MP419moonbit_2dcommunity7rabbita8internal7slotmap7SlotMap4readGRP419moonbit_2dcommunity7rabbita8internal6duplix5ScopeE(_M0FP419moonbit_2dcommunity7rabbita8internal6duplix14global__scopes, _M0FP419moonbit_2dcommunity7rabbita8internal6duplix14current__scope.val);
}
function _M0FP419moonbit_2dcommunity7rabbita8internal6duplix11with__scopeGRP419moonbit_2dcommunity7rabbita8internal6duplix4NodeGuEE(f) {
  const id = _M0MP419moonbit_2dcommunity7rabbita8internal7slotmap7SlotMap14allocate__withGRP419moonbit_2dcommunity7rabbita8internal6duplix5ScopeE(_M0FP419moonbit_2dcommunity7rabbita8internal6duplix14global__scopes, (id$2) => {
    const _tmp = _M0FP419moonbit_2dcommunity7rabbita8internal6duplix14current__scope.val;
    const _bind = [];
    return new _M0TP419moonbit_2dcommunity7rabbita8internal6duplix5Scope(id$2, _tmp, _M0MPC13set3Set3SetGRP419moonbit_2dcommunity7rabbita8internal7slotmap2IdE(new _M0TPB9ArrayViewGRP419moonbit_2dcommunity7rabbita8internal7slotmap2IdE(_bind, 0, 0), undefined), []);
  });
  const result = _M0MPC13ref3Ref7protectGRP419moonbit_2dcommunity7rabbita8internal7slotmap2IdRP419moonbit_2dcommunity7rabbita8internal6duplix4NodeGuEE(_M0FP419moonbit_2dcommunity7rabbita8internal6duplix14current__scope, id, () => f(id));
  const _bind = _M0MP419moonbit_2dcommunity7rabbita8internal7slotmap7SlotMap3getGRP419moonbit_2dcommunity7rabbita8internal7runtime5StoreE(_M0FP419moonbit_2dcommunity7rabbita8internal6duplix14global__scopes, _M0FP419moonbit_2dcommunity7rabbita8internal6duplix14current__scope.val);
  if (_bind === undefined) {
  } else {
    const _Some = _bind;
    const _scope = _Some;
    _M0MPC13set3Set3addGRP419moonbit_2dcommunity7rabbita8internal7slotmap2IdE(_scope.sub_scopes, id);
  }
  return result;
}
function _M0FP419moonbit_2dcommunity7rabbita8internal6duplix11on__cleanup(f) {
  _M0MPC15array5Array4pushGRP419moonbit_2dcommunity7rabbita8internal7runtime5INodeE(_M0FP419moonbit_2dcommunity7rabbita8internal6duplix10get__scope().cleanups, f);
}
function _M0MP419moonbit_2dcommunity7rabbita8internal6duplix5Scope7dispose(self) {
  const _it = _M0MPC13set3Set4iterGRP419moonbit_2dcommunity7rabbita8internal7slotmap2IdE(self.sub_scopes);
  while (true) {
    const _bind = _M0MPB4Iter4nextGUsWRP319moonbit_2dcommunity7rabbita3dom5EventRP319moonbit_2dcommunity7rabbita3cmd9SchedulerEuEE(_it);
    if (_bind === undefined) {
      break;
    } else {
      const _Some = _bind;
      const _id = _Some;
      const _bind$2 = _M0MP419moonbit_2dcommunity7rabbita8internal7slotmap7SlotMap3getGRP419moonbit_2dcommunity7rabbita8internal7runtime5StoreE(_M0FP419moonbit_2dcommunity7rabbita8internal6duplix14global__scopes, _id);
      if (_bind$2 === undefined) {
      } else {
        const _Some$2 = _bind$2;
        const _scope = _Some$2;
        _M0MP419moonbit_2dcommunity7rabbita8internal6duplix5Scope7dispose(_scope);
      }
      continue;
    }
  }
  const _bind = self.cleanups;
  const _bind$2 = _bind.length;
  let _tmp = 0;
  while (true) {
    const _ = _tmp;
    if (_ < _bind$2) {
      const cleanup = _bind[_];
      cleanup();
      _tmp = _ + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  const _bind$3 = self.parent;
  if (_bind$3 === undefined) {
  } else {
    const _Some = _bind$3;
    const _p = _Some;
    _M0MPC13set3Set6removeGRP419moonbit_2dcommunity7rabbita8internal7slotmap2IdE(_M0MP419moonbit_2dcommunity7rabbita8internal7slotmap7SlotMap4readGRP419moonbit_2dcommunity7rabbita8internal6duplix5ScopeE(_M0FP419moonbit_2dcommunity7rabbita8internal6duplix14global__scopes, _p).sub_scopes, self.id);
  }
  _M0MP419moonbit_2dcommunity7rabbita8internal7slotmap7SlotMap4freeGRP419moonbit_2dcommunity7rabbita8internal7runtime5StoreE(_M0FP419moonbit_2dcommunity7rabbita8internal6duplix14global__scopes, self.id);
}
function _M0IP419moonbit_2dcommunity7rabbita8internal6duplix4NodeP419moonbit_2dcommunity7rabbita8internal6duplix10ErasedNode7get__idGRP319moonbit_2dcommunity7rabbita4html4HtmlE(self) {
  return self.id;
}
function _M0IP419moonbit_2dcommunity7rabbita8internal6duplix4NodeP419moonbit_2dcommunity7rabbita8internal6duplix10ErasedNode7get__idGuE(self) {
  return self.id;
}
function _M0IP419moonbit_2dcommunity7rabbita8internal6duplix4NodeP419moonbit_2dcommunity7rabbita8internal6duplix10ErasedNode7get__idGiE(self) {
  return self.id;
}
function _M0IP419moonbit_2dcommunity7rabbita8internal6duplix4NodeP419moonbit_2dcommunity7rabbita8internal6duplix10ErasedNode7get__idGbE(self) {
  return self.id;
}
function _M0IP419moonbit_2dcommunity7rabbita8internal6duplix4NodeP419moonbit_2dcommunity7rabbita8internal6duplix10ErasedNode7get__idGRP419moonbit_2dcommunity7rabbita8internal7runtime5VNodeE(self) {
  return self.id;
}
function _M0IP419moonbit_2dcommunity7rabbita8internal6duplix4NodeP419moonbit_2dcommunity7rabbita8internal6duplix10ErasedNode7get__idGOiE(self) {
  return self.id;
}
function _M0IP419moonbit_2dcommunity7rabbita8internal6duplix4NodeP419moonbit_2dcommunity7rabbita8internal6duplix10ErasedNode7get__idGObE(self) {
  return self.id;
}
function _M0IP419moonbit_2dcommunity7rabbita8internal6duplix4NodeP419moonbit_2dcommunity7rabbita8internal6duplix10ErasedNode7get__idGOuE(self) {
  return self.id;
}
function _M0IP419moonbit_2dcommunity7rabbita8internal6duplix4NodeP419moonbit_2dcommunity7rabbita8internal6duplix10ErasedNode11changed__atGRP319moonbit_2dcommunity7rabbita4html4HtmlE(self) {
  return self.changed_at;
}
function _M0IP419moonbit_2dcommunity7rabbita8internal6duplix4NodeP419moonbit_2dcommunity7rabbita8internal6duplix10ErasedNode11changed__atGuE(self) {
  return self.changed_at;
}
function _M0IP419moonbit_2dcommunity7rabbita8internal6duplix4NodeP419moonbit_2dcommunity7rabbita8internal6duplix10ErasedNode11changed__atGiE(self) {
  return self.changed_at;
}
function _M0IP419moonbit_2dcommunity7rabbita8internal6duplix4NodeP419moonbit_2dcommunity7rabbita8internal6duplix10ErasedNode11changed__atGbE(self) {
  return self.changed_at;
}
function _M0IP419moonbit_2dcommunity7rabbita8internal6duplix4NodeP419moonbit_2dcommunity7rabbita8internal6duplix10ErasedNode11changed__atGRP419moonbit_2dcommunity7rabbita8internal7runtime5VNodeE(self) {
  return self.changed_at;
}
function _M0IP419moonbit_2dcommunity7rabbita8internal6duplix4NodeP419moonbit_2dcommunity7rabbita8internal6duplix10ErasedNode11changed__atGOiE(self) {
  return self.changed_at;
}
function _M0IP419moonbit_2dcommunity7rabbita8internal6duplix4NodeP419moonbit_2dcommunity7rabbita8internal6duplix10ErasedNode11changed__atGObE(self) {
  return self.changed_at;
}
function _M0IP419moonbit_2dcommunity7rabbita8internal6duplix4NodeP419moonbit_2dcommunity7rabbita8internal6duplix10ErasedNode11changed__atGOuE(self) {
  return self.changed_at;
}
function _M0IP419moonbit_2dcommunity7rabbita8internal6duplix4NodeP419moonbit_2dcommunity7rabbita8internal6duplix10ErasedNode6childsGRP319moonbit_2dcommunity7rabbita4html4HtmlE(self) {
  return self.childs;
}
function _M0IP419moonbit_2dcommunity7rabbita8internal6duplix4NodeP419moonbit_2dcommunity7rabbita8internal6duplix10ErasedNode6childsGuE(self) {
  return self.childs;
}
function _M0IP419moonbit_2dcommunity7rabbita8internal6duplix4NodeP419moonbit_2dcommunity7rabbita8internal6duplix10ErasedNode6childsGiE(self) {
  return self.childs;
}
function _M0IP419moonbit_2dcommunity7rabbita8internal6duplix4NodeP419moonbit_2dcommunity7rabbita8internal6duplix10ErasedNode6childsGbE(self) {
  return self.childs;
}
function _M0IP419moonbit_2dcommunity7rabbita8internal6duplix4NodeP419moonbit_2dcommunity7rabbita8internal6duplix10ErasedNode6childsGRP419moonbit_2dcommunity7rabbita8internal7runtime5VNodeE(self) {
  return self.childs;
}
function _M0IP419moonbit_2dcommunity7rabbita8internal6duplix4NodeP419moonbit_2dcommunity7rabbita8internal6duplix10ErasedNode6childsGOiE(self) {
  return self.childs;
}
function _M0IP419moonbit_2dcommunity7rabbita8internal6duplix4NodeP419moonbit_2dcommunity7rabbita8internal6duplix10ErasedNode6childsGObE(self) {
  return self.childs;
}
function _M0IP419moonbit_2dcommunity7rabbita8internal6duplix4NodeP419moonbit_2dcommunity7rabbita8internal6duplix10ErasedNode6childsGOuE(self) {
  return self.childs;
}
function _M0IP419moonbit_2dcommunity7rabbita8internal6duplix4NodeP419moonbit_2dcommunity7rabbita8internal6duplix10ErasedNode11dirty__flagGRP319moonbit_2dcommunity7rabbita4html4HtmlE(self) {
  return self.dirty_flag;
}
function _M0IP419moonbit_2dcommunity7rabbita8internal6duplix4NodeP419moonbit_2dcommunity7rabbita8internal6duplix10ErasedNode11dirty__flagGuE(self) {
  return self.dirty_flag;
}
function _M0IP419moonbit_2dcommunity7rabbita8internal6duplix4NodeP419moonbit_2dcommunity7rabbita8internal6duplix10ErasedNode11dirty__flagGiE(self) {
  return self.dirty_flag;
}
function _M0IP419moonbit_2dcommunity7rabbita8internal6duplix4NodeP419moonbit_2dcommunity7rabbita8internal6duplix10ErasedNode11dirty__flagGbE(self) {
  return self.dirty_flag;
}
function _M0IP419moonbit_2dcommunity7rabbita8internal6duplix4NodeP419moonbit_2dcommunity7rabbita8internal6duplix10ErasedNode11dirty__flagGRP419moonbit_2dcommunity7rabbita8internal7runtime5VNodeE(self) {
  return self.dirty_flag;
}
function _M0IP419moonbit_2dcommunity7rabbita8internal6duplix4NodeP419moonbit_2dcommunity7rabbita8internal6duplix10ErasedNode11dirty__flagGOiE(self) {
  return self.dirty_flag;
}
function _M0IP419moonbit_2dcommunity7rabbita8internal6duplix4NodeP419moonbit_2dcommunity7rabbita8internal6duplix10ErasedNode11dirty__flagGObE(self) {
  return self.dirty_flag;
}
function _M0IP419moonbit_2dcommunity7rabbita8internal6duplix4NodeP419moonbit_2dcommunity7rabbita8internal6duplix10ErasedNode11dirty__flagGOuE(self) {
  return self.dirty_flag;
}
function _M0IP419moonbit_2dcommunity7rabbita8internal6duplix4NodeP419moonbit_2dcommunity7rabbita8internal6duplix10ErasedNode9recomputeGRP319moonbit_2dcommunity7rabbita4html4HtmlE(self) {
  _M0MPC13ref3Ref7protectGRP419moonbit_2dcommunity7rabbita8internal7slotmap2IduE(_M0FP419moonbit_2dcommunity7rabbita8internal6duplix14current__scope, self.scope, () => {
    const _bind = self.value;
    if (_bind === undefined) {
      const _func = self.compute;
      const new_ = _func();
      self.value = new_;
      self.recomputed_at = _M0FP419moonbit_2dcommunity7rabbita8internal6duplix5clock.val;
      self.changed_at = self.recomputed_at;
      self.dirty_flag.dirty = false;
      return;
    } else {
      const _Some = _bind;
      const _old = _Some;
      if (self.dirty_flag.dirty) {
        _L: {
          _L$2: {
            const _bind$2 = self.childs;
            if (_bind$2.length === 0) {
              break _L$2;
            } else {
              const _p = self.childs;
              let _tmp;
              let _p$2;
              _L$3: {
                _L$4: {
                  const _p$3 = _p.length;
                  let _tmp$2 = 0;
                  while (true) {
                    const _p$4 = _tmp$2;
                    if (_p$4 < _p$3) {
                      const _p$5 = _p[_p$4];
                      if (_p$5.method_table.method_2(_p$5.self) > self.recomputed_at) {
                        _p$2 = true;
                        break _L$4;
                      }
                      _tmp$2 = _p$4 + 1 | 0;
                      continue;
                    } else {
                      break;
                    }
                  }
                  _tmp = false;
                  break _L$3;
                }
                _tmp = _p$2;
              }
              if (_tmp) {
                break _L$2;
              }
            }
            break _L;
          }
          const _func = self.compute;
          const new_ = _func();
          self.recomputed_at = _M0FP419moonbit_2dcommunity7rabbita8internal6duplix5clock.val;
          if (!_M0IP319moonbit_2dcommunity7rabbita4html4HtmlPB2Eq5equal(_old, new_)) {
            self.changed_at = self.recomputed_at;
          }
          self.value = new_;
        }
        self.dirty_flag.dirty = false;
        return;
      } else {
        return;
      }
    }
  });
}
function _M0IP419moonbit_2dcommunity7rabbita8internal6duplix4NodeP419moonbit_2dcommunity7rabbita8internal6duplix10ErasedNode9recomputeGuE(self) {
  _M0MPC13ref3Ref7protectGRP419moonbit_2dcommunity7rabbita8internal7slotmap2IduE(_M0FP419moonbit_2dcommunity7rabbita8internal6duplix14current__scope, self.scope, () => {
    const _bind = self.value;
    if (_bind === -1) {
      const _func = self.compute;
      const new_ = _func();
      self.value = new_;
      self.recomputed_at = _M0FP419moonbit_2dcommunity7rabbita8internal6duplix5clock.val;
      self.changed_at = self.recomputed_at;
      self.dirty_flag.dirty = false;
      return;
    } else {
      if (self.dirty_flag.dirty) {
        _L: {
          _L$2: {
            const _bind$2 = self.childs;
            if (_bind$2.length === 0) {
              break _L$2;
            } else {
              const _p = self.childs;
              let _tmp;
              let _p$2;
              _L$3: {
                _L$4: {
                  const _p$3 = _p.length;
                  let _tmp$2 = 0;
                  while (true) {
                    const _p$4 = _tmp$2;
                    if (_p$4 < _p$3) {
                      const _p$5 = _p[_p$4];
                      if (_p$5.method_table.method_2(_p$5.self) > self.recomputed_at) {
                        _p$2 = true;
                        break _L$4;
                      }
                      _tmp$2 = _p$4 + 1 | 0;
                      continue;
                    } else {
                      break;
                    }
                  }
                  _tmp = false;
                  break _L$3;
                }
                _tmp = _p$2;
              }
              if (_tmp) {
                break _L$2;
              }
            }
            break _L;
          }
          const _func = self.compute;
          const new_ = _func();
          self.recomputed_at = _M0FP419moonbit_2dcommunity7rabbita8internal6duplix5clock.val;
          self.value = new_;
        }
        self.dirty_flag.dirty = false;
        return;
      } else {
        return;
      }
    }
  });
}
function _M0IP419moonbit_2dcommunity7rabbita8internal6duplix4NodeP419moonbit_2dcommunity7rabbita8internal6duplix10ErasedNode9recomputeGiE(self) {
  _M0MPC13ref3Ref7protectGRP419moonbit_2dcommunity7rabbita8internal7slotmap2IduE(_M0FP419moonbit_2dcommunity7rabbita8internal6duplix14current__scope, self.scope, () => {
    const _bind = self.value;
    if (_bind === undefined) {
      const _func = self.compute;
      const new_ = _func();
      self.value = new_;
      self.recomputed_at = _M0FP419moonbit_2dcommunity7rabbita8internal6duplix5clock.val;
      self.changed_at = self.recomputed_at;
      self.dirty_flag.dirty = false;
      return;
    } else {
      const _Some = _bind;
      const _old = _Some;
      if (self.dirty_flag.dirty) {
        _L: {
          _L$2: {
            const _bind$2 = self.childs;
            if (_bind$2.length === 0) {
              break _L$2;
            } else {
              const _p = self.childs;
              let _tmp;
              let _p$2;
              _L$3: {
                _L$4: {
                  const _p$3 = _p.length;
                  let _tmp$2 = 0;
                  while (true) {
                    const _p$4 = _tmp$2;
                    if (_p$4 < _p$3) {
                      const _p$5 = _p[_p$4];
                      if (_p$5.method_table.method_2(_p$5.self) > self.recomputed_at) {
                        _p$2 = true;
                        break _L$4;
                      }
                      _tmp$2 = _p$4 + 1 | 0;
                      continue;
                    } else {
                      break;
                    }
                  }
                  _tmp = false;
                  break _L$3;
                }
                _tmp = _p$2;
              }
              if (_tmp) {
                break _L$2;
              }
            }
            break _L;
          }
          const _func = self.compute;
          const new_ = _func();
          self.recomputed_at = _M0FP419moonbit_2dcommunity7rabbita8internal6duplix5clock.val;
          if (!(_old === new_)) {
            self.changed_at = self.recomputed_at;
          }
          self.value = new_;
        }
        self.dirty_flag.dirty = false;
        return;
      } else {
        return;
      }
    }
  });
}
function _M0IP419moonbit_2dcommunity7rabbita8internal6duplix4NodeP419moonbit_2dcommunity7rabbita8internal6duplix10ErasedNode9recomputeGbE(self) {
  _M0MPC13ref3Ref7protectGRP419moonbit_2dcommunity7rabbita8internal7slotmap2IduE(_M0FP419moonbit_2dcommunity7rabbita8internal6duplix14current__scope, self.scope, () => {
    const _bind = self.value;
    if (_bind === -1) {
      const _func = self.compute;
      const new_ = _func();
      self.value = new_;
      self.recomputed_at = _M0FP419moonbit_2dcommunity7rabbita8internal6duplix5clock.val;
      self.changed_at = self.recomputed_at;
      self.dirty_flag.dirty = false;
      return;
    } else {
      const _Some = _bind;
      const _old = _Some;
      if (self.dirty_flag.dirty) {
        _L: {
          _L$2: {
            const _bind$2 = self.childs;
            if (_bind$2.length === 0) {
              break _L$2;
            } else {
              const _p = self.childs;
              let _tmp;
              let _p$2;
              _L$3: {
                _L$4: {
                  const _p$3 = _p.length;
                  let _tmp$2 = 0;
                  while (true) {
                    const _p$4 = _tmp$2;
                    if (_p$4 < _p$3) {
                      const _p$5 = _p[_p$4];
                      if (_p$5.method_table.method_2(_p$5.self) > self.recomputed_at) {
                        _p$2 = true;
                        break _L$4;
                      }
                      _tmp$2 = _p$4 + 1 | 0;
                      continue;
                    } else {
                      break;
                    }
                  }
                  _tmp = false;
                  break _L$3;
                }
                _tmp = _p$2;
              }
              if (_tmp) {
                break _L$2;
              }
            }
            break _L;
          }
          const _func = self.compute;
          const new_ = _func();
          self.recomputed_at = _M0FP419moonbit_2dcommunity7rabbita8internal6duplix5clock.val;
          if (!(_old === new_)) {
            self.changed_at = self.recomputed_at;
          }
          self.value = new_;
        }
        self.dirty_flag.dirty = false;
        return;
      } else {
        return;
      }
    }
  });
}
function _M0IP419moonbit_2dcommunity7rabbita8internal6duplix4NodeP419moonbit_2dcommunity7rabbita8internal6duplix10ErasedNode9recomputeGRP419moonbit_2dcommunity7rabbita8internal7runtime5VNodeE(self) {
  _M0MPC13ref3Ref7protectGRP419moonbit_2dcommunity7rabbita8internal7slotmap2IduE(_M0FP419moonbit_2dcommunity7rabbita8internal6duplix14current__scope, self.scope, () => {
    const _bind = self.value;
    if (_bind === undefined) {
      const _func = self.compute;
      const new_ = _func();
      self.value = new_;
      self.recomputed_at = _M0FP419moonbit_2dcommunity7rabbita8internal6duplix5clock.val;
      self.changed_at = self.recomputed_at;
      self.dirty_flag.dirty = false;
      return;
    } else {
      const _Some = _bind;
      const _old = _Some;
      if (self.dirty_flag.dirty) {
        _L: {
          _L$2: {
            const _bind$2 = self.childs;
            if (_bind$2.length === 0) {
              break _L$2;
            } else {
              const _p = self.childs;
              let _tmp;
              let _p$2;
              _L$3: {
                _L$4: {
                  const _p$3 = _p.length;
                  let _tmp$2 = 0;
                  while (true) {
                    const _p$4 = _tmp$2;
                    if (_p$4 < _p$3) {
                      const _p$5 = _p[_p$4];
                      if (_p$5.method_table.method_2(_p$5.self) > self.recomputed_at) {
                        _p$2 = true;
                        break _L$4;
                      }
                      _tmp$2 = _p$4 + 1 | 0;
                      continue;
                    } else {
                      break;
                    }
                  }
                  _tmp = false;
                  break _L$3;
                }
                _tmp = _p$2;
              }
              if (_tmp) {
                break _L$2;
              }
            }
            break _L;
          }
          const _func = self.compute;
          const new_ = _func();
          self.recomputed_at = _M0FP419moonbit_2dcommunity7rabbita8internal6duplix5clock.val;
          if (!(_old === new_)) {
            self.changed_at = self.recomputed_at;
          }
          self.value = new_;
        }
        self.dirty_flag.dirty = false;
        return;
      } else {
        return;
      }
    }
  });
}
function _M0IP419moonbit_2dcommunity7rabbita8internal6duplix4NodeP419moonbit_2dcommunity7rabbita8internal6duplix10ErasedNode9recomputeGOiE(self) {
  _M0MPC13ref3Ref7protectGRP419moonbit_2dcommunity7rabbita8internal7slotmap2IduE(_M0FP419moonbit_2dcommunity7rabbita8internal6duplix14current__scope, self.scope, () => {
    const _bind = self.value;
    if (_bind.$tag === 0) {
      const _func = self.compute;
      const new_ = _func();
      self.value = new _M0DTPC16option6OptionGOiE4Some(new_);
      self.recomputed_at = _M0FP419moonbit_2dcommunity7rabbita8internal6duplix5clock.val;
      self.changed_at = self.recomputed_at;
      self.dirty_flag.dirty = false;
      return;
    } else {
      const _Some = _bind;
      const _old = _Some._0;
      if (self.dirty_flag.dirty) {
        _L: {
          _L$2: {
            const _bind$2 = self.childs;
            if (_bind$2.length === 0) {
              break _L$2;
            } else {
              const _p = self.childs;
              let _tmp;
              let _p$2;
              _L$3: {
                _L$4: {
                  const _p$3 = _p.length;
                  let _tmp$2 = 0;
                  while (true) {
                    const _p$4 = _tmp$2;
                    if (_p$4 < _p$3) {
                      const _p$5 = _p[_p$4];
                      if (_p$5.method_table.method_2(_p$5.self) > self.recomputed_at) {
                        _p$2 = true;
                        break _L$4;
                      }
                      _tmp$2 = _p$4 + 1 | 0;
                      continue;
                    } else {
                      break;
                    }
                  }
                  _tmp = false;
                  break _L$3;
                }
                _tmp = _p$2;
              }
              if (_tmp) {
                break _L$2;
              }
            }
            break _L;
          }
          const _func = self.compute;
          const new_ = _func();
          self.recomputed_at = _M0FP419moonbit_2dcommunity7rabbita8internal6duplix5clock.val;
          if (!_M0IPC16option6OptionPB2Eq5equalGiE(_old, new_)) {
            self.changed_at = self.recomputed_at;
          }
          self.value = new _M0DTPC16option6OptionGOiE4Some(new_);
        }
        self.dirty_flag.dirty = false;
        return;
      } else {
        return;
      }
    }
  });
}
function _M0IP419moonbit_2dcommunity7rabbita8internal6duplix4NodeP419moonbit_2dcommunity7rabbita8internal6duplix10ErasedNode9recomputeGObE(self) {
  _M0MPC13ref3Ref7protectGRP419moonbit_2dcommunity7rabbita8internal7slotmap2IduE(_M0FP419moonbit_2dcommunity7rabbita8internal6duplix14current__scope, self.scope, () => {
    const _bind = self.value;
    if (_bind.$tag === 0) {
      const _func = self.compute;
      const new_ = _func();
      self.value = new _M0DTPC16option6OptionGObE4Some(new_);
      self.recomputed_at = _M0FP419moonbit_2dcommunity7rabbita8internal6duplix5clock.val;
      self.changed_at = self.recomputed_at;
      self.dirty_flag.dirty = false;
      return;
    } else {
      const _Some = _bind;
      const _old = _Some._0;
      if (self.dirty_flag.dirty) {
        _L: {
          _L$2: {
            const _bind$2 = self.childs;
            if (_bind$2.length === 0) {
              break _L$2;
            } else {
              const _p = self.childs;
              let _tmp;
              let _p$2;
              _L$3: {
                _L$4: {
                  const _p$3 = _p.length;
                  let _tmp$2 = 0;
                  while (true) {
                    const _p$4 = _tmp$2;
                    if (_p$4 < _p$3) {
                      const _p$5 = _p[_p$4];
                      if (_p$5.method_table.method_2(_p$5.self) > self.recomputed_at) {
                        _p$2 = true;
                        break _L$4;
                      }
                      _tmp$2 = _p$4 + 1 | 0;
                      continue;
                    } else {
                      break;
                    }
                  }
                  _tmp = false;
                  break _L$3;
                }
                _tmp = _p$2;
              }
              if (_tmp) {
                break _L$2;
              }
            }
            break _L;
          }
          const _func = self.compute;
          const new_ = _func();
          self.recomputed_at = _M0FP419moonbit_2dcommunity7rabbita8internal6duplix5clock.val;
          if (!_M0IPC16option6OptionPB2Eq5equalGbE(_old, new_)) {
            self.changed_at = self.recomputed_at;
          }
          self.value = new _M0DTPC16option6OptionGObE4Some(new_);
        }
        self.dirty_flag.dirty = false;
        return;
      } else {
        return;
      }
    }
  });
}
function _M0IP419moonbit_2dcommunity7rabbita8internal6duplix4NodeP419moonbit_2dcommunity7rabbita8internal6duplix10ErasedNode9recomputeGOuE(self) {
  _M0MPC13ref3Ref7protectGRP419moonbit_2dcommunity7rabbita8internal7slotmap2IduE(_M0FP419moonbit_2dcommunity7rabbita8internal6duplix14current__scope, self.scope, () => {
    const _bind = self.value;
    if (_bind.$tag === 0) {
      const _func = self.compute;
      const new_ = _func();
      self.value = new _M0DTPC16option6OptionGOuE4Some(new_);
      self.recomputed_at = _M0FP419moonbit_2dcommunity7rabbita8internal6duplix5clock.val;
      self.changed_at = self.recomputed_at;
      self.dirty_flag.dirty = false;
      return;
    } else {
      const _Some = _bind;
      const _old = _Some._0;
      if (self.dirty_flag.dirty) {
        _L: {
          _L$2: {
            const _bind$2 = self.childs;
            if (_bind$2.length === 0) {
              break _L$2;
            } else {
              const _p = self.childs;
              let _tmp;
              let _p$2;
              _L$3: {
                _L$4: {
                  const _p$3 = _p.length;
                  let _tmp$2 = 0;
                  while (true) {
                    const _p$4 = _tmp$2;
                    if (_p$4 < _p$3) {
                      const _p$5 = _p[_p$4];
                      if (_p$5.method_table.method_2(_p$5.self) > self.recomputed_at) {
                        _p$2 = true;
                        break _L$4;
                      }
                      _tmp$2 = _p$4 + 1 | 0;
                      continue;
                    } else {
                      break;
                    }
                  }
                  _tmp = false;
                  break _L$3;
                }
                _tmp = _p$2;
              }
              if (_tmp) {
                break _L$2;
              }
            }
            break _L;
          }
          const _func = self.compute;
          const new_ = _func();
          self.recomputed_at = _M0FP419moonbit_2dcommunity7rabbita8internal6duplix5clock.val;
          if (!_M0IPC16option6OptionPB2Eq5equalGuE(_old, new_)) {
            self.changed_at = self.recomputed_at;
          }
          self.value = new _M0DTPC16option6OptionGOuE4Some(new_);
        }
        self.dirty_flag.dirty = false;
        return;
      } else {
        return;
      }
    }
  });
}
function _M0FP419moonbit_2dcommunity7rabbita8internal6duplix11push__dirty(node) {
  const _bind = [{ _0: node.method_table.method_3(node.self), _1: false }];
  const traverses = _M0MPC15queue5Queue5QueueGURP419moonbit_2dcommunity7rabbita8internal7slotmap2IdRP419moonbit_2dcommunity7rabbita8internal3any3AnyEE(new _M0TPB9ArrayViewGURP419moonbit_2dcommunity7rabbita8internal6duplix9DirtyFlagbEE(_bind, 0, 1));
  while (true) {
    const _bind$2 = _M0MPC15queue5Queue3popGWRP319moonbit_2dcommunity7rabbita3cmd9SchedulerEuE(traverses);
    if (_bind$2 === undefined) {
      return;
    } else {
      const _Some = _bind$2;
      const _x = _Some;
      const _x$2 = _x._0;
      const _expanded = _x._1;
      if (_expanded) {
        _M0MPC15array5Array5clearGRP419moonbit_2dcommunity7rabbita8internal6duplix9DirtyFlagE(_x$2.parents);
      } else {
        if (!_x$2.dirty) {
          _x$2.dirty = true;
          const _bind$3 = _x$2.parents;
          const _bind$4 = _bind$3.length;
          let _tmp = 0;
          while (true) {
            const _ = _tmp;
            if (_ < _bind$4) {
              const p = _bind$3[_];
              _M0MPC15queue5Queue4pushGWRP319moonbit_2dcommunity7rabbita3cmd9SchedulerEuE(traverses, { _0: p, _1: false });
              _tmp = _ + 1 | 0;
              continue;
            } else {
              break;
            }
          }
          _M0MPC15queue5Queue4pushGWRP319moonbit_2dcommunity7rabbita3cmd9SchedulerEuE(traverses, { _0: _x$2, _1: true });
        } else {
          continue;
        }
      }
      continue;
    }
  }
}
function _M0FP419moonbit_2dcommunity7rabbita8internal6duplix5inputGOiE(x) {
  const _bind = _M0FP419moonbit_2dcommunity7rabbita8internal6duplix9get__uuid();
  const _bind$2 = _M0FP419moonbit_2dcommunity7rabbita8internal6duplix14current__scope.val;
  const _bind$3 = _M0DTPC16option6OptionGOiE4None__;
  const _bind$4 = () => x;
  const _bind$5 = [];
  const _bind$6 = [];
  const _bind$7 = _M0FP419moonbit_2dcommunity7rabbita8internal6duplix9get__uuid();
  const _bind$8 = new _M0TP419moonbit_2dcommunity7rabbita8internal6duplix9DirtyFlag(_bind$7, true, _bind$6);
  const node = new _M0TP419moonbit_2dcommunity7rabbita8internal6duplix4NodeGOiE(_bind, _bind$3, _bind$4, 0, 0, _bind$2, _bind$5, _bind$8);
  const write = (x$2) => {
    node.compute = () => x$2;
    _M0FP419moonbit_2dcommunity7rabbita8internal6duplix11push__dirty({ self: node, method_table: _M0FP0141moonbit_2dcommunity_2frabbita_2finternal_2fduplix_2fNode_5bInt_3f_5d_24as_24_40moonbit_2dcommunity_2frabbita_2finternal_2fduplix_2eErasedNode });
  };
  return { _0: node, _1: write };
}
function _M0FP419moonbit_2dcommunity7rabbita8internal6duplix5inputGObE(x) {
  const _bind = _M0FP419moonbit_2dcommunity7rabbita8internal6duplix9get__uuid();
  const _bind$2 = _M0FP419moonbit_2dcommunity7rabbita8internal6duplix14current__scope.val;
  const _bind$3 = _M0DTPC16option6OptionGObE4None__;
  const _bind$4 = () => x;
  const _bind$5 = [];
  const _bind$6 = [];
  const _bind$7 = _M0FP419moonbit_2dcommunity7rabbita8internal6duplix9get__uuid();
  const _bind$8 = new _M0TP419moonbit_2dcommunity7rabbita8internal6duplix9DirtyFlag(_bind$7, true, _bind$6);
  const node = new _M0TP419moonbit_2dcommunity7rabbita8internal6duplix4NodeGObE(_bind, _bind$3, _bind$4, 0, 0, _bind$2, _bind$5, _bind$8);
  const write = (x$2) => {
    node.compute = () => x$2;
    _M0FP419moonbit_2dcommunity7rabbita8internal6duplix11push__dirty({ self: node, method_table: _M0FP0142moonbit_2dcommunity_2frabbita_2finternal_2fduplix_2fNode_5bBool_3f_5d_24as_24_40moonbit_2dcommunity_2frabbita_2finternal_2fduplix_2eErasedNode });
  };
  return { _0: node, _1: write };
}
function _M0FP419moonbit_2dcommunity7rabbita8internal6duplix5inputGOuE(x) {
  const _bind = _M0FP419moonbit_2dcommunity7rabbita8internal6duplix9get__uuid();
  const _bind$2 = _M0FP419moonbit_2dcommunity7rabbita8internal6duplix14current__scope.val;
  const _bind$3 = _M0DTPC16option6OptionGOuE4None__;
  const _bind$4 = () => x;
  const _bind$5 = [];
  const _bind$6 = [];
  const _bind$7 = _M0FP419moonbit_2dcommunity7rabbita8internal6duplix9get__uuid();
  const _bind$8 = new _M0TP419moonbit_2dcommunity7rabbita8internal6duplix9DirtyFlag(_bind$7, true, _bind$6);
  const node = new _M0TP419moonbit_2dcommunity7rabbita8internal6duplix4NodeGOuE(_bind, _bind$3, _bind$4, 0, 0, _bind$2, _bind$5, _bind$8);
  const write = (x$2) => {
    node.compute = () => x$2;
    _M0FP419moonbit_2dcommunity7rabbita8internal6duplix11push__dirty({ self: node, method_table: _M0FP0142moonbit_2dcommunity_2frabbita_2finternal_2fduplix_2fNode_5bUnit_3f_5d_24as_24_40moonbit_2dcommunity_2frabbita_2finternal_2fduplix_2eErasedNode });
  };
  return { _0: node, _1: write };
}
function _M0MP419moonbit_2dcommunity7rabbita8internal6duplix4Node3mapGRP319moonbit_2dcommunity7rabbita4html4HtmlRP419moonbit_2dcommunity7rabbita8internal7runtime5VNodeE(a, f) {
  const _bind = [];
  const _bind$2 = _M0FP419moonbit_2dcommunity7rabbita8internal6duplix9get__uuid();
  const dirty_b = new _M0TP419moonbit_2dcommunity7rabbita8internal6duplix9DirtyFlag(_bind$2, true, _bind);
  const _bind$3 = _M0FP419moonbit_2dcommunity7rabbita8internal6duplix9get__uuid();
  const _bind$4 = _M0FP419moonbit_2dcommunity7rabbita8internal6duplix14current__scope.val;
  const _bind$5 = undefined;
  const _bind$6 = () => {
    const _p = a.value;
    let _tmp;
    if (_p === undefined) {
      _tmp = $panic();
    } else {
      const _p$2 = _p;
      _tmp = _p$2;
    }
    return f(_tmp);
  };
  const _bind$7 = [{ self: a, method_table: _M0FP0178moonbit_2dcommunity_2frabbita_2finternal_2fduplix_2fNode_5bmoonbit_2dcommunity_2frabbita_2fhtml_2fHtml_5d_24as_24_40moonbit_2dcommunity_2frabbita_2finternal_2fduplix_2eErasedNode }];
  return new _M0TP419moonbit_2dcommunity7rabbita8internal6duplix4NodeGRP419moonbit_2dcommunity7rabbita8internal7runtime5VNodeE(_bind$3, _bind$5, _bind$6, 0, 0, _bind$4, _bind$7, dirty_b);
}
function _M0MP419moonbit_2dcommunity7rabbita8internal6duplix4Node3mapGOiiE(a, f) {
  const _bind = [];
  const _bind$2 = _M0FP419moonbit_2dcommunity7rabbita8internal6duplix9get__uuid();
  const dirty_b = new _M0TP419moonbit_2dcommunity7rabbita8internal6duplix9DirtyFlag(_bind$2, true, _bind);
  const _bind$3 = _M0FP419moonbit_2dcommunity7rabbita8internal6duplix9get__uuid();
  const _bind$4 = _M0FP419moonbit_2dcommunity7rabbita8internal6duplix14current__scope.val;
  const _bind$5 = undefined;
  const _bind$6 = () => f(_M0MPC16option6Option6unwrapGOiE(a.value));
  const _bind$7 = [{ self: a, method_table: _M0FP0141moonbit_2dcommunity_2frabbita_2finternal_2fduplix_2fNode_5bInt_3f_5d_24as_24_40moonbit_2dcommunity_2frabbita_2finternal_2fduplix_2eErasedNode }];
  return new _M0TP419moonbit_2dcommunity7rabbita8internal6duplix4NodeGiE(_bind$3, _bind$5, _bind$6, 0, 0, _bind$4, _bind$7, dirty_b);
}
function _M0MP419moonbit_2dcommunity7rabbita8internal6duplix4Node3mapGObbE(a, f) {
  const _bind = [];
  const _bind$2 = _M0FP419moonbit_2dcommunity7rabbita8internal6duplix9get__uuid();
  const dirty_b = new _M0TP419moonbit_2dcommunity7rabbita8internal6duplix9DirtyFlag(_bind$2, true, _bind);
  const _bind$3 = _M0FP419moonbit_2dcommunity7rabbita8internal6duplix9get__uuid();
  const _bind$4 = _M0FP419moonbit_2dcommunity7rabbita8internal6duplix14current__scope.val;
  const _bind$5 = -1;
  const _bind$6 = () => f(_M0MPC16option6Option6unwrapGObE(a.value));
  const _bind$7 = [{ self: a, method_table: _M0FP0142moonbit_2dcommunity_2frabbita_2finternal_2fduplix_2fNode_5bBool_3f_5d_24as_24_40moonbit_2dcommunity_2frabbita_2finternal_2fduplix_2eErasedNode }];
  return new _M0TP419moonbit_2dcommunity7rabbita8internal6duplix4NodeGbE(_bind$3, _bind$5, _bind$6, 0, 0, _bind$4, _bind$7, dirty_b);
}
function _M0MP419moonbit_2dcommunity7rabbita8internal6duplix4Node3mapGOuuE(a, f) {
  const _bind = [];
  const _bind$2 = _M0FP419moonbit_2dcommunity7rabbita8internal6duplix9get__uuid();
  const dirty_b = new _M0TP419moonbit_2dcommunity7rabbita8internal6duplix9DirtyFlag(_bind$2, true, _bind);
  const _bind$3 = _M0FP419moonbit_2dcommunity7rabbita8internal6duplix9get__uuid();
  const _bind$4 = _M0FP419moonbit_2dcommunity7rabbita8internal6duplix14current__scope.val;
  const _bind$5 = -1;
  const _bind$6 = () => {
    f(_M0MPC16option6Option6unwrapGOuE(a.value));
  };
  const _bind$7 = [{ self: a, method_table: _M0FP0142moonbit_2dcommunity_2frabbita_2finternal_2fduplix_2fNode_5bUnit_3f_5d_24as_24_40moonbit_2dcommunity_2frabbita_2finternal_2fduplix_2eErasedNode }];
  return new _M0TP419moonbit_2dcommunity7rabbita8internal6duplix4NodeGuE(_bind$3, _bind$5, _bind$6, 0, 0, _bind$4, _bind$7, dirty_b);
}
function _M0FP419moonbit_2dcommunity7rabbita8internal6duplix11pull__value(node) {
  const stack = [{ _0: node, _1: false }];
  const _bind = [];
  const seen = _M0MPC13set3Set3SetGiE(new _M0TPB9ArrayViewGiE(_bind, 0, 0), undefined);
  const recomputes = [];
  while (true) {
    const _bind$2 = _M0MPC15array5Array3popGURP419moonbit_2dcommunity7rabbita8internal6duplix10ErasedNodebEE(stack);
    if (_bind$2 === undefined) {
      break;
    } else {
      const _Some = _bind$2;
      const _x = _Some;
      const _x$2 = _x._0;
      const _expanded = _x._1;
      if (_x$2.method_table.method_3(_x$2.self).dirty) {
        const id = _x$2.method_table.method_0(_x$2.self);
        if (_expanded) {
          _M0MPC15array5Array4pushGRP419moonbit_2dcommunity7rabbita8internal7runtime5INodeE(recomputes, _x$2);
        } else {
          if (!_M0MPC13set3Set8containsGiE(seen, id)) {
            _M0MPC13set3Set3addGiE(seen, id);
            _M0MPC15array5Array4pushGRP419moonbit_2dcommunity7rabbita8internal7runtime5INodeE(stack, { _0: _x$2, _1: true });
            const _bind$3 = _x$2.method_table.method_1(_x$2.self);
            const _bind$4 = _bind$3.length;
            let _tmp = 0;
            while (true) {
              const _ = _tmp;
              if (_ < _bind$4) {
                const child = _bind$3[_];
                if (child.method_table.method_3(child.self).dirty) {
                  _M0MPC15array5Array4pushGRP419moonbit_2dcommunity7rabbita8internal7runtime5INodeE(stack, { _0: child, _1: false });
                }
                _tmp = _ + 1 | 0;
                continue;
              } else {
                break;
              }
            }
          }
        }
      } else {
        continue;
      }
      continue;
    }
  }
  const _bind$2 = recomputes.length;
  let _tmp = 0;
  while (true) {
    const _ = _tmp;
    if (_ < _bind$2) {
      const node$2 = recomputes[_];
      const _bind$3 = node$2.method_table.method_1(node$2.self);
      const _bind$4 = _bind$3.length;
      let _tmp$2 = 0;
      while (true) {
        const _$2 = _tmp$2;
        if (_$2 < _bind$4) {
          const child = _bind$3[_$2];
          const _p = child.method_table.method_3(child.self).parents;
          let _tmp$3;
          let _p$2;
          _L: {
            _L$2: {
              const _p$3 = _p.length;
              let _tmp$4 = 0;
              while (true) {
                const _p$4 = _tmp$4;
                if (_p$4 < _p$3) {
                  const _p$5 = _p[_p$4];
                  if (!(_p$5.id !== node$2.method_table.method_3(node$2.self).id)) {
                    _p$2 = false;
                    break _L$2;
                  }
                  _tmp$4 = _p$4 + 1 | 0;
                  continue;
                } else {
                  break;
                }
              }
              _tmp$3 = true;
              break _L;
            }
            _tmp$3 = _p$2;
          }
          if (_tmp$3) {
            _M0MPC15array5Array4pushGRP419moonbit_2dcommunity7rabbita8internal7runtime5INodeE(child.method_table.method_3(child.self).parents, node$2.method_table.method_3(node$2.self));
          }
          _tmp$2 = _$2 + 1 | 0;
          continue;
        } else {
          break;
        }
      }
      node$2.method_table.method_4(node$2.self);
      _tmp = _ + 1 | 0;
      continue;
    } else {
      return;
    }
  }
}
function _M0MP419moonbit_2dcommunity7rabbita8internal6duplix4Node14internal__readGRP419moonbit_2dcommunity7rabbita8internal7runtime5VNodeE(a) {
  _M0FP419moonbit_2dcommunity7rabbita8internal6duplix11pull__value({ self: a, method_table: _M0FP0193moonbit_2dcommunity_2frabbita_2finternal_2fduplix_2fNode_5bmoonbit_2dcommunity_2frabbita_2finternal_2fruntime_2fVNode_5d_24as_24_40moonbit_2dcommunity_2frabbita_2finternal_2fduplix_2eErasedNode });
  const _p = a.value;
  if (_p === undefined) {
    return $panic();
  } else {
    const _p$2 = _p;
    return _p$2;
  }
}
function _M0MP419moonbit_2dcommunity7rabbita8internal6duplix4Node14internal__readGOiE(a) {
  _M0FP419moonbit_2dcommunity7rabbita8internal6duplix11pull__value({ self: a, method_table: _M0FP0141moonbit_2dcommunity_2frabbita_2finternal_2fduplix_2fNode_5bInt_3f_5d_24as_24_40moonbit_2dcommunity_2frabbita_2finternal_2fduplix_2eErasedNode });
  return _M0MPC16option6Option6unwrapGOiE(a.value);
}
function _M0MP419moonbit_2dcommunity7rabbita8internal6duplix4Node14internal__readGObE(a) {
  _M0FP419moonbit_2dcommunity7rabbita8internal6duplix11pull__value({ self: a, method_table: _M0FP0142moonbit_2dcommunity_2frabbita_2finternal_2fduplix_2fNode_5bBool_3f_5d_24as_24_40moonbit_2dcommunity_2frabbita_2finternal_2fduplix_2eErasedNode });
  return _M0MPC16option6Option6unwrapGObE(a.value);
}
function _M0MP419moonbit_2dcommunity7rabbita8internal6duplix4Node14internal__readGuE(a) {
  _M0FP419moonbit_2dcommunity7rabbita8internal6duplix11pull__value({ self: a, method_table: _M0FP0139moonbit_2dcommunity_2frabbita_2finternal_2fduplix_2fNode_5bUnit_5d_24as_24_40moonbit_2dcommunity_2frabbita_2finternal_2fduplix_2eErasedNode });
  const _p = a.value;
  if (_p === -1) {
    $panic();
    return;
  } else {
    return;
  }
}
function _M0MP419moonbit_2dcommunity7rabbita8internal6duplix4Node14internal__readGOuE(a) {
  _M0FP419moonbit_2dcommunity7rabbita8internal6duplix11pull__value({ self: a, method_table: _M0FP0142moonbit_2dcommunity_2frabbita_2finternal_2fduplix_2fNode_5bUnit_3f_5d_24as_24_40moonbit_2dcommunity_2frabbita_2finternal_2fduplix_2eErasedNode });
  return _M0MPC16option6Option6unwrapGOuE(a.value);
}
function _M0MP419moonbit_2dcommunity7rabbita8internal6duplix4Node4bindGbuE(a, f) {
  const b1_dirty_sub = new _M0TPB8MutLocalGORP419moonbit_2dcommunity7rabbita8internal6duplix9DirtyFlagE(undefined);
  const output_childs = [];
  const _bind = [];
  const _bind$2 = _M0FP419moonbit_2dcommunity7rabbita8internal6duplix9get__uuid();
  const output_dirty_flag = new _M0TP419moonbit_2dcommunity7rabbita8internal6duplix9DirtyFlag(_bind$2, true, _bind);
  const compute = () => {
    const _p = a.value;
    const b2 = f(_p === -1 ? $panic() : _p);
    const _bind$3 = b1_dirty_sub.val;
    let branch_changed;
    if (_bind$3 === undefined) {
      branch_changed = true;
    } else {
      const _bind$4 = b1_dirty_sub.val;
      if (_bind$4 === undefined) {
        branch_changed = false;
      } else {
        const _Some = _bind$4;
        const _prev = _Some;
        branch_changed = _prev.id !== b2.dirty_flag.id;
      }
    }
    if (branch_changed) {
      const _bind$4 = b1_dirty_sub.val;
      if (_bind$4 === undefined) {
      } else {
        const _Some = _bind$4;
        const _b1 = _Some;
        if (_b1.id !== a.dirty_flag.id) {
          const _bind$5 = _M0MPC15array5Array6searchGRP419moonbit_2dcommunity7rabbita8internal6duplix9DirtyFlagE(_b1.parents, output_dirty_flag);
          if (_bind$5 === undefined) {
          } else {
            const _Some$2 = _bind$5;
            const _i = _Some$2;
            _M0MPC15array5Array6removeGRP419moonbit_2dcommunity7rabbita8internal6duplix9DirtyFlagE(_b1.parents, _i);
          }
          const _p$2 = output_childs.length;
          let _bind$6;
          let _tmp = 0;
          while (true) {
            const _p$3 = _tmp;
            if (_p$3 < _p$2) {
              const _p$4 = output_childs[_p$3];
              if (_p$4.method_table.method_3(_p$4.self).id === _b1.id) {
                _bind$6 = _p$3;
                break;
              }
              _tmp = _p$3 + 1 | 0;
              continue;
            } else {
              _bind$6 = undefined;
              break;
            }
          }
          if (_bind$6 === undefined) {
          } else {
            const _Some$2 = _bind$6;
            const _i = _Some$2;
            _M0MPC15array5Array6removeGRP419moonbit_2dcommunity7rabbita8internal6duplix9DirtyFlagE(output_childs, _i);
          }
        }
      }
      if (b2.dirty_flag.id !== a.dirty_flag.id) {
        _M0MPC15array5Array4pushGRP419moonbit_2dcommunity7rabbita8internal7runtime5INodeE(b2.dirty_flag.parents, output_dirty_flag);
        _M0MPC15array5Array4pushGRP419moonbit_2dcommunity7rabbita8internal7runtime5INodeE(output_childs, { self: b2, method_table: _M0FP0139moonbit_2dcommunity_2frabbita_2finternal_2fduplix_2fNode_5bUnit_5d_24as_24_40moonbit_2dcommunity_2frabbita_2finternal_2fduplix_2eErasedNode });
      }
      b1_dirty_sub.val = b2.dirty_flag;
    }
    _M0MP419moonbit_2dcommunity7rabbita8internal6duplix4Node14internal__readGuE(b2);
  };
  _M0MPC15array5Array4pushGRP419moonbit_2dcommunity7rabbita8internal7runtime5INodeE(output_childs, { self: a, method_table: _M0FP0139moonbit_2dcommunity_2frabbita_2finternal_2fduplix_2fNode_5bBool_5d_24as_24_40moonbit_2dcommunity_2frabbita_2finternal_2fduplix_2eErasedNode });
  const _bind$3 = _M0FP419moonbit_2dcommunity7rabbita8internal6duplix9get__uuid();
  const _bind$4 = _M0FP419moonbit_2dcommunity7rabbita8internal6duplix14current__scope.val;
  const _bind$5 = -1;
  return new _M0TP419moonbit_2dcommunity7rabbita8internal6duplix4NodeGuE(_bind$3, _bind$5, compute, 0, 0, _bind$4, output_childs, output_dirty_flag);
}
function _M0MP419moonbit_2dcommunity7rabbita8internal6duplix4Node10switch__byGbuE(a, f, by) {
  const active = new _M0TPB8MutLocalGOUsRP419moonbit_2dcommunity7rabbita8internal6duplix4NodeGuERP419moonbit_2dcommunity7rabbita8internal7slotmap2IdEE(undefined);
  return _M0MP419moonbit_2dcommunity7rabbita8internal6duplix4Node4bindGbuE(a, (value) => {
    const tag = by(value);
    let value$2;
    _L: {
      const _bind = active.val;
      if (_bind === undefined) {
        value$2 = value;
        break _L;
      } else {
        const _Some = _bind;
        const _x = _Some;
        const _old_tag = _x._0;
        const _node = _x._1;
        const _scope = _x._2;
        if (tag === _old_tag) {
          return _node;
        } else {
          const _bind$2 = _M0MP419moonbit_2dcommunity7rabbita8internal7slotmap7SlotMap3getGRP419moonbit_2dcommunity7rabbita8internal7runtime5StoreE(_M0FP419moonbit_2dcommunity7rabbita8internal6duplix14global__scopes, _scope);
          if (_bind$2 === undefined) {
          } else {
            const _Some$2 = _bind$2;
            const _scope$2 = _Some$2;
            _M0MP419moonbit_2dcommunity7rabbita8internal6duplix5Scope7dispose(_scope$2);
          }
          value$2 = value;
          break _L;
        }
      }
    }
    return _M0FP419moonbit_2dcommunity7rabbita8internal6duplix11with__scopeGRP419moonbit_2dcommunity7rabbita8internal6duplix4NodeGuEE((scope) => {
      const node = _M0MPC13ref3Ref7protectGRP419moonbit_2dcommunity7rabbita8internal7slotmap2IdRP419moonbit_2dcommunity7rabbita8internal6duplix4NodeGuEE(_M0FP419moonbit_2dcommunity7rabbita8internal6duplix14current__scope, scope, () => f(value$2));
      active.val = { _0: tag, _1: node, _2: scope };
      return node;
    });
  });
}
function _M0MP419moonbit_2dcommunity7rabbita8internal6duplix4Node4readGRP419moonbit_2dcommunity7rabbita8internal7runtime5VNodeE(a) {
  _M0FP419moonbit_2dcommunity7rabbita8internal6duplix5clock.val = _M0FP419moonbit_2dcommunity7rabbita8internal6duplix5clock.val + 1;
  return _M0MP419moonbit_2dcommunity7rabbita8internal6duplix4Node14internal__readGRP419moonbit_2dcommunity7rabbita8internal7runtime5VNodeE(a);
}
function _M0MP419moonbit_2dcommunity7rabbita8internal6duplix4Node4readGOiE(a) {
  _M0FP419moonbit_2dcommunity7rabbita8internal6duplix5clock.val = _M0FP419moonbit_2dcommunity7rabbita8internal6duplix5clock.val + 1;
  return _M0MP419moonbit_2dcommunity7rabbita8internal6duplix4Node14internal__readGOiE(a);
}
function _M0MP419moonbit_2dcommunity7rabbita8internal6duplix4Node4readGObE(a) {
  _M0FP419moonbit_2dcommunity7rabbita8internal6duplix5clock.val = _M0FP419moonbit_2dcommunity7rabbita8internal6duplix5clock.val + 1;
  return _M0MP419moonbit_2dcommunity7rabbita8internal6duplix4Node14internal__readGObE(a);
}
function _M0MP419moonbit_2dcommunity7rabbita8internal6duplix4Node4readGOuE(a) {
  _M0FP419moonbit_2dcommunity7rabbita8internal6duplix5clock.val = _M0FP419moonbit_2dcommunity7rabbita8internal6duplix5clock.val + 1;
  return _M0MP419moonbit_2dcommunity7rabbita8internal6duplix4Node14internal__readGOuE(a);
}
function _M0MP319moonbit_2dcommunity7rabbita3sub3Sub7to__map(self, _discard_, filter_global) {
  const _bind = [];
  const map = _M0MPB3Map3MapGsURPC15error5ErrorRP319moonbit_2dcommunity7rabbita3sub9SubLoaderEE(new _M0TPB9ArrayViewGUsURPC15error5ErrorRP319moonbit_2dcommunity7rabbita3sub9SubLoaderEEE(_bind, 0, 0), undefined);
  const go = (s) => {
    let h;
    let k;
    let v;
    _L: {
      if (s.$tag === 0) {
        const _Custom = s;
        const _x = _Custom._0;
        const _x$2 = _Custom._1;
        if (_x$2 === 1) {
          const _x$3 = _Custom._2;
          const _x$4 = _Custom._3;
          if (filter_global) {
            return;
          } else {
            h = _x$3;
            k = _x;
            v = _x$4;
            break _L;
          }
        } else {
          const _h = _Custom._2;
          const _v = _Custom._3;
          h = _h;
          k = _x;
          v = _v;
          break _L;
        }
      } else {
        const _Batch = s;
        const _xs = _Batch._0;
        const _p = _xs.length;
        let _tmp = 0;
        while (true) {
          const _p$2 = _tmp;
          if (_p$2 < _p) {
            const _p$3 = _xs[_p$2];
            go(_p$3);
            _tmp = _p$2 + 1 | 0;
            continue;
          } else {
            return;
          }
        }
      }
    }
    _M0MPB3Map3setGsURPC15error5ErrorRP319moonbit_2dcommunity7rabbita3sub9SubLoaderEE(map, k, { _0: h, _1: v });
  };
  go(self);
  return map;
}
function _M0IP319moonbit_2dcommunity7rabbita7variant7VariantPB2Eq5equal(_x_35, _x_36) {
  switch (_x_35.$tag) {
    case 0: {
      const _Boolean = _x_35;
      const _$42$x0_37 = _Boolean._0;
      if (_x_36.$tag === 0) {
        const _Boolean$2 = _x_36;
        const _$42$y0_38 = _Boolean$2._0;
        return _$42$x0_37 === _$42$y0_38;
      } else {
        return false;
      }
    }
    case 1: {
      const _Integer = _x_35;
      const _$42$x0_39 = _Integer._0;
      if (_x_36.$tag === 1) {
        const _Integer$2 = _x_36;
        const _$42$y0_40 = _Integer$2._0;
        return _$42$x0_39 === _$42$y0_40;
      } else {
        return false;
      }
    }
    case 2: {
      const _Floating = _x_35;
      const _$42$x0_41 = _Floating._0;
      if (_x_36.$tag === 2) {
        const _Floating$2 = _x_36;
        const _$42$y0_42 = _Floating$2._0;
        return _$42$x0_41 === _$42$y0_42;
      } else {
        return false;
      }
    }
    default: {
      const _String = _x_35;
      const _$42$x0_43 = _String._0;
      if (_x_36.$tag === 3) {
        const _String$2 = _x_36;
        const _$42$y0_44 = _String$2._0;
        return _$42$x0_43 === _$42$y0_44;
      } else {
        return false;
      }
    }
  }
}
function _M0MP419moonbit_2dcommunity7rabbita8internal7runtime5INode5start(s) {
  let _tmp = s;
  _L: while (true) {
    const s$2 = _tmp;
    let e;
    _L$2: {
      switch (s$2.$tag) {
        case 0: {
          const _Elem = s$2;
          const _e = _Elem._4;
          e = _e;
          break _L$2;
        }
        case 1: {
          const _Text = s$2;
          const _e$2 = _Text._1;
          e = _e$2;
          break _L$2;
        }
        case 3: {
          const _Thunk = s$2;
          const _n = _Thunk._1;
          _tmp = _n;
          continue _L;
        }
        default: {
          const _Frag = s$2;
          const _s = _Frag._1;
          return _M0IP016_24default__implP319moonbit_2dcommunity7rabbita3dom6IsNode8as__nodeGRP319moonbit_2dcommunity7rabbita3dom7CommentE(_s);
        }
      }
    }
    return _M0IP016_24default__implP319moonbit_2dcommunity7rabbita3dom6IsNode8as__nodeGRP319moonbit_2dcommunity7rabbita3dom7ElementE(e);
  }
}
function _M0MP419moonbit_2dcommunity7rabbita8internal7runtime5INode3end(s) {
  let _tmp = s;
  _L: while (true) {
    const s$2 = _tmp;
    let e;
    _L$2: {
      switch (s$2.$tag) {
        case 0: {
          const _Elem = s$2;
          const _e = _Elem._4;
          e = _e;
          break _L$2;
        }
        case 1: {
          const _Text = s$2;
          const _e$2 = _Text._1;
          e = _e$2;
          break _L$2;
        }
        case 3: {
          const _Thunk = s$2;
          const _n = _Thunk._1;
          _tmp = _n;
          continue _L;
        }
        default: {
          const _Frag = s$2;
          const _e$3 = _Frag._2;
          return _M0IP016_24default__implP319moonbit_2dcommunity7rabbita3dom6IsNode8as__nodeGRP319moonbit_2dcommunity7rabbita3dom7CommentE(_e$3);
        }
      }
    }
    return _M0IP016_24default__implP319moonbit_2dcommunity7rabbita3dom6IsNode8as__nodeGRP319moonbit_2dcommunity7rabbita3dom7ElementE(e);
  }
}
function _M0MP419moonbit_2dcommunity7rabbita8internal7runtime5INode6remove(self, sandbox, parent) {
  let _tmp = self;
  _L: while (true) {
    const self$2 = _tmp;
    let e;
    _L$2: {
      switch (self$2.$tag) {
        case 0: {
          const _Elem = self$2;
          const _e = _Elem._4;
          e = _e;
          break _L$2;
        }
        case 1: {
          const _Text = self$2;
          const _e$2 = _Text._1;
          e = _e$2;
          break _L$2;
        }
        case 3: {
          const _Thunk = self$2;
          const _inode = _Thunk._1;
          _tmp = _inode;
          continue _L;
        }
        default: {
          const _Frag = self$2;
          const _s = _Frag._1;
          const _e$3 = _Frag._2;
          const s = _M0IP016_24default__implP319moonbit_2dcommunity7rabbita3dom6IsNode8as__nodeGRP319moonbit_2dcommunity7rabbita3dom7CommentE(_s);
          const e$2 = _M0IP016_24default__implP319moonbit_2dcommunity7rabbita3dom6IsNode8as__nodeGRP319moonbit_2dcommunity7rabbita3dom7CommentE(_e$3);
          while (true) {
            const _bind = _M0MP319moonbit_2dcommunity7rabbita2js8Nullable10to__optionGRP319moonbit_2dcommunity7rabbita3dom10MouseEventE(_M0IP016_24default__implP319moonbit_2dcommunity7rabbita3dom6IsNode18get__next__siblingGRP319moonbit_2dcommunity7rabbita3dom4NodeE(s));
            if (_bind.$tag === 1) {
              const _Some = _bind;
              const _n = _Some._0;
              if (!_M0IP016_24default__implP319moonbit_2dcommunity7rabbita3dom6IsNode14is__same__nodeGRP319moonbit_2dcommunity7rabbita3dom4NodeE(_n, e$2)) {
                _M0IP016_24default__implP319moonbit_2dcommunity7rabbita3dom6IsNode13remove__childGRP319moonbit_2dcommunity7rabbita3dom4NodeE(parent, _n);
                continue;
              } else {
                break;
              }
            } else {
              break;
            }
          }
          _M0IP016_24default__implP319moonbit_2dcommunity7rabbita3dom6IsNode13remove__childGRP319moonbit_2dcommunity7rabbita3dom4NodeE(parent, s);
          _M0IP016_24default__implP319moonbit_2dcommunity7rabbita3dom6IsNode13remove__childGRP319moonbit_2dcommunity7rabbita3dom4NodeE(parent, e$2);
          return;
        }
      }
    }
    _M0IP016_24default__implP319moonbit_2dcommunity7rabbita3dom6IsNode13remove__childGRP319moonbit_2dcommunity7rabbita3dom4NodeE(parent, _M0IP016_24default__implP319moonbit_2dcommunity7rabbita3dom6IsNode8as__nodeGRP319moonbit_2dcommunity7rabbita3dom7ElementE(e));
    return;
  }
}
function _M0FP419moonbit_2dcommunity7rabbita8internal7runtime8nullableGRP319moonbit_2dcommunity7rabbita3dom4NodeE(x) {
  return _M0MP319moonbit_2dcommunity7rabbita2js8Nullable12from__optionGRP319moonbit_2dcommunity7rabbita3dom4NodeE(new _M0DTPC16option6OptionGRP319moonbit_2dcommunity7rabbita3dom4NodeE4Some(x));
}
function _M0MP419moonbit_2dcommunity7rabbita8internal7runtime5INode8relocate(self, parent, before) {
  let _tmp = self;
  _L: while (true) {
    const self$2 = _tmp;
    let e;
    _L$2: {
      switch (self$2.$tag) {
        case 0: {
          const _Elem = self$2;
          const _e = _Elem._4;
          e = _e;
          break _L$2;
        }
        case 1: {
          const _Text = self$2;
          const _e$2 = _Text._1;
          e = _e$2;
          break _L$2;
        }
        case 3: {
          const _Thunk = self$2;
          const _inode = _Thunk._1;
          _tmp = _inode;
          continue _L;
        }
        default: {
          const _Frag = self$2;
          const _s = _Frag._1;
          const _e$3 = _Frag._2;
          const _bind = _M0MP319moonbit_2dcommunity7rabbita2js8Nullable10to__optionGRP319moonbit_2dcommunity7rabbita3dom10MouseEventE(_M0IP016_24default__implP319moonbit_2dcommunity7rabbita3dom6IsNode17get__parent__nodeGRP319moonbit_2dcommunity7rabbita3dom7CommentE(_s));
          if (_bind.$tag === 1) {
            const _Some = _bind;
            const _a = _Some._0;
            const _bind$2 = _M0MP319moonbit_2dcommunity7rabbita2js8Nullable10to__optionGRP319moonbit_2dcommunity7rabbita3dom10MouseEventE(_M0IP016_24default__implP319moonbit_2dcommunity7rabbita3dom6IsNode17get__parent__nodeGRP319moonbit_2dcommunity7rabbita3dom7CommentE(_e$3));
            if (_bind$2.$tag === 1) {
              const _Some$2 = _bind$2;
              const _b = _Some$2._0;
              if (_M0IP016_24default__implP319moonbit_2dcommunity7rabbita3dom6IsNode14is__same__nodeGRP319moonbit_2dcommunity7rabbita3dom4NodeE(_a, _b)) {
              } else {
                $panic();
              }
            } else {
              $panic();
            }
          } else {
            $panic();
          }
          const s = _M0IP016_24default__implP319moonbit_2dcommunity7rabbita3dom6IsNode8as__nodeGRP319moonbit_2dcommunity7rabbita3dom7CommentE(_s);
          const e$2 = _M0IP016_24default__implP319moonbit_2dcommunity7rabbita3dom6IsNode8as__nodeGRP319moonbit_2dcommunity7rabbita3dom7CommentE(_e$3);
          let anchor = before;
          while (true) {
            const _bind$2 = _M0MP319moonbit_2dcommunity7rabbita2js8Nullable10to__optionGRP319moonbit_2dcommunity7rabbita3dom10MouseEventE(_M0IP016_24default__implP319moonbit_2dcommunity7rabbita3dom6IsNode22get__previous__siblingGRP319moonbit_2dcommunity7rabbita3dom4NodeE(e$2));
            if (_bind$2.$tag === 1) {
              const _Some = _bind$2;
              const _n = _Some._0;
              if (!_M0IP016_24default__implP319moonbit_2dcommunity7rabbita3dom6IsNode14is__same__nodeGRP319moonbit_2dcommunity7rabbita3dom4NodeE(_n, s)) {
                _M0IP016_24default__implP319moonbit_2dcommunity7rabbita3dom6IsNode14insert__beforeGRP319moonbit_2dcommunity7rabbita3dom4NodeE(parent, _n, anchor);
                anchor = _M0FP419moonbit_2dcommunity7rabbita8internal7runtime8nullableGRP319moonbit_2dcommunity7rabbita3dom4NodeE(_n);
                continue;
              } else {
                break;
              }
            } else {
              break;
            }
          }
          _M0IP016_24default__implP319moonbit_2dcommunity7rabbita3dom6IsNode14insert__beforeGRP319moonbit_2dcommunity7rabbita3dom4NodeE(parent, e$2, before);
          _M0IP016_24default__implP319moonbit_2dcommunity7rabbita3dom6IsNode14insert__beforeGRP319moonbit_2dcommunity7rabbita3dom4NodeE(parent, s, anchor);
          return;
        }
      }
    }
    _M0IP016_24default__implP319moonbit_2dcommunity7rabbita3dom6IsNode14insert__beforeGRP319moonbit_2dcommunity7rabbita3dom4NodeE(parent, _M0IP016_24default__implP319moonbit_2dcommunity7rabbita3dom6IsNode8as__nodeGRP319moonbit_2dcommunity7rabbita3dom7ElementE(e), before);
    return;
  }
}
function _M0FP419moonbit_2dcommunity7rabbita8internal7runtime23is__html__void__element(tag) {
  switch (tag) {
    case "area": {
      return true;
    }
    case "base": {
      return true;
    }
    case "br": {
      return true;
    }
    case "col": {
      return true;
    }
    case "embed": {
      return true;
    }
    case "hr": {
      return true;
    }
    case "img": {
      return true;
    }
    case "input": {
      return true;
    }
    case "link": {
      return true;
    }
    case "meta": {
      return true;
    }
    case "param": {
      return true;
    }
    case "source": {
      return true;
    }
    case "track": {
      return true;
    }
    case "wbr": {
      return true;
    }
    default: {
      return false;
    }
  }
}
function _M0FP419moonbit_2dcommunity7rabbita8internal7runtime4nullGRP319moonbit_2dcommunity7rabbita3dom4NodeE() {
  return _M0MP319moonbit_2dcommunity7rabbita2js8Nullable4nullGRP319moonbit_2dcommunity7rabbita3dom4NodeE();
}
function _M0FP419moonbit_2dcommunity7rabbita8internal7runtime22variant__to__js__value(value) {
  switch (value.$tag) {
    case 3: {
      const _String = value;
      const _value = _String._0;
      return _value;
    }
    case 2: {
      const _Floating = value;
      const _value$2 = _Floating._0;
      return _value$2;
    }
    case 1: {
      const _Integer = value;
      const _value$3 = _Integer._0;
      return _value$3;
    }
    default: {
      const _Boolean = value;
      const _value$4 = _Boolean._0;
      return _value$4;
    }
  }
}
function _M0MP419moonbit_2dcommunity7rabbita8internal7runtime5VNode6insert(self, sandbox, parent, before) {
  switch (self.$tag) {
    case 1: {
      const _Text = self;
      const _s = _Text._0;
      const e = _M0MP319moonbit_2dcommunity7rabbita3dom8Document18create__text__node(_M0FP319moonbit_2dcommunity7rabbita3dom8document(), _s);
      _M0IP016_24default__implP319moonbit_2dcommunity7rabbita3dom6IsNode14insert__beforeGRP319moonbit_2dcommunity7rabbita3dom4NodeE(parent, _M0IP016_24default__implP319moonbit_2dcommunity7rabbita3dom6IsNode8as__nodeGRP319moonbit_2dcommunity7rabbita3dom7ElementE(e), before);
      return new _M0DTP419moonbit_2dcommunity7rabbita8internal7runtime5INode4Text(_s, e);
    }
    case 3: {
      const _Thunk = self;
      const _hash = _Thunk._0;
      const _render = _Thunk._1;
      const inode = _M0MP419moonbit_2dcommunity7rabbita8internal7runtime5VNode6insert(_render(), sandbox, parent, before);
      return new _M0DTP419moonbit_2dcommunity7rabbita8internal7runtime5INode5Thunk(_hash, inode);
    }
    case 2: {
      const _Frag = self;
      const _childs = _Frag._0;
      const doc = _M0FP319moonbit_2dcommunity7rabbita3dom8document();
      const fragment = _M0MP319moonbit_2dcommunity7rabbita3dom8Document26create__document__fragment(doc);
      const start = _M0MP319moonbit_2dcommunity7rabbita3dom8Document15create__comment(doc, "start");
      const end = _M0MP319moonbit_2dcommunity7rabbita3dom8Document15create__comment(doc, "end");
      _M0IP016_24default__implP319moonbit_2dcommunity7rabbita3dom6IsNode13append__childGRP319moonbit_2dcommunity7rabbita3dom16DocumentFragmentE(fragment, _M0IP016_24default__implP319moonbit_2dcommunity7rabbita3dom6IsNode8as__nodeGRP319moonbit_2dcommunity7rabbita3dom7CommentE(start));
      const _p = new Array(_childs.length);
      const _p$2 = _childs.length;
      let _tmp = 0;
      while (true) {
        const _p$3 = _tmp;
        if (_p$3 < _p$2) {
          const _p$4 = _childs[_p$3];
          _p[_p$3] = _M0MP419moonbit_2dcommunity7rabbita8internal7runtime5VNode6insert(_p$4, sandbox, _M0IP016_24default__implP319moonbit_2dcommunity7rabbita3dom6IsNode8as__nodeGRP319moonbit_2dcommunity7rabbita3dom16DocumentFragmentE(fragment), _M0FP419moonbit_2dcommunity7rabbita8internal7runtime4nullGRP319moonbit_2dcommunity7rabbita3dom4NodeE());
          _tmp = _p$3 + 1 | 0;
          continue;
        } else {
          break;
        }
      }
      const childs = _p;
      _M0IP016_24default__implP319moonbit_2dcommunity7rabbita3dom6IsNode13append__childGRP319moonbit_2dcommunity7rabbita3dom16DocumentFragmentE(fragment, _M0IP016_24default__implP319moonbit_2dcommunity7rabbita3dom6IsNode8as__nodeGRP319moonbit_2dcommunity7rabbita3dom7CommentE(end));
      _M0IP016_24default__implP319moonbit_2dcommunity7rabbita3dom6IsNode14insert__beforeGRP319moonbit_2dcommunity7rabbita3dom4NodeE(parent, _M0IP016_24default__implP319moonbit_2dcommunity7rabbita3dom6IsNode8as__nodeGRP319moonbit_2dcommunity7rabbita3dom16DocumentFragmentE(fragment), before);
      return new _M0DTP419moonbit_2dcommunity7rabbita8internal7runtime5INode4Frag(childs, start, end);
    }
    default: {
      const _Elem = self;
      const _tag = _Elem._0;
      const _properties = _Elem._1;
      const _childs$2 = _Elem._2;
      const _namespace_uri = _Elem._3;
      const s = _tag === "RABBITA_CAPTURED_LINK" ? "a" : _tag;
      const doc$2 = _M0FP319moonbit_2dcommunity7rabbita3dom8document();
      let element;
      if (_namespace_uri === undefined) {
        element = _M0MP319moonbit_2dcommunity7rabbita3dom8Document15create__element(doc$2, s);
      } else {
        const _Some = _namespace_uri;
        const _ns = _Some;
        element = _M0MP319moonbit_2dcommunity7rabbita3dom8Document19create__element__ns(doc$2, _ns, s, undefined, undefined);
      }
      const _slots = _properties.slots;
      const _handlers = _properties.handlers;
      const _attrs = _properties.attrs;
      const _props = _properties.props;
      const _styles = _properties.styles;
      const _it = _M0MPB3Map5iter2GsWRP319moonbit_2dcommunity7rabbita3dom5EventRP319moonbit_2dcommunity7rabbita3cmd9SchedulerEuE(_handlers);
      while (true) {
        const _bind = _M0MPB5Iter24nextGsWRP319moonbit_2dcommunity7rabbita3dom5EventRP319moonbit_2dcommunity7rabbita3cmd9SchedulerEuE(_it);
        if (_bind === undefined) {
          break;
        } else {
          const _Some = _bind;
          const _x = _Some;
          const _e = _x._0;
          const _h = _x._1;
          const slot = _M0FPC13ref3newGWRP319moonbit_2dcommunity7rabbita3dom5EventRP319moonbit_2dcommunity7rabbita3cmd9SchedulerEuE(_h);
          _M0IP016_24default__implP319moonbit_2dcommunity7rabbita3dom13IsEventTarget20add__event__listenerGRP319moonbit_2dcommunity7rabbita3dom7ElementE(element, _e, (x) => {
            const _func = slot.val;
            _func(x, { self: sandbox, method_table: _M0FP0118moonbit_2dcommunity_2frabbita_2finternal_2fruntime_2fSandbox_24as_24_40moonbit_2dcommunity_2frabbita_2fcmd_2eScheduler });
          });
          _M0MPB3Map3setGsRPC13ref3RefGWRP319moonbit_2dcommunity7rabbita3dom5EventRP319moonbit_2dcommunity7rabbita3cmd9SchedulerEuEE(_slots, _e, slot);
          continue;
        }
      }
      if (_tag === "RABBITA_CAPTURED_LINK") {
        _M0IP016_24default__implP319moonbit_2dcommunity7rabbita3dom13IsEventTarget20add__event__listenerGRP319moonbit_2dcommunity7rabbita3dom7ElementE(element, "click", sandbox.captured_link_listener);
      }
      const _it$2 = _M0MPB3Map5iter2GsWRP319moonbit_2dcommunity7rabbita3dom5EventRP319moonbit_2dcommunity7rabbita3cmd9SchedulerEuE(_attrs);
      while (true) {
        const _bind = _M0MPB5Iter24nextGsWRP319moonbit_2dcommunity7rabbita3dom5EventRP319moonbit_2dcommunity7rabbita3cmd9SchedulerEuE(_it$2);
        if (_bind === undefined) {
          break;
        } else {
          const _Some = _bind;
          const _x = _Some;
          const _n = _x._0;
          const _val = _x._1;
          _M0IP016_24default__implP319moonbit_2dcommunity7rabbita3dom9IsElement14set__attributeGRP319moonbit_2dcommunity7rabbita3dom7ElementE(element, _n, _val);
          continue;
        }
      }
      const _it$3 = _M0MPB3Map5iter2GsWRP319moonbit_2dcommunity7rabbita3dom5EventRP319moonbit_2dcommunity7rabbita3cmd9SchedulerEuE(_props);
      while (true) {
        const _bind = _M0MPB5Iter24nextGsWRP319moonbit_2dcommunity7rabbita3dom5EventRP319moonbit_2dcommunity7rabbita3cmd9SchedulerEuE(_it$3);
        if (_bind === undefined) {
          break;
        } else {
          const _Some = _bind;
          const _x = _Some;
          const _n = _x._0;
          const _val = _x._1;
          _M0IP016_24default__implP319moonbit_2dcommunity7rabbita3dom9IsElement13set__propertyGRP319moonbit_2dcommunity7rabbita3dom7ElementE(element, _n, _M0FP419moonbit_2dcommunity7rabbita8internal7runtime22variant__to__js__value(_val));
          continue;
        }
      }
      const _bind = _M0IP016_24default__implP319moonbit_2dcommunity7rabbita3dom13IsEventTarget17to__html__elementGRP319moonbit_2dcommunity7rabbita3dom7ElementE(element);
      let sheet;
      if (_bind.$tag === 1) {
        const _Some = _bind;
        const _html = _Some._0;
        sheet = _M0IP016_24default__implP319moonbit_2dcommunity7rabbita3dom13IsHtmlElement10get__styleGRP319moonbit_2dcommunity7rabbita3dom11HTMLElementE(_html);
      } else {
        const _bind$2 = _M0IP016_24default__implP319moonbit_2dcommunity7rabbita3dom13IsEventTarget16to__svg__elementGRP319moonbit_2dcommunity7rabbita3dom7ElementE(element);
        if (_bind$2.$tag === 1) {
          const _Some = _bind$2;
          const _svg = _Some._0;
          sheet = _M0IP016_24default__implP319moonbit_2dcommunity7rabbita3dom12IsSVGElement10get__styleGRP319moonbit_2dcommunity7rabbita3dom10SVGElementE(_svg);
        } else {
          sheet = $panic();
        }
      }
      const _it$4 = _M0MPB3Map5iter2GsWRP319moonbit_2dcommunity7rabbita3dom5EventRP319moonbit_2dcommunity7rabbita3cmd9SchedulerEuE(_styles);
      while (true) {
        const _bind$2 = _M0MPB5Iter24nextGsWRP319moonbit_2dcommunity7rabbita3dom5EventRP319moonbit_2dcommunity7rabbita3cmd9SchedulerEuE(_it$4);
        if (_bind$2 === undefined) {
          break;
        } else {
          const _Some = _bind$2;
          const _x = _Some;
          const _n = _x._0;
          const _val = _x._1;
          _M0MP319moonbit_2dcommunity7rabbita3dom19CSSStyleDeclaration13set__property(sheet, _n, _val);
          continue;
        }
      }
      const n = _M0IP016_24default__implP319moonbit_2dcommunity7rabbita3dom6IsNode8as__nodeGRP319moonbit_2dcommunity7rabbita3dom7ElementE(element);
      let childs$2;
      if (_M0FP419moonbit_2dcommunity7rabbita8internal7runtime23is__html__void__element(_tag)) {
        childs$2 = new _M0DTP419moonbit_2dcommunity7rabbita8internal7runtime8ChildrenGRP419moonbit_2dcommunity7rabbita8internal7runtime5INodeE5Array([]);
      } else {
        if (_childs$2.$tag === 0) {
          const _Array = _childs$2;
          const _xs = _Array._0;
          const _p$3 = new Array(_xs.length);
          const _p$4 = _xs.length;
          let _tmp$2 = 0;
          while (true) {
            const _p$5 = _tmp$2;
            if (_p$5 < _p$4) {
              const _p$6 = _xs[_p$5];
              _p$3[_p$5] = _M0MP419moonbit_2dcommunity7rabbita8internal7runtime5VNode6insert(_p$6, sandbox, n, _M0FP419moonbit_2dcommunity7rabbita8internal7runtime4nullGRP319moonbit_2dcommunity7rabbita3dom4NodeE());
              _tmp$2 = _p$5 + 1 | 0;
              continue;
            } else {
              break;
            }
          }
          childs$2 = new _M0DTP419moonbit_2dcommunity7rabbita8internal7runtime8ChildrenGRP419moonbit_2dcommunity7rabbita8internal7runtime5INodeE5Array(_p$3);
        } else {
          const _Map = _childs$2;
          const _mp = _Map._0;
          const _bind$2 = [];
          const imp = _M0MPB3Map3MapGsRP419moonbit_2dcommunity7rabbita8internal7runtime5INodeE(new _M0TPB9ArrayViewGUsRP419moonbit_2dcommunity7rabbita8internal7runtime5INodeEE(_bind$2, 0, 0), undefined);
          const _it$5 = _M0MPB3Map5iter2GsWRP319moonbit_2dcommunity7rabbita3dom5EventRP319moonbit_2dcommunity7rabbita3cmd9SchedulerEuE(_mp);
          while (true) {
            const _bind$3 = _M0MPB5Iter24nextGsWRP319moonbit_2dcommunity7rabbita3dom5EventRP319moonbit_2dcommunity7rabbita3cmd9SchedulerEuE(_it$5);
            if (_bind$3 === undefined) {
              break;
            } else {
              const _Some = _bind$3;
              const _x = _Some;
              const _k = _x._0;
              const _v = _x._1;
              _M0MPB3Map3setGsRP419moonbit_2dcommunity7rabbita8internal7runtime5INodeE(imp, _k, _M0MP419moonbit_2dcommunity7rabbita8internal7runtime5VNode6insert(_v, sandbox, n, _M0FP419moonbit_2dcommunity7rabbita8internal7runtime4nullGRP319moonbit_2dcommunity7rabbita3dom4NodeE()));
              continue;
            }
          }
          childs$2 = new _M0DTP419moonbit_2dcommunity7rabbita8internal7runtime8ChildrenGRP419moonbit_2dcommunity7rabbita8internal7runtime5INodeE3Map(imp);
        }
      }
      _M0IP016_24default__implP319moonbit_2dcommunity7rabbita3dom6IsNode14insert__beforeGRP319moonbit_2dcommunity7rabbita3dom4NodeE(parent, n, before);
      return new _M0DTP419moonbit_2dcommunity7rabbita8internal7runtime5INode4Elem(_tag, _properties, childs$2, _namespace_uri, element);
    }
  }
}
function _M0MP419moonbit_2dcommunity7rabbita8internal7runtime5Props3new(attrs, props, styles, handlers) {
  const _bind = [];
  const _bind$2 = _M0MPB3Map3MapGsRPC13ref3RefGWRP319moonbit_2dcommunity7rabbita3dom5EventRP319moonbit_2dcommunity7rabbita3cmd9SchedulerEuEE(new _M0TPB9ArrayViewGUsRPC13ref3RefGWRP319moonbit_2dcommunity7rabbita3dom5EventRP319moonbit_2dcommunity7rabbita3cmd9SchedulerEuEEE(_bind, 0, 0), undefined);
  return new _M0TP419moonbit_2dcommunity7rabbita8internal7runtime5Props(_bind$2, handlers, attrs, props, styles);
}
function _M0FP419moonbit_2dcommunity7rabbita8internal7runtime9copy__mapGsRPC13ref3RefGWRP319moonbit_2dcommunity7rabbita3dom5EventRP319moonbit_2dcommunity7rabbita3cmd9SchedulerEuEE(src) {
  const _bind = [];
  const dst = _M0MPB3Map3MapGsRPC13ref3RefGWRP319moonbit_2dcommunity7rabbita3dom5EventRP319moonbit_2dcommunity7rabbita3cmd9SchedulerEuEE(new _M0TPB9ArrayViewGUsRPC13ref3RefGWRP319moonbit_2dcommunity7rabbita3dom5EventRP319moonbit_2dcommunity7rabbita3cmd9SchedulerEuEEE(_bind, 0, 0), undefined);
  const _it = _M0MPB3Map5iter2GsWRP319moonbit_2dcommunity7rabbita3dom5EventRP319moonbit_2dcommunity7rabbita3cmd9SchedulerEuE(src);
  while (true) {
    const _bind$2 = _M0MPB5Iter24nextGsWRP319moonbit_2dcommunity7rabbita3dom5EventRP319moonbit_2dcommunity7rabbita3cmd9SchedulerEuE(_it);
    if (_bind$2 === undefined) {
      break;
    } else {
      const _Some = _bind$2;
      const _x = _Some;
      const _k = _x._0;
      const _v = _x._1;
      _M0MPB3Map3setGsRPC13ref3RefGWRP319moonbit_2dcommunity7rabbita3dom5EventRP319moonbit_2dcommunity7rabbita3cmd9SchedulerEuEE(dst, _k, _v);
      continue;
    }
  }
  return dst;
}
function _M0FP419moonbit_2dcommunity7rabbita8internal7runtime9copy__mapGsWRP319moonbit_2dcommunity7rabbita3dom5EventRP319moonbit_2dcommunity7rabbita3cmd9SchedulerEuE(src) {
  const _bind = [];
  const dst = _M0MPB3Map3MapGsWRP319moonbit_2dcommunity7rabbita3dom5EventRP319moonbit_2dcommunity7rabbita3cmd9SchedulerEuE(new _M0TPB9ArrayViewGUsWRP319moonbit_2dcommunity7rabbita3dom5EventRP319moonbit_2dcommunity7rabbita3cmd9SchedulerEuEE(_bind, 0, 0), undefined);
  const _it = _M0MPB3Map5iter2GsWRP319moonbit_2dcommunity7rabbita3dom5EventRP319moonbit_2dcommunity7rabbita3cmd9SchedulerEuE(src);
  while (true) {
    const _bind$2 = _M0MPB5Iter24nextGsWRP319moonbit_2dcommunity7rabbita3dom5EventRP319moonbit_2dcommunity7rabbita3cmd9SchedulerEuE(_it);
    if (_bind$2 === undefined) {
      break;
    } else {
      const _Some = _bind$2;
      const _x = _Some;
      const _k = _x._0;
      const _v = _x._1;
      _M0MPB3Map3setGsWRP319moonbit_2dcommunity7rabbita3dom5EventRP319moonbit_2dcommunity7rabbita3cmd9SchedulerEuE(dst, _k, _v);
      continue;
    }
  }
  return dst;
}
function _M0FP419moonbit_2dcommunity7rabbita8internal7runtime9copy__mapGssE(src) {
  const _bind = [];
  const dst = _M0MPB3Map3MapGssE(new _M0TPB9ArrayViewGUssEE(_bind, 0, 0), undefined);
  const _it = _M0MPB3Map5iter2GsWRP319moonbit_2dcommunity7rabbita3dom5EventRP319moonbit_2dcommunity7rabbita3cmd9SchedulerEuE(src);
  while (true) {
    const _bind$2 = _M0MPB5Iter24nextGsWRP319moonbit_2dcommunity7rabbita3dom5EventRP319moonbit_2dcommunity7rabbita3cmd9SchedulerEuE(_it);
    if (_bind$2 === undefined) {
      break;
    } else {
      const _Some = _bind$2;
      const _x = _Some;
      const _k = _x._0;
      const _v = _x._1;
      _M0MPB3Map3setGssE(dst, _k, _v);
      continue;
    }
  }
  return dst;
}
function _M0FP419moonbit_2dcommunity7rabbita8internal7runtime9copy__mapGsRP319moonbit_2dcommunity7rabbita7variant7VariantE(src) {
  const _bind = [];
  const dst = _M0MPB3Map3MapGsRP319moonbit_2dcommunity7rabbita7variant7VariantE(new _M0TPB9ArrayViewGUsRP319moonbit_2dcommunity7rabbita7variant7VariantEE(_bind, 0, 0), undefined);
  const _it = _M0MPB3Map5iter2GsWRP319moonbit_2dcommunity7rabbita3dom5EventRP319moonbit_2dcommunity7rabbita3cmd9SchedulerEuE(src);
  while (true) {
    const _bind$2 = _M0MPB5Iter24nextGsWRP319moonbit_2dcommunity7rabbita3dom5EventRP319moonbit_2dcommunity7rabbita3cmd9SchedulerEuE(_it);
    if (_bind$2 === undefined) {
      break;
    } else {
      const _Some = _bind$2;
      const _x = _Some;
      const _k = _x._0;
      const _v = _x._1;
      _M0MPB3Map3setGsRP319moonbit_2dcommunity7rabbita7variant7VariantE(dst, _k, _v);
      continue;
    }
  }
  return dst;
}
function _M0MP419moonbit_2dcommunity7rabbita8internal7runtime5Props4copy(self) {
  return new _M0TP419moonbit_2dcommunity7rabbita8internal7runtime5Props(_M0FP419moonbit_2dcommunity7rabbita8internal7runtime9copy__mapGsRPC13ref3RefGWRP319moonbit_2dcommunity7rabbita3dom5EventRP319moonbit_2dcommunity7rabbita3cmd9SchedulerEuEE(self.slots), _M0FP419moonbit_2dcommunity7rabbita8internal7runtime9copy__mapGsWRP319moonbit_2dcommunity7rabbita3dom5EventRP319moonbit_2dcommunity7rabbita3cmd9SchedulerEuE(self.handlers), _M0FP419moonbit_2dcommunity7rabbita8internal7runtime9copy__mapGssE(self.attrs), _M0FP419moonbit_2dcommunity7rabbita8internal7runtime9copy__mapGsRP319moonbit_2dcommunity7rabbita7variant7VariantE(self.props), _M0FP419moonbit_2dcommunity7rabbita8internal7runtime9copy__mapGssE(self.styles));
}
function _M0MP419moonbit_2dcommunity7rabbita8internal7runtime8Children3mapGRP419moonbit_2dcommunity7rabbita8internal7runtime5VNodeRP419moonbit_2dcommunity7rabbita8internal7runtime5INodeE(c, f) {
  if (c.$tag === 0) {
    const _Array = c;
    const _arr = _Array._0;
    const _p = new Array(_arr.length);
    const _p$2 = _arr.length;
    let _tmp = 0;
    while (true) {
      const _p$3 = _tmp;
      if (_p$3 < _p$2) {
        const _p$4 = _arr[_p$3];
        _p[_p$3] = f(_p$4);
        _tmp = _p$3 + 1 | 0;
        continue;
      } else {
        break;
      }
    }
    return new _M0DTP419moonbit_2dcommunity7rabbita8internal7runtime8ChildrenGRP419moonbit_2dcommunity7rabbita8internal7runtime5INodeE5Array(_p);
  } else {
    const _Map = c;
    const _mp = _Map._0;
    return new _M0DTP419moonbit_2dcommunity7rabbita8internal7runtime8ChildrenGRP419moonbit_2dcommunity7rabbita8internal7runtime5INodeE3Map(_M0MPB3Map3mapGsRP419moonbit_2dcommunity7rabbita8internal7runtime5VNodeRP419moonbit_2dcommunity7rabbita8internal7runtime5INodeE(_mp, (_discard_, v) => f(v)));
  }
}
function _M0FP419moonbit_2dcommunity7rabbita8internal7runtime11diff__props(old, new_, sandbox, parent) {
  const slots = old.slots;
  const _it = _M0MPB3Map5iter2GsWRP319moonbit_2dcommunity7rabbita3dom5EventRP319moonbit_2dcommunity7rabbita3cmd9SchedulerEuE(slots);
  while (true) {
    const _bind = _M0MPB5Iter24nextGsWRP319moonbit_2dcommunity7rabbita3dom5EventRP319moonbit_2dcommunity7rabbita3cmd9SchedulerEuE(_it);
    if (_bind === undefined) {
      break;
    } else {
      const _Some = _bind;
      const _x = _Some;
      const _event = _x._0;
      const _slot = _x._1;
      if (!_M0MPB3Map8containsGsWRP319moonbit_2dcommunity7rabbita3dom5EventRP319moonbit_2dcommunity7rabbita3cmd9SchedulerEuE(new_.handlers, _event)) {
        _slot.val = (_discard_, _discard_$2) => {
        };
      }
      continue;
    }
  }
  const _it$2 = _M0MPB3Map5iter2GsWRP319moonbit_2dcommunity7rabbita3dom5EventRP319moonbit_2dcommunity7rabbita3cmd9SchedulerEuE(new_.handlers);
  while (true) {
    const _bind = _M0MPB5Iter24nextGsWRP319moonbit_2dcommunity7rabbita3dom5EventRP319moonbit_2dcommunity7rabbita3cmd9SchedulerEuE(_it$2);
    if (_bind === undefined) {
      break;
    } else {
      const _Some = _bind;
      const _x = _Some;
      const _event = _x._0;
      const _handler = _x._1;
      const _bind$2 = _M0MPB3Map3getGsRPC13ref3RefGWRP319moonbit_2dcommunity7rabbita3dom5EventRP319moonbit_2dcommunity7rabbita3cmd9SchedulerEuEE(slots, _event);
      if (_bind$2 === undefined) {
        const slot = _M0FPC13ref3newGWRP319moonbit_2dcommunity7rabbita3dom5EventRP319moonbit_2dcommunity7rabbita3cmd9SchedulerEuE(_handler);
        _M0IP016_24default__implP319moonbit_2dcommunity7rabbita3dom13IsEventTarget20add__event__listenerGRP319moonbit_2dcommunity7rabbita3dom7ElementE(parent, _event, (e) => {
          const _func = slot.val;
          _func(e, { self: sandbox, method_table: _M0FP0118moonbit_2dcommunity_2frabbita_2finternal_2fruntime_2fSandbox_24as_24_40moonbit_2dcommunity_2frabbita_2fcmd_2eScheduler });
        });
        _M0MPB3Map3setGsRPC13ref3RefGWRP319moonbit_2dcommunity7rabbita3dom5EventRP319moonbit_2dcommunity7rabbita3cmd9SchedulerEuEE(slots, _event, slot);
      } else {
        const _Some$2 = _bind$2;
        const _slot = _Some$2;
        _slot.val = _handler;
      }
      continue;
    }
  }
  new_.slots = slots;
  const _it$3 = _M0MPB3Map5iter2GsWRP319moonbit_2dcommunity7rabbita3dom5EventRP319moonbit_2dcommunity7rabbita3cmd9SchedulerEuE(old.attrs);
  while (true) {
    const _bind = _M0MPB5Iter24nextGsWRP319moonbit_2dcommunity7rabbita3dom5EventRP319moonbit_2dcommunity7rabbita3cmd9SchedulerEuE(_it$3);
    if (_bind === undefined) {
      break;
    } else {
      const _Some = _bind;
      const _x = _Some;
      const _k = _x._0;
      if (!_M0MPB3Map8containsGssE(new_.attrs, _k)) {
        _M0IP016_24default__implP319moonbit_2dcommunity7rabbita3dom9IsElement17remove__attributeGRP319moonbit_2dcommunity7rabbita3dom7ElementE(parent, _k);
      }
      continue;
    }
  }
  const _it$4 = _M0MPB3Map5iter2GsWRP319moonbit_2dcommunity7rabbita3dom5EventRP319moonbit_2dcommunity7rabbita3cmd9SchedulerEuE(new_.attrs);
  while (true) {
    const _bind = _M0MPB5Iter24nextGsWRP319moonbit_2dcommunity7rabbita3dom5EventRP319moonbit_2dcommunity7rabbita3cmd9SchedulerEuE(_it$4);
    if (_bind === undefined) {
      break;
    } else {
      const _Some = _bind;
      const _x = _Some;
      const _k = _x._0;
      const _v2 = _x._1;
      const _bind$2 = _M0MPB3Map3getGssE(old.attrs, _k);
      if (_bind$2 === undefined) {
        _M0IP016_24default__implP319moonbit_2dcommunity7rabbita3dom9IsElement14set__attributeGRP319moonbit_2dcommunity7rabbita3dom7ElementE(parent, _k, _v2);
      } else {
        const _Some$2 = _bind$2;
        const _v1 = _Some$2;
        if (!(_v1 === _v2)) {
          _M0IP016_24default__implP319moonbit_2dcommunity7rabbita3dom9IsElement14set__attributeGRP319moonbit_2dcommunity7rabbita3dom7ElementE(parent, _k, _v2);
        }
      }
      continue;
    }
  }
  const _it$5 = _M0MPB3Map5iter2GsWRP319moonbit_2dcommunity7rabbita3dom5EventRP319moonbit_2dcommunity7rabbita3cmd9SchedulerEuE(old.props);
  while (true) {
    const _bind = _M0MPB5Iter24nextGsWRP319moonbit_2dcommunity7rabbita3dom5EventRP319moonbit_2dcommunity7rabbita3cmd9SchedulerEuE(_it$5);
    if (_bind === undefined) {
      break;
    } else {
      const _Some = _bind;
      const _x = _Some;
      const _k = _x._0;
      if (!_M0MPB3Map8containsGsRP319moonbit_2dcommunity7rabbita7variant7VariantE(new_.props, _k)) {
        _M0IP016_24default__implP319moonbit_2dcommunity7rabbita3dom9IsElement16remove__propertyGRP319moonbit_2dcommunity7rabbita3dom7ElementE(parent, _k);
      }
      continue;
    }
  }
  const _it$6 = _M0MPB3Map5iter2GsWRP319moonbit_2dcommunity7rabbita3dom5EventRP319moonbit_2dcommunity7rabbita3cmd9SchedulerEuE(new_.props);
  while (true) {
    const _bind = _M0MPB5Iter24nextGsWRP319moonbit_2dcommunity7rabbita3dom5EventRP319moonbit_2dcommunity7rabbita3cmd9SchedulerEuE(_it$6);
    if (_bind === undefined) {
      break;
    } else {
      const _Some = _bind;
      const _x = _Some;
      const _k = _x._0;
      const _v2 = _x._1;
      const _bind$2 = _M0MPB3Map3getGsRP319moonbit_2dcommunity7rabbita7variant7VariantE(old.props, _k);
      if (_bind$2 === undefined) {
        _M0IP016_24default__implP319moonbit_2dcommunity7rabbita3dom9IsElement13set__propertyGRP319moonbit_2dcommunity7rabbita3dom7ElementE(parent, _k, _M0FP419moonbit_2dcommunity7rabbita8internal7runtime22variant__to__js__value(_v2));
      } else {
        const _Some$2 = _bind$2;
        const _v1 = _Some$2;
        if (_M0IP016_24default__implPB2Eq10not__equalGRP319moonbit_2dcommunity7rabbita7variant7VariantE(_v1, _v2)) {
          _M0IP016_24default__implP319moonbit_2dcommunity7rabbita3dom9IsElement13set__propertyGRP319moonbit_2dcommunity7rabbita3dom7ElementE(parent, _k, _M0FP419moonbit_2dcommunity7rabbita8internal7runtime22variant__to__js__value(_v2));
        }
      }
      continue;
    }
  }
  const _bind = _M0IP016_24default__implP319moonbit_2dcommunity7rabbita3dom13IsEventTarget17to__html__elementGRP319moonbit_2dcommunity7rabbita3dom7ElementE(parent);
  let stylesheet;
  if (_bind.$tag === 1) {
    const _Some = _bind;
    const _html = _Some._0;
    stylesheet = _M0IP016_24default__implP319moonbit_2dcommunity7rabbita3dom13IsHtmlElement10get__styleGRP319moonbit_2dcommunity7rabbita3dom11HTMLElementE(_html);
  } else {
    const _bind$2 = _M0IP016_24default__implP319moonbit_2dcommunity7rabbita3dom13IsEventTarget16to__svg__elementGRP319moonbit_2dcommunity7rabbita3dom7ElementE(parent);
    if (_bind$2.$tag === 1) {
      const _Some = _bind$2;
      const _svg = _Some._0;
      stylesheet = _M0IP016_24default__implP319moonbit_2dcommunity7rabbita3dom12IsSVGElement10get__styleGRP319moonbit_2dcommunity7rabbita3dom10SVGElementE(_svg);
    } else {
      stylesheet = $panic();
    }
  }
  const _it$7 = _M0MPB3Map5iter2GsWRP319moonbit_2dcommunity7rabbita3dom5EventRP319moonbit_2dcommunity7rabbita3cmd9SchedulerEuE(old.styles);
  while (true) {
    const _bind$2 = _M0MPB5Iter24nextGsWRP319moonbit_2dcommunity7rabbita3dom5EventRP319moonbit_2dcommunity7rabbita3cmd9SchedulerEuE(_it$7);
    if (_bind$2 === undefined) {
      break;
    } else {
      const _Some = _bind$2;
      const _x = _Some;
      const _k = _x._0;
      if (!_M0MPB3Map8containsGssE(new_.styles, _k)) {
        _M0MP319moonbit_2dcommunity7rabbita3dom19CSSStyleDeclaration16remove__property(stylesheet, _k);
      }
      continue;
    }
  }
  const _it$8 = _M0MPB3Map5iter2GsWRP319moonbit_2dcommunity7rabbita3dom5EventRP319moonbit_2dcommunity7rabbita3cmd9SchedulerEuE(new_.styles);
  while (true) {
    const _bind$2 = _M0MPB5Iter24nextGsWRP319moonbit_2dcommunity7rabbita3dom5EventRP319moonbit_2dcommunity7rabbita3cmd9SchedulerEuE(_it$8);
    if (_bind$2 === undefined) {
      return;
    } else {
      const _Some = _bind$2;
      const _x = _Some;
      const _k = _x._0;
      const _v2 = _x._1;
      const _bind$3 = _M0MPB3Map3getGssE(old.styles, _k);
      if (_bind$3 === undefined) {
        _M0MP319moonbit_2dcommunity7rabbita3dom19CSSStyleDeclaration13set__property(stylesheet, _k, _v2);
      } else {
        const _Some$2 = _bind$3;
        const _v1 = _Some$2;
        if (!(_v1 === _v2)) {
          _M0MP319moonbit_2dcommunity7rabbita3dom19CSSStyleDeclaration13set__property(stylesheet, _k, _v2);
        }
      }
      continue;
    }
  }
}
function _M0FP419moonbit_2dcommunity7rabbita8internal7runtime10diff__node(old, new_, sandbox, parent, anchor) {
  _L: {
    switch (old.$tag) {
      case 0: {
        const _Elem = old;
        const _tag1 = _Elem._0;
        const _props1 = _Elem._1;
        const _childs1 = _Elem._2;
        const _ns1 = _Elem._3;
        const _e = _Elem._4;
        if (new_.$tag === 0) {
          const _Elem$2 = new_;
          const _tag2 = _Elem$2._0;
          const _props2 = _Elem$2._1;
          const _childs2 = _Elem$2._2;
          const _ns2 = _Elem$2._3;
          if (!(_tag1 === _tag2) || _M0IP016_24default__implPB2Eq10not__equalGOsE(_ns1, _ns2)) {
            _M0MP419moonbit_2dcommunity7rabbita8internal7runtime5INode6remove(old, sandbox, _M0IP016_24default__implP319moonbit_2dcommunity7rabbita3dom6IsNode8as__nodeGRP319moonbit_2dcommunity7rabbita3dom4NodeE(parent));
            return _M0MP419moonbit_2dcommunity7rabbita8internal7runtime5VNode6insert(new_, sandbox, _M0IP016_24default__implP319moonbit_2dcommunity7rabbita3dom6IsNode8as__nodeGRP319moonbit_2dcommunity7rabbita3dom4NodeE(parent), anchor);
          } else {
            _M0FP419moonbit_2dcommunity7rabbita8internal7runtime11diff__props(_props1, _props2, sandbox, _e);
            const childs = _M0FP419moonbit_2dcommunity7rabbita8internal7runtime14diff__children(_childs1, _childs2, sandbox, _M0IP016_24default__implP319moonbit_2dcommunity7rabbita3dom6IsNode8as__nodeGRP319moonbit_2dcommunity7rabbita3dom7ElementE(_e), _M0FP419moonbit_2dcommunity7rabbita8internal7runtime4nullGRP319moonbit_2dcommunity7rabbita3dom4NodeE());
            return new _M0DTP419moonbit_2dcommunity7rabbita8internal7runtime5INode4Elem(_tag2, _props2, childs, _ns2, _e);
          }
        } else {
          break _L;
        }
      }
      case 1: {
        const _Text = old;
        const _s1 = _Text._0;
        const _e$2 = _Text._1;
        if (new_.$tag === 1) {
          const _Text$2 = new_;
          const _s2 = _Text$2._0;
          if (!(_s1 === _s2)) {
            _M0IP016_24default__implP319moonbit_2dcommunity7rabbita3dom6IsNode16set__node__valueGRP319moonbit_2dcommunity7rabbita3dom7ElementE(_e$2, _M0MP319moonbit_2dcommunity7rabbita2js8Nullable12from__optionGsE(_s2));
          }
          return new _M0DTP419moonbit_2dcommunity7rabbita8internal7runtime5INode4Text(_s2, _e$2);
        } else {
          break _L;
        }
      }
      case 2: {
        const _Frag = old;
        const _childs1$2 = _Frag._0;
        const _s = _Frag._1;
        const _e$3 = _Frag._2;
        if (new_.$tag === 2) {
          const _Frag$2 = new_;
          const _childs2 = _Frag$2._0;
          const childs = _M0FP419moonbit_2dcommunity7rabbita8internal7runtime14diff__children(new _M0DTP419moonbit_2dcommunity7rabbita8internal7runtime8ChildrenGRP419moonbit_2dcommunity7rabbita8internal7runtime5INodeE5Array(_childs1$2), new _M0DTP419moonbit_2dcommunity7rabbita8internal7runtime8ChildrenGRP419moonbit_2dcommunity7rabbita8internal7runtime5VNodeE5Array(_childs2), sandbox, _M0IP016_24default__implP319moonbit_2dcommunity7rabbita3dom6IsNode8as__nodeGRP319moonbit_2dcommunity7rabbita3dom4NodeE(parent), _M0FP419moonbit_2dcommunity7rabbita8internal7runtime8nullableGRP319moonbit_2dcommunity7rabbita3dom4NodeE(_M0IP016_24default__implP319moonbit_2dcommunity7rabbita3dom6IsNode8as__nodeGRP319moonbit_2dcommunity7rabbita3dom7CommentE(_e$3)));
          if (childs.$tag === 0) {
            const _Array = childs;
            const _childs = _Array._0;
            return new _M0DTP419moonbit_2dcommunity7rabbita8internal7runtime5INode4Frag(_childs, _s, _e$3);
          } else {
            return $panic();
          }
        } else {
          break _L;
        }
      }
      default: {
        const _Thunk = old;
        const _hash1 = _Thunk._0;
        const _inode = _Thunk._1;
        if (new_.$tag === 3) {
          const _Thunk$2 = new_;
          const _hash2 = _Thunk$2._0;
          const _render = _Thunk$2._1;
          if (_hash1 === _hash2) {
            return _Thunk;
          } else {
            const vnode = _render();
            const inode = _M0FP419moonbit_2dcommunity7rabbita8internal7runtime10diff__node(_inode, vnode, sandbox, parent, anchor);
            return new _M0DTP419moonbit_2dcommunity7rabbita8internal7runtime5INode5Thunk(_hash2, inode);
          }
        } else {
          break _L;
        }
      }
    }
  }
  _M0MP419moonbit_2dcommunity7rabbita8internal7runtime5INode6remove(old, sandbox, _M0IP016_24default__implP319moonbit_2dcommunity7rabbita3dom6IsNode8as__nodeGRP319moonbit_2dcommunity7rabbita3dom4NodeE(parent));
  return _M0MP419moonbit_2dcommunity7rabbita8internal7runtime5VNode6insert(new_, sandbox, _M0IP016_24default__implP319moonbit_2dcommunity7rabbita3dom6IsNode8as__nodeGRP319moonbit_2dcommunity7rabbita3dom4NodeE(parent), anchor);
}
function _M0FP419moonbit_2dcommunity7rabbita8internal7runtime14diff__children(old, new_, sandbox, parent, anchor) {
  _L: {
    if (old.$tag === 0) {
      const _Array = old;
      const _old = _Array._0;
      if (new_.$tag === 0) {
        const _Array$2 = new_;
        const _new = _Array$2._0;
        const len1 = _old.length;
        const len2 = _new.length;
        let before = anchor;
        const acc = [];
        let len;
        if (len1 > len2) {
          let _tmp = len1 - 1 | 0;
          while (true) {
            const i = _tmp;
            if (i >= len2) {
              _M0MP419moonbit_2dcommunity7rabbita8internal7runtime5INode6remove(_M0MPC15array5Array2atGRP419moonbit_2dcommunity7rabbita8internal7runtime5INodeE(_old, i), sandbox, parent);
              _tmp = i - 1 | 0;
              continue;
            } else {
              break;
            }
          }
          len = len2;
        } else {
          let _tmp = len2 - 1 | 0;
          while (true) {
            const i = _tmp;
            if (i >= len1) {
              const inode = _M0MP419moonbit_2dcommunity7rabbita8internal7runtime5VNode6insert(_M0MPC15array5Array2atGRP419moonbit_2dcommunity7rabbita8internal7runtime5INodeE(_new, i), sandbox, parent, before);
              _M0MPC15array5Array4pushGRP419moonbit_2dcommunity7rabbita8internal7runtime5INodeE(acc, inode);
              before = _M0FP419moonbit_2dcommunity7rabbita8internal7runtime8nullableGRP319moonbit_2dcommunity7rabbita3dom4NodeE(_M0MP419moonbit_2dcommunity7rabbita8internal7runtime5INode5start(inode));
              _tmp = i - 1 | 0;
              continue;
            } else {
              break;
            }
          }
          len = len1;
        }
        let _tmp = len - 1 | 0;
        while (true) {
          const i = _tmp;
          if (i >= 0) {
            const inode = _M0FP419moonbit_2dcommunity7rabbita8internal7runtime10diff__node(_M0MPC15array5Array2atGRP419moonbit_2dcommunity7rabbita8internal7runtime5INodeE(_old, i), _M0MPC15array5Array2atGRP419moonbit_2dcommunity7rabbita8internal7runtime5INodeE(_new, i), sandbox, parent, before);
            _M0MPC15array5Array4pushGRP419moonbit_2dcommunity7rabbita8internal7runtime5INodeE(acc, inode);
            before = _M0FP419moonbit_2dcommunity7rabbita8internal7runtime8nullableGRP319moonbit_2dcommunity7rabbita3dom4NodeE(_M0MP419moonbit_2dcommunity7rabbita8internal7runtime5INode5start(inode));
            _tmp = i - 1 | 0;
            continue;
          } else {
            break;
          }
        }
        return new _M0DTP419moonbit_2dcommunity7rabbita8internal7runtime8ChildrenGRP419moonbit_2dcommunity7rabbita8internal7runtime5INodeE5Array(_M0MPC15array5Array3revGRP419moonbit_2dcommunity7rabbita8internal7runtime5INodeE(acc));
      } else {
        break _L;
      }
    } else {
      const _Map = old;
      const _old = _Map._0;
      if (new_.$tag === 1) {
        const _Map$2 = new_;
        const _new = _Map$2._0;
        const _it = _M0MPB3Map5iter2GsWRP319moonbit_2dcommunity7rabbita3dom5EventRP319moonbit_2dcommunity7rabbita3cmd9SchedulerEuE(_old);
        while (true) {
          const _bind = _M0MPB5Iter24nextGsWRP319moonbit_2dcommunity7rabbita3dom5EventRP319moonbit_2dcommunity7rabbita3cmd9SchedulerEuE(_it);
          if (_bind === undefined) {
            break;
          } else {
            const _Some = _bind;
            const _x = _Some;
            const _k = _x._0;
            const _v1 = _x._1;
            if (!_M0MPB3Map8containsGsRP419moonbit_2dcommunity7rabbita8internal7runtime5VNodeE(_new, _k)) {
              _M0MP419moonbit_2dcommunity7rabbita8internal7runtime5INode6remove(_v1, sandbox, parent);
            }
            continue;
          }
        }
        const order = _M0MPB3Map9to__arrayGsRP419moonbit_2dcommunity7rabbita8internal7runtime5VNodeE(_new);
        let before = _M0FP419moonbit_2dcommunity7rabbita8internal7runtime4nullGRP319moonbit_2dcommunity7rabbita3dom4NodeE();
        const reversed = [];
        const _bind = order.length;
        let _tmp = _bind - 1 | 0;
        while (true) {
          const i = _tmp;
          if (i >= 0) {
            const _bind$2 = _M0MPC15array5Array2atGRP419moonbit_2dcommunity7rabbita8internal7runtime5INodeE(order, i);
            const _k = _bind$2._0;
            const _v2 = _bind$2._1;
            const _bind$3 = _M0MPB3Map3getGsRP419moonbit_2dcommunity7rabbita8internal7runtime5INodeE(_old, _k);
            let inode;
            if (_bind$3 === undefined) {
              inode = _M0MP419moonbit_2dcommunity7rabbita8internal7runtime5VNode6insert(_v2, sandbox, parent, before);
            } else {
              const _Some = _bind$3;
              const _v1 = _Some;
              const inode$2 = _M0FP419moonbit_2dcommunity7rabbita8internal7runtime10diff__node(_v1, _v2, sandbox, parent, before);
              _M0MP419moonbit_2dcommunity7rabbita8internal7runtime5INode8relocate(inode$2, parent, before);
              inode = inode$2;
            }
            _M0MPC15array5Array4pushGRP419moonbit_2dcommunity7rabbita8internal7runtime5INodeE(reversed, { _0: _k, _1: inode });
            before = _M0FP419moonbit_2dcommunity7rabbita8internal7runtime8nullableGRP319moonbit_2dcommunity7rabbita3dom4NodeE(_M0MP419moonbit_2dcommunity7rabbita8internal7runtime5INode5start(inode));
            _tmp = i - 1 | 0;
            continue;
          } else {
            break;
          }
        }
        return new _M0DTP419moonbit_2dcommunity7rabbita8internal7runtime8ChildrenGRP419moonbit_2dcommunity7rabbita8internal7runtime5INodeE3Map(_M0MPB3Map3MapGsRP419moonbit_2dcommunity7rabbita8internal7runtime5INodeE(new _M0TPB9ArrayViewGUsRP419moonbit_2dcommunity7rabbita8internal7runtime5INodeEE(reversed, 0, reversed.length), undefined));
      } else {
        break _L;
      }
    }
  }
  if (old.$tag === 1) {
    const _Map = old;
    const _xs = _Map._0;
    let _tmp = _xs.head;
    while (true) {
      const _p = _tmp;
      if (_p === undefined) {
        break;
      } else {
        const _p$2 = _p;
        const _p$3 = _p$2;
        const _p$4 = _p$3.value;
        const _p$5 = _p$3.next;
        _M0MP419moonbit_2dcommunity7rabbita8internal7runtime5INode6remove(_p$4, sandbox, parent);
        _tmp = _p$5;
        continue;
      }
    }
  } else {
    const _Array = old;
    const _xs = _Array._0;
    const _p = _xs.length;
    let _tmp = 0;
    while (true) {
      const _p$2 = _tmp;
      if (_p$2 < _p) {
        const _p$3 = _xs[_p$2];
        _M0MP419moonbit_2dcommunity7rabbita8internal7runtime5INode6remove(_p$3, sandbox, parent);
        _tmp = _p$2 + 1 | 0;
        continue;
      } else {
        break;
      }
    }
  }
  return _M0MP419moonbit_2dcommunity7rabbita8internal7runtime8Children3mapGRP419moonbit_2dcommunity7rabbita8internal7runtime5VNodeRP419moonbit_2dcommunity7rabbita8internal7runtime5INodeE(new_, (y) => _M0MP419moonbit_2dcommunity7rabbita8internal7runtime5VNode6insert(y, sandbox, parent, _M0FP419moonbit_2dcommunity7rabbita8internal7runtime4nullGRP319moonbit_2dcommunity7rabbita3dom4NodeE()));
}
function _M0FP419moonbit_2dcommunity7rabbita8internal7runtime10diff__subs(old_subs, new_subs, scheduler) {
  const _bind = [];
  const sub_map = _M0MPB3Map3MapGsRP319moonbit_2dcommunity7rabbita3sub10RunningSubE(new _M0TPB9ArrayViewGUsRP319moonbit_2dcommunity7rabbita3sub10RunningSubEE(_bind, 0, 0), undefined);
  const _it = _M0MPB3Map5iter2GsWRP319moonbit_2dcommunity7rabbita3dom5EventRP319moonbit_2dcommunity7rabbita3cmd9SchedulerEuE(old_subs);
  while (true) {
    const _bind$2 = _M0MPB5Iter24nextGsWRP319moonbit_2dcommunity7rabbita3dom5EventRP319moonbit_2dcommunity7rabbita3cmd9SchedulerEuE(_it);
    if (_bind$2 === undefined) {
      break;
    } else {
      const _Some = _bind$2;
      const _x = _Some;
      const _key = _x._0;
      const _sub = _x._1;
      if (!_M0MPB3Map8containsGsURPC15error5ErrorRP319moonbit_2dcommunity7rabbita3sub9SubLoaderEE(new_subs, _key)) {
        const _func = _sub.unload;
        _func(scheduler);
      } else {
        _M0MPB3Map3setGsRP319moonbit_2dcommunity7rabbita3sub10RunningSubE(sub_map, _key, _sub);
      }
      continue;
    }
  }
  const _it$2 = _M0MPB3Map5iter2GsWRP319moonbit_2dcommunity7rabbita3dom5EventRP319moonbit_2dcommunity7rabbita3cmd9SchedulerEuE(new_subs);
  while (true) {
    const _bind$2 = _M0MPB5Iter24nextGsWRP319moonbit_2dcommunity7rabbita3dom5EventRP319moonbit_2dcommunity7rabbita3cmd9SchedulerEuE(_it$2);
    if (_bind$2 === undefined) {
      break;
    } else {
      const _Some = _bind$2;
      const _x = _Some;
      const _key = _x._0;
      const _sub = _x._1;
      const _payload = _sub._0;
      const _loader = _sub._1;
      if (!_M0MPB3Map8containsGsRP319moonbit_2dcommunity7rabbita3sub10RunningSubE(old_subs, _key)) {
        const _func = _loader;
        const _bind$3 = _func(_payload, scheduler);
        if (_bind$3 === undefined) {
        } else {
          const _Some$2 = _bind$3;
          const _running = _Some$2;
          _M0MPB3Map3setGsRP319moonbit_2dcommunity7rabbita3sub10RunningSubE(sub_map, _key, _running);
        }
      }
      continue;
    }
  }
  return sub_map;
}
function _M0FP419moonbit_2dcommunity7rabbita8internal7runtime14cleanup__store(id, sub_map, scheduler) {
  _M0MP419moonbit_2dcommunity7rabbita8internal7slotmap7SlotMap4freeGRP419moonbit_2dcommunity7rabbita8internal7runtime5StoreE(_M0FP419moonbit_2dcommunity7rabbita8internal7runtime14global__stores, id);
  const _it = _M0MPB3Map5iter2GsWRP319moonbit_2dcommunity7rabbita3dom5EventRP319moonbit_2dcommunity7rabbita3cmd9SchedulerEuE(sub_map);
  while (true) {
    const _bind = _M0MPB5Iter24nextGsWRP319moonbit_2dcommunity7rabbita3dom5EventRP319moonbit_2dcommunity7rabbita3cmd9SchedulerEuE(_it);
    if (_bind === undefined) {
      return;
    } else {
      const _Some = _bind;
      const _x = _Some;
      const _sub = _x._1;
      const _func = _sub.unload;
      _func(scheduler);
      continue;
    }
  }
}
function _M0MP419moonbit_2dcommunity7rabbita8internal7runtime7Sandbox22create__state__machineN12handle__subsS129GiRP310tonyfettes31rabbita_2dmidpull_2ddrain_2dmre4main10CounterMsgE(_env, scheduler, model) {
  const subscriptions = _env._2;
  const emit = _env._1;
  const sub_map = _env._0;
  if (subscriptions === undefined) {
    return;
  } else {
    const _Some = subscriptions;
    const _subscriptions = _Some;
    const new_subs = _M0MP319moonbit_2dcommunity7rabbita3sub3Sub7to__map(_subscriptions(emit, model), _M0FP419moonbit_2dcommunity7rabbita8internal3key3key, false);
    sub_map.val = _M0FP419moonbit_2dcommunity7rabbita8internal7runtime10diff__subs(sub_map.val, new_subs, scheduler);
    return;
  }
}
function _M0MP419moonbit_2dcommunity7rabbita8internal7runtime7Sandbox22create__state__machineN12handle__subsS129GbRP310tonyfettes31rabbita_2dmidpull_2ddrain_2dmre4main6TabMsgE(_env, scheduler, model) {
  const subscriptions = _env._2;
  const emit = _env._1;
  const sub_map = _env._0;
  if (subscriptions === undefined) {
    return;
  } else {
    const _Some = subscriptions;
    const _subscriptions = _Some;
    const new_subs = _M0MP319moonbit_2dcommunity7rabbita3sub3Sub7to__map(_subscriptions(emit, model), _M0FP419moonbit_2dcommunity7rabbita8internal3key3key, false);
    sub_map.val = _M0FP419moonbit_2dcommunity7rabbita8internal7runtime10diff__subs(sub_map.val, new_subs, scheduler);
    return;
  }
}
function _M0MP419moonbit_2dcommunity7rabbita8internal7runtime7Sandbox22create__state__machineN12handle__subsS129GuuE(_env, scheduler, model) {
  const subscriptions = _env._2;
  const emit = _env._1;
  const sub_map = _env._0;
  if (subscriptions === undefined) {
    return;
  } else {
    const _Some = subscriptions;
    const _subscriptions = _Some;
    const new_subs = _M0MP319moonbit_2dcommunity7rabbita3sub3Sub7to__map(_subscriptions(emit, model), _M0FP419moonbit_2dcommunity7rabbita8internal3key3key, false);
    sub_map.val = _M0FP419moonbit_2dcommunity7rabbita8internal7runtime10diff__subs(sub_map.val, new_subs, scheduler);
    return;
  }
}
function _M0MP419moonbit_2dcommunity7rabbita8internal7runtime7Sandbox22create__state__machineGiRP310tonyfettes31rabbita_2dmidpull_2ddrain_2dmre4main10CounterMsgE(scheduler, initialize, update, subscriptions) {
  const id = _M0MP419moonbit_2dcommunity7rabbita8internal7slotmap7SlotMap8allocateGRP419moonbit_2dcommunity7rabbita8internal7runtime5StoreE(_M0FP419moonbit_2dcommunity7rabbita8internal7runtime14global__stores);
  const emit = _M0FP319moonbit_2dcommunity7rabbita3cmd13make__emitterGRP310tonyfettes31rabbita_2dmidpull_2ddrain_2dmre4main10CounterMsgE(id);
  const _bind = [];
  const sub_map = new _M0TPB8MutLocalGRPB3MapGsRP319moonbit_2dcommunity7rabbita3sub10RunningSubEE(_M0MPB3Map3MapGsRP319moonbit_2dcommunity7rabbita3sub10RunningSubE(new _M0TPB9ArrayViewGUsRP319moonbit_2dcommunity7rabbita3sub10RunningSubEE(_bind, 0, 0), undefined));
  const _env = { _0: sub_map, _1: emit, _2: subscriptions };
  const _bind$2 = _M0FP419moonbit_2dcommunity7rabbita8internal6duplix5inputGOiE(undefined);
  const _model = _bind$2._0;
  const _set_model = _bind$2._1;
  const _bind$3 = initialize(emit);
  const _model_value = _bind$3._0;
  const _init_cmd = _bind$3._1;
  _set_model(_model_value);
  const on_update = (scheduler$2, msg) => {
    const msg$2 = msg.value;
    const old_model = _M0MP419moonbit_2dcommunity7rabbita8internal6duplix4Node4readGOiE(_model);
    let _tmp;
    if (old_model === undefined) {
      _tmp = $panic();
    } else {
      const _p = old_model;
      _tmp = _p;
    }
    const _bind$4 = update(emit, msg$2, _tmp);
    const _new_model = _bind$4._0;
    const _cmd = _bind$4._1;
    _M0MP419moonbit_2dcommunity7rabbita8internal7runtime7Sandbox22create__state__machineN12handle__subsS129GiRP310tonyfettes31rabbita_2dmidpull_2ddrain_2dmre4main10CounterMsgE(_env, scheduler$2, _new_model);
    _set_model(_new_model);
    scheduler$2.method_table.method_3(scheduler$2.self, _cmd);
  };
  _M0MP419moonbit_2dcommunity7rabbita8internal7slotmap7SlotMap5writeGRP419moonbit_2dcommunity7rabbita8internal7runtime5StoreE(_M0FP419moonbit_2dcommunity7rabbita8internal7runtime14global__stores, id, new _M0TP419moonbit_2dcommunity7rabbita8internal7runtime5Store(id, on_update));
  _M0FP419moonbit_2dcommunity7rabbita8internal6duplix11on__cleanup(() => {
    _M0FP419moonbit_2dcommunity7rabbita8internal7runtime14cleanup__store(id, sub_map.val, { self: scheduler, method_table: _M0FP0118moonbit_2dcommunity_2frabbita_2finternal_2fruntime_2fSandbox_24as_24_40moonbit_2dcommunity_2frabbita_2fcmd_2eScheduler });
  });
  _M0IP016_24default__implP319moonbit_2dcommunity7rabbita3cmd9Scheduler3addGRP419moonbit_2dcommunity7rabbita8internal7runtime7SandboxE(scheduler, _init_cmd);
  const _tmp = { self: scheduler, method_table: _M0FP0118moonbit_2dcommunity_2frabbita_2finternal_2fruntime_2fSandbox_24as_24_40moonbit_2dcommunity_2frabbita_2fcmd_2eScheduler };
  const _p = _M0MP419moonbit_2dcommunity7rabbita8internal6duplix4Node4readGOiE(_model);
  let _tmp$2;
  if (_p === undefined) {
    _tmp$2 = $panic();
  } else {
    const _p$2 = _p;
    _tmp$2 = _p$2;
  }
  _M0MP419moonbit_2dcommunity7rabbita8internal7runtime7Sandbox22create__state__machineN12handle__subsS129GiRP310tonyfettes31rabbita_2dmidpull_2ddrain_2dmre4main10CounterMsgE(_env, _tmp, _tmp$2);
  return { _0: _M0MP419moonbit_2dcommunity7rabbita8internal6duplix4Node3mapGOiiE(_model, (x) => {
    if (x === undefined) {
      return $panic();
    } else {
      const _p$2 = x;
      return _p$2;
    }
  }), _1: emit };
}
function _M0MP419moonbit_2dcommunity7rabbita8internal7runtime7Sandbox22create__state__machineGbRP310tonyfettes31rabbita_2dmidpull_2ddrain_2dmre4main6TabMsgE(scheduler, initialize, update, subscriptions) {
  const id = _M0MP419moonbit_2dcommunity7rabbita8internal7slotmap7SlotMap8allocateGRP419moonbit_2dcommunity7rabbita8internal7runtime5StoreE(_M0FP419moonbit_2dcommunity7rabbita8internal7runtime14global__stores);
  const emit = _M0FP319moonbit_2dcommunity7rabbita3cmd13make__emitterGRP310tonyfettes31rabbita_2dmidpull_2ddrain_2dmre4main6TabMsgE(id);
  const _bind = [];
  const sub_map = new _M0TPB8MutLocalGRPB3MapGsRP319moonbit_2dcommunity7rabbita3sub10RunningSubEE(_M0MPB3Map3MapGsRP319moonbit_2dcommunity7rabbita3sub10RunningSubE(new _M0TPB9ArrayViewGUsRP319moonbit_2dcommunity7rabbita3sub10RunningSubEE(_bind, 0, 0), undefined));
  const _env = { _0: sub_map, _1: emit, _2: subscriptions };
  const _bind$2 = _M0FP419moonbit_2dcommunity7rabbita8internal6duplix5inputGObE(-1);
  const _model = _bind$2._0;
  const _set_model = _bind$2._1;
  const _bind$3 = initialize(emit);
  const _model_value = _bind$3._0;
  const _init_cmd = _bind$3._1;
  _set_model(_model_value);
  const on_update = (scheduler$2, msg) => {
    const msg$2 = msg.value;
    const old_model = _M0MP419moonbit_2dcommunity7rabbita8internal6duplix4Node4readGObE(_model);
    const _bind$4 = update(emit, msg$2, old_model === -1 ? $panic() : old_model);
    const _new_model = _bind$4._0;
    const _cmd = _bind$4._1;
    _M0MP419moonbit_2dcommunity7rabbita8internal7runtime7Sandbox22create__state__machineN12handle__subsS129GbRP310tonyfettes31rabbita_2dmidpull_2ddrain_2dmre4main6TabMsgE(_env, scheduler$2, _new_model);
    _set_model(_new_model);
    scheduler$2.method_table.method_3(scheduler$2.self, _cmd);
  };
  _M0MP419moonbit_2dcommunity7rabbita8internal7slotmap7SlotMap5writeGRP419moonbit_2dcommunity7rabbita8internal7runtime5StoreE(_M0FP419moonbit_2dcommunity7rabbita8internal7runtime14global__stores, id, new _M0TP419moonbit_2dcommunity7rabbita8internal7runtime5Store(id, on_update));
  _M0FP419moonbit_2dcommunity7rabbita8internal6duplix11on__cleanup(() => {
    _M0FP419moonbit_2dcommunity7rabbita8internal7runtime14cleanup__store(id, sub_map.val, { self: scheduler, method_table: _M0FP0118moonbit_2dcommunity_2frabbita_2finternal_2fruntime_2fSandbox_24as_24_40moonbit_2dcommunity_2frabbita_2fcmd_2eScheduler });
  });
  _M0IP016_24default__implP319moonbit_2dcommunity7rabbita3cmd9Scheduler3addGRP419moonbit_2dcommunity7rabbita8internal7runtime7SandboxE(scheduler, _init_cmd);
  const _tmp = { self: scheduler, method_table: _M0FP0118moonbit_2dcommunity_2frabbita_2finternal_2fruntime_2fSandbox_24as_24_40moonbit_2dcommunity_2frabbita_2fcmd_2eScheduler };
  const _p = _M0MP419moonbit_2dcommunity7rabbita8internal6duplix4Node4readGObE(_model);
  _M0MP419moonbit_2dcommunity7rabbita8internal7runtime7Sandbox22create__state__machineN12handle__subsS129GbRP310tonyfettes31rabbita_2dmidpull_2ddrain_2dmre4main6TabMsgE(_env, _tmp, _p === -1 ? $panic() : _p);
  return { _0: _M0MP419moonbit_2dcommunity7rabbita8internal6duplix4Node3mapGObbE(_model, (x) => x === -1 ? $panic() : x), _1: emit };
}
function _M0MP419moonbit_2dcommunity7rabbita8internal7runtime7Sandbox22create__state__machineGuuE(scheduler, initialize, update, subscriptions) {
  const id = _M0MP419moonbit_2dcommunity7rabbita8internal7slotmap7SlotMap8allocateGRP419moonbit_2dcommunity7rabbita8internal7runtime5StoreE(_M0FP419moonbit_2dcommunity7rabbita8internal7runtime14global__stores);
  const emit = _M0FP319moonbit_2dcommunity7rabbita3cmd13make__emitterGuE(id);
  const _bind = [];
  const sub_map = new _M0TPB8MutLocalGRPB3MapGsRP319moonbit_2dcommunity7rabbita3sub10RunningSubEE(_M0MPB3Map3MapGsRP319moonbit_2dcommunity7rabbita3sub10RunningSubE(new _M0TPB9ArrayViewGUsRP319moonbit_2dcommunity7rabbita3sub10RunningSubEE(_bind, 0, 0), undefined));
  const _env = { _0: sub_map, _1: emit, _2: subscriptions };
  const _bind$2 = _M0FP419moonbit_2dcommunity7rabbita8internal6duplix5inputGOuE(-1);
  const _model = _bind$2._0;
  const _set_model = _bind$2._1;
  const _bind$3 = initialize(emit);
  const _model_value = _bind$3._0;
  const _init_cmd = _bind$3._1;
  _set_model(_model_value);
  const on_update = (scheduler$2, msg) => {
    const msg$2 = msg.value;
    const old_model = _M0MP419moonbit_2dcommunity7rabbita8internal6duplix4Node4readGOuE(_model);
    if (old_model === -1) {
      $panic();
    }
    const _bind$4 = update(emit, msg$2, undefined);
    const _new_model = _bind$4._0;
    const _cmd = _bind$4._1;
    _M0MP419moonbit_2dcommunity7rabbita8internal7runtime7Sandbox22create__state__machineN12handle__subsS129GuuE(_env, scheduler$2, _new_model);
    _set_model(_new_model);
    scheduler$2.method_table.method_3(scheduler$2.self, _cmd);
  };
  _M0MP419moonbit_2dcommunity7rabbita8internal7slotmap7SlotMap5writeGRP419moonbit_2dcommunity7rabbita8internal7runtime5StoreE(_M0FP419moonbit_2dcommunity7rabbita8internal7runtime14global__stores, id, new _M0TP419moonbit_2dcommunity7rabbita8internal7runtime5Store(id, on_update));
  _M0FP419moonbit_2dcommunity7rabbita8internal6duplix11on__cleanup(() => {
    _M0FP419moonbit_2dcommunity7rabbita8internal7runtime14cleanup__store(id, sub_map.val, { self: scheduler, method_table: _M0FP0118moonbit_2dcommunity_2frabbita_2finternal_2fruntime_2fSandbox_24as_24_40moonbit_2dcommunity_2frabbita_2fcmd_2eScheduler });
  });
  _M0IP016_24default__implP319moonbit_2dcommunity7rabbita3cmd9Scheduler3addGRP419moonbit_2dcommunity7rabbita8internal7runtime7SandboxE(scheduler, _init_cmd);
  const _tmp = { self: scheduler, method_table: _M0FP0118moonbit_2dcommunity_2frabbita_2finternal_2fruntime_2fSandbox_24as_24_40moonbit_2dcommunity_2frabbita_2fcmd_2eScheduler };
  const _p = _M0MP419moonbit_2dcommunity7rabbita8internal6duplix4Node4readGOuE(_model);
  if (_p === -1) {
    $panic();
  }
  _M0MP419moonbit_2dcommunity7rabbita8internal7runtime7Sandbox22create__state__machineN12handle__subsS129GuuE(_env, _tmp, undefined);
  return { _0: _M0MP419moonbit_2dcommunity7rabbita8internal6duplix4Node3mapGOuuE(_model, (x) => {
    if (x === -1) {
      $panic();
      return;
    } else {
      return;
    }
  }), _1: emit };
}
function _M0MP419moonbit_2dcommunity7rabbita8internal7runtime7Sandbox3new() {
  const sandbox = new _M0TPB8MutLocalGORP419moonbit_2dcommunity7rabbita8internal7runtime7SandboxE(undefined);
  const captured_link_listener = (event) => {
    const _bind = _M0IP016_24default__implP319moonbit_2dcommunity7rabbita3dom7IsEvent16to__mouse__eventGRP319moonbit_2dcommunity7rabbita3dom5EventE(event);
    if (_bind.$tag === 1) {
      const _Some = _bind;
      const _mouse_event = _Some._0;
      const _bind$2 = sandbox.val;
      if (_bind$2 === undefined) {
        return;
      } else {
        const _Some$2 = _bind$2;
        const _sandbox = _Some$2;
        const _bind$3 = _sandbox.hooks.url_request;
        if (_bind$3 === undefined) {
          return;
        } else {
          const _Some$3 = _bind$3;
          const _hook = _Some$3;
          if (!(_M0IP016_24default__implP319moonbit_2dcommunity7rabbita3dom12IsMouseEvent14get__meta__keyGRP319moonbit_2dcommunity7rabbita3dom10MouseEventE(_mouse_event) || _M0IP016_24default__implP319moonbit_2dcommunity7rabbita3dom12IsMouseEvent14get__ctrl__keyGRP319moonbit_2dcommunity7rabbita3dom10MouseEventE(_mouse_event))) {
            _M0IP016_24default__implP319moonbit_2dcommunity7rabbita3dom7IsEvent16prevent__defaultGRP319moonbit_2dcommunity7rabbita3dom5EventE(event);
            const href = _M0MP319moonbit_2dcommunity7rabbita2js8Optional6unwrapGsE(_M0IP016_24default__implP319moonbit_2dcommunity7rabbita3dom9IsElement13get__propertyGRP319moonbit_2dcommunity7rabbita3dom7ElementE(_M0MPC16option6Option6unwrapGRP319moonbit_2dcommunity7rabbita3dom7ElementE(_M0IP016_24default__implP319moonbit_2dcommunity7rabbita3dom13IsEventTarget11to__elementGRP319moonbit_2dcommunity7rabbita3dom11EventTargetE(_M0MP319moonbit_2dcommunity7rabbita2js8Nullable6unwrapGRP319moonbit_2dcommunity7rabbita3dom7ElementE(_M0IP016_24default__implP319moonbit_2dcommunity7rabbita3dom7IsEvent15current__targetGRP319moonbit_2dcommunity7rabbita3dom5EventE(event)))), "href"));
            _hook({ self: _sandbox, method_table: _M0FP0118moonbit_2dcommunity_2frabbita_2finternal_2fruntime_2fSandbox_24as_24_40moonbit_2dcommunity_2frabbita_2fcmd_2eScheduler }, href);
            return;
          } else {
            return;
          }
        }
      }
    } else {
      return;
    }
  };
  const _bind = [];
  const _bind$2 = _M0MPC15queue5Queue5QueueGURP419moonbit_2dcommunity7rabbita8internal7slotmap2IdRP419moonbit_2dcommunity7rabbita8internal3any3AnyEE(new _M0TPB9ArrayViewGURP419moonbit_2dcommunity7rabbita8internal7slotmap2IdRP419moonbit_2dcommunity7rabbita8internal3any3AnyEE(_bind, 0, 0));
  const _bind$3 = undefined;
  const _bind$4 = undefined;
  const _bind$5 = new _M0TP319moonbit_2dcommunity7rabbita3cmd5Hooks(undefined, undefined);
  const _bind$6 = [];
  const _bind$7 = _M0MPC15queue5Queue5QueueGURP419moonbit_2dcommunity7rabbita8internal7slotmap2IdRP419moonbit_2dcommunity7rabbita8internal3any3AnyEE(new _M0TPB9ArrayViewGWRP319moonbit_2dcommunity7rabbita3cmd9SchedulerEuE(_bind$6, 0, 0));
  const sandbox_value = new _M0TP419moonbit_2dcommunity7rabbita8internal7runtime7Sandbox(_bind$7, _bind$2, _bind$3, false, false, _bind$4, captured_link_listener, _M0MP419moonbit_2dcommunity7rabbita8internal7runtime7Sandbox3newN7_2abindS1191, _bind$5);
  sandbox.val = sandbox_value;
  return sandbox_value;
}
function _M0IP419moonbit_2dcommunity7rabbita8internal7runtime7SandboxP319moonbit_2dcommunity7rabbita3cmd9Scheduler5hooks(self) {
  return self.hooks;
}
function _M0MP419moonbit_2dcommunity7rabbita8internal7runtime7Sandbox10initialize(self, vnode) {
  const element = _M0MP319moonbit_2dcommunity7rabbita2js8Nullable6unwrapGRP319moonbit_2dcommunity7rabbita3dom7ElementE(_M0MP319moonbit_2dcommunity7rabbita3dom8Document20get__element__by__id(_M0FP319moonbit_2dcommunity7rabbita3dom8document(), self.mount));
  const _bind = self.hooks.url_changed;
  if (_bind === undefined) {
  } else {
    const _Some = _bind;
    const _hook = _Some;
    _hook({ self: self, method_table: _M0FP0118moonbit_2dcommunity_2frabbita_2finternal_2fruntime_2fSandbox_24as_24_40moonbit_2dcommunity_2frabbita_2fcmd_2eScheduler }, _M0MP319moonbit_2dcommunity7rabbita3dom6Window12current__url(_M0FP319moonbit_2dcommunity7rabbita3dom6window()));
  }
  self.root_view = vnode;
  const _p = self.root_view;
  let _tmp;
  if (_p === undefined) {
    _tmp = $panic();
  } else {
    const _p$2 = _p;
    _tmp = _p$2;
  }
  const vnode$2 = _M0MP419moonbit_2dcommunity7rabbita8internal6duplix4Node4readGRP419moonbit_2dcommunity7rabbita8internal7runtime5VNodeE(_tmp);
  const inode = _M0MP419moonbit_2dcommunity7rabbita8internal7runtime5VNode6insert(vnode$2, self, _M0IP016_24default__implP319moonbit_2dcommunity7rabbita3dom6IsNode8as__nodeGRP319moonbit_2dcommunity7rabbita3dom7ElementE(element), _M0FP419moonbit_2dcommunity7rabbita8internal7runtime4nullGRP319moonbit_2dcommunity7rabbita3dom4NodeE());
  self.inode = inode;
}
function _M0MP419moonbit_2dcommunity7rabbita8internal7runtime7Sandbox5flush(self) {
  if (!self.paint_scheduled) {
    self.paint_scheduled = true;
    _M0MP319moonbit_2dcommunity7rabbita3dom6Window25request__animation__frame(_M0FP319moonbit_2dcommunity7rabbita3dom6window(), (_discard_) => {
      const _bind = self.inode;
      if (_bind === undefined) {
      } else {
        const _Some = _bind;
        const _inode = _Some;
        const end = _M0MP419moonbit_2dcommunity7rabbita8internal7runtime5INode3end(_inode);
        const parent = _M0MP319moonbit_2dcommunity7rabbita2js8Nullable6unwrapGRP319moonbit_2dcommunity7rabbita3dom7ElementE(_M0IP016_24default__implP319moonbit_2dcommunity7rabbita3dom6IsNode17get__parent__nodeGRP319moonbit_2dcommunity7rabbita3dom4NodeE(end));
        const next_sibling = _M0IP016_24default__implP319moonbit_2dcommunity7rabbita3dom6IsNode18get__next__siblingGRP319moonbit_2dcommunity7rabbita3dom4NodeE(end);
        const _p = self.root_view;
        let _tmp;
        if (_p === undefined) {
          _tmp = $panic();
        } else {
          const _p$2 = _p;
          _tmp = _p$2;
        }
        const vnode = _M0MP419moonbit_2dcommunity7rabbita8internal6duplix4Node4readGRP419moonbit_2dcommunity7rabbita8internal7runtime5VNodeE(_tmp);
        const inode = _M0FP419moonbit_2dcommunity7rabbita8internal7runtime10diff__node(_inode, vnode, self, parent, next_sibling);
        self.inode = inode;
      }
      self.paint_scheduled = false;
      while (true) {
        const _bind$2 = _M0MPC15queue5Queue3popGWRP319moonbit_2dcommunity7rabbita3cmd9SchedulerEuE(self.after_render_queue);
        if (_bind$2 === undefined) {
          return;
        } else {
          const _Some = _bind$2;
          const _f = _Some;
          _f({ self: self, method_table: _M0FP0118moonbit_2dcommunity_2frabbita_2finternal_2fruntime_2fSandbox_24as_24_40moonbit_2dcommunity_2frabbita_2fcmd_2eScheduler });
          continue;
        }
      }
    });
    return;
  } else {
    return;
  }
}
function _M0IP419moonbit_2dcommunity7rabbita8internal7runtime7SandboxP319moonbit_2dcommunity7rabbita3cmd9Scheduler11run__effect(self, kind, f) {
  if (kind === 0) {
    f({ self: self, method_table: _M0FP0118moonbit_2dcommunity_2frabbita_2finternal_2fruntime_2fSandbox_24as_24_40moonbit_2dcommunity_2frabbita_2fcmd_2eScheduler });
    return;
  } else {
    _M0MPC15queue5Queue4pushGWRP319moonbit_2dcommunity7rabbita3cmd9SchedulerEuE(self.after_render_queue, f);
    return;
  }
}
function _M0IP419moonbit_2dcommunity7rabbita8internal7runtime7SandboxP319moonbit_2dcommunity7rabbita3cmd9Scheduler14queue__message(self, path, msg) {
  _M0MPC15queue5Queue4pushGWRP319moonbit_2dcommunity7rabbita3cmd9SchedulerEuE(self.msg_queue, { _0: path, _1: msg });
}
function _M0IP419moonbit_2dcommunity7rabbita8internal7runtime7SandboxP319moonbit_2dcommunity7rabbita3cmd9Scheduler14drain__message(self) {
  if (!self.drain_scheduled) {
    self.drain_scheduled = true;
    while (true) {
      const _bind = _M0MPC15queue5Queue3popGWRP319moonbit_2dcommunity7rabbita3cmd9SchedulerEuE(self.msg_queue);
      if (_bind === undefined) {
        break;
      } else {
        const _Some = _bind;
        const _x = _Some;
        const _id = _x._0;
        const _erased_msg = _x._1;
        const _bind$2 = _M0MP419moonbit_2dcommunity7rabbita8internal7slotmap7SlotMap3getGRP419moonbit_2dcommunity7rabbita8internal7runtime5StoreE(_M0FP419moonbit_2dcommunity7rabbita8internal7runtime14global__stores, _id);
        if (_bind$2 === undefined) {
          continue;
        } else {
          const _Some$2 = _bind$2;
          const _store = _Some$2;
          const _func = _store.on_update;
          _func({ self: self, method_table: _M0FP0118moonbit_2dcommunity_2frabbita_2finternal_2fruntime_2fSandbox_24as_24_40moonbit_2dcommunity_2frabbita_2fcmd_2eScheduler }, _erased_msg);
        }
        continue;
      }
    }
    self.drain_scheduled = false;
    _M0MP419moonbit_2dcommunity7rabbita8internal7runtime7Sandbox5flush(self);
    return;
  } else {
    return;
  }
}
function _M0IP319moonbit_2dcommunity7rabbita4html4HtmlPB2Eq5equal(_x_1971, _x_1972) {
  return _x_1971 === _x_1972;
}
function _M0MP319moonbit_2dcommunity7rabbita4html5Attrs9attribute(self, key, value) {
  _M0MPB3Map3setGssE(self.attrs, key, value);
  return self;
}
function _M0FP319moonbit_2dcommunity7rabbita4html11push__style(style, attrs) {
  if (style.length > 0) {
    _M0MP319moonbit_2dcommunity7rabbita4html5Attrs9attribute(attrs, "style", _M0MPC15array5Array4joinGsE(style, new _M0TPC16string10StringView(_M0FP319moonbit_2dcommunity7rabbita4html11push__styleN7_2abindS1976, 0, _M0FP319moonbit_2dcommunity7rabbita4html11push__styleN7_2abindS1976.length)));
    return;
  } else {
    return;
  }
}
function _M0FP319moonbit_2dcommunity7rabbita4html8push__id(value, attrs) {
  if (value === undefined) {
    return;
  } else {
    const _Some = value;
    const _v = _Some;
    _M0MP319moonbit_2dcommunity7rabbita4html5Attrs9attribute(attrs, "id", _v);
    return;
  }
}
function _M0FP319moonbit_2dcommunity7rabbita4html11push__class(value, attrs) {
  if (value === undefined) {
    return;
  } else {
    const _Some = value;
    const _v = _Some;
    _M0MP319moonbit_2dcommunity7rabbita4html5Attrs9attribute(attrs, "class", _v);
    return;
  }
}
function _M0MP319moonbit_2dcommunity7rabbita4html5Attrs7handler(self, key, value) {
  const _bind = _M0MPB3Map3getGsWRP319moonbit_2dcommunity7rabbita3dom5EventRP319moonbit_2dcommunity7rabbita3cmd9SchedulerEuE(self.handlers, key);
  if (_bind === undefined) {
    _M0MPB3Map3setGsWRP319moonbit_2dcommunity7rabbita3dom5EventRP319moonbit_2dcommunity7rabbita3cmd9SchedulerEuE(self.handlers, key, value);
  } else {
    const _Some = _bind;
    const _previous = _Some;
    _M0MPB3Map3setGsWRP319moonbit_2dcommunity7rabbita3dom5EventRP319moonbit_2dcommunity7rabbita3cmd9SchedulerEuE(self.handlers, key, (event, scheduler) => {
      _previous(event, scheduler);
      value(event, scheduler);
    });
  }
  return self;
}
function _M0MP319moonbit_2dcommunity7rabbita4html5Attrs16on__mouse__event(self, event, msg) {
  return _M0MP319moonbit_2dcommunity7rabbita4html5Attrs7handler(self, event, (event$2, scheduler) => {
    scheduler.method_table.method_3(scheduler.self, msg(_M0MPC16option6Option6unwrapGRP319moonbit_2dcommunity7rabbita3dom7ElementE(_M0IP016_24default__implP319moonbit_2dcommunity7rabbita3dom7IsEvent16to__mouse__eventGRP319moonbit_2dcommunity7rabbita3dom5EventE(event$2))));
  });
}
function _M0MP319moonbit_2dcommunity7rabbita4html5Attrs9on__click(self, msg) {
  return _M0MP319moonbit_2dcommunity7rabbita4html5Attrs16on__mouse__event(self, "click", msg);
}
function _M0FP319moonbit_2dcommunity7rabbita4html11push__click(value, attrs) {
  if (value === undefined) {
    return;
  } else {
    const _Some = value;
    const _v = _Some;
    _M0MP319moonbit_2dcommunity7rabbita4html5Attrs9on__click(attrs, (_discard_) => _v);
    return;
  }
}
function _M0FP319moonbit_2dcommunity7rabbita4html16mouse__from__dom(event) {
  return _M0MP319moonbit_2dcommunity7rabbita6common5Mouse3new(new _M0TP319moonbit_2dcommunity7rabbita6common3Pos(_M0IP016_24default__implP319moonbit_2dcommunity7rabbita3dom12IsMouseEvent14get__screen__xGRP319moonbit_2dcommunity7rabbita3dom10MouseEventE(event), _M0IP016_24default__implP319moonbit_2dcommunity7rabbita3dom12IsMouseEvent14get__screen__yGRP319moonbit_2dcommunity7rabbita3dom10MouseEventE(event)), new _M0TP319moonbit_2dcommunity7rabbita6common3Pos(_M0IP016_24default__implP319moonbit_2dcommunity7rabbita3dom12IsMouseEvent14get__offset__xGRP319moonbit_2dcommunity7rabbita3dom10MouseEventE(event), _M0IP016_24default__implP319moonbit_2dcommunity7rabbita3dom12IsMouseEvent14get__offset__yGRP319moonbit_2dcommunity7rabbita3dom10MouseEventE(event)), new _M0TP319moonbit_2dcommunity7rabbita6common3Pos(_M0IP016_24default__implP319moonbit_2dcommunity7rabbita3dom12IsMouseEvent14get__client__xGRP319moonbit_2dcommunity7rabbita3dom10MouseEventE(event), _M0IP016_24default__implP319moonbit_2dcommunity7rabbita3dom12IsMouseEvent14get__client__yGRP319moonbit_2dcommunity7rabbita3dom10MouseEventE(event)));
}
function _M0FP319moonbit_2dcommunity7rabbita4html19keyboard__from__dom(event) {
  return _M0MP319moonbit_2dcommunity7rabbita6common8Keyboard3new(_M0MP319moonbit_2dcommunity7rabbita3dom13KeyboardEvent3key(event), _M0MP319moonbit_2dcommunity7rabbita3dom13KeyboardEvent4code(event), _M0MP319moonbit_2dcommunity7rabbita3dom13KeyboardEvent8alt__key(event), _M0MP319moonbit_2dcommunity7rabbita3dom13KeyboardEvent9ctrl__key(event), _M0MP319moonbit_2dcommunity7rabbita3dom13KeyboardEvent10shift__key(event), _M0MP319moonbit_2dcommunity7rabbita3dom13KeyboardEvent9meta__key(event), _M0MP319moonbit_2dcommunity7rabbita3dom13KeyboardEvent13is__composing(event), _M0MP319moonbit_2dcommunity7rabbita3dom13KeyboardEvent6repeat(event), _M0MP319moonbit_2dcommunity7rabbita3dom13KeyboardEvent8location(event));
}
function _M0FP319moonbit_2dcommunity7rabbita4html17scroll__from__dom(element) {
  return _M0MP319moonbit_2dcommunity7rabbita6common6Scroll3new(new _M0TP319moonbit_2dcommunity7rabbita6common3Pos(_M0MPC16double6Double7to__int(_M0IP016_24default__implP319moonbit_2dcommunity7rabbita3dom9IsElement17get__scroll__leftGRP319moonbit_2dcommunity7rabbita3dom7ElementE(element)), _M0MPC16double6Double7to__int(_M0IP016_24default__implP319moonbit_2dcommunity7rabbita3dom9IsElement16get__scroll__topGRP319moonbit_2dcommunity7rabbita3dom7ElementE(element))), _M0MPC16double6Double7to__int(_M0IP016_24default__implP319moonbit_2dcommunity7rabbita3dom9IsElement18get__scroll__widthGRP319moonbit_2dcommunity7rabbita3dom7ElementE(element)), _M0MPC16double6Double7to__int(_M0IP016_24default__implP319moonbit_2dcommunity7rabbita3dom9IsElement19get__scroll__heightGRP319moonbit_2dcommunity7rabbita3dom7ElementE(element)));
}
function _M0MP319moonbit_2dcommunity7rabbita4html5Attrs13on__mousedown(self, msg) {
  return _M0MP319moonbit_2dcommunity7rabbita4html5Attrs16on__mouse__event(self, "mousedown", msg);
}
function _M0FP319moonbit_2dcommunity7rabbita4html15push__mousedown(value, attrs) {
  if (value === undefined) {
    return;
  } else {
    const _Some = value;
    const _v = _Some;
    _M0MP319moonbit_2dcommunity7rabbita4html5Attrs13on__mousedown(attrs, (event) => {
      const _func = _v;
      return _func(_M0FP319moonbit_2dcommunity7rabbita4html16mouse__from__dom(event));
    });
    return;
  }
}
function _M0MP319moonbit_2dcommunity7rabbita4html5Attrs11on__mouseup(self, msg) {
  return _M0MP319moonbit_2dcommunity7rabbita4html5Attrs16on__mouse__event(self, "mouseup", msg);
}
function _M0FP319moonbit_2dcommunity7rabbita4html13push__mouseup(value, attrs) {
  if (value === undefined) {
    return;
  } else {
    const _Some = value;
    const _v = _Some;
    _M0MP319moonbit_2dcommunity7rabbita4html5Attrs11on__mouseup(attrs, (event) => {
      const _func = _v;
      return _func(_M0FP319moonbit_2dcommunity7rabbita4html16mouse__from__dom(event));
    });
    return;
  }
}
function _M0MP319moonbit_2dcommunity7rabbita4html5Attrs10on__scroll(self, msg) {
  return _M0MP319moonbit_2dcommunity7rabbita4html5Attrs7handler(self, "scroll", (event, scheduler) => {
    scheduler.method_table.method_3(scheduler.self, msg(_M0FP319moonbit_2dcommunity7rabbita4html28scroll__event__as__ui__event(event)));
  });
}
function _M0FP319moonbit_2dcommunity7rabbita4html12push__scroll(value, attrs) {
  if (value === undefined) {
    return;
  } else {
    const _Some = value;
    const _v = _Some;
    _M0MP319moonbit_2dcommunity7rabbita4html5Attrs10on__scroll(attrs, (event) => {
      const element = _M0MPC16option6Option6unwrapGRP319moonbit_2dcommunity7rabbita3dom7ElementE(_M0IP016_24default__implP319moonbit_2dcommunity7rabbita3dom13IsEventTarget11to__elementGRP319moonbit_2dcommunity7rabbita3dom11EventTargetE(_M0IP016_24default__implP319moonbit_2dcommunity7rabbita3dom7IsEvent6targetGRP319moonbit_2dcommunity7rabbita3dom7UIEventE(event)));
      const _func = _v;
      return _func(_M0FP319moonbit_2dcommunity7rabbita4html17scroll__from__dom(element));
    });
    return;
  }
}
function _M0MP319moonbit_2dcommunity7rabbita4html5Attrs19on__keyboard__event(self, event, msg) {
  return _M0MP319moonbit_2dcommunity7rabbita4html5Attrs7handler(self, event, (event$2, scheduler) => {
    scheduler.method_table.method_3(scheduler.self, msg(_M0MPC16option6Option6unwrapGRP319moonbit_2dcommunity7rabbita3dom7ElementE(_M0IP016_24default__implP319moonbit_2dcommunity7rabbita3dom7IsEvent19to__keyboard__eventGRP319moonbit_2dcommunity7rabbita3dom5EventE(event$2))));
  });
}
function _M0MP319moonbit_2dcommunity7rabbita4html5Attrs11on__keydown(self, msg) {
  return _M0MP319moonbit_2dcommunity7rabbita4html5Attrs19on__keyboard__event(self, "keydown", msg);
}
function _M0FP319moonbit_2dcommunity7rabbita4html13push__keydown(value, attrs) {
  if (value === undefined) {
    return;
  } else {
    const _Some = value;
    const _v = _Some;
    _M0MP319moonbit_2dcommunity7rabbita4html5Attrs11on__keydown(attrs, (event) => {
      const _func = _v;
      return _func(_M0FP319moonbit_2dcommunity7rabbita4html19keyboard__from__dom(event));
    });
    return;
  }
}
function _M0MP319moonbit_2dcommunity7rabbita4html5Attrs9on__keyup(self, msg) {
  return _M0MP319moonbit_2dcommunity7rabbita4html5Attrs19on__keyboard__event(self, "keyup", msg);
}
function _M0FP319moonbit_2dcommunity7rabbita4html11push__keyup(value, attrs) {
  if (value === undefined) {
    return;
  } else {
    const _Some = value;
    const _v = _Some;
    _M0MP319moonbit_2dcommunity7rabbita4html5Attrs9on__keyup(attrs, (event) => {
      const _func = _v;
      return _func(_M0FP319moonbit_2dcommunity7rabbita4html19keyboard__from__dom(event));
    });
    return;
  }
}
function _M0MP319moonbit_2dcommunity7rabbita4html5Attrs8property(self, key, value) {
  _M0MPB3Map3setGsRP319moonbit_2dcommunity7rabbita7variant7VariantE(self.props, key, value);
  return self;
}
function _M0FP319moonbit_2dcommunity7rabbita4html25push__value__attr__string(value, attrs) {
  if (value === undefined) {
    return;
  } else {
    const _Some = value;
    const _v = _Some;
    _M0MP319moonbit_2dcommunity7rabbita4html5Attrs9attribute(attrs, "value", _v);
    return;
  }
}
function _M0FP319moonbit_2dcommunity7rabbita4html11push__title(value, attrs) {
  if (value === undefined) {
    return;
  } else {
    const _Some = value;
    const _v = _Some;
    _M0MP319moonbit_2dcommunity7rabbita4html5Attrs9attribute(attrs, "title", _v);
    return;
  }
}
function _M0FP319moonbit_2dcommunity7rabbita4html10push__name(value, attrs) {
  if (value === undefined) {
    return;
  } else {
    const _Some = value;
    const _v = _Some;
    _M0MP319moonbit_2dcommunity7rabbita4html5Attrs9attribute(attrs, "name", _v);
    return;
  }
}
function _M0FP319moonbit_2dcommunity7rabbita4html14push__disabled(value, attrs) {
  if (value === -1) {
    return;
  } else {
    const _Some = value;
    const _v = _Some;
    _M0MP319moonbit_2dcommunity7rabbita4html5Attrs8property(attrs, "disabled", new _M0DTP319moonbit_2dcommunity7rabbita7variant7Variant7Boolean(_v));
    return;
  }
}
function _M0FP319moonbit_2dcommunity7rabbita4html12push__hidden(value, attrs) {
  if (value === -1) {
    return;
  } else {
    const _Some = value;
    const _v = _Some;
    _M0MP319moonbit_2dcommunity7rabbita4html5Attrs8property(attrs, "hidden", new _M0DTP319moonbit_2dcommunity7rabbita7variant7Variant7Boolean(_v));
    return;
  }
}
function _M0FP319moonbit_2dcommunity7rabbita4html10push__type(value, attrs) {
  if (value === undefined) {
    return;
  } else {
    const _Some = value;
    const _v = _Some;
    _M0MP319moonbit_2dcommunity7rabbita4html5Attrs9attribute(attrs, "type", _v);
    return;
  }
}
function _M0FP319moonbit_2dcommunity7rabbita4html15push__autofocus(value, attrs) {
  if (value === -1) {
    return;
  } else {
    const _Some = value;
    const _v = _Some;
    _M0MP319moonbit_2dcommunity7rabbita4html5Attrs8property(attrs, "autofocus", new _M0DTP319moonbit_2dcommunity7rabbita7variant7Variant7Boolean(_v));
    return;
  }
}
function _M0FP319moonbit_2dcommunity7rabbita4html10push__cite(value, attrs) {
  if (value === undefined) {
    return;
  } else {
    const _Some = value;
    const _v = _Some;
    _M0MP319moonbit_2dcommunity7rabbita4html5Attrs9attribute(attrs, "cite", _v);
    return;
  }
}
function _M0FP319moonbit_2dcommunity7rabbita4html4nodeGRPB5ArrayGRP319moonbit_2dcommunity7rabbita4html4HtmlEE(tag, attrs, children) {
  const props = attrs;
  const _p = _M0IPC15array5ArrayP319moonbit_2dcommunity7rabbita4html10IsChildren12to__children(children);
  const _p$2 = undefined;
  return new _M0DTP419moonbit_2dcommunity7rabbita8internal7runtime5VNode4Elem(tag, props, _p, _p$2);
}
function _M0FP319moonbit_2dcommunity7rabbita4html4nodeGsE(tag, attrs, children) {
  const props = attrs;
  const _p = _M0IPC16string6StringP319moonbit_2dcommunity7rabbita4html10IsChildren12to__children(children);
  const _p$2 = undefined;
  return new _M0DTP419moonbit_2dcommunity7rabbita8internal7runtime5VNode4Elem(tag, props, _p, _p$2);
}
function _M0MP319moonbit_2dcommunity7rabbita4html5Attrs5build() {
  const _bind = [];
  const _tmp = _M0MPB3Map3MapGssE(new _M0TPB9ArrayViewGUssEE(_bind, 0, 0), undefined);
  const _bind$2 = [];
  const _tmp$2 = _M0MPB3Map3MapGsRP319moonbit_2dcommunity7rabbita7variant7VariantE(new _M0TPB9ArrayViewGUsRP319moonbit_2dcommunity7rabbita7variant7VariantEE(_bind$2, 0, 0), undefined);
  const _bind$3 = [];
  const _tmp$3 = _M0MPB3Map3MapGssE(new _M0TPB9ArrayViewGUssEE(_bind$3, 0, 0), undefined);
  const _bind$4 = [];
  return _M0MP419moonbit_2dcommunity7rabbita8internal7runtime5Props3new(_tmp, _tmp$2, _tmp$3, _M0MPB3Map3MapGsWRP319moonbit_2dcommunity7rabbita3dom5EventRP319moonbit_2dcommunity7rabbita3cmd9SchedulerEuE(new _M0TPB9ArrayViewGUsWRP319moonbit_2dcommunity7rabbita3dom5EventRP319moonbit_2dcommunity7rabbita3cmd9SchedulerEuEE(_bind$4, 0, 0), undefined));
}
function _M0MP319moonbit_2dcommunity7rabbita4html5Attrs4copy(self) {
  return _M0MP419moonbit_2dcommunity7rabbita8internal7runtime5Props4copy(self);
}
function _M0FP319moonbit_2dcommunity7rabbita4html14resolve__attrs(attrs) {
  if (attrs === undefined) {
    return _M0MP319moonbit_2dcommunity7rabbita4html5Attrs5build();
  } else {
    const _Some = attrs;
    const _a = _Some;
    return _M0MP319moonbit_2dcommunity7rabbita4html5Attrs4copy(_a);
  }
}
function _M0FP319moonbit_2dcommunity7rabbita4html14button_2einnerGsE(style, id, class_, title, hidden, type_, disabled, name, value, autofocus, on_click, attrs, children) {
  const attrs$2 = _M0FP319moonbit_2dcommunity7rabbita4html14resolve__attrs(attrs);
  _M0FP319moonbit_2dcommunity7rabbita4html11push__title(title, attrs$2);
  _M0FP319moonbit_2dcommunity7rabbita4html12push__hidden(hidden, attrs$2);
  _M0FP319moonbit_2dcommunity7rabbita4html10push__type(type_, attrs$2);
  _M0FP319moonbit_2dcommunity7rabbita4html14push__disabled(disabled, attrs$2);
  _M0FP319moonbit_2dcommunity7rabbita4html10push__name(name, attrs$2);
  _M0FP319moonbit_2dcommunity7rabbita4html25push__value__attr__string(value, attrs$2);
  _M0FP319moonbit_2dcommunity7rabbita4html15push__autofocus(autofocus, attrs$2);
  _M0FP319moonbit_2dcommunity7rabbita4html11push__click(on_click, attrs$2);
  _M0FP319moonbit_2dcommunity7rabbita4html11push__style(style, attrs$2);
  _M0FP319moonbit_2dcommunity7rabbita4html11push__class(class_, attrs$2);
  _M0FP319moonbit_2dcommunity7rabbita4html8push__id(id, attrs$2);
  return _M0FP319moonbit_2dcommunity7rabbita4html4nodeGsE("button", attrs$2, children);
}
function _M0FP319moonbit_2dcommunity7rabbita4html10h1_2einnerGsE(style, id, class_, title, hidden, cite, attrs, children) {
  const attrs$2 = _M0FP319moonbit_2dcommunity7rabbita4html14resolve__attrs(attrs);
  _M0FP319moonbit_2dcommunity7rabbita4html11push__title(title, attrs$2);
  _M0FP319moonbit_2dcommunity7rabbita4html12push__hidden(hidden, attrs$2);
  _M0FP319moonbit_2dcommunity7rabbita4html10push__cite(cite, attrs$2);
  _M0FP319moonbit_2dcommunity7rabbita4html11push__style(style, attrs$2);
  _M0FP319moonbit_2dcommunity7rabbita4html11push__class(class_, attrs$2);
  _M0FP319moonbit_2dcommunity7rabbita4html8push__id(id, attrs$2);
  return _M0FP319moonbit_2dcommunity7rabbita4html4nodeGsE("h1", attrs$2, children);
}
function _M0FP319moonbit_2dcommunity7rabbita4html2h1GsE(style$46$opt, id, class_, title, hidden, cite, attrs, children) {
  let style;
  if (style$46$opt.$tag === 1) {
    const _Some = style$46$opt;
    style = _Some._0;
  } else {
    style = [];
  }
  return _M0FP319moonbit_2dcommunity7rabbita4html10h1_2einnerGsE(style, id, class_, title, hidden, cite, attrs, children);
}
function _M0FP319moonbit_2dcommunity7rabbita4html11div_2einnerGRPB5ArrayGRP319moonbit_2dcommunity7rabbita4html4HtmlEE(style, id, class_, title, hidden, on_click, on_mousedown, on_mouseup, on_scroll, on_keydown, on_keyup, attrs, children) {
  const attrs$2 = _M0FP319moonbit_2dcommunity7rabbita4html14resolve__attrs(attrs);
  _M0FP319moonbit_2dcommunity7rabbita4html11push__title(title, attrs$2);
  _M0FP319moonbit_2dcommunity7rabbita4html12push__hidden(hidden, attrs$2);
  _M0FP319moonbit_2dcommunity7rabbita4html11push__click(on_click, attrs$2);
  _M0FP319moonbit_2dcommunity7rabbita4html15push__mousedown(on_mousedown, attrs$2);
  _M0FP319moonbit_2dcommunity7rabbita4html13push__mouseup(on_mouseup, attrs$2);
  _M0FP319moonbit_2dcommunity7rabbita4html12push__scroll(on_scroll, attrs$2);
  _M0FP319moonbit_2dcommunity7rabbita4html13push__keydown(on_keydown, attrs$2);
  _M0FP319moonbit_2dcommunity7rabbita4html11push__keyup(on_keyup, attrs$2);
  _M0FP319moonbit_2dcommunity7rabbita4html11push__style(style, attrs$2);
  _M0FP319moonbit_2dcommunity7rabbita4html11push__class(class_, attrs$2);
  _M0FP319moonbit_2dcommunity7rabbita4html8push__id(id, attrs$2);
  return _M0FP319moonbit_2dcommunity7rabbita4html4nodeGRPB5ArrayGRP319moonbit_2dcommunity7rabbita4html4HtmlEE("div", attrs$2, children);
}
function _M0FP319moonbit_2dcommunity7rabbita4html3divGRPB5ArrayGRP319moonbit_2dcommunity7rabbita4html4HtmlEE(style$46$opt, id, class_, title, hidden, on_click, on_mousedown, on_mouseup, on_scroll, on_keydown, on_keyup, attrs, children) {
  let style;
  if (style$46$opt.$tag === 1) {
    const _Some = style$46$opt;
    style = _Some._0;
  } else {
    style = [];
  }
  return _M0FP319moonbit_2dcommunity7rabbita4html11div_2einnerGRPB5ArrayGRP319moonbit_2dcommunity7rabbita4html4HtmlEE(style, id, class_, title, hidden, on_click, on_mousedown, on_mouseup, on_scroll, on_keydown, on_keyup, attrs, children);
}
function _M0FP319moonbit_2dcommunity7rabbita4html9p_2einnerGsE(style, id, class_, title, hidden, attrs, children) {
  const attrs$2 = _M0FP319moonbit_2dcommunity7rabbita4html14resolve__attrs(attrs);
  _M0FP319moonbit_2dcommunity7rabbita4html11push__title(title, attrs$2);
  _M0FP319moonbit_2dcommunity7rabbita4html12push__hidden(hidden, attrs$2);
  _M0FP319moonbit_2dcommunity7rabbita4html11push__style(style, attrs$2);
  _M0FP319moonbit_2dcommunity7rabbita4html11push__class(class_, attrs$2);
  _M0FP319moonbit_2dcommunity7rabbita4html8push__id(id, attrs$2);
  return _M0FP319moonbit_2dcommunity7rabbita4html4nodeGsE("p", attrs$2, children);
}
function _M0FP319moonbit_2dcommunity7rabbita4html1pGsE(style$46$opt, id, class_, title, hidden, attrs, children) {
  let style;
  if (style$46$opt.$tag === 1) {
    const _Some = style$46$opt;
    style = _Some._0;
  } else {
    style = [];
  }
  return _M0FP319moonbit_2dcommunity7rabbita4html9p_2einnerGsE(style, id, class_, title, hidden, attrs, children);
}
function _M0FP319moonbit_2dcommunity7rabbita4html4text(str) {
  return new _M0DTP419moonbit_2dcommunity7rabbita8internal7runtime5VNode4Text(str);
}
function _M0IPC16string6StringP319moonbit_2dcommunity7rabbita4html10IsChildren12to__children(str) {
  return new _M0DTP419moonbit_2dcommunity7rabbita8internal7runtime8ChildrenGRP419moonbit_2dcommunity7rabbita8internal7runtime5VNodeE5Array([_M0FP319moonbit_2dcommunity7rabbita4html4text(str)]);
}
function _M0IPC15array5ArrayP319moonbit_2dcommunity7rabbita4html10IsChildren12to__children(self) {
  const _p = new Array(self.length);
  const _p$2 = self.length;
  let _tmp = 0;
  while (true) {
    const _p$3 = _tmp;
    if (_p$3 < _p$2) {
      const _p$4 = self[_p$3];
      _p[_p$3] = _p$4;
      _tmp = _p$3 + 1 | 0;
      continue;
    } else {
      break;
    }
  }
  return new _M0DTP419moonbit_2dcommunity7rabbita8internal7runtime8ChildrenGRP419moonbit_2dcommunity7rabbita8internal7runtime5VNodeE5Array(_p);
}
function _M0MP219moonbit_2dcommunity7rabbita5Graph5Graph(sandbox) {
  return new _M0TP219moonbit_2dcommunity7rabbita5Graph(sandbox);
}
function _M0FP219moonbit_2dcommunity7rabbita3new(builder) {
  const sandbox = _M0MP419moonbit_2dcommunity7rabbita8internal7runtime7Sandbox3new();
  _M0FP219moonbit_2dcommunity7rabbita14ambient__graph.val = _M0MP219moonbit_2dcommunity7rabbita5Graph5Graph(sandbox);
  const _bind = undefined;
  return new _M0TP219moonbit_2dcommunity7rabbita3App(sandbox, builder, _bind);
}
function _M0MP219moonbit_2dcommunity7rabbita3App5mount(self, element_id) {
  self.sandbox.mount = element_id;
  _M0IP016_24default__implP319moonbit_2dcommunity7rabbita3dom9IsElement16set__inner__htmlGRP319moonbit_2dcommunity7rabbita3dom7ElementE(_M0MP319moonbit_2dcommunity7rabbita2js8Nullable6unwrapGRP319moonbit_2dcommunity7rabbita3dom7ElementE(_M0MP319moonbit_2dcommunity7rabbita3dom8Document20get__element__by__id(_M0FP319moonbit_2dcommunity7rabbita3dom8document(), element_id)), "<div></div>");
  const _bind = self.init_cmd;
  if (_bind === undefined) {
  } else {
    const _Some = _bind;
    const _cmd = _Some;
    _M0IP016_24default__implP319moonbit_2dcommunity7rabbita3cmd9Scheduler3addGRP419moonbit_2dcommunity7rabbita8internal7runtime7SandboxE(self.sandbox, _cmd);
    self.init_cmd = undefined;
  }
  const _func = self.builder;
  const vnode = _func();
  _M0MP419moonbit_2dcommunity7rabbita8internal7runtime7Sandbox10initialize(self.sandbox, _M0MP419moonbit_2dcommunity7rabbita8internal6duplix4Node3mapGRP319moonbit_2dcommunity7rabbita4html4HtmlRP419moonbit_2dcommunity7rabbita8internal7runtime5VNodeE(vnode, (html) => html));
  _M0MP419moonbit_2dcommunity7rabbita8internal7runtime7Sandbox5flush(self.sandbox);
}
function _M0MP219moonbit_2dcommunity7rabbita3Val4map2GRP319moonbit_2dcommunity7rabbita4html4HtmluRP319moonbit_2dcommunity7rabbita4html4HtmlE(a, b, f) {
  return _M0MP419moonbit_2dcommunity7rabbita8internal6duplix4Node4map2GRP319moonbit_2dcommunity7rabbita4html4HtmluRP319moonbit_2dcommunity7rabbita4html4HtmlE(a, b, f);
}
function _M0MP219moonbit_2dcommunity7rabbita3Val4map2GibRP319moonbit_2dcommunity7rabbita4html4HtmlE(a, b, f) {
  return _M0MP419moonbit_2dcommunity7rabbita8internal6duplix4Node4map2GibRP319moonbit_2dcommunity7rabbita4html4HtmlE(a, b, f);
}
function _M0FP219moonbit_2dcommunity7rabbita19create__pure__stateGiRP310tonyfettes31rabbita_2dmidpull_2ddrain_2dmre4main10CounterMsgE(model, update) {
  const _p = _M0FP219moonbit_2dcommunity7rabbita14ambient__graph.val;
  let graph;
  if (_p === undefined) {
    graph = $panic();
  } else {
    const _p$2 = _p;
    graph = _p$2;
  }
  const _bind = _M0MP419moonbit_2dcommunity7rabbita8internal7runtime7Sandbox22create__state__machineGiRP310tonyfettes31rabbita_2dmidpull_2ddrain_2dmre4main10CounterMsgE(graph.sandbox, (_discard_) => ({ _0: model, _1: _M0FP319moonbit_2dcommunity7rabbita3cmd4none }), (_discard_, msg, model$2) => ({ _0: update(msg, model$2), _1: _M0FP319moonbit_2dcommunity7rabbita3cmd4none }), undefined);
  const _node = _bind._0;
  const _emit = _bind._1;
  return { _0: _node, _1: _emit };
}
function _M0FP219moonbit_2dcommunity7rabbita19create__pure__stateGbRP310tonyfettes31rabbita_2dmidpull_2ddrain_2dmre4main6TabMsgE(model, update) {
  const _p = _M0FP219moonbit_2dcommunity7rabbita14ambient__graph.val;
  let graph;
  if (_p === undefined) {
    graph = $panic();
  } else {
    const _p$2 = _p;
    graph = _p$2;
  }
  const _bind = _M0MP419moonbit_2dcommunity7rabbita8internal7runtime7Sandbox22create__state__machineGbRP310tonyfettes31rabbita_2dmidpull_2ddrain_2dmre4main6TabMsgE(graph.sandbox, (_discard_) => ({ _0: model, _1: _M0FP319moonbit_2dcommunity7rabbita3cmd4none }), (_discard_, msg, model$2) => ({ _0: update(msg, model$2), _1: _M0FP319moonbit_2dcommunity7rabbita3cmd4none }), undefined);
  const _node = _bind._0;
  const _emit = _bind._1;
  return { _0: _node, _1: _emit };
}
function _M0MP219moonbit_2dcommunity7rabbita3Val10switch__byGbuE(a, f, by) {
  return _M0MP419moonbit_2dcommunity7rabbita8internal6duplix4Node10switch__byGbuE(a, (e) => f(e), by);
}
function _M0FP219moonbit_2dcommunity7rabbita25create__state__with__initGuuE(init, update, subscriptions) {
  const _p = _M0FP219moonbit_2dcommunity7rabbita14ambient__graph.val;
  let graph;
  if (_p === undefined) {
    graph = $panic();
  } else {
    const _p$2 = _p;
    graph = _p$2;
  }
  const _bind = _M0MP419moonbit_2dcommunity7rabbita8internal7runtime7Sandbox22create__state__machineGuuE(graph.sandbox, init, update, subscriptions);
  const _node = _bind._0;
  const _emit = _bind._1;
  return { _0: _node, _1: _emit };
}
function _M0FP310tonyfettes31rabbita_2dmidpull_2ddrain_2dmre4main13tab__observer(tab, counter_emit) {
  return _M0MP219moonbit_2dcommunity7rabbita3Val10switch__byGbuE(tab, (_discard_) => {
    const _bind = _M0FP219moonbit_2dcommunity7rabbita25create__state__with__initGuuE((_discard_$2) => {
      const _func = counter_emit;
      return { _0: undefined, _1: _func(1) };
    }, (_discard_$2, _discard_$3, model) => ({ _0: model, _1: _M0FP319moonbit_2dcommunity7rabbita3cmd4none }), undefined);
    return _bind._0;
  }, (tab$2) => tab$2 ? "B" : "A");
}
function _M0FP310tonyfettes31rabbita_2dmidpull_2ddrain_2dmre4main6render(count, tab, counter_emit, tab_emit) {
  const button_style = ["font-size: 18px", "padding: 8px 20px", "margin-right: 12px"];
  const _tmp = ["font-family: monospace", "padding: 16px"];
  const _string_builder = _M0MPB13StringBuilder21StringBuilder_2einner(7);
  _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, "count: ");
  _M0MPB13StringBuilder13write__objectGiE(_string_builder, count);
  const _tmp$2 = _M0FP319moonbit_2dcommunity7rabbita4html2h1GsE(_M0DTPC16option6OptionGRPB5ArrayGsEE4None__, undefined, undefined, undefined, -1, undefined, undefined, _string_builder.val);
  const _string_builder$2 = _M0MPB13StringBuilder21StringBuilder_2einner(13);
  _M0IPB13StringBuilderPB6Logger13write__string(_string_builder$2, "current tab: ");
  _M0MPB13StringBuilder13write__objectGsE(_string_builder$2, tab ? "B" : "A");
  const _tmp$3 = _M0FP319moonbit_2dcommunity7rabbita4html1pGsE(_M0DTPC16option6OptionGRPB5ArrayGsEE4None__, undefined, undefined, undefined, -1, undefined, _string_builder$2.val);
  const _func = counter_emit;
  const _tmp$4 = _M0FP319moonbit_2dcommunity7rabbita4html14button_2einnerGsE(button_style, undefined, undefined, undefined, -1, _M0FP310tonyfettes31rabbita_2dmidpull_2ddrain_2dmre4main6renderN6constrS53, -1, undefined, undefined, -1, _func(0), undefined, "+1");
  const _func$2 = tab_emit;
  return _M0FP319moonbit_2dcommunity7rabbita4html11div_2einnerGRPB5ArrayGRP319moonbit_2dcommunity7rabbita4html4HtmlEE(_tmp, undefined, undefined, undefined, -1, undefined, undefined, undefined, undefined, undefined, undefined, undefined, [_tmp$2, _tmp$3, _M0FP319moonbit_2dcommunity7rabbita4html3divGRPB5ArrayGRP319moonbit_2dcommunity7rabbita4html4HtmlEE(_M0DTPC16option6OptionGRPB5ArrayGsEE4None__, undefined, undefined, undefined, -1, undefined, undefined, undefined, undefined, undefined, undefined, undefined, [_tmp$4, _M0FP319moonbit_2dcommunity7rabbita4html14button_2einnerGsE(button_style, undefined, undefined, undefined, -1, _M0FP310tonyfettes31rabbita_2dmidpull_2ddrain_2dmre4main6renderN6constrS54, -1, undefined, undefined, -1, _func$2(0), undefined, "switch tab")])]);
}
function _M0FP310tonyfettes31rabbita_2dmidpull_2ddrain_2dmre4main3app() {
  const _bind = _M0FP219moonbit_2dcommunity7rabbita19create__pure__stateGiRP310tonyfettes31rabbita_2dmidpull_2ddrain_2dmre4main10CounterMsgE(0, (msg, model) => {
    if (msg === 0) {
      const _string_builder = _M0MPB13StringBuilder21StringBuilder_2einner(28);
      _M0IPB13StringBuilderPB6Logger13write__string(_string_builder, "counter store: model is now ");
      _M0MPB13StringBuilder13write__objectGiE(_string_builder, model + 1 | 0);
      _M0FPB7printlnGsE(_string_builder.val);
      return model + 1 | 0;
    } else {
      return model;
    }
  });
  const _count = _bind._0;
  const _counter_emit = _bind._1;
  const _bind$2 = _M0FP219moonbit_2dcommunity7rabbita19create__pure__stateGbRP310tonyfettes31rabbita_2dmidpull_2ddrain_2dmre4main6TabMsgE(false, (msg, model) => !model);
  const _tab = _bind$2._0;
  const _tab_emit = _bind$2._1;
  const observer = _M0FP310tonyfettes31rabbita_2dmidpull_2ddrain_2dmre4main13tab__observer(_tab, _counter_emit);
  return _M0MP219moonbit_2dcommunity7rabbita3Val4map2GRP319moonbit_2dcommunity7rabbita4html4HtmluRP319moonbit_2dcommunity7rabbita4html4HtmlE(_M0MP219moonbit_2dcommunity7rabbita3Val4map2GibRP319moonbit_2dcommunity7rabbita4html4HtmlE(_count, _tab, (count, tab) => _M0FP310tonyfettes31rabbita_2dmidpull_2ddrain_2dmre4main6render(count, tab, _counter_emit, _tab_emit)), observer, (html, _discard_) => html);
}
(() => {
  _M0MP219moonbit_2dcommunity7rabbita3App5mount(_M0FP219moonbit_2dcommunity7rabbita3new(_M0FP310tonyfettes31rabbita_2dmidpull_2ddrain_2dmre4main3app), "app");
})();
