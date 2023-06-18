import {Provider} from "./Provider";

export interface Container {
  provide(provider: Provider<unknown>): this;
}