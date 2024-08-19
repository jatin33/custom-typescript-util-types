export type UnwrapArray<T> = T extends (infer U)[] ? U : never;

// pick type of first item from array
// pick type of last item from array