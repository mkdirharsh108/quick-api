import { ReactNode } from "react";
type Props = { children: ReactNode };
const FeaturesWrapper = ({ children }: Props) => {
  return (
    <div className="flex justify-center mt-5 sm:mt-10 flex-col">
      <h3 className="title font-medium text-center">Features</h3>
      <div className="pt-10">
        <div className="xl:container m-auto px-6 text-gray-500 md:px-12">
          <div className="mt-6 grid overflow-hidden gap-0 rounded-3xl sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturesWrapper;
