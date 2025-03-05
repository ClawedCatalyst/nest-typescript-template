// this file contains the service for the [file-name] domain

import { Injectable } from "@nestjs/common";
import { FileNameRepository } from "../domain/ports/[file-name].repository";

@Injectable()
export class FileNameService {
  constructor(private readonly fileNameRepository: FileNameRepository) {}

  // add your service methods here
  // for example:
  // findAll(): Promise<FileNameEntity[]> {
  //   return this.fileNameRepository.findAll();
  // }
  // findOne(id: string): Promise<FileNameEntity | null> {
  //   return this.fileNameRepository.findOne(id);
  // }
  // create(fileNameEntity: FileNameEntity): Promise<FileNameEntity> {
  //   return this.fileNameRepository.create(fileNameEntity);
  // }
  // update(id: string, fileNameEntity: FileNameEntity): Promise<FileNameEntity> {
  //   return this.fileNameRepository.update(id, fileNameEntity);
  // }
  // delete(id: string): Promise<void> {
  //   return this.fileNameRepository.delete(id);
  // }
}
