import { getRepository } from 'typeorm'
import { Font } from '../../../entities'

export const updateFont = {
  async updateFont(_, { id, patch }, context: any) {
    const repository = getRepository(Font)
    const font = await repository.findOne({
      where: {
        domain: context.state.domain,
        id
      }
    })

    return await repository.save({
      ...font,
      ...patch,
      updater: context.state.user
    })
  }
}
