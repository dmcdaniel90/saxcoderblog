import { useForm } from 'react-hook-form';
import TextFormField from './TextFormField';

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data: any) => {
    return null;
  };

  return (
    <form
      className="w-full min-w-[320px] max-w-lg inline-flex flex-col justify-start items-start gap-10 pr-2"
      onSubmit={handleSubmit(onSubmit)}
      method="post"
    >
      <TextFormField
        type="text"
        label="First Name"
        id="firstName"
        {...register('First name', { required: true, maxLength: 80 })}
      />

      <TextFormField
        type="text"
        label="Last Name"
        id="lastName"
        {...register('Last name', { required: true, maxLength: 100 })}
      />

      <TextFormField
        type="email"
        label="Email"
        id="email"
        {...register('Email', { required: true, pattern: /^\S+@\S+$/i })}
      />

      <span className="w-full inline-flex flex-col justify-start items-start gap-5">
        <label className="text-sm font-medium leading-tight" htmlFor="services">
          What is your message about?
        </label>
        <select
          id="services"
          className="w-full text-black p-3 rounded-md shadow-inner border border-zinc-300 justify-start items-center gap-2.5 inline-flex"
          {...register('What is your message about?')}
        >
          <option value="General">General</option>
          <option value="Music">Music</option>
          <option value="Development">Development</option>
        </select>
      </span>

      <TextFormField
        type="textarea"
        id="message"
        label="Enter Your Message"
        {...register('Enter a Message', { required: true })}
      />

      <button
        type="submit"
        className="inline-flex items-center justify-center px-6 py-2 font-serif text-sm leading-tight italic font-bold text-button bg-button border hover:border-main rounded-full transition hover:bg-transparent hover:text-main cursor-pointer"
      >
        Submit
      </button>
    </form>
  );
}
