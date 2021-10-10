import { Module } from '@nestjs/common';
import {MongooseModule} from "@nestjs/mongoose";
import {UserModule} from "./user/user.module";
import {TestModule} from "./test/test.module";
import {ServeStaticModule} from "@nestjs/serve-static";
import * as path from "path";
import {DatahubModule} from "./datahub/datahub.module";
import {SampledataModule} from "./sampledata/sampledata.module";

@Module({
  imports: [
      MongooseModule.forRoot('mongodb+srv://admin:admin@cluster0.ujp1e.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'),
      UserModule,
      TestModule,
      DatahubModule,
      SampledataModule
  ],
})
export class AppModule {}
