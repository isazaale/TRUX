import { Field, ID, ObjectType } from '@nestjs/graphql'

@ObjectType()
export class Edge {
  @Field(() => ID)
  id: string

  @Field()
  tenantId: string

  @Field()
  sourceId: string

  @Field()
  targetId: string

  @Field()
  createdAt: Date

  @Field()
  updatedAt: Date
}
