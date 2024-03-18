install with mise

```bash
mise use deno@1.41.3

deno --version
deno help

deno run -A hello.ts

deno run --allow-net fetch.ts
```

型チェック

```bash
deno check
deno run --check **.ts
```

```bash
deno fmt
deno lint
deno test
deno doc
deno bundle
deno lsp
```

ファイル名はスネークケースで定義
module のエントリーポイントは mod.ts


