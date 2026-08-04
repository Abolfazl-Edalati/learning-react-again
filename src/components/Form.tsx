import { useForm, type FieldValue, type FieldValues } from "react-hook-form";

interface FormData {
  name: string;
  age: string;
}

const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit = (data: FieldValues) => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label htmlFor="name">Name</label>
      <input
        id="name"
        {...register("name", { required: "true", maxLength: 8 })}
        type="text"
      />
      {errors.name?.type === "required" && <p>the Name field is required.</p>}
      {errors.name?.type === "maxLength" && (
        <p>the maximum length of the Name field is 8 characters.</p>
      )}
      <label htmlFor="age">Age</label>
      <input
        id="age"
        {...register("age", { required: "true", maxLength: 8 })}
        type="number"
      />
      {errors.age?.type === "required" && <p>the Age field is required.</p>}
      {errors.age?.type === "maxLength" && (
        <p>the maximum length of the Age field is 8 characters.</p>
      )}
      <button type="submit">Submit</button>
    </form>
  );
};

export default Form;
