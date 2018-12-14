export default {
  data() {
    return {
      keyword: "php"
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
        <input type="text" onKeyup={this.change} />

        <a href={"https://github.com/search?q=" + this.keyword} target="_blank">
          github
        </a>
      </div>
    );
  }
};
