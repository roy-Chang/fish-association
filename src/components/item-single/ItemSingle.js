import React from "react";
import {
  TestRed,
  Space,
  Line,
  AsideNav,
  RankList,
  RankListItem,
  ItemInfo,
  DarkBlueBack,
  MainForm,
  PicGroup,
  MainPic,
  
  InputNumber,
  InputNumberIncrease,
  InputNumberDecrease,
  Buy,
  Box,
  ClickImg,
  ButtonList,
  MainItemInfo,
  MainItemInfoPicture,
  RelateItem,
  
  RelateItemCard,
  ItemName,
  Price,
  OutsideWrapper,
} from "./style";
import { Row, Col, Container, Button } from "react-bootstrap";

function ItemSingle() {
  return (
    <>
    <nav style={{ height: "65px", background: "#1d3557" }}></nav>
    <OutsideWrapper>
      <Container>
        <Row>
          <Col sm={2} py={2} mt={5}>
            <AsideNav>
              <a>中文字</a>
              <a>中文字</a>
              <a>中文字</a>
              <a>中文字</a>
              <a>中文字</a>
              <a>中文字</a>
            </AsideNav>
            <RankList>
              <div>銷售排行</div>
              <RankListItem>
                <img src="./商品主頁/貝2.jpeg" alt="" />
                <ItemInfo>
                  <div>好魚</div>
                  <div>定價$1000</div>
                  <i class="fas fa-shopping-cart"></i>
                </ItemInfo>
              </RankListItem>

              <RankListItem>
                <img src="./商品主頁/貝2.jpeg" alt="" />
                <ItemInfo>
                  <div>好魚</div>
                  <div>定價$1000</div>
                  <i class="fas fa-shopping-cart"></i>
                </ItemInfo>
              </RankListItem>
            </RankList>
          </Col>
          <Col sm={10}>
            <DarkBlueBack>
            <MainForm>
              <Row>
                <Col lg={6} md={12}>
                  <PicGroup>
                    <MainPic>
                      <img src="./商品主頁/貝2.jpeg" alt="" />
                    </MainPic>

                    <ClickImg>
                      <Box>
                        <img src="./商品主頁/貝2.jpeg" alt="" />
                      </Box>
                      <Box>
                        <img src="./商品主頁/貝2.jpeg" alt="" />
                      </Box>
                      <Box>
                        <img src="./商品主頁/貝2.jpeg" alt="" />
                      </Box>
                      <Box>
                        <img src="./商品主頁/貝2.jpeg" alt="" />
                      </Box>
                    </ClickImg>
                  </PicGroup>
                </Col>
                <Col lg={6} md={12}>
                  <Buy>
                  <h3>北海道帆立貝柱 (300g)</h3>
                    <p>
                      來自日本北海道，海水潔淨天然無污染，地理位置優越，為寒暖流交會之海域
                      的野生干貝，品質口感特
                      優，產品以超低溫急速冷凍，保證新鮮，通過SGS 的檢驗標準
                      ，讓您吃的放心。
                    </p>
                    <Line></Line>
                    <Space></Space>
                    <div>
                      <span>建議售價100元</span>
                      網路價<span>100</span>元
                    </div>
                      
                    
                    <Space></Space>
                    <Line></Line>
                    <Space></Space>
                    <div style={{display:'flex'}}>
                      <span>數量</span>
                      <InputNumberDecrease>–</InputNumberDecrease>
                      <input type="text" value="1" min="0" max="10" style={{width:'50px'}}></input>
                      {/* <InputNumber type="text"
                        value="1"
                        min="0"
                        max="10"></InputNumber> */}
                      <InputNumberIncrease>+</InputNumberIncrease>
                    </div>
                    <Space></Space>
                    <Space></Space>
                    <Space></Space>
                    <Space></Space>
                    <Space></Space>
                    <Space></Space>
                    <Space></Space>
                    <ButtonList>
                    <Button variant="danger" size="sm" >立刻購買</Button>
                    <Button variant="primary" size="sm">加入購物車</Button>
                    <Button variant="warning" size="sm">加入收藏</Button>

                    </ButtonList>
                  </Buy>
                </Col>
              </Row>
            </MainForm>
              
            </DarkBlueBack>
            <MainItemInfo>
            <h3>產品資訊</h3>
                <p>
                  干貝粒粒飽滿，絕無任何人工添加物及膨發劑且無包冰，非常新鮮生魚片等級可生食，入口
                  滑嫩鮮美多汁，讓您享受無負擔的美味。<br />來自日本北海道，海水潔淨天然無污染，地理位置優越，為寒暖流交會之海域的野生干貝，
                  品質口感特優，產品以超低溫急速冷凍，保證新鮮，通過SGS的檢驗標準，讓您吃的放心。
                </p>
                <div class="main-item-info-picture">
                  <img src="./商品主頁/貝2.jpeg" alt="" />
                  <img src="./商品主頁/貝2.jpeg" alt="" />
                </div>
                <p>
                  干貝粒粒飽滿，絕無任何人工添加物及膨發劑且無包冰，非常新鮮生魚片等級可生食，入口
                  滑嫩鮮美多汁，讓您享受無負擔的美味。<br />來自日本北海道，海水潔淨天然無污染，地理位置優越，為寒暖流交會之海域的野生干貝，
                  品質口感特優，產品以超低溫急速冷凍，保證新鮮，通過SGS的檢驗標準，讓您吃的放心。
                </p>
            </MainItemInfo>
            <RelateItem>
            <h3>相關推薦商品</h3>
                <Row>
                  <Col lg={3} sm={6}>
                    <RelateItemCard>
                    <img src="./商品主頁/貝2.jpeg" alt="" />
                    <div class="item-name">白蝦</div>
                    <div class="price">NT 888</div>
                    </RelateItemCard>
                  </Col>
                  <Col lg={3} sm={6}>
                    <RelateItemCard>
                    <img src="./商品主頁/貝2.jpeg" alt="" />
                    <div class="item-name">白蝦</div>
                    <div class="price">NT 888</div>
                    </RelateItemCard>
                  </Col><Col lg={3} sm={6}>
                    <RelateItemCard>
                    <img src="./商品主頁/貝2.jpeg" alt="" />
                    <div class="item-name">白蝦</div>
                    <div class="price">NT 888</div>
                    </RelateItemCard>
                  </Col><Col lg={3} sm={6}>
                    <RelateItemCard>
                    <img src="./商品主頁/貝2.jpeg" alt="" />
                    <div class="item-name">白蝦</div>
                    <div class="price">NT 888</div>
                    </RelateItemCard>
                  </Col><Col lg={3} sm={6}>
                    <RelateItemCard>
                    <img src="./商品主頁/貝2.jpeg" alt="" />
                    <div class="item-name">白蝦</div>
                    <div class="price">NT 888</div>
                    </RelateItemCard>
                  </Col>
                  
                </Row>
                
            </RelateItem>
            
          </Col>
        </Row>
        <TestRed>
          <h1>afsd</h1>
        </TestRed>
      </Container>
    </OutsideWrapper>
  </>
  );
}

export default ItemSingle;
