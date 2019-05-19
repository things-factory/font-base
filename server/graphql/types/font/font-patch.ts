import { gql } from 'apollo-server-koa'

export const FontPatch = gql`
  input FontPatch {
    name: String
    domain: String
    provider: String
    uri: String
    path: String
    active: Boolean
  }
`
