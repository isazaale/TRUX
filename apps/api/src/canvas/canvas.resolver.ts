import { Args, Context, Mutation, Query, Resolver } from '@nestjs/graphql'
import { UseGuards } from '@nestjs/common'
import { CanvasService } from './canvas.service'
import { Node } from './dto/node.dto'
import { Edge } from './dto/edge.dto'
import { MultitenantGuard } from '../auth/multitenant.guard'

@Resolver()
@UseGuards(MultitenantGuard)
export class CanvasResolver {
  constructor(private service: CanvasService) {}

  @Query(() => [Node])
  nodes(@Context() _ctx: any) {
    return this.service.nodes()
  }

  @Mutation(() => Node)
  createNode(@Context() ctx: any) {
    return this.service.createNode({ tenantId: ctx.req.tenantId })
  }

  @Query(() => [Edge])
  edges() {
    return this.service.edges()
  }

  @Mutation(() => Edge)
  createEdge(
    @Context() ctx: any,
    @Args('sourceId') sourceId: string,
    @Args('targetId') targetId: string,
  ) {
    return this.service.createEdge({ tenantId: ctx.req.tenantId, sourceId, targetId })
  }
}
