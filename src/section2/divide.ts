export class ZeroDivisorError extends Error {}

export function divide(dividend: number, divisor: number): number {
  if (divisor === 0) {
    throw new ZeroDivisorError("0で割ることはできません");
  }
  return dividend / divisor;
}
