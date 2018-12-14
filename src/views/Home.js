export default {
  data() {
    return {
      keyword: ""
    };
  },

  methods: {
    change(e) {
      this.keyword = e.target.value;
    }
  },

  render() {
    return (
      <div class="home">
          <div>
              <input type="text" onKeyup={this.change} />

          </div>

          <div>
              <a href={"https://github.com/search?q=" + this.keyword} target="_blank">Github</a>
              <a href={"https://developer.mozilla.org/zh-CN/search?q=" + this.keyword} target="_blank">MDN</a>
              <a href={"https://stackoverflow.com/search?q="+this.keyword} target="_blank">Stack Overflow</a>
              <a href={"https://www.google.com/search?q="+ this.keyword} target="_blank">Google</a>
              <a href={"https://cn.bing.com/search?q="+ this.keyword} target="_blank">Bing</a>
              <a href={"https://duckduckgo.com/?q="+this.keyword} target="_blank">DuckDuckGo</a>
              <a href={"https://zh.wikipedia.org/wiki/"+this.keyword}>Wikipedia</a>
          </div>
      </div>
    );
  }
};
