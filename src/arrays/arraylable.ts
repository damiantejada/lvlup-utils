/*
    Recibe un argumento genérico o un array y devuelve un genérico o un array
    La función devuelve el mismo array si el arguemnto es un array válido y de lo contrario devuelve un array vacío

    tags: [50_OFF, MXY] null
*/

export const arraylable = (value: unknown[] | null): unknown[] => {
    return Array.isArray(value) ? value : []
}