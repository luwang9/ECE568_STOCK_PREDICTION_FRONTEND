<template>
  <div>
    <el-row>
      <el-col :span="8" :offset="8">
        <h1>ECE568 Stock Prediction</h1>
      </el-col>
    </el-row>
    <el-row>
      <el-date-picker
        v-model="date_input"
        type="date"
        placeholder="Pick a day"
        :picker-options="pickerOptions"
        value-format="timestamp"
      ></el-date-picker>
      <el-button @click="changeDate">Retrieve</el-button>
    </el-row>
    <br />
    <el-row>
      <el-col v-for="(item,index) in companyData" :key="index" :span="8" class="colstyle">
        <div style="padding:3px">
          <el-card :body-style="{ padding: '30px' }">
            <img :src="item.src" class="image" @click="changePage(index)" />
            <div style="padding: 14px;">
              <span @click="changePage(index)" class="company_name">{{item.name}}</span>
              <div class="bottom clearfix">
                <h4>Closing price: {{item.closing_price}}</h4>
                <h4>Prediction price: {{item.predict_price}}</h4>
                <h3>Recommendation: {{item.recommend}}</h3>
                <el-row>
                  <el-col :offset=2>
                    <el-progress
                      :text-inside="true"
                      :stroke-width="20"
                      :percentage="item.accuracy_percentage"
                      :color="customColorMethod"
                      class="progress clearfix"
                    ></el-progress>
                  </el-col>
                </el-row>
              </div>
            </div>
          </el-card>
        </div>
      </el-col>
    </el-row>
  </div>
</template>




<script>
export default {
  data() {
    return {
      pickerOptions: {
          disabledDate(time) {
            return time.getTime() > Date.now();
          },
      }, 
      date_input: "1578330732000",
      passingParam: "default company",
      companyData: [
        {
          name: "Google",
          index: "GOOGL",
          accuracy_percentage: 19,
          closing_price: 452,
          predict_price: 430,
          recommend: "Buy",
          src:
            "https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png"
        },
        {
          name: "Tesla",
          index: "TSLA",
          accuracy_percentage: 19,
          closing_price: 452,
          predict_price: 430,
          recommend: "Buy",
          src:
            "https://wrongfuldeathsouthflorida.com/wp-content/uploads/2019/05/tesla_logo.jpg"
        },
        {
          name: "Insmed",
          index: "INSM",
          accuracy_percentage: 99,
          closing_price: 452,
          predict_price: 430,
          recommend: "Buy",
          src: "https://insmed.com/wp-content/uploads/2019/11/insmed_logo.jpg"
        },
        {
          name: "Lakeland",
          index: "LAKE",
          accuracy_percentage: 19,
          closing_price: 452,
          predict_price: 430,
          recommend: "Buy",
          src:
            "https://www.marketbeat.com/logos/lakeland-industries-inc-logo.jpg"
        },
        {
          name: "Amazon",
          index: "AMZN",
          accuracy_percentage: 19,
          closing_price: 452,
          predict_price: 430,
          recommend: "Buy",
          src:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTJbSlw2qgyr4ERsB3ExvudU3XNx5_RlmhLCq0902Tdqgnn0sMA&usqp=CAU"
        },
        {
          name: "Alibaba",
          index: "BABA",
          accuracy_percentage: 19,
          closing_price: 452,
          predict_price: 430,
          recommend: "Buy",
          src:
            "https://docs.alibabagroup.com/assets2/images/en/news/library_logos_alibabaev_large.png"
        },
        {
          name: "Facebook",
          index: "FB",
          accuracy_percentage: 19,
          closing_price: 452,
          predict_price: 430,
          recommend: "Buy",
          src:
            "https://cdn0.tnwcdn.com/wp-content/blogs.dir/1/files/2015/07/sdffdsafsdf-1200x604.png"
        },
        {
          name: "Apple",
          index: "AAPL",
          accuracy_percentage: 19,
          closing_price: 452,
          predict_price: 430,
          recommend: "Buy",
          src:
            "https://www.apple.com/ac/structured-data/images/knowledge_graph_logo.png?201609051049"
        },
        {
          name: "General Motors",
          index: "GM",
          accuracy_percentage: 19,
          closing_price: 452,
          predict_price: 430,
          recommend: "Buy",
          src:
            "https://upload.wikimedia.org/wikipedia/commons/d/d6/General_Motors_logo.svg"
        },
        {
          name: "Eli Lilly and Company",
          index: "LLY",
          accuracy_percentage: 19,
          closing_price: 452,
          predict_price: 430,
          recommend: "Buy",
          src:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2b/Eli_Lilly_and_Company.svg/640px-Eli_Lilly_and_Company.svg.png"
        }
      ]
    };
  },

  created: function() {
    this.$axios
      .get("/recommendation", {
        params: {
          date: this.date_input
        }
      })
      .then(res => {
        console.log("get data from backend");
        this.companyData = res.data;
      });
  },

  methods: {
    changeDate() {
      this.$axios
      .get("/recommendation", {
        params: {
          date: this.date_input
        }
      })
      .then(res => {
        console.log("get data from backend after re-choose date");
        this.companyData = res.data;
      });
    }, 
    customColorMethod(percentage) {
      if (percentage < 30) {
        return "#909399";
      } else if (percentage < 70) {
        return "#e6a23c";
      } else {
        return "#67c23a";
      }
    },
    changePage(name) {
      this.passingParam = name;
      console.log("ready to direct to company detail page");
      console.log(this.companyData[name].name);
      this.$router.push({
        name: "Company",
        params: {
          c: this.companyData[name].name,
          i: this.companyData[name].index,
          a: this.companyData[name].accuracy_percentage,
          p: this.companyData[name].closing_price,
          r: this.companyData[name].recommend,
          src: this.companyData[name].src,
          predict_price: this.companyData[name].predict_price
        }
      });
    }
  }
};
</script>




<style>
.time {
  font-size: 13px;
  color: #999;
}
.el-col {
  border-radius: 4px;
}

.bottom {
  margin-top: 13px;
  line-height: 12px;
}

.button {
  padding: 10;
  float: right;
}

.image {
  width: auto;
  height: 100px;
  display: -moz-groupbox;
  cursor: pointer;
}
.progress {
  width: 80%;
  padding: 10;
}
.colstyle {
  margin-bottom: 30px;
}

.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}

.clearfix:after {
  clear: both;
}

.company_name {
  cursor: pointer;
}
</style>