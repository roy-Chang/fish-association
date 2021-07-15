import React from "react";
import Form from "react-bootstrap/Form";
import "./Golden.css";

//導入圖片
import HeadPic from "../../../../assets/img/member/memberAccount/handsome.jpg";
import GoldenFeame from "../../../../assets/img/member/memberAccount/goldenFrame.png";
import GoldenMember from "../../../../assets/img/member/memberAccount/goldenMember.png";

function General() {
  return (
    <>
      <div className="MAmemberBoard">
        <div class="headPicture headPicture1240">
          <div class="pictureCard">
            <div class="picture">
              <img class="pictureGo" src={HeadPic} alt="" />
              <img src={GoldenFeame} alt="" />
            </div>
            <label htmlFor="name">
              <input type="file" id="name" />
              選擇照片
            </label>
            <div></div>
          </div>
        </div>
        <div>
          <div className="MAmemberAcount">
            <h2 className="MAacountTitle">我的檔案</h2>
            <p className="MAacountSubhead">管理你的檔案以保護你的帳戶</p>
          </div>
          <hr />
        </div>
        {/* <BoardForm /> */}
        <form action="">
          <div className="MAmemberAccountInformation">
            <div className="MAaccountInformation">
              <div className="MAaccount">
                <div className="MAlistTitle">使用者帳號</div>
                <div className="MAcontent">alexXXXX</div>
                <div className="MAmember" style={{ color: "#fff579" }}>
                  白金會員
                </div>
              </div>
              <div className="MAaccount">
                <div className="MAlistTitle">密碼</div>
                <div className="MAcontent">************</div>
              </div>
              <div className="MAaccount">
                <div className="MAlistTitle">姓名</div>
                <div className="MAcontent">郭帥</div>
              </div>
              <div className="MAaccount">
                <div className="MAlistTitle">性別</div>
                <div className="MAcontent">
                  男
                  {/* <div className="MAgender">
                    男
                    <input
                      className="MAitemCheck"
                      type="radio"
                      id="men"
                      name="gender"
                    />
                    女
                    <input
                      className="MAitemCheck"
                      type="radio"
                      id="women"
                      name="gender"
                    />
                  </div> */}
                </div>
              </div>
              <div className="MAaccount">
                <div className="MAlistTitle">信箱</div>
                <div className="MAcontent">alexXXXX@il.com</div>
              </div>
              <div className="MAaccount">
                <div className="MAlistTitle">聯絡電話</div>
                <div className="MAcontent">0912345678</div>
              </div>
              <div className="MAaccount">
                <div className="MAlistTitle">出生日期</div>
                <div className="MAcontent">
                  1990-02-05
                  {/* <select className="MAdateInput" name="" id="">
                    <option value="">1990</option>
                    <option value="">1991</option>
                    <option value="">1992</option>
                    <option value="">1993</option>
                    <option value="">1994</option>
                    <option value="">1995</option>
                    <option value="">1996</option>
                    <option value="">1997</option>
                    <option value="">1998</option>
                    <option value="">1999</option>
                    <option value="">2000</option>
                  </select>
                  年
                  <select className="MAdateInput" name="" id="">
                    <option value="">1</option>
                    <option value="">2</option>
                    <option value="">3</option>
                    <option value="">4</option>
                    <option value="">5</option>
                    <option value="">6</option>
                    <option value="">7</option>
                    <option value="">8</option>
                    <option value="">9</option>
                    <option value="">10</option>
                    <option value="">11</option>
                    <option value="">12</option>
                  </select>
                  月
                  <select className="MAdateInput" name="" id="">
                    <option value="">1</option>
                    <option value="">2</option>
                    <option value="">3</option>
                    <option value="">4</option>
                    <option value="">5</option>
                    <option value="">6</option>
                    <option value="">7</option>
                    <option value="">8</option>
                    <option value="">9</option>
                    <option value="">10</option>
                    <option value="">11</option>
                    <option value="">12</option>
                    <option value="">13</option>
                    <option value="">14</option>
                    <option value="">15</option>
                    <option value="">16</option>
                    <option value="">17</option>
                    <option value="">18</option>
                    <option value="">19</option>
                    <option value="">20</option>
                    <option value="">21</option>
                    <option value="">22</option>
                    <option value="">23</option>
                    <option value="">24</option>
                    <option value="">25</option>
                    <option value="">26</option>
                    <option value="">27</option>
                    <option value="">28</option>
                    <option value="">29</option>
                    <option value="">30</option>
                    <option value="">31</option>
                  </select>
                  日 */}
                </div>
              </div>
              <div className="MAaccount">
                <div className="MAlistTitle">地址</div>
                <div className="MAcontent">桃園縣中壢區中央大學資策會中心</div>
              </div>
              <div className="MAaccount">
                <div className="MAlistTitle"></div>
                <button className="MAbtn">編輯</button>
              </div>
            </div>
            <div class="headPicture headPicture720">
              <div class="pictureCard">
                <div class="picture">
                  <img class="pictureGo" src={HeadPic} alt="" />
                  <img src={GoldenFeame} alt="" />
                </div>
                <label htmlFor="name">
                  <input type="file" id="name" />
                  選擇照片
                </label>
                <div></div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}

export default General;
