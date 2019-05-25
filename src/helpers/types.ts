export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>

export type FlaggedProp<FlagName extends string, ValueName extends string, T> =
  | Record<FlagName, true> & Record<ValueName, T>
  | Record<FlagName, false>
