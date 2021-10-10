import {HttpException, HttpStatus, Injectable} from "@nestjs/common";
import randomWords = require("random-words");

@Injectable()
export class SampledataService{

    getRandomNumber(): number {
        let from  = 0
        let to = 100
        return Math.floor(Math.random() * (to - from + 1) + from)
    }
    getRandomString() {
        return randomWords({exactly: 2, join: ' '})
    }
    getRandomDate(): Date {
        let from = new Date('2000-01-01T03:15:00.271Z')
        let to = new Date('2021-10-09T01:57:45.271Z')
        return new Date(Math.random() * (to.getTime() - from.getTime() + 1) + from.getTime())
    }
    getRandomBoolean(): Boolean {
        return Math.random() >= 0.5
    }
    makeTable(fields, count) {
        let ans = {"table": []}
        for (let i = 0; i < count; i++) {
            let row = {}

            fields.forEach(field => {
                switch (field.type) {
                case 'NUMBER':
                    row[field.name] = this.getRandomNumber()
                    break

                case 'DATE':
                case 'TIME':
                    row[field.name] = this.getRandomDate()
                    break

                case 'BOOLEAN':
                    row[field.name] = this.getRandomBoolean()
                    break

                case 'STRING':
                default:
                    row[field.name] = this.getRandomString()
                }
            });
            ans.table.push(row)
        }
        return ans
    }
}


