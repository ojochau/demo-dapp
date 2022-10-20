define("@dapp/main", ["require", "exports", "@dapp/module1", "@ijstech/components", "@dapp/assets"], function (require, exports, module1_1, components_1, assets_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    components_1.Styles.Theme.applyTheme(components_1.Styles.Theme.darkTheme);
    class MainLauncher extends components_1.Module {
        render() {
            return this.$render("i-panel", null,
                this.$render("i-image", { url: assets_1.default.img.network.eth }),
                this.$render("i-button", { caption: module1_1.default, width: 100 }));
        }
        ;
    }
    exports.default = MainLauncher;
    ;
});
