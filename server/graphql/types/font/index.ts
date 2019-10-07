import { Font } from './font'
import { NewFont } from './new-font'
import { FontPatch } from './font-patch'
import { FontList } from './font-list'

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
  fonts(filters: [Filter], pagination: Pagination, sortings: [Sorting]): FontList
  font(id: String!): Font
`

export const Types = [Font, FontList, NewFont, FontPatch]
