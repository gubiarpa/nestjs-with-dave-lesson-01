import { Body, Controller, Delete, Get, Param, Post, Put, Query } from '@nestjs/common';

@Controller('users')
export class UsersController {
    @Get() // GET /users or /users?role=value
    findAll(@Query("role") role?: "Intern" | "Engineer" | "Admin") {
        if (!role)
            return [];

        return [{ role }];
    }

    @Get(":id") // GET /users/:id
    findOne(@Param("id") id: string) {
        return { id };
    }

    @Post() // POST /users
    create(@Body() user: {}) {
        return user;
    }

    @Put(":id") // PUT /users/:id
    put(@Param("id") id: string, @Body() userUpdate: {}) {
        return { id, ...userUpdate };
    }

    @Delete(":id") // GET /users/:id
    delete(@Param("id") id: string) {
        return { id };
    }
}
