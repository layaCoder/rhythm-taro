import Taro, { Component } from "@tarojs/taro"
import { View, Text, Button } from "@tarojs/components"

export default class Login extends Component {
  state = {
    context: {}
  }

  componentWillMount() {}

  componentDidMount() {}

  componentWillUnmount() {}

  componentDidShow() {}

  componentDidHide() {}

  getLogin = () => {
    Taro.cloud
      .callFunction({
        name: "login",
        data: {}
      })
      .then(res => {
        console.log(res.result)
        this.setState({
          context: res.result
        })
      })
  }

  getBlogAll = () => {
    Taro.cloud
      .callFunction({
        name: "blogall",
        data: {}
      })
      .then(res => {
        console.log(res.result.data)
        this.setState({
          context: res.result.data
        })
      })
  }

  render() {
    return (
      <View className='index'>
        <Button onClick={this.getLogin}>获取登录云函数</Button>
        <Button onClick={this.getBlogAll}>blog all</Button> 
        <Text>context：{JSON.stringify(this.state.context)}</Text>
      </View>

    )
  }
}
