import LoginForm from "@/components/auth/loginForm";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

const getData = async (value) => {
  const result = await fetch("http://localhost:27017/api/get-user-data/", {
    cache: "no-store",
    headers: { auth: value },
  });
  const data = await result.json();
  if (!data.router) {
    redirect("/myacount");
  }

  return data;
};
const Login = async () => {
  const cookieStore = cookies();
  const auth_cookie = cookieStore.get("auth");
  if (auth_cookie) {
    const data = await getData(auth_cookie.value);
  }

  return (
    <div>
      <LoginForm />
    </div>
  );
};

export default Login;
