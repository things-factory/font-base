import { getRepository } from 'typeorm'
import { Font } from '../../../entities'

export const deleteFont = {
  async deleteFont(_, { id }, context: any) {
    const repository = getRepository(Font)
    const font = await repository.findOne({
      where: { domain: context.state.domain, id }
    })

    if (font) {
      await repository.remove(font)
      return font
    }
  }
}
