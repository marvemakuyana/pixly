import React from "react";

async function Profile({ params }: { params: { username: string } }) {
  console.log("params", params);

  await new Promise((resolve) => setTimeout(resolve, 3000));
  return <div>Profile</div>;
}

export default Profile;
