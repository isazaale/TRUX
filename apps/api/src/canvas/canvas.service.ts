import { Injectable } from '@nestjs/common'
import { PrismaService } from '../prisma.service'

@Injectable()
export class CanvasService {
  constructor(private prisma: PrismaService) {}

  node(id: string) {
    return this.prisma.node.findUnique({ where: { id } })
  }
  nodes() {
    return this.prisma.node.findMany()
  }
  createNode(data: any) {
    return this.prisma.node.create({ data })
  }
  edge(id: string) {
    return this.prisma.edge.findUnique({ where: { id } })
  }
  edges() {
    return this.prisma.edge.findMany()
  }
  createEdge(data: any) {
    return this.prisma.edge.create({ data })
  }
}
