import { AuthorWhereUniqueInput } from "../author/AuthorWhereUniqueInput";

export type PostCreateInput = {
  author: AuthorWhereUniqueInput;
  content: string;
  featuredImage: string;
  title: string;
};