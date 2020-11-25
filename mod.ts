const checkPermissions = async (perms: Array<"read" | "write" | "run" | "net" | "env" | "plugin" | "hrtime">, options?: {throw?: boolean}) => {
    let missing = [];
    
    for (const perm of perms) {
        let { state } = await Deno.permissions.query({ name: perm });
        if(state !== "granted") missing.push(perm);
    }

    if(missing.length == 0) return true;
    if(options && !options.throw) return false;
    
    throw new Error(`Missing permissions flags `+missing.map(p => '--allow-'+p).join(' '));
};

export {checkPermissions}