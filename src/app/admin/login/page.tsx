import LoginForm from "@/components/admin/LoginForm";

export default function AdminLoginPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#EDEDED]/40 px-4">
      <div className="w-full max-w-sm">
        <div className="text-center mb-8">
          <span className="text-2xl font-bold text-[#1A1A1A]">
            Corbin<span className="text-[#FF6B2C]">.</span>
          </span>
          <p className="text-gray-500 text-sm mt-2">Admin Sign In</p>
        </div>
        <div className="bg-white border border-[#EDEDED] rounded-2xl p-8 shadow-sm">
          <LoginForm />
        </div>
      </div>
    </div>
  );
}
