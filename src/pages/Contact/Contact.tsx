import React from "react";
import { CgMail } from "react-icons/cg";
import { FaHome, FaPhone } from "react-icons/fa";
import emailjs from "@emailjs/browser";
import toast from "react-hot-toast";
import { useForm } from "react-hook-form";
import { useState } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { cn } from "@/lib/cn";
import { Label } from "@/components/ui/Label";
import { Input } from "@/components/ui/Input";

const Contact = () => {
  const [loading, setLoading] = useState(false);
  const {
    reset,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const addressData = [
    {
      id: 34435,
      icon: <FaPhone />,
      title: "Number",
      desc: "+88 01745565552",
    },
    {
      id: 38436,
      icon: <CgMail />,
      title: "Email",
      desc: "shafiqengr1@gmail.com",
    },
    {
      id: 8594,
      icon: <FaHome />,
      title: "Home",
      desc: "Bogura, Bangladesh",
    },
  ];
  // send message
  const onSubmit = async (data: any) => {
    // console.log(data);
    if (isNaN(data?.number)) {
      return toast.error("Please provide a valid number 😒!");
    }

    const templateParams = {
      name: data?.name,
      number: data?.number,
      subject: data?.subject,
      message: data?.message,
    };

    setLoading(true);

    const res = await emailjs.send(
      "service_ngz2qsb",
      "template_phmhizf",
      templateParams,
      "JlpXCvdYgzXy6-d-i"
    );
    if (res.status === 200) {
      reset();
      toast.success("Message Send Success 😍!");
      setLoading(false);
    } else {
      toast.error("Message Send Faild 🥲!");
    }
  };
  useEffect(() => {
    Aos.init({
      duration: 500,
    });
  }, []);
  return (
    <section className="mb-10">
      <h4 className="text-center text-xl font-semibold text-sky-500">
        Contact Me
      </h4>
      <h2 className="text-center text-3xl  md:text-5xl font-bold text-slate-200 mb-5">
        Have Questions? Get in Touch!
      </h2>
      <div className="max-w-[1320px] w-full mx-auto rounded-none md:rounded-2xl p-4 md:p-8 flex flex-col md:flex-row items-center justify-between gap-5">
        <div className="md:flex-1 space-y-4 text-center md:text-start">
          {addressData.map((data) => (
            <div key={data.id} className="space-y-1">
              <h1 className="text-2xl text-sky-500 flex w-full justify-center md:justify-start">
                {data.icon}
              </h1>
              <h3 className="text-xl font-bold text-slate-200">{data.title}</h3>
              <h3 className="text-[16px] font-medium text-gray-400">
                {data.desc}
              </h3>
            </div>
          ))}
        </div>
        <form
        
          onSubmit={handleSubmit(onSubmit)} // Connect the form to your onSubmit handler
          className="space-y-5 md:flex-1 w-full"
        >
          <LabelInputContainer>
            <Label htmlFor="name">Name</Label>
            <Input
              id="name"
              placeholder="Your Name"
              type="text"
              {...register("name", { required: true })}
            />
            {errors.name && (
              <span className="text-red-500">Name is required</span>
            )}
          </LabelInputContainer>

          <LabelInputContainer>
            <Label htmlFor="number">Number</Label>
            <Input
              id="number"
              placeholder="01717 ******"
              type="number"
              {...register("number", { required: true })}
            />
            {errors.number && (
              <span className="text-red-500">Number is required</span>
            )}
          </LabelInputContainer>

          <LabelInputContainer>
            <Label htmlFor="subject">Subject</Label>
            <Input
              id="subject"
              placeholder="Subject"
              type="text"
              {...register("subject", { required: true })}
            />
            {errors.subject && (
              <span className="text-red-500">Subject is required</span>
            )}
          </LabelInputContainer>

          <LabelInputContainer>
            <Label htmlFor="message">Message</Label>
            <Input
              id="message"
              placeholder="Type your message"
              type="text"
              {...register("message", { required: true })}
            />
            {errors.message && (
              <span className="text-red-500">Message is required</span>
            )}
          </LabelInputContainer>

          <button
            className="bg-gradient-to-br relative group/btn from-black to-neutral-600 block w-full text-white rounded-md h-10 font-medium"
            type="submit"
            disabled={loading} // Disable button when loading
          >
            {loading ? "Sending..." : "Send Message →"}
            <BottomGradient />
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;

const BottomGradient = () => {
  return (
    <>
      <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
      <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
    </>
  );
};

const LabelInputContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("flex flex-col space-y-2 w-full", className)}>
      {children}
    </div>
  );
};
