# octane-node

## Development

### Fetch dependencies

Download require dependencies from npm:

```
npm install
```

### Generating code from OpenAPI spec

To regenerate files in `src/` from latest Octane API spec, run the following:

```
npm run-script codegen
```

These files should be checked into git:

```
git add src/
```

### Compiling JavaScript

To create the `build/` directory, run the following:

```
npm run-script build
```
