# Inject It - Work in Progress

A simple typesafe DI library for TS

## Usage

```typescript
// Create a DI Token
const TheAnswer = new Token<number>();

// Create a DI container
const container = new Container()
  // Provide a value for the token
  .provide({
    value: 42,
    as: TheAnswer,
  });

// Inject the value by its token
const value: number = container.inject(TheAnswer);

console.log(value); // 42
```
