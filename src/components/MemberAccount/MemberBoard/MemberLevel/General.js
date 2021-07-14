import React from "react";
import Form from "react-bootstrap/Form";

//導入圖片
import HeadPic from "../../../../assets/img/member/memberAccount/handsome.jpg";
import GoldenMember from "../../../../assets/img/member/memberAccount/goldenMember.png";

function General() {
  return (
    <>
      <form>
        <div className="MAmemberBoard">
          <div className="MAheadPicture MAheadPicture1240">
            <div className="MApictureCard">
              <div className="MApicture">
                <img className="MApictureGo" src={HeadPic} alt="" />
              </div>
              <label for="name">
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
                  <div className="MAmember">一般會員</div>
                  <a className="MAchange MAsmallChange" href="#">
                    白金會員
                    <img src={GoldenMember} alt="" />
                  </a>
                </div>
                <div className="MAaccount">
                  <div className="MAlistTitle">密碼</div>
                  <div className="MAcontent">************</div>
                  <a className="MAchange" href="#">
                    變更
                  </a>
                </div>
                <div className="MAaccount">
                  <div className="MAlistTitle">姓名</div>
                  <div className="MAcontent">郭帥</div>
                  <a className="MAchange" href="#">
                    變更
                  </a>
                </div>
                <div className="MAaccount">
                  <div className="MAlistTitle">性別</div>
                  <div className="MAcontent">
                    男
                    <a className="MAchange" href="#">
                      變更
                    </a>
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
                  <div className="MAcontent">alexXXXX@gmail.com</div>
                  <a className="MAchange" href="#">
                    變更
                  </a>
                </div>
                <div className="MAaccount">
                  <div className="MAlistTitle">聯絡電話</div>
                  <div className="MAcontent">0912345678</div>
                  <a className="MAchange" href="#">
                    變更
                  </a>
                </div>
                <div className="MAaccount">
                  <div className="MAlistTitle">出生日期</div>
                  <div className="MAcontent">
                    1990-02-05
                    <a className="MAchange" href="#">
                      變更
                    </a>
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
                  <div className="MAcontent">
                    桃園縣中壢區中央大學資策會中心
                  </div>
                  <a className="MAchange" href="#">
                    變更
                  </a>
                </div>
                <div className="MAaccount">
                  <div className="MAlistTitle"></div>
                  <button className="MAbtn">儲存</button>
                </div>
              </div>
              <div className="MAheadPicture MAheadPicture720">
                <div className="MApictureCard">
                  <div className="MApicture">
                    <img className="MApictureGo" src={HeadPic} alt="" />
                  </div>
                  <label for="name">
                    <input type="file" id="name" />
                    選擇照片
                  </label>
                  <div></div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </form>
    </>
  );
}

export default General;
