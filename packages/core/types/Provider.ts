import {Token} from "./Token";

export interface Provider<Type> {
  as: Token<Type>,
}

export interface ValueProvider<Value> extends Provider<Value> {
  value: Value;
}
