import { Body, Controller, Delete, Get, Param, Post, Put, Query } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {

    constructor(private readonly usersService: UsersService) { }

    @Get() // GET /users or /users?role=value
    findAll(@Query("role") role?: "Intern" | "Engineer" | "Admin") {
        return this.usersService.findAll(role);
    }

    @Get(":id") // GET /users/:id
    findOne(@Param("id") id: string) {
        return this.usersService.findOne(+id);
    }

    @Post() // POST /users
    create(@Body() user: { name: string, email: string, role: "Intern" | "Engineer" | "Admin" }) {
        return this.usersService.create(user);
    }

    @Put(":id") // PUT /users/:id
    put(@Param("id") id: string, @Body() userUpdate: { name: string, email: string, role: "Intern" | "Engineer" | "Admin" }) {
        return this.usersService.update(+id, userUpdate);
    }

    @Delete(":id") // GET /users/:id
    delete(@Param("id") id: string) {
        return this.usersService.delete(+id);
    }
}
