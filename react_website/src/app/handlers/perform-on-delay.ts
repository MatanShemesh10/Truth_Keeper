export const preformOnDelay = (cb:() => void, ms:number) => {
    const timeout = setTimeout(() => {
        cb();
    },ms)

    return timeout;
}