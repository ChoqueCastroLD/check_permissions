import { assertStrictEquals, assertThrowsAsync } from "https://deno.land/std@0.79.0/testing/asserts.ts";
import { checkPermissions } from "./mod.ts";

// Intented test
// deno test --unstable --allow-read

Deno.test("check for not given permission net with throw: true", () => {
    assertThrowsAsync(async () => {
        await checkPermissions(["net"], {throw: true});
    })
});

Deno.test("check for not given permission net with default throw: true", () => {
    assertThrowsAsync(async () => {
        await checkPermissions(["net"]);
    })
});

Deno.test("check for given permission read with throw: true", async () => {
    let p = await checkPermissions(["read"], {throw: true});
    assertStrictEquals(p, true);
});

Deno.test("check for given permission read with default throw: true", async () => {
    let p = await checkPermissions(["read"]);
    assertStrictEquals(p, true);
});

Deno.test("check for given permission net with throw: false", async () => {
    let p = await checkPermissions(["net"], {throw: false});
    assertStrictEquals(p, false);
});