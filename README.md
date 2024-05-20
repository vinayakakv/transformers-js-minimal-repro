Minimal reproduction of the following error starting from [@xenova/transformers#2c2c0871df4b899f7874d9e2ffc5fc61c7273e9b](https://github.com/xenova/transformers.js/commit/2c2c0871df4b899f7874d9e2ffc5fc61c7273e9b)

```
error: Cannot find module "onnxruntime-web/webgpu" from "$PWD/node_modules/@xenova/transformers/src/backends/onnx.js"
```

To install bun, follow their docs at - https://bun.sh/docs/installation

To install dependencies:

```bash
bun install
```

To run:

```bash
bun run index.ts
```

This error goes out when we switch to previous commit `5552b890eb5a7f467b421db706d28f83091c4a68`
