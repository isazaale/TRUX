import { Module } from '@nestjs/common'
import { CanvasResolver } from './canvas.resolver'
import { CanvasService } from './canvas.service'
import { CanvasGateway } from './canvas.gateway'

@Module({
  providers: [CanvasResolver, CanvasService, CanvasGateway],
})
export class CanvasModule {}
