function F(x) {
  return Math.log(x) - 2 * x + 3;
}

function secantMethod(x0, x1, tol = 1e-6, maxIter = 100) {
  let iter = 0;
  let x2;

  while (iter < maxIter) {
    const f_x0 = F(x0);
    const f_x1 = F(x1);

    if (f_x1 - f_x0 === 0) {
      console.log("Error: división por cero en iteración", iter);
      return null;
    }

    x2 = x1 - f_x1 * (x1 - x0) / (f_x1 - f_x0);

    console.log(`Iteración ${iter + 1}: x = ${x2}, F(x) = ${F(x2)}`);

    if (Math.abs(F(x2)) < tol) {
      console.log(`\nRaíz aproximada encontrada: x ≈ ${x2}`);
      return x2;
    }

    x0 = x1;
    x1 = x2;
    iter++;
  }

  console.log("No se alcanzó la tolerancia en el número máximo de iteraciones.");
  return null;
}

// Llamada con puntos iniciales:
secantMethod(1, 2);
