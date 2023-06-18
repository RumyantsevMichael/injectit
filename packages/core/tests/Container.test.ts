#!/usr/bin/env -S node -r "ts-node/register"

import {Container, Token} from "@injectit/core";

const TokenDefinedWithATSType = new Token<number>();
const TokenDefinedWithAGlobalConstructor = new Token<Storage>();

const container = new Container()
  .provide({
    value: 42,
    as: TokenDefinedWithATSType,
  })
  .provide({
    value: global.localStorage,
    as: TokenDefinedWithAGlobalConstructor
  });

console.assert(container.inject(TokenDefinedWithATSType) === 42);
console.assert(container.inject(TokenDefinedWithAGlobalConstructor) === global.localStorage);
