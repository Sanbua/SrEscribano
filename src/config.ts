import env from 'env-var'

export const config = {
  NODE_ENV: env
    .get('NODE_ENV')
    .default('development')
    .asEnum(['production', 'test', 'development']),
  BOT_TOKEN: env.get('BOT_TOKEN').required().asString(),

  LOCK_STORE: env.get('LOCK_STORE').default('memory').asEnum(['memory']),
}

export const sheet = env.get('SHEET_ID').required().asString()

export const sandrabua_id = env.get('SANDRABUA_ID').required().asString()
export const mallen29_id = env.get('MALLEN29_ID').required().asString()
