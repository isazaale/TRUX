import { WebSocketGateway, WebSocketServer } from '@nestjs/websockets'
import { Server } from 'socket.io'

@WebSocketGateway()
export class CanvasGateway {
  @WebSocketServer()
  server: Server

  nodeAdded(node: any) {
    this.server.emit('nodeAdded', node)
  }

  edgeConnected(edge: any) {
    this.server.emit('edgeConnected', edge)
  }
}
