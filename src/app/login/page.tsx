import Header from "@/components/login/Header";
import LoginForm from "@/components/login/LoginForm";

export default function LoginPage() {
  return (
    <main className="min-h-screen flex flex-col justify-center items-center gap-5">
      <Header />
      <LoginForm />
    </main>
  );
}
