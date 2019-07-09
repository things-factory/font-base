import { CreateDateColumn, UpdateDateColumn, Column, Entity, Index, PrimaryGeneratedColumn, ManyToOne } from 'typeorm'
import { Domain } from '@things-factory/shell'
import { User } from '@things-factory/auth-base'

@Entity('fonts')
@Index('ix_font_0', (font: Font) => [font.domain, font.name], { unique: true })
export class Font {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @ManyToOne(type => Domain)
  domain: Domain

  @Column('text')
  name: string

  @Column('text')
  provider: string // custom, typekit, google,

  @Column('text', {
    nullable: true
  })
  uri: string // For typekit, custom,

  @Column('text', {
    nullable: true
  })
  path: string // Uploaded path for custom

  @Column('boolean')
  active: boolean

  @CreateDateColumn()
  createdAt: Date

  @UpdateDateColumn()
  updatedAt: Date

  @ManyToOne(type => User)
  creator: User

  @ManyToOne(type => User)
  updater: User
}
