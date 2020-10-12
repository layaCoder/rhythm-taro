import React, { Component } from 'react'
import Taro, { Config } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import './index.scss'

import BlogAll from '../../components/BlogAll/index'
import Login from '../../components/login/index.weapp'

export default class Index extends Component {

  state = {
    isLogin: true
  }

  componentWillMount() { }

  componentDidMount() {
    Taro.cloud
      .callFunction({
        name: "login",
        data: {}
      })
      .then(res => {
        console.log('weapp login res...>', res)
        this.setState({
          weappSource: res.result,
          isLogin: false
        })
      })
  }

  componentWillUnmount() { }

  componentDidShow() { }

  componentDidHide() { }

  render() {
    return (
      <View className='index'>
        {this.state.isLogin ? <View>Loading</View> : null}
        <Text>{this.state.isLogin.toString()}</Text>
        {/* <Login /> */}
        <BlogAll ></BlogAll>
      </View>
    )
  }
}
