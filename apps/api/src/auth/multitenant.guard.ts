import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common'
import { GqlExecutionContext } from '@nestjs/graphql'

@Injectable()
export class MultitenantGuard implements CanActivate {
  canActivate(context: ExecutionContext): boolean {
    const ctx = GqlExecutionContext.create(context)
    const req = ctx.getContext().req
    const claims = req.auth?.sessionClaims || {}
    req.tenantId = claims.org_id || claims.tenantId
    return true
  }
}
