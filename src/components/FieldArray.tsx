import { useFieldArray, useFormContext } from "react-hook-form";
import { FieldRow } from "./FieldRow";

export function FieldArray({ name }: { name: string }) {
  const { control } = useFormContext();
  const { fields, append, remove } = useFieldArray({ control, name });

  return (
    <div>
      {fields.map((field, index) => (
        <FieldRow
          key={field.id}
          nestIndex={index}
          nestName={`${name}.${index}`}
          removeField={() => remove(index)}
        />
      ))}
      <button
        type="button"
        className="mt-4 px-4 py-2 bg-blue-600 text-white rounded"
        onClick={() => append({ key: "", type: "string", children: [] })}
      >
        + Add Field
      </button>
    </div>
  );
}