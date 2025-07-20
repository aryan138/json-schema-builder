import { useFormContext, useWatch } from "react-hook-form";

function buildSchema(fields: any[]) {
  const result: any = {};
  fields.forEach((field) => {
    if (!field.key) return;
    if (field.type === "nested") {
      result[field.key] = buildSchema(field.children || []);
    } else {
      result[field.key] = field.type;
    }
  });
  return result;
}

export function JSONPreview() {
  const { control } = useFormContext();
  const fields = useWatch({ control, name: "fields" });
  const schema = buildSchema(fields || []);

  return (
    <pre className="text-sm bg-gray-100 p-4 rounded overflow-x-auto">
      {JSON.stringify(schema, null, 2)}
    </pre>
  );
}