import { gql } from 'apollo-server-koa'

export const FontList = gql`
  type FontList {
    items: [Font]
    total: Int
  }
`
