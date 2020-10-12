import React, { Component } from 'react'
import { View, Text } from '@tarojs/components'
import Taro from '@tarojs/taro'

export default class BlogAll extends Component {

    state = {
        list: '[]'
    }

    componentWillMount() { }

    componentDidMount() {
        let blogList = this.getList()
        // this.setState({ list: blogList })
    }

    componentWillUnmount() { }

    componentDidShow() { }

    componentDidHide() { }

    getList = () => {
        Taro.cloud.callFunction({
            name: "blogall",
            data: { page: 1, size: 10 }
        })
            .then(res => {
                console.log('blogall....>', res)
                this.setState({ list: res.result })
            })
    }


    render() {
        let list = JSON.parse(this.state.list)
        return (
            <View className='index'>
                {list.map(item => {
                    return <Text>{item._id}</Text>
                })}
            </View>
        )
    }
}
