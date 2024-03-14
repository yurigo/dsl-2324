import test from "node:test";
import assert from "node:assert/strict";

import { suma, resta, multiplicacion, division } from "./calculadora.js";

test("suma 2 + 2", (t) => {
  const resultadoEsperado = 4;

  assert.strictEqual(suma(2, 2), resultadoEsperado);
});

test("suma 2 + 9", (t) => {
  const resultadoEsperado = 11;

  assert.strictEqual(suma(2, 9), resultadoEsperado);
});

test("resta 9 - 1", (t) => {
  const resultadoEsperado = 8;

  assert.strictEqual(resta(9, 1), resultadoEsperado);
});

test("mult 9 * 9", (t) => {
  const resultadoEsperado = 81;

  assert.strictEqual(multiplicacion(9, 9), resultadoEsperado);
});

test("div 9 / 3", (t) => {
  const resultadoEsperado = 3;

  assert.strictEqual(division(9, 3), resultadoEsperado);
});

test("division por 0 lanza error", (t) => {
  assert.throws(() => {
    division(9, 0);
  }, /^Error: Wrong value$/);
});
