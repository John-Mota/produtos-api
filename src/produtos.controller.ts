import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { Produto } from "./produto.model";
@Controller('produtos')
export class ProdutosController {

    produto: Produto[] = [
        new Produto("LIV001", "Typescript", 29.90),
        new Produto("LIV001", "Javascript", 29.90),
        new Produto("LIV001", "Typescript", 29.90)
    ]

    @Get()
    listarTodos(): Produto[] {
        return this.produto;
    }

    @Get(':id')
    listarUm(@Param() params): Produto {
        return this.produto[0]
    }

    @Post()
    criar(@Body() produto: Produto) {
        produto.id = 100;
        this.produto.push(produto);
    }

    @Put()
    alterar(@Body() produto: Produto): Produto{
        return produto;
        
    }

    @Delete(':id')
    delete(@Param() params) {
        this.produto.pop();
    }

}