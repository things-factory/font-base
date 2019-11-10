import gql from 'graphql-tag'

export const Font = gql`
  type Font {
    id: String
    domain: Domain
    name: String
    provider: String
    uri: String
    path: String
    active: Boolean
    createdAt: String
    updatedAt: String
  }
`
