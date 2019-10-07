import { Font } from './font'
import { NewFont } from './new-font'
import { FontPatch } from './font-patch'

export const Mutation = `
  createFont (
    font: NewFont!
  ): Font

  updateFont (
    id: String!
    patch: FontPatch!
  ): Font

  deleteFont (
    id: String!
  ): Font
`

export const Query = `
  fonts: [Font]
  font(id: String!): Font
`

export const Types = [Font, NewFont, FontPatch]
