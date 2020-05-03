<template>
  <div>
    <el-row type="flex" class="row-bg" justify="center" gutter="20">
      <el-col :span="7">
        <div style="padding:3px">
          <el-card :body-style="{ padding: '30px' }">
            <img
              src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png"
              class="image"
            />
            <div style="padding: 14px;">
              <span>Google</span>
              <div class="bottom clearfix">
                <h2>Prediction: {{recommend_google}}</h2>
                <div style="padding: 10px">
                  <time class="time progress">{{ currentDate }}</time>
                </div>

                <el-progress
                  :text-inside="true"
                  :stroke-width="20"
                  :percentage="percentage_google"
                  :color="customColorMethod"
                  class="progress clearfix"
                ></el-progress>
                <el-button type="text" class="button" @click="changePage">More info</el-button>
              </div>
            </div>
          </el-card>
        </div>
        <div style="padding:3px">
          <el-card :body-style="{ padding: '30px' }">
            <img
              src="https://wrongfuldeathsouthflorida.com/wp-content/uploads/2019/05/tesla_logo.jpg"
              class="image"
            />
            <div style="padding: 14px;">
              <span>Tesla</span>
              <div class="bottom clearfix">
                <h2>Prediction: {{recommend_tesla}}</h2>
                <div style="padding: 10px">
                  <time class="time progress">{{ currentDate }}</time>
                </div>

                <el-progress
                  :text-inside="true"
                  :stroke-width="20"
                  :percentage="percentage_tesla"
                  :color="customColorMethod"
                  class="progress clearfix"
                ></el-progress>
                <el-button type="text" class="button" @click="changePage">More info</el-button>
              </div>
            </div>
          </el-card>
        </div>
        <div style="padding:3px">
          <el-card :body-style="{ padding: '30px' }">
            <img src="https://insmed.com/wp-content/uploads/2019/11/insmed_logo.jpg" class="image" />
            <div style="padding: 14px;">
              <span>Insmed</span>
              <div class="bottom clearfix">
                <h2>Prediction: {{recommend_insm}}</h2>
                <div style="padding: 10px">
                  <time class="time progress">{{ currentDate }}</time>
                </div>

                <el-progress
                  :text-inside="true"
                  :stroke-width="20"
                  :percentage="percentage_insm"
                  :color="customColorMethod"
                  class="progress clearfix"
                ></el-progress>
                <el-button type="text" class="button" @click="changePage">More info</el-button>
              </div>
            </div>
          </el-card>
        </div>
      </el-col>
      <el-col :span="7">
        <div style="padding:3px">
          <el-card :body-style="{ padding: '30px' }">
            <img
              src="https://www.marketbeat.com/logos/lakeland-industries-inc-logo.jpg"
              class="image"
            />
            <div style="padding: 14px;">
              <span>Lakeland</span>
              <div class="bottom clearfix">
                <h2>Prediction: {{recommend_lake}}</h2>
                <div style="padding: 10px">
                  <time class="time progress">{{ currentDate }}</time>
                </div>

                <el-progress
                  :text-inside="true"
                  :stroke-width="20"
                  :percentage="percentage_lake"
                  :color="customColorMethod"
                  class="progress clearfix"
                ></el-progress>
                <el-button type="text" class="button" @click="changePage">More info</el-button>
              </div>
            </div>
          </el-card>
        </div>
        <div style="padding:3px">
          <el-card :body-style="{ padding: '30px' }">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTJbSlw2qgyr4ERsB3ExvudU3XNx5_RlmhLCq0902Tdqgnn0sMA&usqp=CAU"
              class="image"
            />
            <div style="padding: 14px;">
              <span>Amazon</span>
              <div class="bottom clearfix">
                <h2>Prediction: {{recommend_amzn}}</h2>
                <div style="padding: 10px">
                  <time class="time progress">{{ currentDate }}</time>
                </div>

                <el-progress
                  :text-inside="true"
                  :stroke-width="20"
                  :percentage="percentage_amzn"
                  :color="customColorMethod"
                  class="progress clearfix"
                ></el-progress>
                <el-button type="text" class="button" @click="changePage">More info</el-button>
              </div>
            </div>
          </el-card>
        </div>
        <div style="padding:3px">
          <el-card :body-style="{ padding: '30px' }">
            <img
              src="https://docs.alibabagroup.com/assets2/images/en/news/library_logos_alibabaev_large.png"
              class="image"
            />
            <div style="padding: 14px;">
              <span>Alibaba</span>
              <div class="bottom clearfix">
                <h2>Prediction: {{recommend_baba}}</h2>
                <div style="padding: 10px">
                  <time class="time progress">{{ currentDate }}</time>
                </div>

                <el-progress
                  :text-inside="true"
                  :stroke-width="20"
                  :percentage="percentage_baba"
                  :color="customColorMethod"
                  class="progress clearfix"
                ></el-progress>
                <el-button type="text" class="button" @click="changePage">More info</el-button>
              </div>
            </div>
          </el-card>
        </div>
      </el-col>
      <el-col :span="7">
        <div style="padding:3px">
          <el-card :body-style="{ padding: '30px' }">
            <img
              src="https://cdn0.tnwcdn.com/wp-content/blogs.dir/1/files/2015/07/sdffdsafsdf-1200x604.png"
              class="image"
            />
            <div style="padding: 14px;">
              <span>Facebook</span>
              <div class="bottom clearfix">
                <h2>Prediction: {{recommend_fb}}</h2>
                <div style="padding: 10px">
                  <time class="time progress">{{ currentDate }}</time>
                </div>

                <el-progress
                  :text-inside="true"
                  :stroke-width="20"
                  :percentage="percentage_fb"
                  :color="customColorMethod"
                  class="progress clearfix"
                ></el-progress>
                <el-button type="text" class="button" @click="changePage">More info</el-button>
              </div>
            </div>
          </el-card>
        </div>
        <div style="padding:3px">
          <el-card :body-style="{ padding: '30px' }">
            <img
              src="https://www.apple.com/ac/structured-data/images/knowledge_graph_logo.png?201609051049"
              class="image"
            />
            <div style="padding: 14px;">
              <span>Apple</span>
              <div class="bottom clearfix">
                <h2>Prediction: {{recommend_aapl}}</h2>
                <div style="padding: 10px">
                  <time class="time progress">{{ currentDate }}</time>
                </div>

                <el-progress
                  :text-inside="true"
                  :stroke-width="20"
                  :percentage="percentage_aapl"
                  :color="customColorMethod"
                  class="progress clearfix"
                ></el-progress>
                <el-button type="text" class="button" @click="changePage">More info</el-button>
              </div>
            </div>
          </el-card>
        </div>
        <div style="padding:3px">
          <el-card :body-style="{ padding: '30px' }">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/d/d6/General_Motors_logo.svg"
              class="image"
            />
            <div style="padding: 14px;">
              <span>General Motors</span>
              <div class="bottom clearfix">
                <h2>Prediction: {{recommend_gm}}</h2>
                <div style="padding: 10px">
                  <time class="time progress">{{ currentDate }}</time>
                </div>

                <el-progress
                  :text-inside="true"
                  :stroke-width="20"
                  :percentage="percentage_gm"
                  :color="customColorMethod"
                  class="progress clearfix"
                ></el-progress>
                <el-button type="text" class="button" @click="changePage">More info</el-button>
              </div>
            </div>
          </el-card>
        </div>
      </el-col>
    </el-row>
    <el-row type="flex" class="row-bg" justify="center" gutter="20">
      <el-col span="7">
        <div style="padding:3px">
          <el-card :body-style="{ padding: '30px' }">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2b/Eli_Lilly_and_Company.svg/640px-Eli_Lilly_and_Company.svg.png"
              class="image"
            />
            <div style="padding: 14px;">
              <span>Eli Lilly and Company</span>
              <div class="bottom clearfix">
                <h2>Prediction: {{recommend_lly}}</h2>
                <div style="padding: 10px">
                  <time class="time progress">{{ currentDate }}</time>
                </div>

                <el-progress
                  :text-inside="true"
                  :stroke-width="20"
                  :percentage="percentage_lly"
                  :color="customColorMethod"
                  class="progress clearfix"
                ></el-progress>
                <el-button type="text" class="button" @click="changePage">More info</el-button>
              </div>
            </div>
          </el-card>
        </div>
      </el-col>
    </el-row>
  </div>
</template>
<style>
.time {
  font-size: 13px;
  color: #999;
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
}
.progress {
  width: 80%;
  padding: 10;
}

.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}

.clearfix:after {
  clear: both;
}
</style>

<script>
export default {
  data() {
    return {
      currentDate: new Date()
        .toJSON()
        .slice(0, 10)
        .replace(/-/g, "/"),
      // percentage_ refers to prediction accuracy and recommend_ refers to stock prediction
      percentage_google: 10,
      recommend_google: 234,
      percentage_tesla: 30,
      recommend_tesla: 452,
      percentage_insm: 90,
      recommend_insm: 58,
      percentage_lake: 50,
      recommend_lake: 23,
      percentage_amzn: 60,
      recommend_amzn: 2340,
      percentage_fb: 10,
      recommend_fb: 234,
      percentage_baba: 10,
      recommend_baba: 234,
      percentage_aapl: 10,
      recommend_aapl: 234,
      percentage_gm: 10,
      recommend_gm: 234,
      percentage_lly: 10,
      recommend_lly: 234
    };
  },
  methods: {
    customColorMethod(percentage) {
      if (percentage < 30) {
        return "#909399";
      } else if (percentage < 70) {
        return "#e6a23c";
      } else {
        return "#67c23a";
      }
    },
    changePage() {
      // how to redirect to more info page
      console.log("sda");
    }
  }
};
</script>
