import { PostCreateNestedManyWithoutTagsInput } from "./PostCreateNestedManyWithoutTagsInput";

export type TagCreateInput = {
  name: string;
  posts?: PostCreateNestedManyWithoutTagsInput;
};
