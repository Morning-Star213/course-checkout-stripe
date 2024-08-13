import { useRouter } from "next/navigation";
import React, { useState } from "react";

const Dropdown = () => {
  const router = useRouter();
  const [drop, setDrop] = useState<boolean>(false);

  const logout = async () => {
    console.log("ssssssssssssss");
    localStorage.removeItem("loginStatus");
    router.push("/login");
    setDrop(false);
  };

  const profile = async () => {
    router.push("/profile");
    setDrop(false);
  };
  const list = async () => {
    router.push("/list");
    setDrop(false);
  };

  return (
    <div style={{ fontFamily: "IBM Plex Mono" }}>
      <div>
        <div onClick={() => setDrop(!drop)}>Dropdown</div>
        <div
          className={`bg-red-500 absolute pr-5 pl-2 py-2 z-50 rounded ${
            drop ? "" : "hidden"
          }`}
        >
          <div onClick={profile}>profile</div>
          <div onClick={list}>list</div>
          <div onClick={logout}>Log out</div>
        </div>
      </div>
    </div>
  );
};

export default Dropdown;
