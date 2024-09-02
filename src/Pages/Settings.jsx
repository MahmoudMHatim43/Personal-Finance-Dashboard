import React from "react";

function Settings() {
  return (
    <section className="grid grid-cols-12 gap-4 border">
      <span className="col-span-12 text-big-header font-bold font-lato">
        Settings
      </span>
      <div className="col-span-6 flex flex-col border">Budget</div>
      <div className="col-span-6 flex flex-col border">Goals</div>
    </section>
  );
}

export default Settings;
