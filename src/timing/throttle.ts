/*
    Después de que la función se ejectua la primera vez se estable un intervalo de tiempo durante el cual no puede ejecutarse nuevamente incluso si se desencadenan más eventos
*/

import type { AnyFunction } from "@src/types/helpers";

/*

    VISTA1 - BOTON(4) -VISTA2
                      -VISTA2 
                      -VISTA2 
                      -VISTA2
                      
    VISTA1 - BOTON(THROTTLE) - VISTA2 
*/

// Esto nos tiene que devolver una función
// fn('param1','param2) -> Parameters<T> (string,string)

// Esto nos tiene que devolver una función
// Parameters<T>
export function throttle<T extends AnyFunction>(fn: T, delay: number = 500) : (...args: Parameters<T>) => void {
  let timeOutId: ReturnType<typeof setTimeout> | undefined = undefined; // genera un timeOutId único para cada instancia de setTimeOut
  return function thorttledFunction(...args: Parameters<T>) {
    // La función está activa
    // si la función ya se ejecutó y no pasó el tiempo, cortamos la ejecución
    if (timeOutId !== undefined) {
      return;
    }
    timeOutId = setTimeout(() => {
      // cuando se termina el delay entra acá
      timeOutId = undefined;
    }, delay);
    return fn(...args);
  };
}

// setTimeout
// return new fn manteniendo el scope

/*
funciton onClickButton(){
    // some logic
}

const throttleClick = throttle(onClickButton, 500) // devuelve una función modificada con un "timer"

<button onClick(throttleClick)>

</button>
*/
