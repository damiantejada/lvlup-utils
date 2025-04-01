/*
    Cuando ejecutamos la función y no pasó el teimpo definido no debería ejecutarse la función
    y cuando haya pasado el delay propuesto se debería llamara 1 sola vez
*/

import { debounce } from "../debounce"

describe('debounce', () => {
  it('should debounce a mock fn and execute it 0 times', () => {
    const fn = vi.fn()
    const debouncedFn = debounce(fn,200)
    debouncedFn(1)
    debouncedFn(1)
    debouncedFn(1)
    debouncedFn(1)
    debouncedFn(1)
    debouncedFn(1)
    debouncedFn(1)
    debouncedFn(1)
    debouncedFn(1)
    debouncedFn(1)
    debouncedFn(1)
    debouncedFn(1)
    expect(fn).not.toHaveBeenCalled()
  })
  it('should debounce a mock fn and execute it 1 times', () => {
    const fn = vi.fn()
    const debouncedFn = debounce(fn,200)
    debouncedFn(1)
    vi.advanceTimersByTime(210)
    expect(fn).toHaveBeenCalledTimes(1)
  })
})
