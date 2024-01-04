import CartMainPage from "@/components/cart/CartMainPage";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

const getData = async (value) => {
 
  const result = await fetch("http://localhost:27017/api/get-user-data/", {
    cache: "no-store",
    headers: { auth: value },
  });
  const data = await result.json();

  if(data.router)
  {
    redirect('/login')
  }

  return data;
};

const Cart =async () => {
  const cookieStore = cookies();
  const auth_cookie = cookieStore.get("auth");
 
  const userData=await getData(auth_cookie?.value);


  return (
    <CartMainPage userCookie={auth_cookie} userData={userData}/>
  );
};

export default Cart;
