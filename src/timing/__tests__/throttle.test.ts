import { throttle } from "../throttle";
// Cada 1 mes un test falla - Meter fechas grandes en los test para repasar vulnerabilidades

describe("throttle", () => {
  // la función debe ejecturse una sola vez
  test("should execute the original function 1 time", () => {
    /*
     *No importa cuántas veces llame a mi función (dentro del delay) esta debe ejecutarse una vez
     */

    const fn = vi.fn() // mock
    const throttledFn = throttle(fn, 200)
    // hago click en el botón 3 veces
    throttledFn()
    throttledFn()
    throttledFn()
    // expect(fn).toHaveBeenCalledTimes(1) // Esperamos que fn sea llamada una sola vez
    // expect(fn).toHaveBeenCalled() // Solo esperamos que fn sea llamada
    expect(fn).toHaveBeenCalledOnce()
    vi.advanceTimersByTime(210)
    throttledFn()
    throttledFn()
    expect(fn).toHaveBeenCalledTimes(2)
  });
});
