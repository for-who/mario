export interface Background {
  tile: string
  ranges: Array<Array<number>>
}

export interface Level {
  backgrounds: Array<Background>
}
