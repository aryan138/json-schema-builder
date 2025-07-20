import { useForm, FormProvider } from "react-hook-form";
import { FieldArray } from "./components/FieldArray";
import { JSONPreview } from "./components/JSONPreview";

export default function App() {
  const methods = useForm({
    defaultValues: {
      fields: []
    }
  });

  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-200 text-gray-900">
      <FormProvider {...methods}>
        <section className="max-w-7xl mx-auto px-6 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Left Panel: Form Builder */}
            <div className="bg-white rounded-2xl shadow-lg p-6 space-y-6 border border-gray-200">
              <h2 className="text-2xl font-bold text-gray-800 border-b pb-2">
                🧱 JSON Schema Builder
              </h2>
              <FieldArray name="fields" />
            </div>

            {/* Right Panel: JSON Preview */}
            <div className="bg-white rounded-2xl shadow-lg p-6 space-y-6 border border-gray-200">
              <h2 className="text-2xl font-bold text-gray-800 border-b pb-2">
                🧬 Live JSON Preview
              </h2>
              <JSONPreview />
            </div>
          </div>
        </section>
      </FormProvider>
    </main>
  );
}
