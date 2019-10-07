import { getRepository } from 'typeorm'
import { Font } from '../../../entities'

export const createFont = {
  /* TODO 첨부파일이 있다면, attachment에 추가하고, 저장해야 한다. */
  async createFont(_, { font }, context: any) {
    const repository = getRepository(Font)

    return await repository.save({
      domain: context.state.domain,
      creator: context.state.user,
      updater: context.state.user,
      ...font
    })
  }
}
