"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
async function start() {
    try {
        const app = await core_1.NestFactory.create(app_module_1.AppModule);
        const PORT = process.env.PORT || 5000;
        app.enableCors();
        await app.listen(5000, () => {
            console.log('Server has been started on ' + PORT);
        });
    }
    catch (e) {
        console.log(e);
    }
}
start();
//# sourceMappingURL=main.js.map