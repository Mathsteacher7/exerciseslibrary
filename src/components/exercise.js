import React from "react";
import axios from "axios";

class Index extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    axios.get("/api/exercises").then((res) => console.log(res.data));
    console.log('hello')
  }

  render() {
    return <div>Hello world</div>;
  }
}

export default Index;
