import { getRepository } from 'typeorm'
import { Font } from '../../../entities'

export const fontResolver = {
  async font(_, { id }, context, info) {
    return await getRepository(Font).findOne({
      where: { domain: context.state.domain, id, relations: ['domain', 'creator', 'updater'] }
    })
  }
}
