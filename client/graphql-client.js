import gql from 'graphql-tag'
import { client } from '@things-factory/shell'

export async function fetchFontList(listParam) {
  const response = await client.query({
    query: gql`
      query($filters: [Filter], $pagination: Pagination, $sortings: [Sorting]) {
        fonts(filters: $filters, pagination: $pagination, sortings: $sortings) {
          items {
            id
            name
            provider
            uri
            path
            active
            createdAt
            updatedAt
          }
          total
        }
      }
    `,
    variables: listParam
  })

  return response.data && response.data.fonts
}

export async function createFont(font) {
  var { name, provider, uri, path, active = false } = font

  const response = await client.mutate({
    mutation: gql`
      mutation CreateFont($font: NewFont!) {
        createFont(font: $font) {
          name
          provider
          uri
          path
          active
          createdAt
          updatedAt
        }
      }
    `,
    variables: {
      font: { name, provider, uri, path, active }
    }
  })

  return response.data
}

export async function updateFont(font) {
  var { id, ...patch } = font

  const response = await client.mutate({
    mutation: gql`
      mutation UpdateFont($id: String!, $patch: FontPatch!) {
        updateFont(id: $id, patch: $patch) {
          id
          name
          provider
          uri
          path
          active
          createdAt
          updatedAt
        }
      }
    `,
    variables: {
      id,
      patch
    }
  })

  return response.data
}

export async function deleteFont(id) {
  const response = await client.mutate({
    mutation: gql`
      mutation($id: String!) {
        deleteFont(id: $id) {
          name
        }
      }
    `,
    variables: {
      id
    }
  })

  return response.data
}
