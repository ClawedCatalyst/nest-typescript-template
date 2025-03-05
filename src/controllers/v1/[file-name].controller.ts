// this file contains the controller for the [file-name] domain

import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Param,
  Body,
} from "@nestjs/common";
// import { FileNameService } from "../../services/[file-name].service";
// import { FileNameEntity } from "../../domain/entities/[file-name].entity";

@Controller("v1/[file-name]")
export class FileNameController {
  // add your controller methods here
  // for example:
  // @Get()
  // findAll(): Promise<FileNameEntity[]> {
  //   return this.fileNameService.findAll();
  // }
  // @Get(":id")
  // findOne(@Param("id") id: string): Promise<FileNameEntity | null> {
  //   return this.fileNameService.findOne(id);
  // }
  // @Post()
  // create(@Body() fileNameEntity: FileNameEntity): Promise<FileNameEntity> {
  //   return this.fileNameService.create(fileNameEntity);
  // }
  // @Put(":id")
  // update(@Param("id") id: string, @Body() fileNameEntity: FileNameEntity): Promise<FileNameEntity> {
  //   return this.fileNameService.update(id, fileNameEntity);
  // }
  // @Delete(":id")
  // delete(@Param("id") id: string): Promise<void> {
  //   return this.fileNameService.delete(id);
  // }
}
