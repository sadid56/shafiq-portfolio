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

const Contact = () => {
  const { register, handleSubmit, reset } = useForm();
  const [loading, setLoading] = useState(false);
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
      toast.success("Message Send Success 😍!");
      reset();
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
      <h4 data-aos="fade-up"  data-aos-duration="1500" className="text-center text-3xl font-semibold my-10">
        Contact <span className="text-primary">Me</span>
      </h4>
      <div data-aos="fade-up"  data-aos-duration="3c000" className="flex flex-col md:flex-row gap-5 max-w-7xl mx-auto justify-between items-center  p-3 md:p-10 shadow-xl rounded-md">
        {/* address */}
        <div className="flex-1 space-y-4 text-center md:text-start">
          {addressData.map((data) => (
            <div key={data.id} className="space-y-1">
              <h1 className="text-2xl text-secondary flex w-full justify-center md:justify-start">{data.icon}</h1>
              <h3 className="text-xl font-bold">{data.title}</h3>
              <h3 className="text-[16px] font-medium text-gray-500">
                {data.desc}
              </h3>
            </div>
          ))}
        </div>
        {/* form */}
        <form onSubmit={handleSubmit(onSubmit)} className="flex-1 space-y-4">
          <div className="flex items-center gap-3">
            <div className="relative  w-full rounded-lg">
              <input
                className="peer rounded border border-secondary px-4 py-3 text-primary focus:outline-none w-full"
                type="text"
                required
                {...register("name")}
                placeholder=""
              />
              <label
                className="absolute -top-2 left-[10px] bg-white px-2 text-xs text-slate-400 duration-300 peer-placeholder-shown:left-[14px] peer-placeholder-shown:top-3  peer-placeholder-shown:bg-transparent peer-placeholder-shown:text-sm peer-focus:-top-2 peer-focus:left-[10px] peer-focus:bg-white peer-focus:text-xs peer-focus:text-primary"
                htmlFor="">
                Your Name
              </label>
            </div>
            <div className="relative  w-full rounded-lg">
              <input
                className="peer rounded border border-secondary px-4 py-3 text-primary focus:outline-none w-full"
                type="text"
                required
                placeholder=""
                {...register("number")}
              />
              <label
                className="absolute -top-2 left-[10px] bg-white px-2 text-xs text-slate-400 duration-300 peer-placeholder-shown:left-[14px] peer-placeholder-shown:top-3  peer-placeholder-shown:bg-transparent peer-placeholder-shown:text-sm peer-focus:-top-2 peer-focus:left-[10px] peer-focus:bg-white peer-focus:text-xs peer-focus:text-primary"
                htmlFor="">
                Number
              </label>
            </div>
          </div>
          <div className="relative  w-full rounded-lg">
            <input
              className="peer rounded border border-secondary px-4 py-3 text-primary focus:outline-none w-full"
              type="text"
              placeholder=""
              required
              {...register("subject")}
            />
            <label
              className="absolute -top-2 left-[10px] bg-white px-2 text-xs text-slate-400 duration-300 peer-placeholder-shown:left-[14px] peer-placeholder-shown:top-3  peer-placeholder-shown:bg-transparent peer-placeholder-shown:text-sm peer-focus:-top-2 peer-focus:left-[10px] peer-focus:bg-white peer-focus:text-xs peer-focus:text-primary"
              htmlFor="">
              Subject
            </label>
          </div>
          <div className="relative  w-full rounded-lg">
            <textarea
              className="peer rounded border border-secondary px-4 py-10 text-primary focus:outline-none w-full"
              required
              {...register("message")}
              placeholder=""
            />
            <label
              className="absolute -top-2 left-[10px] bg-white px-2 text-xs text-slate-400 duration-300 peer-placeholder-shown:left-[14px] peer-placeholder-shown:top-3  peer-placeholder-shown:bg-transparent peer-placeholder-shown:text-sm peer-focus:-top-2 peer-focus:left-[10px] peer-focus:bg-white peer-focus:text-xs peer-focus:text-primary"
              htmlFor="">
              Message...
            </label>
          </div>
          <button disabled={loading} className="message-send-btn flex items-center gap-1" type="submit">
            send message
            {loading && (
              <span className="loading loading-spinner text-accent"></span>
            )}
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
