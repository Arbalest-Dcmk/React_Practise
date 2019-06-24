import React from 'react'



class PageA extends React.Component {
    constructor(props) {//构造函数初始化
        super(props);
        this.state = {//构造函数是唯一可以给 this.state 赋值的地方：
            date: new Date(),
            isShow: false
        }

    }



    componentDidMount() {//挂载
        this.timerID = setInterval(() => this.tick(), 1000)
    }


    componentWillUnmount() {//卸载
        clearInterval(this.timerID)
    }

    tick() {
        this.setState({//对象作为参数可能是异步的，state更新会被合并
            date: new Date()
        })

        this.setState((state, props) => ({//函数作为参数即可解决这个问题
        }))
    }

    handleClick(name) {//必须在构造或者jsx中 bind(this) 否则取不到this
        console.log('每次rendor时都会重复执行')
        return (e) => {
            e.preventDefault();
            this.setState(state => ({
                isShow: !state.isShow
            }))
            console.log(name)
        }

    }
    handleClickArrow(e,name) {//必须在构造或者jsx中 bind(this) 否则取不到this
        
        return (e) => {
            e.preventDefault();
            this.setState(state => ({
                isShow: !state.isShow
            }))
            console.log(name)
        }

    }

    handleClickPublicFields = (e, name) => {//实验性public class fields语法，不再需要bind(this)
        e.preventDefault();
        this.setState(state => ({
            isShow: !state.isShow
        }))
        console.log(name)
    }
    render() {
        return (
            <div>
                <h3>{this.state.date.toLocaleTimeString()}</h3>
                <a href="www.baidu.com" onClick={this.handleClick.bind(this,'bind this')}>bind方式</a>
                <hr/>
                <a href="#" onClick={(e) => this.handleClickPublicFields(e, 'public class fields')}>public class fields</a>
                <h3>{this.state.isShow ? 'yes' : 'no'}</h3>
            </div>

        )
    }




}

export default PageA