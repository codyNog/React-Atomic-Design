import React, { useState } from "react";
import { Section } from "../../../layouts";
import Button from "../../../atoms/Button/common";
import TextInput from "../../../atoms/Input/TextInput";
import Password from "../../../atoms/Input/Password";

const SignInForm: React.FC = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = () => {
    const data = { name, password };
    console.log(data);
  };

  return (
    <Section>
      <TextInput value={name} onChange={e => setName(e.currentTarget.value)} />
      <Password
        value={password}
        onChange={e => setPassword(e.currentTarget.value)}
      />
      <Button onClick={() => handleSubmit()}>ボタン</Button>
    </Section>
  );
};

export default SignInForm;
