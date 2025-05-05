function F(x) {
    return Math.log(x) - 2 * x + 3;
  }
  
  function F_deriv(x) {
    return 1 / x - 2;
  }
  
  function newtonRaphson(x0, tol = 1e-6, maxIter = 100) {
    let iter = 0;
    let x1;
  
    while (iter < maxIter) {
      const fx = F(x0);
      const dfx = F_deriv(x0);
  
      if (dfx === 0) {
        console.log("Error: derivada cero en iteración", iter);
        return null;
      }
  
      x1 = x0 - fx / dfx;
  
      console.log(`Iteración ${iter + 1}: x = ${x1}, F(x) = ${F(x1)}`);
  
      if (Math.abs(F(x1)) < tol) {
        console.log(`\nRaíz aproximada encontrada: x ≈ ${x1}`);
        return x1;
      }
  
      x0 = x1;
      iter++;
    }
  
    console.log("No se alcanzó la tolerancia en el número máximo de iteraciones.");
    return null;
  }
  
  // Llamada con un punto inicial razonable:
  newtonRaphson(1.5);
  