import { parse } from 'yaml'
import * as fs from 'fs'

const parseConfig = (path: string) => {
    const file = fs.readFileSync(path, 'utf8')
    const config = parse(file)
    return config
}

export default parseConfig