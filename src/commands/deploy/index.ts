import {Args, Command, Flags} from '@oclif/core'
import parseConfig from '../../utils/config'

export default class Deploy extends Command {
  static description = 'Deploy your MoleculerJS services to Heroku'

  static examples = [
    `$ `,
  ]

  static flags = {
    //from: Flags.string({char: 'f', description: 'Who is saying hello', required: true}),
  }

  static args = {
    //person: Args.string({description: 'Person to say hello to', required: true}),
  }
  
  async run(): Promise<void> {
    const {args, flags} = await this.parse(Deploy)
    const config = parseConfig('./heroculer.yml')
    this.log(config)
  }
}
