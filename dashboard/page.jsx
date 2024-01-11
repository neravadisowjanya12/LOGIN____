// //import UserInfo from "@/components/UserInfo";
// import dashb from "@/components/RegisterForm"
// export default function Dashboard(){
//     return <dashb />
// }
"use client"
import { destroyCookie } from 'nookies';
const logout=()=>{
    destroyCookie(null,'authToken',{path:'/'});
    window.location.href='/';
}
export default function Dashboard() {
    return (
      <main>
        <div>
          <h1>HOME</h1>
          {/* Use the Link component for client-side navigation */}
          <button onClick={logout}>Logout</button>
        </div>
      </main>
    );
  }