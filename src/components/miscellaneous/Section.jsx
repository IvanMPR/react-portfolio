import React from "react";

function Section({ prefix, children }) {
  return (
    <section className={`${prefix}-section container`} id={prefix}>
      {children}
    </section>
  );
}

export default Section;
