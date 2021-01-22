import ConfigDefault from './config.default'
import ConfigLocal from './config.local'
import ConfigProd from './config.prod'

const config = Object.assign(ConfigDefault, import.meta.env.DEV ? ConfigLocal : ConfigProd)

export default config
