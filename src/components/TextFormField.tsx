interface TextFormFieldProps {
  type: 'text' | 'textarea' | 'email';
  label: string;
  id: 'firstName' | 'lastName' | 'email' | 'message';
}

function TextFormField(props: TextFormFieldProps) {
  const { type, label, id } = props;

  const inputStyles = [
    'w-full',
    'text-black',
    'p-3',
    'rounded-md',
    'shadow-inner',
    'border',
    'border-zinc-300',
    'justify-start',
    'items-center',
    'gap-2.5',
    'inline-flex',
  ].join(' ');

  const textAreaInputStyles = [
    'text-black',
    'w-full',
    'h-40',
    'p-3',
    'rounded-md',
    'border',
    'border-zinc-300',
    'justify-start',
    'inline-flex',
  ].join(' ');

  return (
    <span className="w-full inline-flex flex-col justify-start items-start gap-5">
      <label className="text-sm font-medium leading-tight" htmlFor={id}>
        {label}
      </label>
      {type === 'textarea' ? (
        <textarea id={id} className={textAreaInputStyles} rows={10} />
      ) : (
        <input type={type} id={id} className={inputStyles} />
      )}
    </span>
  );
}

export default TextFormField;
