export function suma(a, b) {
  return a + b;
}

export function resta(a, b) {
  return a - b;
}

export function multiplicacion(a, b) {
  return a * b;
}

export function division(a, b) {
  return a / b;
}

export function prueba(arg) {
  console.log("prueba", arg);
  try {
    const result = division(9, 0);
    console.log(result);
  } catch (ex) {
    console.log(ex);
  }
}
