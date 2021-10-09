import {HttpException, HttpStatus, Injectable} from "@nestjs/common";
import * as path from 'path'
import * as fs from 'fs'
import * as uuid from 'uuid'


@Injectable()
export class TableService{
    createTable(file) {
       console.log(file)
    }
    getTableByTd(file): string {
        try {
            const fileExtension = file.originalname.split('.').pop()
            const fileName = uuid.v4() + '.' + fileExtension
            const filePath = path.resolve(__dirname, '..', 'static')
            fs.writeFileSync(path.resolve(filePath, fileName), file.buffer)
            return fileName
        } catch (e) {
            throw new HttpException(e.message, HttpStatus.INTERNAL_SERVER_ERROR)
        }
    }
}


