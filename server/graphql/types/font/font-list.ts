import gql from 'graphql-tag'

export const FontList = gql`
  type FontList {
    items: [Font]
    total: Int
  }
`
