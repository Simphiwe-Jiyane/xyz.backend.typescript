import { Module } from '@nestjs/common';
import { DatabaseModule } from '../../database/database.module';
import { userProviders } from '../providers/user.provider';

@Module({
  imports: [DatabaseModule],
  controllers: [],
  providers: [...userProviders],
})
export class UserModule {}
