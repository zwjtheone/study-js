// 定义模块math.js
// tsc --target es6 --module none TypeScript/test1.ts
// babel TypeScript/test1.js --out-file script-compiled.js
const basicNum = 0;

function add(a, b) {
    return a + b;
}

class dddd {
    private eee: number;

    constructor(props) {
        // @ts-ignore
        super(props);
        this.eee = 1
    }

    sdkajskd() {
        const dd = 1
        console.log(dd)
    }
}

export default add
