

import * as Curry from "bs-platform/lib/es6/curry.js";

function $less$pipe$pipe(f, g, x) {
  return Curry._1(f, Curry._1(g, x));
}

function $pipe$pipe$great(f, g, x) {
  return Curry._1(g, Curry._1(f, x));
}

function $great$great$eq(a, b) {
  return a.then((function (param) {
                return Promise.resolve(Curry._1(b, param));
              }));
}

function $great$great$eq$bang(a, b) {
  return a.catch((function (param) {
                return Promise.resolve(Curry._1(b, param));
              }));
}

function $eq$less$less(a, b) {
  return b.then((function (param) {
                return Promise.resolve(Curry._1(a, param));
              }));
}

function $bang$eq$less$less(a, b) {
  return b.catch((function (param) {
                return Promise.resolve(Curry._1(a, param));
              }));
}

export {
  $less$pipe$pipe ,
  $pipe$pipe$great ,
  $great$great$eq ,
  $great$great$eq$bang ,
  $eq$less$less ,
  $bang$eq$less$less ,
  
}
/* No side effect */