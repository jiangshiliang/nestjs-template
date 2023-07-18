import { Injectable, ExecutionContext } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

@Injectable()
export class JwtAuthGuard extends AuthGuard('jwt') {
  private allow_url = ['/auth/login'];

  canActivate(context: ExecutionContext) {
    const request = context.switchToHttp().getRequest();
    if (this.skipJwt(request.path)) {
      return true;
    }
    return super.canActivate(context);
  }

  // 跳过 jwt 验证
  skipJwt(path: string) {
    if (this.allow_url.find((url: string) => url === path)) {
      return true;
    } else {
      return false;
    }
  }
}
