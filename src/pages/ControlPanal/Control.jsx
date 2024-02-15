import React, { useState } from "react";
import "./Control.css";
import { LazyLoadImage } from "react-lazy-load-image-component";
import arrow_small_right from '../../assets/Images/arrow-small-right.svg'
import SimpleLineChart from "./ChartC";
import product from '../../assets/Images/product-guide-svgrepo-com 1.svg'
import BarChart from "./BarChart";
import TableC from "./Table";
import ShowMoreText from 'react-show-more-text';


export default function Control() {

   const [showMore, setShowMore] = useState(false)
   const HandleShow = () => {
      if (showMore == true) {
         setShowMore(false)
      }
      else {
         setShowMore(true)
      }
   }
   const cardData = [
      { id: 1, number: '55', text: 'احصل على إجابات فورية ودقيقة على أسئلتك، واستمتع بتفاعل متقدم يلبي احتياجاتك. ابدأ الدردشة الآن واكتشف عالم الذكاء الاصطناعي الذي يفهمك بشكل فريد.', title: 'ابدا محادثة جديدة', color: 'red' },
      { id: 2, number: '12', text: 'تحكم بتفاصيل التصميم وابتكر تصاميم مذهلة تلفت الانتباه، حيث يقوم الذكاء الاصطناعي بتحليل احتياجاتك وتحويلها إلى صور رائعة. كن جزءًا من تجربة تصميم فريدة.', title: 'صمم صورة جديدة', color: 'green' },
      { id: 3, number: '24', text: 'مقالات تتناسب مع احتياجاتك بشكل احترافي، ولتحسين SEO. سواء كنت بحاجة إلى مقال إخباري، أو مقال تسويقي، فإن الذكاء الاصطناعي سينتج لك نصًا ذكيًا يلبي احتياجاتك. ', title: 'كتابة مقال احترافي', color: 'blue' },
      { id: 4, number: '08', text: 'يقوم الذكاء الاصطناعي بفحص نصوصك بدقة، يصحح الأخطاء الإملائية والنحوية، ويضمن لك دقة لغوية عالية في كتاباتك، مما يعزز احترافيتها دون الحاجة لتدقيق يدوي.', title: 'المدقق اللغوي', color: 'yellow' },
   ];

   return (
      <section className="Control"  >
      
         <div className="container-fluid p-0 m-0" >
            <div className="d-flex p-0 m-0">
               <div className="w-100 mt-5 ">
                  <div className="containerC" >
                   
                     <div className="welcome shadow rounded-4  p-4"  dir="rtl" >
                        <h3 className=" font-bold fw-bolder ">مرحبا مصطفى</h3><p className="welcome-p mt-2">مجموعة الأدوات الأكثر تطورًا في مجال الذكاء الاصطناعي متوفرة هنا</p>
                        <div className="row justify-content-between">
                           {cardData.map(item => {
                              return (
                                 <div className="p-3 col-xl-3 col-lg-3 col-md-3 col-sm-12 col-12 " >
                                    <div className={`img${item.number}   p-5 px-3 d-flex flex-column justify-content-between`} key={item.id}>
                                       <div className="">
                                          <h4>{item.title}</h4>
                                          <ShowMoreText
                                             lines={4} // Number of lines to display initially
                                             more="Show More"
                                             className=" font-light p-welcome-text"
                                             less="Show Less"
                                             anchorClass="more-btn"
                                             expanded={false}
                                          >
                                          <p className=" font-light p-welcome-text"> {item.text}</p>  
                                          </ShowMoreText></div>
                                       <div className="d-flex justify-content-between bottom-arrow position-relative">
                                          <p className="num fs-1"></p>
                                          <div className="arrow-welcome position-absolute  ">
                                             <LazyLoadImage src={arrow_small_right} />
                                          </div>
                                       </div>
                                    </div>
                                 </div>
                              )
                           })}
                        </div>

                     </div>
                     <div className="charts  mt-5">
                        <div className="row justify-content-between justify-sm-content-center">
                           <div className="col-xl-8 col-lg-8 mt-3 col-md-12 chart1 col-12">
                              <SimpleLineChart />
                           </div>
                           <div className="col-xl-4 col-lg-4 mt-3 col-md-12 col-12">
                              <BarChart />
                           </div>
                        </div>
                     </div>
                     <div className="control-table mt-5  shadow-lg  rounded-4 " dir="rtl" >
                        <div className="table-con p-4">
                           <div className="table-head">
                              <h5><LazyLoadImage src={product} alt='icon' effect='blur' opasity='0.5' className='' /> أخر الانشطة</h5>
                              <p>عرض</p>
                              <select className="form-select select-num-show rounded-3 d-inline-block" >
                                 <option selected value='20'>20</option>
                                 <option value="10">10</option>

                              </select>
                              <input type="text" className="form-controld-inline-block me-3 rounded-3 search-input" placeholder="بحث" />
                           </div>
                           <div className="">
                              <TableC />
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>
   );
}