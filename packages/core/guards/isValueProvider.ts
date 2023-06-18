import {Provider, ValueProvider} from "../types/Provider";

export function isValueProvider<Type>(provider: Provider<Type>): provider is ValueProvider<Type> {
  return 'value' in provider;
}
