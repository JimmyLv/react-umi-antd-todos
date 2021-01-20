export default function FormItem({ type = 'text', label, value, onChange, placeholder }) {
  return (
    <div>
      <label htmlFor={label}>{label}</label>
      <input
        type={type}
        id={label}
        placeholder={placeholder}
        value={value}
        onChange={e => onChange(e.target.value)}
      />
    </div>
  );
}
