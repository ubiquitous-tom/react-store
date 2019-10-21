import React from 'react';
import { Subscribe } from './subscribe/Subscribe';
import { SignIn } from './sign-in/SignIn';

export const Content: React.FC = () => {
  return (
    <div className="row">
      <Subscribe />
      <SignIn />
    </div>
  );
};
