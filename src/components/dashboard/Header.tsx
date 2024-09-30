import React from "react";

function Header() {
  return (
    <section>
      <h2 className="text-xl md:text-3xl font-semibold">Welcome Back, John</h2>
      <p className="text-xs md:text-sm text-muted-foreground">
        Stats of today&apos;s patient appointments and lists
      </p>
    </section>
  );
}

export default Header;
