import Typography from "./Typography";

type InputProps = {
  type: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
  className: string;
  label?: string;
  labelComponent?: React.ReactNode;
};
export default function Input({
  type,
  value,
  onChange,
  placeholder,
  className,
  label,
  labelComponent,
}: InputProps) {
  return (
    <div className={className}>
      {labelComponent ? (
        labelComponent
      ) : (
        <Typography variant="sm" color="primary" fontWeight="medium">
          {label}
        </Typography>
      )}
      <input
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={
          "mt-2.5 border-[1.5px] border-[#35373B] rounded text-[#7F8084] bg-transparent w-full p-2"
        }
      />
    </div>
  );
}
