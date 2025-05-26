export interface RootObject {
  today: string
  users: Record<string, Game>
}

export interface Game {
  Queens: string
  Tango: string
  Zip: string
}
