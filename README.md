# check_permissions
A Deno module to check permissions

Usage:

```typescript
import { checkPermissions } from "https://deno.land/x/check_permissions@1.0/mod.ts";

// Check for permissions
await checkPermissions(["read", "env"]);
// If permissions are not granted it will throw a message like this
// Uncaught Error: Missing permissions flags --allow-read --allow-env

// If you dont want it to throw use the option throw: false
await checkPermissions(["read", "env"], {throw: false});

// by using throw: false the function will return a boolean
let hasPermissions = await checkPermissions(["read", "env"], {throw: false});

if(hasPermissions) {
    // do some magic
} else {
    // do some magic without those permissions
}
```


Note:

As of Deno 1.5 the --unstable flag is required in order to use the permissions API

Note 2:

For running tests use

> deno test --unstable --allow-read