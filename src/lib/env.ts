import yenv from 'yenv';

process.env.NODE_ENV = process.env.NODE_ENV || 'development';

/**
 * We just export what `yenv()` returns.
 * `keyblade` will make sure we don't rely on undefined values.
 */
export const env = yenv('env.yaml', <any>{
    message: key => `[yenv] ${key} not found in the loaded environment`,
    // eslint-disable-next-line no-console
    logBeforeThrow: message => console.error(message)
});
