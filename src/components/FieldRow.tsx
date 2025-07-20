import { useFormContext, useWatch } from "react-hook-form";
import { FieldArray } from "./FieldArray";

export function FieldRow({ nestName, removeField }: any) {
  const { register, control } = useFormContext();
  const type = useWatch({ control, name: `${nestName}.type` });

  return (
    <div className="mb-4 p-3 border rounded bg-gray-50">
      <div className="flex items-center gap-2">
        <input
          {...register(`${nestName}.key`)}
          placeholder="Field Name"
          className="px-2 py-1 border rounded w-1/2"
        />
        <select {...register(`${nestName}.type`)} className="px-2 py-1 border rounded">
          <option value="string">String</option>
          <option value="number">Number</option>
          <option value="boolean">Boolean</option>
          <option value="object">Object</option>
          <option value="array">Array</option>
          <option value="nested">Nested</option>
        </select>
        <button
          type="button"
          className="text-red-500 hover:text-red-700 ml-auto"
          onClick={removeField}
        >
          ✕
        </button>
      </div>
      {type === "nested" && (
        <div className="ml-6 mt-2">
          <FieldArray name={`${nestName}.children`} />
        </div>
      )}
    </div>
  );
}