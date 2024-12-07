import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { PrismaService } from "src/repository/prisma.service";
import { CreateToDoDto, UpdateToDoDto } from "./todo.dto";


@Injectable()
export class TodoService{
    constructor(
        private readonly prismaService: PrismaService
    ) {}

    async createTodo(data: CreateToDoDto){
        return await this.prismaService.todo.create({
            data
        });
    }

    async getTodos(){
        return await this.prismaService.todo.findMany({
            where: {
                isDeleted: false
            },
            orderBy: {
                createdAt: 'asc'
            }
        })
    }

    async deleteTodoById(id: string){
        return await this.prismaService.todo.update({
            where: {id},
            data: { isDeleted: true}
    });
    }

    async completeTodoById(id: string){
        const todo: UpdateToDoDto = await this.prismaService.todo.findUnique({
            where: {id}
        });

        if(!todo){
            throw new HttpException('ToDo not found', HttpStatus.NOT_FOUND)
        }

        return await this.prismaService.todo.update({
            where: {id},
            data: {isCompleted: !todo.isCompleted}
    });
    }
}