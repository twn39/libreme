import "normalize.css";
import "../App.css";

export default {
  render() {
    return (
      <div id="app">
        <div class="sidebar">
          <router-view name="sidebar" />
        </div>

        <div class="main">
          <router-view class="main" />
        </div>
      </div>
    );
  }
};
