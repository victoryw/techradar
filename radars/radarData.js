//This is the title for your window tab, and your Radar
document.title = "Genuine Pro Practice Radar (2018.6)";

//This is the concentic circles that want on your radar
var radar_arcs = [
                   {'r':100,'name':'Adopt'}
                  ,{'r':200,'name':'Trial'}
                  ,{'r':300,'name':'Assess'}
                  ,{'r':400,'name':'Hold'}
                 // ,{'r':500,'name':'Possible Extra if you want it'}
                 ];

//This is your raw data
//
// Key
//
// movement:
//   t = moved
//   c = stayed put
//
// blipSize: 
//  intValue; This is optional, if you omit this property, then your blip will be size 70.
//            This give you the ability to be able to indicate information by blip size too
//
// url:
// StringValue : This is optional, If you add it then your blips will be clickable to some URL
//
// pc: polar coordinates
//     r = distance away from origin ("radial coordinate")
//     - Each level is 100 points away from origin
//     t = angle of the point from origin ("angular coordinate")
//     - 0 degrees is due east
//
// Coarse-grained quadrants
// - Techniques: elements of a software development process, such as experience design; and ways of structuring software, such micro-services.
// - Tools: components, such as databases, software development tools, such as versions control systems; or more generic categories of tools, such as the notion of polyglot persistance.
// - Platforms: things that we build software on top of: mobile technologies like Android, virtual platforms like the JVM, or generic kinds of platforms like hybrid clouds
// - Programming Languages and Frameworks
//
// Rings:
// - Adopt: blips you should be using now; proven and mature for use
// - Trial: blips ready for use, but not as completely proven as those in the adopt ring; use on a trial basis, to decide whether they should be part of your toolkit
// - Assess: things that you should look at closely, but not necessarily trial yet - unless you think they would be a particularly good fit for you
// - Hold: things that are getting attention in the industry, but not ready for use; sometimes they are not mature enough yet, sometimes they are irredeemably flawed
//      Note: there's no "avoid" ring, but throw things in the hold ring that people shouldn't use.

var h = 1000;
var w = 1200;

var radar_data = [
    { "quadrant": "过程改进",
        "left" : 45,
        "top" : 18,
        "color" : "#8FA227",
        "items" : [ 
            {"name": 'kick off时，由dev描述卡的业务场景和要点', "pc": { r: 80, t: 100 }, "movement": 'c' },
            {"name": 'kick off前，QA提前准备好check list', "pc": { r: 100, t: 100 }, "movement": 'c' },
            {"name":"DevOps的任务纳入技术卡管理并估点", "pc":{"r":80,"t":120},"movement":"c"},
            {"name":"在前后端分离的项目上，把story 也拆分sub story来分别追踪前后端进度", "pc":{"r":60,"t":120},"movement":"c"},
            {"name":"采用jira作为进度管理工具", "pc":{"r":90,"t":140},"movement":"c"}, 
            {"name":"采用confluence作为知识管理工具", "pc":{"r":90,"t":160},"movement":"c"},
            {"name":"与安全团队合作 build security in", "pc":{"r":60,"t":160},"movement":"c"},   
            {"name":"首先将前后端的契约构建在story卡上", "pc":{"r":70,"t":140},"movement":"c"},   
            {"name":"在retro时回顾circle time", "pc":{"r":90,"t":170},"movement":"c"},
            {"name":"独立的dev环境^", "pc":{"r":250,"t":170},"movement":"c"},  
        ]
    },
    { "quadrant": "基础设施及平台",
        "left": w-200+30,
        "top" : 18,
        "color" : "#587486",
        "items" : [ 
            {name: 'Nginx', pc: { r: 10, t: 30 }, movement: 'c' },
            {name: '听云 APM', pc: { r: 30, t: 60 }, movement: 'c' },
            {name: 'PostgreSQL hot standby server', pc: { r: 210, t: 19 }, movement: 'c' },
            {name: 'Redis Sentinel', pc: { r: 90, t: 20 }, movement: 'c' },
            {name: 'EFK', pc: { r: 140, t: 40 }, movement: 'c' },
            {name: 'Backup', pc: { r: 160, t: 80 }, movement: 'c' },
            {name: 'Prometheus+Grafana', pc: { r: 120, t: 60 }, movement: 'c' },
            {name: 'Nagios', pc: { r: 220, t: 60 }, movement: 'c' },
        ]
    },
    { "quadrant": "CI/CD devops",
        "left" :45,
         "top" : (h/2 + 18),
        "color" : "#DC6F1D",
        "items" : [
            {"name":"ansible", "pc":{"r":70,"t":190},"movement":"c"},   
            {"name":"docker & docker-compose", "pc":{"r":50,"t":210},"movement":"c"},
            {"name":"infrastructure as code", "pc":{"r":70,"t":220},"movement":"c"},    
            {"name":"pipeline as code", "pc":{"r":50,"t":240},"movement":"c"},    
            {"name":"rolling upgrade", "pc":{"r":80,"t":240},"movement":"c"},    
            {"name":"In-process component tests", "pc":{"r":140,"t":230},"movement":"c"},    
            {"name":"sonarqube", "pc":{"r":130,"t":220},"movement":"c"}, 
            {"name":"jacoco", "pc":{"r":30,"t":220},"movement":"c"}, 
            {"name":"GoCD", "pc":{"r":130,"t":240},"movement":"c"},    
            {"name":"embedded-redis", "pc":{"r":110,"t":220},"movement":"c"},    
            {"name":"通过sub-module的方式共享代码", "pc":{"r":210,"t":220},"movement":"c"},    
            {"name":"jenkins", "pc":{"r":190,"t":240},"movement":"c"},    
            {"name":"不同环境共享一个镜像库", "pc":{"r":330,"t":240},"movement":"c"}, 
            {"name":"在jenkins中手工指定参数进行不同环境的部署", "pc":{"r":340,"t":260},"movement":"c"},
            {"name":"在配置管理中直接使用ip地址，而不是url或者机器名", "pc":{"r":350,"t":230},"movement":"c"},
            {"name":"iOS基于多scheme和多config的分环境打包", "pc":{"r":280,"t":200},"movement":"c"}
        ]
    },
    { "quadrant": "语言、框架和工具",
        "color" : "#B70062",
        "left"  : (w-200+30),
        "top" :   (h/2 + 18),
        "items" : [ 
            { name: 'RestTemplate', pc: { r: 60, t: 290 },  movement: 'c' },
            { name: 'OpenID Connect', pc: { r: 110, t: 320 },  movement: 'c' },
            { name: 'Redux', pc: { r: 90, t: 310 },  movement: 'c' },
            { name: 'React-Native', pc: { r: 20, t: 300 },  movement: 'c' },
            { name: 'Webpack', pc: { r: 40, t: 300 },  movement: 'c' },
            { name: 'Flyway', pc: { r: 60, t: 320 },  movement: 'c' },
            { name: 'Spring Boot Test', pc: { r: 90, t: 298 },              movement: 'c',  domain: 'template' },          
            {"name":"JWT", "pc":{"r":90,"t":355},"movement":"c"},   
            {"name":"Apache Tika", "pc":{"r":60,"t":340},"movement":"c"},
            {"name":"Quartz", "pc":{"r":70,"t":350},"movement":"c"},
            {"name":"swagger2", "pc":{"r":30,"t":320},"movement":"c"},   
            {"name":"使用 redis 来生成有序 ID", "pc":{"r":120,"t":275},"movement":"c"},   
            {"name":"wiremock", "pc":{"r":160,"t":282},"movement":"c"},
            {"name":"passay", "pc":{"r":180,"t":330},"movement":"c"},   
            {"name":"网易云信", "pc":{"r":280,"t":310},"movement":"c"},
            { name: 'redis as queue',              pc: { r: 250, t: 338 },              movement: 'c',              domain: 'template' },
            { name: 'kaptcha', pc: { r: 160, t: 330 },  movement: 'c' },
            { name: 'Spring Boot 1.5',   pc: { r: 330, t: 298 },              movement: 'c',              domain: 'template' },
            { name: 'java 8', pc: { r: 350, t: 330 },  movement: 'c' },
            {"name":"junit4", "pc":{"r":340,"t":290},"movement":"c"},
            {"name":"驭缘支付", "pc":{"r":195,"t":310},"movement":"c"},
            {"name":"个推", "pc":{"r":120,"t":350},"movement":"c"},
            {"name":"Knex", "pc":{"r":90,"t":330},"movement":"c"},
            {"name":"Apache HttpClient", "pc":{"r":320,"t":330},"movement":"c"},
            {"name":"Ant Design", "pc":{"r":80,"t":271},"movement":"c"},
            {"name":"Immutable", "pc":{"r":70,"t":291},"movement":"c"},
            {"name":"react-native-keyboard-aware-scroll-view", "pc":{"r":100,"t":291},"movement":"c"},
            {"name":"react-native-router-flux", "pc":{"r":130,"t":291},"movement":"c"},
            {"name":"百度地图组件", "pc":{"r":220,"t":321},"movement":"c"},
            {"name":"高德地图组件", "pc":{"r":140,"t":321},"movement":"c"},
            {"name":"date-fns", "pc":{"r":160,"t":321},"movement":"c"},
            {"name":"react-native-config", "pc":{"r":250,"t":321},"movement":"c"}
        ]
    }
];
