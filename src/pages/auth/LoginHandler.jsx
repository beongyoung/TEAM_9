import { Link, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import axios from "axios";

const LoginHandler = (props) => {
  const navigate = useNavigate();
  const code = new URL(window.location.href).searchParams.get("code");

  useEffect(() => {
    const kakaoLogin = async () => {
      // Replace YOUR_KAKAO_CLIENT_ID with your actual Kakao client ID
      const clientId = `${import.meta.env.VITE_API_KEY}`;

      try {
        // Exchange the code for an access token
        const tokenResponse = await axios.post(
          "https://kauth.kakao.com/oauth/token",
          new URLSearchParams({
            grant_type: "authorization_code",
            client_id: clientId,
            redirect_uri: `${import.meta.env.VITE_REDIRECT_URL}`, // Ensure this matches your Kakao app settings
            code: code,
          }),
          {
            headers: {
              "Content-Type": "application/x-www-form-urlencoded;charset=utf-8",
            },
          },
        );

        // Get user information using the access token
        const userInfoResponse = await axios.get(
          "https://kapi.kakao.com/v2/user/me",
          {
            headers: {
              Authorization: `Bearer ${tokenResponse.data.access_token}`,
            },
          },
        );

        // Handle user information as needed
        console.log(userInfoResponse.data);

        // Redirect to the home page after successful login
        navigate("/home");
      } catch (error) {
        console.error("Kakao login error:", error);
      }
    };

    if (code) {
      kakaoLogin();
    }
  }, [code, navigate]);

  return (
    <div>
      <Link to="/home">홈으로 이동</Link>
    </div>
  );
};

export default LoginHandler;
