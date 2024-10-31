import React, { useState } from 'react';
import { FaRegPenToSquare } from "react-icons/fa6";

function Mypage() {
  const [currentPage, setCurrentPage] = useState(1);

  return (
    <div className="max-w-[480px] mx-auto min-h-screen bg-white px-5 py-6">
      {/* 헤더 */}
      <h1 className="mb-6 text-2xl font-bold font-family: Pretendard">마이페이지</h1>
      
      {/* 사용자 정보 */}
      <div className="bg-[#ECFFF8] rounded-lg p-5 mb-8 relative">
        <h2 className="mb-2 text-xl font-family: Pretendard">&&*(투엠퍼센트) 님</h2>
        <p className="text-sm text-black font-family: Pretendard">likelion@naver.com</p>
        <button className="absolute text-xl -translate-y-1/2 right-5 top-1/2 size-3"><FaRegPenToSquare />
        </button>
      </div>

      {/* 참여 코스 섹션 */}
      <section className="mb-8">
        <h3 className="mb-4 text-lg font-semibold font-family: Pretendard">내가 참여한 코스</h3>
        <div className="grid grid-cols-3 gap-4 mb-6 justify-items-center font-family: Pretendard">
          {[
            "캠퍼스 러닝 코스",
            "짧고 굵은 코스",
            "중량천 만보런",
            "캠퍼스 러닝 코스",
            "짧고 굵은 코스",
            "중량천 만보런"
          ].map((text, index) => (
            <div key={index} className="flex flex-col items-center p-3 rounded-lg font-family: Pretendard">
              <div className="bg-gray-300 w-[120px] h-[120px] rounded-md mb-2 font-family: Pretendard"></div>
              <p className="text-sm text-center font-family: Pretendard">{text}</p>
            </div>
          ))}
        </div>

        {/* 페이지네이션 */}
        <div className="flex items-center justify-center gap-2">
          <button className="text-gray-300">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
          {[1, 2, 3].map((page) => (
            <button
              key={page}
              onClick={() => setCurrentPage(page)}
              className={`w-8 h-8 rounded ${
                page === currentPage ? 'bg-[#B4FFE3] text-[#48CBC8]' : 'text-[#D1D5D7]'
              }`}
            >
              {page}
            </button>
          ))}
          <button className="text-gray-300">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>
      </section>

      {/* 메뉴 섹션 */}
      <div className="mt-10">
        <div className="py-4 text-lg font-semibold font-family: Pretendard">문의</div>
        <div className="py-4 text-lg font-semibold font-family: Pretendard">로그아웃</div>
      </div>
    </div>
  );
}

export default Mypage;