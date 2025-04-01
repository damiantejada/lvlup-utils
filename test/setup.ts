import { afterEach, beforeEach, vi } from "vitest";

/*
    After each: cualquier cosa que querramos ejecutar después de cada test
    beforeEach: se ejecuta antes de empezar un test
*/

beforeEach(() => {
  vi.useFakeTimers();
});

afterEach(() => {
  vi.resetAllMocks();
});
