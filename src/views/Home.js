export default {
  data() {
    return {
      keyword: "",
      sites: {
        Github: "https://github.com/search?q=",
        MDN: "https://developer.mozilla.org/zh-CN/search?q=",
        "Stack Overflow": "https://stackoverflow.com/search?q=",
        Google: "https://www.google.com/search?q=",
        Bing: "https://cn.bing.com/search?q=",
        DuckDuckGo: "https://duckduckgo.com/?q=",
        Wikipedia: "https://zh.wikipedia.org/wiki/"
      }
    };
  },

  methods: {
    change(e) {
      this.keyword = e.target.value;
    }
  },

  render() {
    let sites = [];
    Object.keys(this.sites).forEach(key => {
      sites.push(<a href={this.sites[key] + this.keyword} target="_blank">{key}</a>);
    });
    return (
      <div class="search-box">
        <div class="search-input">
          <input type="text" onKeyup={this.change} placeholder="Search" />
        </div>

        <div class="sites">{sites}</div>
      </div>
    );
  }
};
