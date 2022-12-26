import React, { useEffect, useState } from "react";

const UnmountTest = () => {
  useEffect(() => {
    console.log("mount!");

    return () => {
      console.log("unmount!");
    };
  }, []);

  return <div>Unmount Test counting</div>;
};

const Lifecycle = () => {
  const [isVisble, setisVisble] = useState(false);
  const toggle = () => setisVisble(!isVisble);

  return (
    <div style={{ padding: 20 }}>
      <button onClick={toggle}>on/off</button>
      {isVisble && <UnmountTest />}
    </div>
  );
};

export default Lifecycle;
