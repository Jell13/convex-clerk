"use client"

import { useConvexAuth } from "convex/react";
import { useEffect } from "react";

export default function Home() {

  const{isAuthenticated} = useConvexAuth()

  useEffect(() => {
    
  })
  return (
    <div>
      Main Page
    </div>
  );
}
