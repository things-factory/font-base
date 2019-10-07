import { convertListParams, ListParam } from '@things-factory/shell'
import { getRepository } from 'typeorm'
import { Font } from '../../../entities'

export const fontsResolver = {
  async fonts(_: any, params: ListParam, context: any) {
    const convertedParams = convertListParams(params)
    const [items, total] = await getRepository(Font).findAndCount({
      ...convertedParams,
      relations: ['domain', 'creator', 'updater']
    })

    return { items, total }
  }
}
