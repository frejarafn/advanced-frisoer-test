// Michelle

import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../firebaseConfig";

export default function Forside() {
  const [user] = useAuthState(auth);
  return (
    <div>
      {user && (
        <>
          <span>Velkommen {user.displayName || user.email}</span>
        </>
      )}
    </div>
  );
}
