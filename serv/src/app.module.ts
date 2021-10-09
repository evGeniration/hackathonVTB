import { Module } from '@nestjs/common';
import {MongooseModule} from "@nestjs/mongoose";
import {UserModule} from "./user/user.module";
import {TestModule} from "./test/test.module";
import {ServeStaticModule} from "@nestjs/serve-static";
import * as path from "path";
import {TableModule} from "./table/table.module";

@Module({
  imports: [
      ServeStaticModule.forRoot({rootPath: path.resolve(__dirname, 'static')}),
      MongooseModule.forRoot('mongodb+srv://admin:admin@cluster0.ujp1e.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'),
      UserModule,
      TestModule,
      TableModule
  ],
})
export class AppModule {}
