import { allComponents } from "@/componentDictionary";
import ComponentCard from "./ComponentCard";

function ComponentsWrapper() {

    return (
      <div className="w-full flex items-center justify-center bg-transparent ">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 lg:max-w-10/12 w-11/12 items-start mt-10 gap-8">
            {allComponents.map((component) => (
                <ComponentCard key={component.name} details={component} />
            ))}
        </div>
      </div>
  );
}
export default ComponentsWrapper;