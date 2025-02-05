import { useForm } from "react-hook-form";

export default function Query() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log("Form Data:", data);
  };

  return (
    <div className=" mx-auto bg-white p-6 rounded-lg shadow">
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        {/* First Name */}
        <div>
          <label className="block text-sm font-medium text-gray-700">
            First Name <span className="text-red-500">*</span>
          </label>
          <input
            {...register("firstName", { required: true })}
            type="text"
            placeholder="Name"
            className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:ring focus:ring-blue-300"
          />
          {errors.firstName && (
            <p className="text-red-500 text-sm mt-1">First Name is required.</p>
          )}
        </div>

        {/* Last Name */}
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Last Name
          </label>
          <input
            {...register("lastName")}
            type="text"
            className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:ring focus:ring-blue-300"
          />
        </div>

        {/* Email */}
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Email <span className="text-red-500">*</span>
          </label>
          <input
            {...register("email", { required: true, pattern: /^\S+@\S+\.\S+$/ })}
            type="email"
            placeholder="example@mail.com"
            className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:ring focus:ring-blue-300"
          />
          {errors.email && (
            <p className="text-red-500 text-sm mt-1">Valid email is required.</p>
          )}
        </div>

        {/* Message */}
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Message <span className="text-red-500">*</span>
          </label>
          <textarea
            {...register("message", { required: true })}
            placeholder="Enter your message"
            rows="4"
            className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:ring focus:ring-blue-300"
          ></textarea>
          {errors.message && (
            <p className="text-red-500 text-sm mt-1">Message is required.</p>
          )}
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-blue-600 text-white p-2 rounded-md hover:bg-blue-700 transition"
        >
          Submit
        </button>
      </form>
    </div>
  );
}
