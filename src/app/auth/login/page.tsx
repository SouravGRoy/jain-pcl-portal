"use client";

import LoginForm from "@/components/auth/login-form";

export default function LoginPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div className="text-center">
          <h1 className="text-3xl font-extrabold text-gray-900">
            Academic Portal
          </h1>
          <p className="mt-2 text-sm text-gray-600">
            Jain University Academic Management System
          </p>
        </div>
        <LoginForm />
      </div>
    </div>
  );
}
