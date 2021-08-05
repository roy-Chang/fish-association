# react 漁會專題(fish-association)

其宗旨是推廣北海岸在地觀光和魚貨，並透過活動報名、札記分享、魚產販售的服務來達到此目的。

## 本專題使用 react 技術

## 活動頁-高子薇

- Open Data 的天氣和潮浪 API 串接。
- svg 地圖的地區切換。
- 插件 Chart.js 、react calendar 、Moment.js、React Icons 的使用。
- 路徑 components/activity/activity-1vh~activity-5vh。

### 活動產品上架

- 連結後台資料庫路由路徑，並透過 react calendar 顯示日期和活動詳情。

```javascript
axios({
  method: "get",
  baseURL: "http://localhost:3000",
  url: "/api/activity",
  "Content-Type": "application/json",
});
```

### 活動報名系統

- 使用 React Router 路由設定活動 ID 和訂單三步驟的切換。
- ReactJS Forms 動態展現相對應人數的表格數量。
- 透過 JS 來檢查使用者是否完整填寫資料。
- 連結後台資料庫路由路徑獲取活動資訊後，再透過路由 insert 回資料庫。

```js
try {
      axios.post(url, insertData).then((response) => {
        setMessage(response.data.message);
      });
    }
```

### 地區天氣切換

- 中央氣象局開放資料平臺之資料擷取 API(臺灣各縣市鄉鎮未來 1 週逐 12 小時天氣預報)。
- 閱讀 API 文件做新北市和基隆市設定。
- 完成 svg 圖像顯示和地區的切換。
- 使用 ReactJS components 和 Events 觀念。

```json
{
  "result": {
    "fields": [
      {
        "id": "contentDescription",
        "type": "String"
      },
      {
        "id": "datasetDescription",
        "type": "String"
      },
      {
        "id": "locationsName",
        "type": "String"
      },
      {
        "id": "dataid",
        "type": "String"
      },
      {
        "id": "locationName",
        "type": "String"
      },
      {
        "id": "geocode",
        "type": "Double"
      },
      {
        "id": "lat",
        "type": "Double"
      },
      {
        "id": "lon",
        "type": "Double"
      },
      {
        "id": "elementName",
        "type": "String"
      },
      {
        "id": "description",
        "type": "String"
      },
      {
        "id": "startTime",
        "type": "Timestamp"
      },
      {
        "id": "endTime",
        "type": "Timestamp"
      },
      {
        "id": "dataTime",
        "type": "Timestamp"
      },
      {
        "id": "value",
        "type": "String"
      },
      {
        "id": "measures",
        "type": "String"
      }
    ]
  }
}
```

### 地區潮浪切換

- 中央氣象局開放資料平臺之資料擷取 API(潮汐預報-未來 1 個月潮汐預報)。
- 閱讀 API 文件做萬里區、貢寮區、瑞芳區、中正區、氣象因子、排序順序的設定。
- 完成下拉式選單觸及後地區的切換。
- 使用 ReactJS components 和 Events 觀念。

```json
{
  "result": {
    "resource_id": "F-A0021-001",
    "fields": [
      {
        "id": "locationName",
        "type": "String"
      },
      {
        "id": "elementName",
        "type": "String"
      },
      {
        "id": "elementValue",
        "type": "String"
      },
      {
        "id": "stationId",
        "type": "String"
      },
      {
        "id": "parameterName",
        "type": "String"
      },
      {
        "id": "parameterValue",
        "type": "String"
      },
      {
        "id": "parameterUnit",
        "type": "String"
      },
      {
        "id": "parameterMeasure",
        "type": "String"
      },
      {
        "id": "dataTime",
        "type": "Timestamp"
      },
      {
        "id": "startTime",
        "type": "Timestamp"
      },
      {
        "id": "endTime",
        "type": "Timestamp"
      }
    ]
  }
}
```

### member & auth

```

```
