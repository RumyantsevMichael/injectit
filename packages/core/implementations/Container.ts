import {isValueProvider} from "../guards/isValueProvider";
import type {Container as ContainerInterface} from '../types/Container';
import type {Provider} from "../types/Provider";
import type {Token} from "../types/Token";
import type {ValueProvider} from "../types/Provider";

type ProviderMap<Type> = Map<Token<Type>, Provider<Type>>;

export class Container implements ContainerInterface {
  private readonly providers: ProviderMap<unknown> = new Map();

  public provide<Type>(provider: ValueProvider<Type>): this
  public provide<Type>(provider: Provider<Type>): this {
    if (this.providers.has(provider.as)) {
      throw new Error(`A provider for '${provider.as}' already exists`);
    }

    this.providers.set(provider.as, provider);

    return this;
  }

  public inject<Type>(token: Token<Type>): Type {
    const provider = this.getProvider(token);

    if (isValueProvider(provider)) {
      return provider.value;
    }

    throw new Error('Unknown provider type');
  }

  private getProvider<Type>(token: Token<Type>): Provider<Type> {
    if (this.providers.has(token) === false) {
      throw new Error(`A provider for '${token}' does not exist`);
    }

    return this.providers.get(token)!;
  }
}