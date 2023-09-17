"use client";
interface props {
    session: any;
}
import { useState } from "react";
import Link from "next/link";
import AccountForm from "./account-form";

export default function accountInfo({session}: props) {
  const [toggle, setToggle] = useState(false);

  const handleClicked = () => {
    setToggle(false);
  };

  return (
    <>
      <div className="flex flex-col items-center">
        <div className="flex">
          <button
            className="flex"
            onClick={() => {
              setToggle(!toggle);
              console.log("Clicked!");
            }}>
            <div>Account</div>
            {toggle ? (
              <svg
                className="w-6 h-6 ml-1 fill-purple-300"
                clip-rule="evenodd"
                fill-rule="evenodd"
                stroke-linejoin="round"
                stroke-miterlimit="2"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  d="m11.998 21.995c5.517 0 9.997-4.48 9.997-9.997 0-5.518-4.48-9.998-9.997-9.998-5.518 0-9.998 4.48-9.998 9.998 0 5.517 4.48 9.997 9.998 9.997zm4.843-8.211c.108.141.157.3.157.456 0 .389-.306.755-.749.755h-8.501c-.445 0-.75-.367-.75-.755 0-.157.05-.316.159-.457 1.203-1.554 3.252-4.199 4.258-5.498.142-.184.36-.29.592-.29.23 0 .449.107.591.291z"
                  fill-rule="nonzero"
                />
              </svg>
            ) : (
              <svg
                className="w-6 h-6 ml-1 fill-purple-300"
                clip-rule="evenodd"
                fill-rule="evenodd"
                stroke-linejoin="round"
                stroke-miterlimit="2"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  d="m11.998 2c5.517 0 9.997 4.48 9.997 9.998 0 5.517-4.48 9.997-9.997 9.997-5.518 0-9.998-4.48-9.998-9.997 0-5.518 4.48-9.998 9.998-9.998zm4.843 8.211c.108-.141.157-.3.157-.456 0-.389-.306-.755-.749-.755h-8.501c-.445 0-.75.367-.75.755 0 .157.05.316.159.457 1.203 1.554 3.252 4.199 4.258 5.498.142.184.36.29.592.29.23 0 .449-.107.591-.291z"
                  fill-rule="nonzero"
                />
              </svg>
            )}
          </button>
        </div>
        {toggle && (
          <AccountForm session={session}/>
        )}
      </div>
    </>
  );
}