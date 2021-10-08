import {NestFactory} from '@nestjs/core';
import {AppModule} from './app.module';


async function start() {
    try {
        const app = await NestFactory.create(AppModule);
        const PORT = process.env.PORT || 5000;
        app.enableCors()
        await app.listen(5000, () => {
            console.log('Server has been started on ' + PORT)
        });
    } catch (e) {
        console.log(e)
    }

}

start();
