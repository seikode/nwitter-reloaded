import React, { useState } from "react";
import { Error, Form, Input, Title, Wrapper } from "../components/auth-components";
import { useNavigate } from "react-router-dom";
import { sendPasswordResetEmail } from "firebase/auth";
import { auth } from "../firebase";
import { FirebaseError } from "firebase/app";

export default function ResetPassword() {
  const [userInput, setUserInput] = useState({ email: "" });
  const { email } = userInput;
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const {
      target: { name, value },
    } = e;
    setUserInput({ ...userInput, [name]: value });
  };

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError("");
    if (isLoading || email === "") return;
    try {
      setIsLoading(true);
      await sendPasswordResetEmail(auth, email);
      navigate("/login");
    } catch (e) {
      if (e instanceof FirebaseError) {
        setError(e.message);
      }
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <Wrapper>
      <Title>Reset Your Password</Title>
      <Form onSubmit={onSubmit}>
        <Input
          onChange={onChange}
          name="email"
          value={email}
          placeholder="Enter Your Email"
          type="email"
          required
        />
        <Input
          type="submit"
          value={isLoading ? "Loading..." : "Send Reset Email"}
        />
      </Form>
      {error !== "" ? <Error>{error}</Error> : null}
    </Wrapper>
  );
}
