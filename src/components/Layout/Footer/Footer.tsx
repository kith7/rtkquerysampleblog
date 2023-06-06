import React, { useState } from "react";

const Footer = () => {
  const [year, setYear] = useState(new Date().getFullYear());
  return (
    <footer className='row bm-row'>
      <hr className='col-12' />
      <div className='col-md-6 col-12 bm-color-gray'>Design GJCODE</div>
      <div className='col-md-6 col-12 bm-color-gray bm-copyright'>
        Copyright {year}
      </div>
    </footer>
  );
};

export default Footer;
