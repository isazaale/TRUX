export interface Node {
  id: string
  tenantId: string
  createdAt: Date
  updatedAt: Date
}

export interface Edge {
  id: string
  tenantId: string
  sourceId: string
  targetId: string
  createdAt: Date
  updatedAt: Date
}
