import { useForm } from "react-hook-form";
import { useSetRecoilState } from "recoil";
import { categoryState, customCategoryState } from "../atoms";

interface IForm {
  customCategory: string;
}

function CustomCategory() {
  const setCategory = useSetRecoilState(categoryState);
  const setCustomCategory = useSetRecoilState(customCategoryState);
  const { register, handleSubmit, setValue } = useForm<IForm>();
  const onSubmit = ({ customCategory }: IForm) => {
    setValue("customCategory", "");
    setCategory(customCategory as any);
    setCustomCategory((oldCustomCategories) => [
      ...oldCustomCategories,
      customCategory,
    ]);
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input
        type="text"
        placeholder="Add Custom Category"
        {...register("customCategory")}
      />
      <button>Add</button>
    </form>
  );
}

export default CustomCategory;
