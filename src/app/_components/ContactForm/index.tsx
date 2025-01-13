"use client";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";

export default function ContactForm() {
    const contactFormSchema = z.object({
        name: z.string().nonempty("Enter a valid name"),
        email: z.string().email("Enter a valid email"),
        service: z.string().nonempty("Enter the service than you want"),
        message: z.string().nonempty("Enter what you want").max(400, "You can't exceed the max of 400 chars" ),
    });
    type contactFormData = z.infer<typeof contactFormSchema>;
    const [contactList, setContactList] = useState<contactFormData[]>([])
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    reset
  } = useForm<contactFormData>({
    resolver: zodResolver(contactFormSchema),
  });
  const onSubmit = (data: contactFormData) => {
        reset()
        setContactList([...contactList, data])
  };
  return (
    <section className="flex flex-col gap-5 my-5 max-w-screen-md w-full">
      <h2 className="text-center text-3xl font-semibold text-slate-50">
        Get in touch
      </h2>
      <p className="text-center font-semibold text-sm -mt-2">
        Let&apos;s work together
      </p>
      <form
        onSubmit={handleSubmit(onSubmit)}
        action=""
        method="POST"
        className={`flex flex-col gap-2 border border-gray-300 rounded-md p-4 ${isValid ? '!border-2 !border-green-300' : 'border-red-300'}`}
      >
        <div className="flex flex-col gap-2">
          <label htmlFor="name">Name</label>
          <input
            className="p-2 rounded-sm outline-none text-background"
            {...register("name") }
          />
          {errors.name && <span className="text-red-300 transition-all duration-300">{errors.name.message}</span>}
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="email">Email</label>
          <input
            className="p-2 rounded-sm outline-none text-background"
            {...register("email")}
          />
          {errors.email && <span className="text-red-300 transition-all duration-300">{errors.email.message}</span>}
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="service">Service</label>
          <input
            className="p-2 rounded-sm outline-none text-background"
            {...register("service")}
          />
          {errors.service && <span className="text-red-300 transition-all duration-300">{errors.service.message}</span>}
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="message">Message</label>
          <textarea
            rows={10}
            className="rounded-sm outline-none text-black p-3"
            {...register("message")}
          />
          {errors.message && <span className="text-red-300 transition-all duration-300">{errors.message.message}</span>}
        </div>
        <button
          className="border border-gray-300 rounded-md px-4 py-2 hover:bg-gray-300 hover:text-slate-700 clickable my-4"
          type="submit"
        >
          Send
        </button>
      </form>
      {/* <div className="flex flex-col justify-center items-center">
        <p className="text-2xl font-semibold">show contact attemps</p>
        <div className="my-3 grid grid-cols-3 columns-auto gap-3 max-w-screen-lg">
            {contactList ? (
                contactList.map((contact, index) => (
                    <div key={index} className="border border-gray-300 px-3 py-1 text *:text-center flex flex-col items-center justify-center gap-3">
                        <p>name: {contact.name}</p>
                        <p>email: {contact.email}</p>
                        <p>service: {contact.service}</p>
                        <p>message: {contact.message}</p>
                    </div>
                ))
            ) : 'Without any contact attemps!'}
        </div>
      </div> */}
    </section>
  );
}
