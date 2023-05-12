import { Args, Command, Flags, ux } from '@oclif/core'
import parseConfig from '../../utils/config'
const util = require('util');
const exec = util.promisify(require('child_process').exec);


export default class Deploy extends Command {
  static description = 'Deploy your MoleculerJS services to Heroku'
  appName: string = ""
  static examples = [
    `$ `,
  ]

  static flags = {
    file: Flags.string({ char: 'f', description: 'Config file path', required: false }),
  }

  static args = {
  }
  async run(): Promise<void> {
    const { args, flags } = await this.parse(Deploy)
    const config = parseConfig(flags.file || './heroculer.yml')
    for (let service of config.services) {
      const serviceName = Object.keys(service)[0];
      const envVariables = service[serviceName].environment
      this.appName = service[serviceName].app_name
      this.configEnvVariables(envVariables)
      ux.action.start(`Start deployment for ${serviceName} microservice`, '', { stdout: true })
      try {
        // TODO verbose
        const { stdout } = await exec(`git push ${serviceName} main:master`) // TODO remove branch
        ux.action.stop('✅ Deployed!')
        this.log(stdout)
      } catch (error: any) {
        ux.action.stop('🤯 Ooooh!')
        this.log(error)
      }
      const processes = service[serviceName].processes || []
      const scaleCommand = processes.map((x: any) => `${Object.keys(x)[0]}=${x[Object.keys(x)[0]]}`).join(' ')
      this.log(scaleCommand)
      await exec(`heroku scale ${scaleCommand} -a ${this.appName}`)
    }
  }

  async configEnvVariables(envVariables: [{ [index: string]: string }]): Promise<void> {
    ux.action.start('set environment variables...')
    for (let envVar of envVariables) {
      const envKey = Object.keys(envVar)[0]
      await exec(`heroku config:set ${envKey}=${envVar[envKey]} -a ${this.appName}`)
    }
    ux.action.stop()
  }
}
