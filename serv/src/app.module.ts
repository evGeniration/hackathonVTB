import { Module } from '@nestjs/common';
import {MongooseModule} from "@nestjs/mongoose";
import {UserModule} from "./user/user.module";
import {TestModule} from "./test/test.module";
import {RoleModule} from "./role/role.module";
import {DatahubModule} from "./datahub/datahub.module";

@Module({
  imports: [
      MongooseModule.forRoot('mongodb+srv://admin:admin@cluster0.ujp1e.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'),
      UserModule,
      TestModule,
      RoleModule
      DatahubModule,
  ],
})
export class AppModule {}
