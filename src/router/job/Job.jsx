import React from 'react';
import { Link } from 'react-router-dom';

const Job = () => {
  return (
    <div>
      잡 소개페이지
      <Link style={{display: "block"}} to={"/intro?job=de"}>개발자 소개페이지</Link>
      <Link style={{display: "block"}} to={"/intro?job=cap"}>경찰 소개페이지</Link>
      <Link style={{display: "block"}} to={"/intro?job=fire"}>소방관 소개페이지</Link>
    </div>
  );
};

export default Job;