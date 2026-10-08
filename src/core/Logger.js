/**
 * Logger — Logging condicional para desenvolvimento.
 * Em produção, todos os métodos viram no-op.
 */
const isDev = import.meta.env?.DEV ?? false;
const PREFIX = '[MCQ]';

export const Logger = {
  debug: (...args) => isDev && console.log(PREFIX, ...args),
  info:  (...args) => isDev && console.info(PREFIX, ...args),
  warn:  (...args) => console.warn(PREFIX, ...args),
  error: (...args) => console.error(PREFIX, ...args),
};