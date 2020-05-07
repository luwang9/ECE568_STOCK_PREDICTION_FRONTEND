<template>
  <div>
    <el-page-header @back="goBack" title="homepage" :content=this.company></el-page-header>
    <h1>{{company}}</h1>
    <h3>Closing price: {{closing_price}}, Predicted price: {{predict_price}}, Diff: {{(((predict_price - closing_price) / closing_price) * 100).toFixed(2)}}%</h3>
    <h3>Recommendation: {{recommend}}, trading point: {{trading_point}}</h3>

    <!-- <el-row type="flex" class="row-bg" justify="center" gutter="20"> -->
    <el-row type="flex" justify="center">
      <el-col :span="15">
        <el-card body-style="{ padding: '30px' }">
          <el-row>
            <h3>{{company}}</h3>
            <ve-candle :data="chartData" :settings="chartSettings"></ve-candle>
          </el-row>
          <el-row>
            <h3>True price and predicted price comparison</h3>
            <ve-line :data="chartData2" :settings="charSettings2"></ve-line>
          </el-row>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
// @ is an alias to /src
//import HelloWorld from '@/components/HelloWorld.vue'

export default {
  data() {
    this.chartSettings = {
      showVol: true,
      showMA: true,
      legendName: {
        日K: "Price per day"
      },
      labelMap:{
        MA5:'ma5'
      },
      showDataZoom: true
    }, 
    this.charSettings2 = {
      axisSite: { right: ['error_ratio'] },
      yAxisType: ['value', 'percent'],
      yAxisName: ['price', 'error ratio'], 
      labelMap: {
        'predictPrice': 'Predicted price', 
        'closePrice': 'Closing price', 
        'error_ratio': 'Error ratio'
      }
    }
    return {
      date_input: '1578330732000', 
      trading_point: '444.44', 
      company: "defult company",
      index: -1,
      accuracy_percentage: -1,
      closing_price: -1,
      recommend: "Default action",
      src: "",
      predict_price: -1,
      chartData2: {
        columns: ["date", "predictPrice", "closePrice", "error_ratio"],
        rows: [
          {
            date: "1/1",
            predictPrice: 1393,
            closePrice: 1093,
            error_ratio: 0.32
          },
          {
            date: "1/2",
            predictPrice: 3530,
            closePrice: 3230,
            error_ratio: 0.26
          },
          {
            date: "1/3",
            predictPrice: 2923,
            closePrice: 2623,
            error_ratio: 0.76
          },
          {
            date: "1/4",
            predictPrice: 1723,
            closePrice: 1423,
            error_ratio: 0.49
          },
          {
            date: "1/5",
            predictPrice: 3792,
            closePrice: 3492,
            error_ratio: 0.323
          },
          { date: "1/6", predictPrice: 4593, closePrice: 4293, error_ratio: 0.78 }
        ]
      },
      chartData: {
        columns: ["date", "open", "close", "lowest", "highest", "vol"],
        rows: [
          {
            date: "2004-01-05",
            open: 10411.85,
            close: 10544.07,
            lowest: 10411.85,
            highest: 10575.92,
            vol: 221290000
          },
          {
            date: "2004-01-06",
            open: 10543.85,
            close: 10538.66,
            lowest: 10454.37,
            highest: 10584.07,
            vol: 191460000
          },
          {
            date: "2004-01-07",
            open: 10535.46,
            close: 10529.03,
            lowest: 10432.12,
            highest: 10587.55,
            vol: 225490000
          },
          {
            date: "2004-01-08",
            open: 10530.07,
            close: 10592.44,
            lowest: 10480.59,
            highest: 10651.99,
            vol: 237770000
          },
          {
            date: "2004-01-09",
            open: 10589.25,
            close: 10458.89,
            lowest: 10420.52,
            highest: 10603.48,
            vol: 223250000
          },
          {
            date: "2004-01-12",
            open: 10461.55,
            close: 10485.18,
            lowest: 10389.85,
            highest: 10543.03,
            vol: 197960000
          },
          {
            date: "2004-01-13",
            open: 10485.18,
            close: 10427.18,
            lowest: 10341.19,
            highest: 10539.25,
            vol: 197310000
          },
          {
            date: "2004-01-14",
            open: 10428.67,
            close: 10538.37,
            lowest: 10426.89,
            highest: 10573.85,
            vol: 186280000
          },
          {
            date: "2004-01-15",
            open: 10534.52,
            close: 10553.85,
            lowest: 10454.52,
            highest: 10639.03,
            vol: 260090000
          },
          {
            date: "2004-01-16",
            open: 10556.37,
            close: 10600.51,
            lowest: 10503.71,
            highest: 10666.88,
            vol: 254170000
          },
          {
            date: "2004-01-20",
            open: 10601.42,
            close: 10528.66,
            lowest: 10447.92,
            highest: 10676.96,
            vol: 224300000
          },
          {
            date: "2004-01-21",
            open: 10522.77,
            close: 10623.62,
            lowest: 10453.11,
            highest: 10665.72,
            vol: 214920000
          },
          {
            date: "2004-01-22",
            open: 10624.22,
            close: 10623.18,
            lowest: 10545.03,
            highest: 10717.41,
            vol: 219720000
          },
          {
            date: "2004-01-23",
            open: 10625.25,
            close: 10568.29,
            lowest: 10490.14,
            highest: 10691.77,
            vol: 234260000
          },
          {
            date: "2004-01-26",
            open: 10568.12,
            close: 10702.51,
            lowest: 10510.44,
            highest: 10725.18,
            vol: 186170000
          },
          {
            date: "2004-01-27",
            open: 10701.11,
            close: 10609.92,
            lowest: 10579.33,
            highest: 10748.81,
            vol: 206560000
          },
          {
            date: "2004-01-28",
            open: 10610.07,
            close: 10468.37,
            lowest: 10412.44,
            highest: 10703.25,
            vol: 247660000
          },
          {
            date: "2004-01-29",
            open: 10467.41,
            close: 10510.29,
            lowest: 10369.92,
            highest: 10611.56,
            vol: 273970000
          },
          {
            date: "2004-01-30",
            open: 10510.22,
            close: 10488.07,
            lowest: 10385.56,
            highest: 10551.03,
            vol: 208990000
          },
          {
            date: "2004-02-02",
            open: 10487.78,
            close: 10499.18,
            lowest: 10395.55,
            highest: 10614.44,
            vol: 224800000
          },
          {
            date: "2004-02-03",
            open: 10499.48,
            close: 10505.18,
            lowest: 10414.15,
            highest: 10571.48,
            vol: 183810000
          },
          {
            date: "2004-02-04",
            open: 10503.11,
            close: 10470.74,
            lowest: 10394.81,
            highest: 10567.85,
            vol: 227760000
          },
          {
            date: "2004-02-05",
            open: 10469.33,
            close: 10495.55,
            lowest: 10399.92,
            highest: 10566.37,
            vol: 187810000
          },
          {
            date: "2004-02-06",
            open: 10494.89,
            close: 10593.03,
            lowest: 10433.74,
            highest: 10634.81,
            vol: 182880000
          },
          {
            date: "2004-02-09",
            open: 10592.41,
            close: 10579.03,
            lowest: 10433.72,
            highest: 10634.81,
            vol: 160720000
          },
          {
            date: "2004-02-10",
            open: 10578.74,
            close: 10613.85,
            lowest: 10511.18,
            highest: 10667.03,
            vol: 160590000
          },
          {
            date: "2004-02-11",
            open: 10605.48,
            close: 10737.72,
            lowest: 10561.55,
            highest: 10779.41,
            vol: 277850000
          },
          {
            date: "2004-02-12",
            open: 10735.18,
            close: 10694.07,
            lowest: 10636.44,
            highest: 10775.03,
            vol: 197560000
          },
          {
            date: "2004-02-13",
            open: 10696.22,
            close: 10627.85,
            lowest: 10578.66,
            highest: 10755.47,
            vol: 208340000
          },
          {
            date: "2004-02-17",
            open: 10628.88,
            close: 10714.88,
            lowest: 10628.88,
            highest: 10762.07,
            vol: 169730000
          },
          {
            date: "2004-02-18",
            open: 10706.68,
            close: 10671.99,
            lowest: 10623.62,
            highest: 10764.36,
            vol: 164370000
          },
          {
            date: "2004-02-19",
            open: 10674.59,
            close: 10664.73,
            lowest: 10626.44,
            highest: 10794.95,
            vol: 219890000
          },
          {
            date: "2004-02-20",
            open: 10666.29,
            close: 10619.03,
            lowest: 10559.11,
            highest: 10722.77,
            vol: 220560000
          },
          {
            date: "2004-02-23",
            open: 10619.55,
            close: 10609.62,
            lowest: 10508.89,
            highest: 10711.84,
            vol: 229950000
          },
          {
            date: "2004-02-24",
            open: 10609.55,
            close: 10566.37,
            lowest: 10479.33,
            highest: 10681.41,
            vol: 225670000
          },
          {
            date: "2004-02-25",
            open: 10566.59,
            close: 10601.62,
            lowest: 10509.42,
            highest: 10660.73,
            vol: 192420000
          },
          {
            date: "2004-02-26",
            open: 10598.14,
            close: 10580.14,
            lowest: 10493.71,
            highest: 10652.96,
            vol: 223230000
          },
          {
            date: "2004-02-27",
            open: 10581.55,
            close: 10583.92,
            lowest: 10519.03,
            highest: 10689.55,
            vol: 200050000
          }
        ]
      }
    };
  },
  methods: {
    goBack() {
      this.$router.push({
        path: '/'
      });
    }, 
  },
  created() {
    this.company = this.$route.params.c;
    this.index = this.$route.params.i;
    this.accuracy_percentage = this.$route.params.a;
    this.closing_price = this.$route.params.p;
    this.recommend = this.$route.params.r;
    this.src = this.$route.params.src,
    this.predict_price = this.$route.params.predict_price;
    this.date_input = this.$route.params.date;
    this.$axios
      .get("/graphdata", {
        params: {
          companyIdx: this.index
        }
      })
      .then(res => {
        console.log("get graph data from backend");
        this.chartData.rows = res.data;
      });
    this.$axios
      .get("/comparedata", {
        params: {
          companyIdx: this.index
        }
      })
      .then(res => {
        console.log("get graph data from backend");
        this.chartData2.rows = res.data;
        console.log("error_ratio: ", this.chartData2.rows[0].error_ratio);
      });
    this.$axios
      .get("/tradingpoint", {
        params: {
          companyIdx: this.index, 
          date: this.date_input, 
          action: this.recommend
        }
      })
      .then(res => {
        this.trading_point = res.data;
        console.log("get trading data from backend, data: ", this.trading_point);
      });
  }
};
</script>