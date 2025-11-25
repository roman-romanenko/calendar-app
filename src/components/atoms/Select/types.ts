export type SelectOption<TValue> = {
  label: string;
  value: TValue;
};
export type SelectProps<TValue> = {
  options: SelectOption<TValue>[];
  value: SelectOption<TValue> | null;
  onChange: (value: SelectOption<TValue>) => void;
  placeholderText?: string;
};
