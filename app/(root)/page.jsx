"use client"

import { api } from "@convex/_generated/api";
import { useConvexAuth, useMutation } from "convex/react";
import { useEffect } from "react";

export default function Home() {

  const{isAuthenticated} = useConvexAuth()
  const store = useMutation(api.users.store)

  useEffect(() => {
    if(isAuthenticated){
      store({})
    }
  })
  return (
    <div>
      Main Page
    </div>
  );
}
