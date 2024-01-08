import RegisterForm from '@/components/auth/registerForm';
import { cookies } from "next/headers";
import { redirect } from 'next/navigation'

const getData = async (value) => {

  const result = await fetch("https://distracted-mcnulty-orq2ubkyw.liara.run/api/get-user-data/", {
    cache: "no-store",
    headers: { auth: value },
  });
  const data = await result.json();
  if(!data.router)
  {
    redirect('/myacount')
  }
 
  return data;
};

const Register = async () => {
    const cookieStore = cookies();
    const auth_cookie = cookieStore.get("auth");
    if(auth_cookie)
    {
      const data = await getData(auth_cookie.value);
    }
    return (
        <div>
            <RegisterForm />
        </div>
    );
};

export default Register;