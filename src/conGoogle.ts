import { google } from 'googleapis'

import { sheet } from './config'

const credentials = JSON.parse(process.env.CREDENTIALS_JSON!)
export const auth = new google.auth.JWT({
  email: credentials.client_email,
  key: credentials.private_key.replace(/\\n/g, '\n'),
  scopes: ['https://www.googleapis.com/auth/spreadsheets'],
})

export const sheets = google.sheets({ version: 'v4', auth })
export const spreadsheetId = sheet.toString()
