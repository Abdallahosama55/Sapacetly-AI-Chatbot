import React, { useState } from "react";
import "./Packages.css";

import firstPackage from "../../assets/Images/packages/باقه البدايه-01.png";
import secPackage from "../../assets/Images/packages/الباقه المميزه-01.png";
import thirdPackage from "../../assets/Images/packages/الباقه الانتاجيه-01.png";

const Packages = () => {
  const [currency, setCurrency] = useState("EGP");
  return (
    <div className=" all-packages ">
      <div
        dir="rtl"
        className=" packages-container  ">
        <div className=" text-center packages-main-text ">إدارة الاشتراك</div>
        <div className="currency-container  flex-column justify-content-center  justify-content-md-between gap-2 flex-md-row ">
          <div className="currency-main-text       ">
            خطط مصممة خصيصًا لتناسب جميع الأعمال الشخصية والتجارية
          </div>
          <div className="select-container  ">
            <div>أظهر لي الأسعا ر بـ</div>
            <div className="select-box">
              <select
                className=" border-0 selector"
                onChange={(e) => setCurrency(e.target.value)}
                value={currency}>
                <option value="EGP">جنية مصري</option>
                <option value="USD">دولار</option>
              </select>
            </div>
          </div>
        </div>
        <div className="packages-main-container    mt-2  ">
          <div className=" col py-2  package-item p-2 ">
            <div className=" first-section">
              <img
                src={firstPackage}
                style={{ maxWidth: "60px", maxHeight: "60px" }}
              />
              <div>باقة البداية</div>
            </div>
            <div className=" price-section">
              <div className="item-color1">EGP 0</div>
              <div>اشتراك شهري </div>
            </div>
            <button className="buttonPrice">جرب الآن مجانًا</button>
            <div className=" py-2">
              <div className="item-container  py-1">
                <div>✔</div>
                <div>
                  <span className=" english-font">10,000</span> كلمة شهريًا
                  يجددوا تلقائياً
                </div>
              </div>
              <div className="item-container  py-1">
                <div>✔</div>
                <div>
                  مُتقِن شات للتحدث مع <span className=" english-font">Ai</span>
                </div>
              </div>
              <div className="item-container  py-1">
                <div>✔</div>
                <div className=" english-font">ChatGPT</div>
              </div>
              <div className="item-container  py-1">
                <div>✔</div>
                <div>
                  <span className=" english-font">4</span> مقالات احترافية
                </div>
              </div>
              <div className="item-container  py-1">
                <div>✔</div>
                <div>
                  <span className="english-font">15</span> صورة كل شهر
                </div>
              </div>
              <div className="item-container  py-1">
                <div>✔</div>
                <div>خاصية إعادة صياغة</div>
              </div>
              <div className="item-container  py-1">
                <div>✔</div>
                <div>
                  المدقق اللغوي الآلي لـ{" "}
                  <span className="english-font">2500</span> كلمة
                </div>
              </div>
              <div className="item-container  py-1">
                <div>✔</div>
                <div>
                  دعم أكثر من <span className="english-font">100</span> لغة
                  مختلفة
                </div>
              </div>
              <div className="item-container  py-1">
                <div>✔</div>
                <div>
                  <span className="english-font">80</span> نموذج محتوى
                </div>
              </div>
              <div className="item-container  py-1">
                <div>✔</div>
                التحديثات الشهرية
              </div>
            </div>
          </div>
          <div className="col py-2 package-item-withcolor p-2 ">
            <div className=" sec-section">
              <img
                src={secPackage}
                style={{ maxWidth: "60px", maxHeight: "60px" }}
              />
              <div>الباقة المميزة</div>
            </div>
            <div className=" price-section">
              <div className="item-color">EGP 430</div>
              <div>اشتراك ربع سنوي </div>
            </div>
            <button className="buttonPrice2"> اشترك الأن </button>
            <div className="  py-2">
              <div className="item-container  py-1">
                <div>✔</div>
                <div>
                  خصم إضافي <span className=" english-font">40</span>%
                </div>
              </div>
              <div className="item-container  py-1">
                <div>✔</div>
                <div>عدد كلمات غير محدود شهريًا</div>
              </div>
              <div className="item-container  py-1">
                <div>✔</div>
                <div>
                  مُتقِن شات للتحدث مع <span className=" english-font">Ai</span>
                </div>
              </div>
              <div className="item-container  py-1">
                <div>✔</div>
                <div className=" english-font">ChatGPT</div>
              </div>
              <div className="item-container  py-1">
                <div>✔</div>
                <div className=" english-font">GPT-4</div>
              </div>
              <div className="item-container  py-1">
                <div>✔</div>
                <div className=" english-font">Google PaLM 2</div>
              </div>
              <div className="item-container  py-1">
                <div>✔</div>
                <div>عدد مقالات احترافية غير محدود</div>
              </div>
              <div className="item-container  py-1">
                <div>✔</div>
                <div>المدقق اللغوي الآلي لعدد كلمات غير محدود</div>
              </div>
              <div className="item-container  py-1">
                <div>✔</div>
                <div> عدد صور غير محدود شهريا </div>
              </div>
              <div className="item-container  py-1">
                <div>✔</div>
                <div>
                  دعم أكثر من <span className="english-font">100</span> لغة
                  مختلفة
                </div>
              </div>
              <div className="item-container  py-1">
                <div>✔</div>
                <div>خاصية إعادة صياغة</div>
              </div>
              <div className="item-container  py-1">
                <div>✔</div>
                <div>تصدير المحتوى لملفات</div>
              </div>
              <div className="item-container  py-1">
                <div>✔</div>
                <span className="english-font">80</span>نموذج محتوى
              </div>
              <div className="item-container  py-1">
                <div>✔</div>
                <div>التحديثات الشهرية</div>
              </div>
            </div>
          </div>
          <div className="col py-2 package-item p-2 ">
            <div className=" first-section">
              <img
                src={thirdPackage}
                style={{ maxWidth: "60px", maxHeight: "60px" }}
              />
              <div>باقة الإنتاجية </div>
            </div>
            <div className=" price-section">
              <div className="item-color1">EGP 240</div>
              <div>اشتراك شهري </div>
            </div>
            <button className="buttonPrice">جرب الآن مجانًا</button>
            <div className=" py-2">
              <div className="item-container  py-1">
                <div>✔</div>
                <div>عدد كلمات غير محدود شهريًا</div>
              </div>
              <div className="item-container  py-1">
                <div>✔</div>
                <div>
                  مُتقِن شات للتحدث مع <span className=" english-font">Ai</span>
                </div>
              </div>
              <div className="item-container  py-1">
                <div>✔</div>
                <div className=" english-font">ChatGPT</div>
              </div>
              <div className="item-container  py-1">
                <div>✔</div>
                <div className=" english-font">GPT-4</div>
              </div>
              <div className="item-container  py-1">
                <div>✔</div>
                <div className=" english-font">Google PaLM 2</div>
              </div>
              <div className="item-container  py-1">
                <div>✔</div>
                <div>عدد مقالات احترافية غير محدود</div>
              </div>
              <div className="item-container  py-1">
                <div>✔</div>
                <div>المدقق اللغوي الآلي لعدد كلمات غير محدود</div>
              </div>
              <div className="item-container  py-1">
                <div>✔</div>
                <div> عدد صور غير محدود شهريا </div>
              </div>
              <div className="item-container  py-1">
                <div>✔</div>
                <div>
                  دعم أكثر من <span className="english-font">100</span> لغة
                  مختلفة
                </div>
              </div>
              <div className="item-container  py-1">
                <div>✔</div>
                <div>خاصية إعادة صياغة</div>
              </div>
              <div className="item-container  py-1">
                <div>✔</div>
                تصدير المحتوى لملفات
              </div>
              <div className="item-container  py-1">
                <div>✔</div>
                <div>
                  <span className="english-font">80</span> نموذج محتوى
                </div>
              </div>
              <div className="item-container  py-1">
                <div>✔</div>
                التحديثات الشهرية
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Packages;
