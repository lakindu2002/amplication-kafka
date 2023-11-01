/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { ProductEntityWhereUniqueInput } from "./ProductEntityWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { ProductEntityUpdateInput } from "./ProductEntityUpdateInput";

@ArgsType()
class UpdateProductEntityArgs {
  @ApiProperty({
    required: true,
    type: () => ProductEntityWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => ProductEntityWhereUniqueInput)
  @Field(() => ProductEntityWhereUniqueInput, { nullable: false })
  where!: ProductEntityWhereUniqueInput;

  @ApiProperty({
    required: true,
    type: () => ProductEntityUpdateInput,
  })
  @ValidateNested()
  @Type(() => ProductEntityUpdateInput)
  @Field(() => ProductEntityUpdateInput, { nullable: false })
  data!: ProductEntityUpdateInput;
}

export { UpdateProductEntityArgs as UpdateProductEntityArgs };
