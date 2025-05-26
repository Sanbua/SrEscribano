import { mallen29_id, sandrabua_id } from '../config.js'

export const users = [
  {
    id: sandrabua_id,
    firstName: 'San',
    username: 'Sandrabua',
    languageCode: 'es',
    position: {
      Queens: 'C',
      Tango: 'E',
      Zip: 'G',
    },
  },
  {
    id: mallen29_id,
    firstName: 'Carlos',
    username: 'Mallen29',
    languageCode: 'es',
    position: {
      Queens: 'D',
      Tango: 'F',
      Zip: 'H',
    },
  },
] as const
