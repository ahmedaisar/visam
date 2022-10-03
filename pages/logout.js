import { useEffect } from "react";
import { useMutation, gql } from "@apollo/client";
import { useRouter } from "next/router";

import { GET_USER } from "../hooks/useAuth";

const LOG_OUT = gql`
  mutation logOut {
    logout(input: {}) {
      status
    }
  }
`;

export default function LogOut() {
  const [logOut, { called, loading, error, data }] = useMutation(LOG_OUT, {
    refetchQueries: [{ query: GET_USER }],
  });
  const loggedOut = data?.logout?.status;
  const router = useRouter();

  useEffect(() => {
    logOut();
  }, [logOut]);

  if (loggedOut === "SUCCESS") {
    router.push("/");
  } else {
    return false;
  }
}
