"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { UploadDropzone } from "./ui/upload-dropzone";
import { useUploadFiles } from "@better-upload/client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  CreateAccountFormData,
  createAccountSchema,
} from "@/schemas/createAccountSchema";
import { AxiosError } from "axios";
import { api } from "@/services/api";
import { toast } from "react-toastify";

export function CreateAccount({
  className,
  ...props
}: React.ComponentProps<"div">) {
  // Upload (S3)
  const { control } = useUploadFiles({
    route: "images",
  });

  // React Hook Form
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors, isSubmitting },
  } = useForm<CreateAccountFormData>({
    resolver: zodResolver(createAccountSchema),
  });

  // Submit
  const onSubmit = async (data: CreateAccountFormData) => {
    try {
      await api.post("http://localhost:3333/users", {
        name: data.fullName,
        email: data.email,
        phone: data.phone,
        password: data.password,
        avatarUrl: data.avatarUrl ?? null,
      });

      // sucesso
      alert("Conta criada com sucesso!");
      window.location.href = "/login";
    } catch (error) {
      if (error instanceof AxiosError) {
        if (error.response?.status === 409) {
          toast.error("Número de telefone ou email já existente");
          return;
        }

        toast.error("Erro ao criar conta, por favor contatar suporte");
      } else {
        toast.error("Erro ao criar conta, por favor contatar suporte");
      }
    }
  };
  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <Card>
        <CardHeader className="text-center">
          <CardTitle className="text-xl">Create your account</CardTitle>
          <CardDescription>
            Sign up with your Apple or Google account
          </CardDescription>
        </CardHeader>

        <CardContent>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="grid gap-6">
              {/* Social Buttons */}
              <div className="flex flex-col gap-4">
                <Button variant="outline" className="w-full" type="button">
                  Sign up with Apple
                </Button>

                <Button variant="outline" className="w-full" type="button">
                  Sign up with Google
                </Button>
              </div>

              {/* Divider */}
              <div className="after:border-border relative text-center text-sm after:absolute after:inset-0 after:top-1/2 after:z-0 after:flex after:items-center after:border-t">
                <span className="bg-card text-muted-foreground relative z-10 px-2">
                  Or create with email
                </span>
              </div>

              {/* Form fields */}
              <div className="grid gap-6">
                {/* Full Name */}
                <div className="grid gap-2">
                  <Label>Full Name</Label>
                  <Input {...register("fullName")} placeholder="John Doe" />
                  {errors.fullName && (
                    <p className="text-xs text-red-500">
                      {errors.fullName.message}
                    </p>
                  )}
                </div>

                {/* Email */}
                <div className="grid gap-2">
                  <Label>Email</Label>
                  <Input
                    {...register("email")}
                    type="email"
                    placeholder="m@example.com"
                  />
                  {errors.email && (
                    <p className="text-xs text-red-500">
                      {errors.email.message}
                    </p>
                  )}
                </div>

                {/* Phone */}
                <div className="grid gap-2">
                  <Label>Phone Number</Label>
                  <Input
                    {...register("phone")}
                    type="tel"
                    placeholder="55 (11) 98765-4321"
                  />
                  {errors.phone && (
                    <p className="text-xs text-red-500">
                      {errors.phone.message}
                    </p>
                  )}
                </div>

                {/* Password */}
                <div className="grid gap-2">
                  <Label>Password</Label>
                  <Input {...register("password")} type="password" />
                  {errors.password && (
                    <p className="text-xs text-red-500">
                      {errors.password.message}
                    </p>
                  )}
                </div>

                {/* Confirm Password */}
                <div className="grid gap-2">
                  <Label>Confirm Password</Label>
                  <Input {...register("confirmPassword")} type="password" />
                  {errors.confirmPassword && (
                    <p className="text-xs text-red-500">
                      {errors.confirmPassword.message}
                    </p>
                  )}
                </div>

                {/* Avatar */}
                <section className="bg-card rounded-2xl p-6 shadow-sm border">
                  <h2 className="text-lg font-semibold mb-4">Seu avatar</h2>

                  <UploadDropzone
                    control={control}
                    accept="image/*"
                    description={{
                      maxFiles: 1,
                      maxFileSize: "5MB",
                      fileTypes: "JPEG, PNG, WEBP",
                    }}
                  />

                  <p className="text-xs text-muted-foreground mt-2">
                    Essa imagem será usada como seu avatar.
                  </p>
                </section>

                {/* Submit */}
                <Button
                  type="submit"
                  className="w-full"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Creating..." : "Create account"}
                </Button>
              </div>

              {/* Login link */}
              <div className="text-center text-sm">
                Already have an account?{" "}
                <a href="/login" className="underline underline-offset-4">
                  Log in
                </a>
              </div>
            </div>
          </form>
        </CardContent>
      </Card>

      {/* Footer */}
      <div className="text-muted-foreground text-center text-xs">
        By creating an account, you agree to our{" "}
        <a href="terms/service" className="underline">
          Terms of Service
        </a>{" "}
        and{" "}
        <a href="terms/privacy" className="underline">
          Privacy Policy
        </a>
        .
      </div>
    </div>
  );
}
