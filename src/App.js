export default {
  render() {
    return (
      <div id="app">
        <div id="nav">
          <router-link to="/">Home</router-link> |
        </div>
        <router-view />
      </div>
    );
  }
};
