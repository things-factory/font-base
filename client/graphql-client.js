import gql from 'graphql-tag'
import { client } from '@things-factory/shell'
import { gqlBuilder } from '@things-factory/utils'

export async function fetchFontList(listParam) {
  const response = await client.query({
    query: gql`
    {
      fonts(${gqlBuilder.buildArgs(listParam)}) {
        items {
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
    `
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
  var { name, provider, uri, path } = font

  const response = await client.mutate({
    mutation: gql`
      mutation UpdateFont($patch: FontPatch!) {
        updateFont(patch: $font) {
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
      font: { name, path }
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
