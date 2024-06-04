import React from "react";

type Props = {
  children: React.ReactNode;
};

export default function Authlayout({ children }: Props) {
  return (
    <div className="min-h-screen h-full flex items-center justify-center">{children}</div>
  );
}
