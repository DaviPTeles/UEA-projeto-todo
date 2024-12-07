import { Injectable, Post , Body, Controller, Get, Param, Delete, Patch} from "@nestjs/common";
import { CreateToDoDto } from "./todo.dto";
import { TodoService } from "./todo.service";

@Injectable()
@Controller('todo')
export class TodoController {
    constructor(private readonly todoService: TodoService){}

        @Post()
        async createTodo(@Body() data: CreateToDoDto){
            return this.todoService.createTodo(data);
        }

        @Get()
        async getTodos(){
            return this.todoService.getTodos();
        }

        @Delete(':id')
        async deleteTodoById(@Param('id') id: string){
            return this.todoService.deleteTodoById(id);
        }

        @Patch(':id')
        async completeTodoById(@Param('id') id: string){
            return this.todoService.completeTodoById(id);
        }


    }
