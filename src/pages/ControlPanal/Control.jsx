import React, { useState } from "react";
import "./Control.css";
import { LazyLoadImage } from "react-lazy-load-image-component";
import arrow_small_right from '../../assets/Images/arrow-small-right.svg'
import SimpleLineChart from "./ChartC";
import product from '../../assets/Images/product-guide-svgrepo-com 1.svg'
import curve from '../../assets/Images/curve.png'
import BarChart from "./BarChart";
import TableC from "./Table";
import ShowMoreText from 'react-show-more-text';
import CallMadeIcon from '@mui/icons-material/CallMade';
import haverimg1  from '../../assets/Images/dashboredCards/amico.png'
import haverimg2  from '../../assets/Images/dashboredCards/amico1.png'
import haverimg3  from '../../assets/Images/dashboredCards/cuate.png'
import haverimg4  from '../../assets/Images/dashboredCards/amico4.png'

export default function Control() {
   const [isHovered, setIsHovered] = useState(false);
   const [showMore, setShowMore] = useState(false)
   const [hoveredCard, setHoveredCard] = useState(null);
   const HandleShow = () => {
      if (showMore == true) {
         setShowMore(false)
      }
      else {
         setShowMore(true)
      }
   }
   const cardData = [
      { id: 1, number: '55', text: 'احصل على إجابات فورية ودقيقة على أسئلتك، واستمتع بتفاعل متقدم يلبي احتياجاتك. ابدأ الدردشة الآن واكتشف عالم الذكاء الاصطناعي الذي يفهمك بشكل فريد.', title: 'ابدا محادثة جديدة', src:haverimg1 },
      { id: 2, number: '12', text: 'تحكم بتفاصيل التصميم وابتكر تصاميم مذهلة تلفت الانتباه، حيث يقوم الذكاء الاصطناعي بتحليل احتياجاتك وتحويلها إلى صور رائعة. كن جزءًا من تجربة تصميم فريدة.', title: 'صمم صورة جديدة', src:haverimg2},
      { id: 3, number: '24', text: 'مقالات تتناسب مع احتياجاتك بشكل احترافي، ولتحسين SEO. سواء كنت بحاجة إلى مقال إخباري، أو مقال تسويقي، فإن الذكاء الاصطناعي سينتج لك نصًا ذكيًا يلبي احتياجاتك. ', title: 'كتابة مقال احترافي',src:haverimg3 },
      { id: 4, number: '08', text: 'يقوم الذكاء الاصطناعي بفحص نصوصك بدقة، يصحح الأخطاء الإملائية والنحوية، ويضمن لك دقة لغوية عالية في كتاباتك، مما يعزز احترافيتها دون الحاجة لتدقيق يدوي.', title: 'المدقق اللغوي', src:haverimg4},
   ];

   return (
      <section className="Control"  >
      
         <div className="container-fluid p-0 m-0" >
            <div className="d-flex p-0 m-0">
               <div className="w-100 mt-5 ">
                  <div className="containerC" >
                   
                     <div className="welcome shadow rounded-4    p-4"  dir="rtl" >
                        <h3 className=" font-bold fw-bolder ">مرحبا مصطفى</h3><p className="welcome-p mt-2">مجموعة الأدوات الأكثر تطورًا في مجال الذكاء الاصطناعي متوفرة هنا</p>
                        <div className="row justify-content-between">
                           {cardData.map(item => {
                              return (
                                 <div className="    pb-0 col-xl-3   col-lg-6 col-md-6 col-sm-6 col-6 "
                                 
                                 onMouseEnter={() => setHoveredCard(item.id)}
                                 onMouseLeave={() => setHoveredCard(null)}
                                 
                                 >
                             
                                 <div className={` position-relative img${item.number}  cards      pe-3 py-4
                                   mt-3 d-flex flex-column justify-content-between`} key={item.id}>
                                       <div className="">
                                          <h4>{item.title}</h4>
                                          <ShowMoreText
                                             lines={4} // Number of lines to display initially
                                             more="Show More"
                                             className=" font-light p-welcome-text ps-1 "
                                             less="Show Less"
                                             anchorClass="more-btn"
                                             expanded={false}
                                          >
                                          <p className=" font-light p-welcome-text ps-1"> {item.text}</p>  
                                          </ShowMoreText></div>
                                       
                                  <div className=" position-absolute bottom-0 icon-arrow  ">
                                  <img src={curve} className="w-100 h-100 "/>
                                  <div className=" text-white d-flex  justify-content-center align-items-center    icon-arrow-img position-absolute ">

                                  <CallMadeIcon/>
                                  
                                  </div>
                               
                                  
                                  
                                  </div>
                                  <div
                                  className="d-flex justify-content-center"
                                  onMouseEnter={() => setHoveredCard(item.id)}
  onMouseLeave={() => setHoveredCard(null)}
                                >
                                  <img
                                  src={item.src}
                                  className={` haverimg w-50  ${hoveredCard === item.id ? 'visible' : 'hidden'}`}
                                  style={{
                                    opacity: hoveredCard === item.id ? 1 : 0,
                                    transition: 'opacity 0.3s ease-in-out',
                                    transform: `translateY(${hoveredCard === item.id ? 0 : 10}px)`,
                                  }}
                                  />
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
                           <div >
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