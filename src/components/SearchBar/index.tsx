import { IconSearch } from "../icons";
import type { ComponentPropsWithoutRef } from "react";

interface SearchBarProps extends ComponentPropsWithoutRef<'input'>{}

export const SearchBar = ({ ...props }: SearchBarProps) => {
  return (
    <div className="
        w-82 h-9 px-4 py-4
        border-none rounded-3xl 
        bg-white-text/15
        flex justify-center items-center">

      <input className="w-full text-white-text outline-none" {...props} />
      <IconSearch/>
    </div>
  );
};
