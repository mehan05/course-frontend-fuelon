import React from 'react';
import DetailsCard from './components/DetailsCard';
import BestSellingCourse from './components/BestSellingCourse';
import ChartComponents from './components/ChartComponents';

const up_arrow = "/salesup-arrow.png";
const rupee_icon = "/rupee-icon.png";
const down_arrow = "/sales-down-arrow.png";
const people_icon = "/people-icon.png";
const review_icon = "/review-icon.png";

const AdminPage = () => {
  return (
    <div className="m-0 p-0 w-full">
      <div className="border-2 border-violet-500">
        NavBar
      </div>

      <div className="flex justify-start items-center mt-3">
        <h1 className="font-bold text-[36px] text-[#161439]">Hello Mehan</h1>
      </div>

      <div className="flex gap-5 m-5 w-full h-40">
        <div className="flex w-2/3 gap-10  flex-1">
          <DetailsCard Headerlogo={rupee_icon} arrowLogo={up_arrow} className="flex-1 h-full" />
          <DetailsCard Headerlogo={people_icon} arrowLogo={up_arrow} className="flex-1 h-full" />
          <DetailsCard Headerlogo={review_icon} arrowLogo={down_arrow} className="flex-1 h-full" />
        </div>

        <div className="h-full justify-end ">
          <BestSellingCourse />
        </div>
      </div>

      <div className="flex justify-start items-start m-5 w-full">
        <ChartComponents />
      </div>
    </div>
  );
};

export default AdminPage;
