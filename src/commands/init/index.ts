import { Command, Flags, ux } from '@oclif/core'
import parseConfig from '../../utils/config'
const util = require('util');
const exec = util.promisify(require('child_process').exec);

export default class Init extends Command {
  static description = 'Initialize heroculer deployment'

  static examples = [
    `$ heroculer init -f heroculer.stage.yml`,
  ]

  static flags = {
    file: Flags.string({ char: 'f', description: 'Config file path', required: false }),
  }

  static args = {
  }

  async run(): Promise<void> {
    const { flags } = await this.parse(Init)
    const config = parseConfig(flags.file || './heroculer.yml')
    for (let service of config.services) {
      const serviceName = Object.keys(service)[0];
      ux.action.start(`Add ${serviceName} remote to git`, 'initializing', { stdout: true })
      const appName = service[serviceName].app_name
      const remote = `https://git.heroku.com/${appName}.git`
      try {
        await exec(`git remote add ${serviceName} ${remote}`)
        ux.action.stop('✅ Done!')
      } catch (error) {
        ux.action.stop('✅ Already added!')
      }
    }
    this.log("🎉 Your heroculer deployment initialized!")
  }
}
