"use strict";(self.webpackChunkroboapex_github_io=self.webpackChunkroboapex_github_io||[]).push([[193],{4574:(e,a,t)=>{t.r(a),t.d(a,{default:()=>g});var o=t(7294),n=t(7019),i=t(2515),s=t(9960),l=t(6010),r=t(4491);const c="tile_QAlJ",m="projectName_rAt4";function p(e){var a;let{nameData:t,repo:n}=e;const[i,p]=(0,o.useState)();return(0,o.useEffect)((()=>{var e,a;p({groupName:t[5],projectName:null!=(e=null==t||null==(a=t[5])?void 0:a.replace("_"," "))?e:t[0],event:{code:t[1],name:r.$[t[1]].regions[t[2]].name,website:r.$[t[1]].regions[t[2]].website},year:parseInt(t[4])}),console.log(t,n)}),[n]),o.createElement("div",{className:(0,l.Z)("card",c)},o.createElement(s.Z,{href:null==n?void 0:n.html_url,style:{textDecoration:"none",color:"initial"}},o.createElement("div",{className:"card__image"},o.createElement("img",{src:"https://picsum.photos/seed/"+t[0]+"/800/400",alt:"Placeholder Image",title:"Placeholder Image"})),o.createElement("div",{className:"card__header"},o.createElement("h3",{className:m},null==i?void 0:i.projectName),o.createElement("p",null,"Last updated: ",new Date(n.pushed_at).toLocaleDateString("en-US")),o.createElement("i",{className:"fas fa-star"}),n.stargazers_count,o.createElement("i",{className:"fas fa-eye"}),n.stargazers_count),o.createElement("div",{className:"card__body"},o.createElement("p",null,null==i?void 0:i.groupName),o.createElement("p",null,null!=(a=null==n?void 0:n.description)?a:null))))}const u="grid_WWly";function g(){const{data:e}=(0,i.ZP)("https://api.github.com/orgs/roboapex/repos");return o.createElement(n.Z,{title:"Projects"},o.createElement("div",{className:u},null==e?void 0:e.map((e=>{const a=null==e?void 0:e.full_name.slice(9).match(/^(\w+)(\d{4})-(\w+)-(\w+)(?:-(\w+))?$/m);return null!=e&&e.full_name.startsWith("roboapex/roboapex")||"roboapex.github.io"===(null==e?void 0:e.full_name)||null===a?null:o.createElement(p,{repo:e,key:null==e?void 0:e.full_name,nameData:Object.values(a)})}))))}},4491:(e,a,t)=>{t.d(a,{$:()=>o});const o={nrc:{regions:{sg:{name:"National Robotics Competition (Singapore)",website:"https://ducklearning.com/pages/nrc-sg"}}},robocup:{regions:{sg:{name:"Robocup Singapore Open",website:"https://robocupsg.org/en/singaporeopen"},aptji:{name:"RoboCup Asia-Pacific Tianjin Invitational Tournament"},icool:{name:"International CoSpace OnLine (iCooL) Challenge @Virtual RoboCup",website:"https://robocupap.org/icool2020/"}}},fll:{regions:{sg:{name:"First LEGO League",website:"https://www.firstlegoleague.org/"}}},ide:{regions:{sg:{name:"IDE (Innovation, Design and Engineering) Series",website:"https://ideseries.org/"}}},apyrc:{regions:{sg:{name:"Asia Pacific Youth Robotics Competition",website:"https://apyrc.com/"}}},vex:{regions:{sg:{name:"Singapore VEX Robotics Competition"},ap:{name:"Asia-Pacific VEX Robotics Championship"},world:{name:"VEX Robotics World Championship"}}},bullseye:{regions:{sg:{name:"Bull\u2019s Eye Competition",website:"https://victoria.moe.edu.sg/bulls-eye-competition/"}}},roborave:{regions:{kaga:{name:"RoboRave Kaga Japan",website:"https://www.roborave-kaga.com/"},int:{name:"RoboRave International",website:"http://roborave.itccc.org.cn/"}}},makex:{regions:{sg:{name:"MakeX Robotics Competition Singapore",website:"https://www.makexsg.com/"},world:{name:"",website:"https://www.makex.cc/en"}}}}}}]);