import { PrismaService } from "nestjs-prisma";
import { Prisma, Author, Post } from "@prisma/client";

export class AuthorServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count<T extends Prisma.AuthorFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.AuthorFindManyArgs>
  ): Promise<number> {
    return this.prisma.author.count(args);
  }

  async findMany<T extends Prisma.AuthorFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.AuthorFindManyArgs>
  ): Promise<Author[]> {
    return this.prisma.author.findMany(args);
  }
  async findOne<T extends Prisma.AuthorFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.AuthorFindUniqueArgs>
  ): Promise<Author | null> {
    return this.prisma.author.findUnique(args);
  }
  async create<T extends Prisma.AuthorCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.AuthorCreateArgs>
  ): Promise<Author> {
    return this.prisma.author.create<T>(args);
  }
  async update<T extends Prisma.AuthorUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.AuthorUpdateArgs>
  ): Promise<Author> {
    return this.prisma.author.update<T>(args);
  }
  async delete<T extends Prisma.AuthorDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.AuthorDeleteArgs>
  ): Promise<Author> {
    return this.prisma.author.delete(args);
  }

  async findPosts(
    parentId: string,
    args: Prisma.PostFindManyArgs
  ): Promise<Post[]> {
    return this.prisma.author
      .findUnique({
        where: { id: parentId },
      })
      .posts(args);
  }
}
