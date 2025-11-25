import { useEffect, useRef, useState } from "react";
import { SelectProps } from "./types";
import { useAppTheme } from "../../../system/helpers/hooks";
import { getSelectStyles } from "./styles";
import { v4 as uuidv4 } from "uuid";

export const Select = <TValue,>({
  options,
  value,
  onChange,
  placeholderText = "Select an option",
}: SelectProps<TValue>) => {
  const theme = useAppTheme();
  const styles = getSelectStyles(theme);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const toggleDropdown = () => setIsOpen((prev) => !prev);
  const closeDropdown = () => setIsOpen(false);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        closeDropdown();
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div css={styles.wrapper} ref={dropdownRef}>
      <button css={styles.button} onClick={toggleDropdown}>
        {value ? value.label : placeholderText}
      </button>
      {isOpen && (
        <div css={styles.dropdown}>
          {options.map((item) => (
            <div
              key={uuidv4()}
              css={[styles.item, item === value ? styles.activeItem : null]}
              onClick={() => {
                onChange(item);
                closeDropdown();
              }}
            >
              {item.label}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Select;
