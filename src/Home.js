import './Home.css';
import React, { Component } from 'react';

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this)
    this.state = { isSmall: false, isDesktop: false };
  }

  componentDidMount() {
    this.updateWindowDimensions();
    document.title = "情侣游戏"
    window.addEventListener('resize', this.updateWindowDimensions);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateWindowDimensions);
  }

  updateWindowDimensions() {
    console.log(window.innerWidth)
    this.setState({ isSmall: window.innerWidth <= 550, isDesktop: window.innerWidth >= 1200});
  }

  donwloadLovers() {
    window.location.href = "https://apps.apple.com/cn/app/%E5%BE%97%E7%88%B1-%E6%83%85%E4%BE%A3%E9%A3%9E%E8%A1%8C%E6%A3%8B/id6467179272";
  }
  donwloadDolove() {
    window.location.href = "https://apps.apple.com/cn/app/%E5%BE%97%E7%88%B1-%E6%83%85%E4%BE%A3%E9%A3%9E%E8%A1%8C%E6%A3%8B/id6467179272";
  }
  beianApp() {
    window.location.href = "https://beian.miit.gov.cn/#/Integrated/recordQuery";
  }
  clickContact() {
    window.open("mailto:yeahdolove@163.com")
  }


  
  render() {
    let isSmall = this.state.isSmall;
    let isDesktop = this.state.isDesktop;

    return (
      <div className='content'>
       <img  src="https://file.yeahdolove.cn/WMzeV8nfdpKpTtU02BoL0RHM0dAwDjAv/ewdqdfeqwe231f31.png" className='bg-image'></img>
       <text onClick={() => this.clickContact()} style={{fontSize: "18px", fontWeight: "600", color: "#FFFF", position: "fixed", right: "14px", top: "14px"}} className='conatct'>联系我们</text>
      <div className='title' style={isDesktop ?  {fontSize: "150px"} : isSmall ? {fontSize: "60px"} : {}}><text>专注</text><text style={{color:"orange"}}>情侣游戏</text></div>
      <div className={isSmall ? 'small-app' : 'app'}><img onClick={() => this.donwloadDolove()} style={isDesktop ? {width: "180px"} : {}} src="https://file.yeahdolove.cn/ndRlBzA5FWktzKY3jBEhqNnUauuWQEpE/dolove_logo.png"></img><img  onClick={() => this.donwloadLovers()} style={isDesktop ? {width: "180px"} : {}} src="https://file.yeahdolove.cn/N8KcIsqiR6hz2VR4FNUAFA3iu4iRpSAr/lovers_logo.png"></img> </div>
      <text style={{fontSize: "14px", fontWeight: "400", color: "#FFFF", position: "fixed", right: "14px", bottom: "10px", left: "14px", textAlign:"center"}}>版权所有 @lover‘s</text>
      <text onClick={() => this.beianApp()} style={{fontSize: "14px", fontWeight: "400", color: "#FFFF", position: "fixed", right: "14px", bottom: "30px", left: "14px", textAlign:"center"}}>
      鄂ICP备2023018411号-1</text>
      </div>
    )
  }

}
