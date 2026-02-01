"use client";

import { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import dynamic from "next/dynamic";
import { isValidPhoneNumber } from "react-phone-number-input";
import "react-phone-number-input/style.css";
import StaggerContainer, {
  StaggerItem,
} from "@/components/shared/StaggerContainer";

const PhoneInput = dynamic(() => import("react-phone-number-input"), {
  ssr: false,
});

const formSchema = z.object({
  fullName: z.string().min(2, "Full name is required"),
  phone: z.string().refine((val) => isValidPhoneNumber(val), {
    message: "Invalid phone number",
  }),
  email: z.string().email("Invalid email address"),
  message: z.string().min(5, "Message must be at least 5 characters"),
});

type FormValues = z.infer<typeof formSchema>;

export default function RegisterInterest() {
  const [submitStatus, setSubmitStatus] = useState<{
    type: "success" | "error" | null;
    message: string;
  }>({ type: null, message: "" });

  const {
    register,
    handleSubmit,
    control,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      phone: "",
      message: "",
    },
  });

  const onSubmit = async (data: FormValues) => {
    setSubmitStatus({ type: null, message: "" });
    try {
      const baseUrl = process.env.NEXT_PUBLIC_API_URL;
      const response = await fetch(`${baseUrl}/api/incompass/send-email`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          full_name: data.fullName,
          email: data.email,
          mobile: data.phone,
          subject: "Inquiry about Services",
          message: data.message,
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to send message. Please try again later.");
      }

      setSubmitStatus({
        type: "success",
        message: "Thank you! Your message has been sent successfully.",
      });
      reset();
    } catch (error) {
      setSubmitStatus({
        type: "error",
        message:
          error instanceof Error ? error.message : "Something went wrong.",
      });
    }
  };

  return (
    <section id="register-interest" className="py-20 px-6">
      <div className="max-w-3xl mx-auto text-center">
        <StaggerContainer staggerDelay={0.15} initialDelay={0.2}>
          {/* Header Section */}
          <div className="space-y-6">
            <StaggerItem direction="up">
              <h1 className="text-[#001A70] text-6xl md:text-8xl font-normal leading-tight tracking-tight">
                Register <br /> Your Interest
              </h1>
            </StaggerItem>
            <StaggerItem direction="up">
              <p className="text-gray-400 text-lg md:text-xl font-light leading-relaxed max-w-2xl mx-auto">
                Welcome to Mountain View, where you can easily book your
                appointment with one of the most innovative real estate
                developers in Egypt. Register online. Fill in the form below to
                connect with our team.
              </p>
            </StaggerItem>
          </div>

          {/* Form Section */}
          <StaggerItem direction="up" className="mt-16">
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="space-y-4 text-left"
            >
              {/* Full Name */}
              <div className="relative">
                <input
                  {...register("fullName")}
                  type="text"
                  placeholder="Full Name"
                  className="w-full px-4 py-4 border border-gray-200 focus:border-[#001A70] outline-none transition-colors placeholder:text-gray-300 font-light rounded-md"
                />
                {errors.fullName && (
                  <span className="text-red-500 text-xs mt-1">
                    {errors.fullName.message}
                  </span>
                )}
              </div>

              {/* Phone Number with react-phone-number-input */}
              <div className="relative">
                <Controller
                  name="phone"
                  control={control}
                  render={({ field }) => (
                    <PhoneInput
                      {...field}
                      international
                      defaultCountry="EG"
                      placeholder="Phone Number"
                    />
                  )}
                />
                {errors.phone && (
                  <span className="text-red-500 text-xs mt-1">
                    {errors.phone.message}
                  </span>
                )}
              </div>

              {/* Email */}
              <div className="relative">
                <input
                  {...register("email")}
                  type="email"
                  placeholder="Email address"
                  className="w-full px-4 py-4 border border-gray-200 focus:border-[#001A70] outline-none transition-colors placeholder:text-gray-300 font-light rounded-md"
                />
                {errors.email && (
                  <span className="text-red-500 text-xs mt-1">
                    {errors.email.message}
                  </span>
                )}
              </div>

              {/* Message */}
              <div className="relative">
                <textarea
                  {...register("message")}
                  placeholder="Write your message"
                  rows={6}
                  className="w-full px-4 py-4 border border-gray-200 focus:border-[#001A70] outline-none transition-colors placeholder:text-gray-300 font-light resize-none rounded-md"
                />
                {errors.message && (
                  <span className="text-red-500 text-xs mt-1">
                    {errors.message.message}
                  </span>
                )}
              </div>

              {/* Submit Status Message */}
              {submitStatus.type && (
                <div
                  className={`p-4 rounded-md text-sm ${
                    submitStatus.type === "success"
                      ? "bg-green-50 text-green-800 border border-green-200"
                      : "bg-red-50 text-red-800 border border-red-200"
                  }`}
                >
                  {submitStatus.message}
                </div>
              )}

              {/* Submit Button */}
              <div className="flex justify-end pt-4">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="bg-[#003da6] text-white px-10 py-4 font-medium text-sm tracking-widest uppercase hover:bg-[#002d7a] transition-colors disabled:opacity-50 rounded-md active:scale-95"
                >
                  {isSubmitting ? "SUBMITTING..." : "SUBMIT"}
                </button>
              </div>
            </form>
          </StaggerItem>
        </StaggerContainer>
      </div>
    </section>
  );
}
