import { useRef, useEffect } from "react";
import { useRouter } from "next/router";
import useAuth from "../hooks/useAuth";

export default function AuthContent({ children }) {
  const { loggedIn, loading } = useAuth();
  const router = useRouter();
  const loaderef = useRef(null);

  useEffect(() => {
    const spinner = loaderef.current;
    if (spinner) {
      setTimeout(() => {
        spinner.setAttribute(
          "style",
          "pointer-events: none; opacity: 0; transition: 0.2s ease-in-out;"
        );
        setTimeout(() => {
          spinner.setAttribute("style", "display: none;");
        }, 1000);
      }, 450);
    }

    if (!loggedIn) {
      router.push("/login");
    }
  }, [loggedIn, loading, router]);

  if (loggedIn) {
    return <>{children}</>;
  }

  return (
    <>
      <div id="loader" ref={loaderef}>
        <img
          src="assets/img/loading-icon.png"
          alt="icon"
          className="loading-icon"
        />
      </div>
    </>
  );
}
