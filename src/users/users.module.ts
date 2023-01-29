import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersResolver } from './users.resolver';
import { MongooseModule } from '@nestjs/mongoose';
import { UserSchema } from './schemas/user.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{
      name: '315_4_Users',
      schema: UserSchema
    }])
  ],
  providers: [UsersResolver, UsersService]
})
export class UsersModule {}
