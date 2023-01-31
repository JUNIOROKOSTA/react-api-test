// Criar variável com prefixo para auxiliar no nome das ações.
const prefix = `CounterContext_`;

// Ações do contexto Counter:
export const INCREASE = `${prefix}INCREASE`;
export const DECREASE = `${prefix}DECREASE`;
export const RESET = `${prefix}RESET`;
export const SET_COUNTER = `${prefix}SET_COUNTER`;

// Ações Assíncronas do contexto Counter:
export const ASYNC_INCREASE_START = `${prefix}ASYNC_INCREASE_START`;
export const ASYNC_INCREASE_END = `${prefix}ASYNC_INCREASE_END`;
export const ASYNC_INCREASE_ERROR = `${prefix}ASYNC_INCREASE_ERROR`;
