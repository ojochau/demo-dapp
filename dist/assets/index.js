define("@dapp/assets", ["require", "exports", "@ijstech/components"], function (require, exports, components_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const moduleDir = components_1.application.currentModuleDir;
    function fullPath(path) {
        return `${moduleDir}/${path}`;
    }
    ;
    exports.default = {
        img: {
            network: {
                bsc: `${moduleDir}/img/network/bsc.svg`,
                eth: `${moduleDir}/img/network/eth.svg`,
            }
        },
        fullPath
    };
});
