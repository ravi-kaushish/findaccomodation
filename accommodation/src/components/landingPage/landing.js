// import jwt_decode from "jwt-decode";

// const Landing = () => {
//   // Retrieve the JWT token from the browser's local storage
//   const token = localStorage.getItem("token");

//   try {
//     // Decode the JWT token to get the user information
//     const decodedToken = jwt_decode(token);

//     // Verify the signature with the server's secret key
//     const verifiedToken = await axios.post("/api/verify-token", { token });

//     // If the token is valid, render the landing page component
//     return <LandingPage user={decodedToken.user} />;
//   } catch (error) {
//     // If the token is invalid, redirect the user to the login page
//     window.location.href = "/login";
//   }
// };