/**
 * Created by julie on 3/3/16.
 */
'use strict';
var Narbar = React.createClass({
    render:function(){
        return (
            <nav id="cat-nav" className="navbar navbar-default navbar-fixed-top">
                <div className="container">
                    <div className="navbar-header">
                        <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                            <span className="sr-only">Toggle navigation</span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                        </button>
                        <a className="navbar-brand visible-xs" href="#">逗猫会</a>
                    </div>
                    <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                        <ul className="nav navbar-nav navbar-left">
                            <li className="active"><a href="shopping.html">首页</a></li>
                            <li><a href="europe-america-cat.html">欧美猫</a></li>
                            <li><a href="#">亚非猫</a></li>
                            <li><a href="#">流浪猫</a></li>
                        </ul>
                        <div className="logo visible-lg visible-md"></div>
                        <ul className="nav navbar-nav navbar-right">
                            <li><a href="cat-food.html">猫粮</a></li>
                            <li><a href="adopt.html">领养</a></li>
                            <li><a href="charity.html">公益</a></li>
                            <li><a href="cart.html">购物车</a></li>
                        </ul>
                    </div>
                </div>
            </nav>
        )
    }
});

var HomeSlider = React.createClass({
    render:function(){
        return (
            <div id="home-slider">
                <div className="jumbotron image1">
                    <h1>新猫入驻</h1>
                    <a className="cat-btn btn btn-lg" href="#" role="button" >去看看</a>
                </div>
                <div className="cat-btn-left">
                    <button className="btn"><span className="glyphicon glyphicon-chevron-left" aria-hidden="true"></span></button>
                </div>
                <div className="cat-btn-right">
                    <button className="btn"><span className="glyphicon glyphicon-chevron-right" aria-hidden="true"></span></button>
                </div>
                <div className="cat-slider center-block">
                    <ol>
                        <li><span className="glyphicon glyphicon-record" aria-hidden="true"></span></li>
                        <li><span className="glyphicon glyphicon-record" aria-hidden="true"></span></li>
                        <li><span className="glyphicon glyphicon-record" aria-hidden="true"></span></li>
                    </ol>
                </div>
            </div>
        )
    }
});

var HotCatThumbnail = React.createClass({
    render:function(){
        return (
            <div id="cat-thumbnail" className="center-block">
                <div className="row">
                    <div className="col-md-12">
                        <div className="heading-title">
                            <h2>最受欢迎</h2>
                            <p>本月人气喵星人</p>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-3 col-sm-4 col-xs-12">
                        <div className="thumbnail">
                            <img src="image/Scottish-Fold.jpg"/>
                            <div className="caption">
                                <h3>苏格兰折耳猫</h3>
                                <div className="description"></div>
                                <p className="details">苏格兰折耳猫甜美的性格是天生的，它们就有着糖果般甜美的性格。它们喜欢参与你所作的任何事情，但通常只是静静地，但不会发出声音来打扰你。</p>
                                <p><a href="#" className="cat-btn btn btn-block" role="button">加入购物车</a></p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3 col-sm-4 col-xs-12">
                        <div className="thumbnail">
                            <img src="image/Norwegian-Forest-Cat.jpg"/>
                            <div className="caption">
                                <h3>挪威森林猫</h3>
                                <p className="details">挪威森林猫性格内向，独立性强，聪颖敏捷，机灵警觉，行动谨慎，喜欢冒险和活动，且能抓善捕，善爬树攀岩，有“能干的狩猎者”之美誉。</p>
                                <p><a href="#" className="cat-btn btn btn-block" role="button">加入购物车</a></p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3 col-sm-4 col-xs-12">
                        <div className="thumbnail">
                            <img src="image/Persian.jpg"/>
                            <div className="caption">
                                <h3>波斯猫</h3>
                                <p className="details">波斯猫温文尔雅，反应灵敏，善解人意，少动好静，气质高贵华丽。叫声纤细动听，适应环境能力强。但夏天讨厌人抱，喜欢独自睡在地板上、高傲的一只猫。</p>
                                <p><a href="#" className="cat-btn btn btn-block" role="button">加入购物车</a></p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3 col-sm-4 col-xs-12">
                        <div className="thumbnail">
                            <img src="image/Turkish-Van.jpg"/>
                            <div className="caption">
                                <h3>土耳其梵猫</h3>
                                <p className="details">和一般猫不同的是，土耳其梵猫喜欢在水中嬉戏，当在温水中为其洗澡时，会像经常洗澡的幼儿一样，表现出极大的兴趣。它生性活泼，对人亲切。</p>
                                <p><a href="#" className="cat-btn btn btn-block" role="button">加入购物车</a></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
});

var AboutUs = React.createClass({
    render:function(){
        return (
            <div id="about-us" className="center-block">
                <div className="row">
                    <div className="col-md-12">
                        <div className="heading-title">
                            <h2>关于我们</h2>
                            <p>喜爱猫是一种天性，保护猫是一种选择</p>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-4 col-sm-4">
                        <div className="services">
                            <div className="photos">
                                <span className="glyphicon glyphicon-gift" aria-hidden="true"></span>
                            </div>
                            <h3>正品猫选购</h3>
                            <p>这里有来自世界各地的高颜值猫咪供您选购</p>
                        </div>
                    </div>
                    <div className="col-md-4 col-sm-4">
                        <div className="services">
                            <div className="photos">
                                <span className="glyphicon glyphicon-heart-empty" aria-hidden="true"></span>
                            </div>
                            <h3>爱心捐赠</h3>
                            <p>我们成立了“逗猫基金”用于爱猫公益事业</p>
                        </div>
                    </div>
                    <div className="col-md-4 col-sm-4">
                        <div className="services">
                            <div className="photos">
                                <span className="glyphicon glyphicon-home" aria-hidden="true"></span>
                            </div>
                            <h3>流浪猫之家</h3>
                            <p>位于北京的“逗猫流浪之家”为流浪猫提供救助工作</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
});

var Footer = React.createClass({
    render:function() {
        return (
            <div id="footer" className="center-block">
                <h3>逗猫会</h3>
                <p>电话：010-88888888</p>
                <p>地址：北京市爱猫区波斯路88号逗猫大厦</p>
            </div>
        )
    }
});

var Shopping = React.createClass({
    render:function() {
        return(
            <div>
                <Narbar />
                <HomeSlider />
                <HotCatThumbnail/>
                <AboutUs />
                <Footer />
            </div>
        )
    }
});

ReactDOM.render(<Shopping />,document.getElementsByTagName("BODY")[0]);