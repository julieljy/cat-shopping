/**
 * Created by julie on 3/3/16.
 */
var Narbar = React.createClass({
    render:function(){
        return (
            <nav id="cat-nav" className="navbar navbar-default">
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
                            <li><a href="#">欧美猫</a></li>
                            <li><a href="#">亚非猫</a></li>
                            <li><a href="#">流浪猫</a></li>
                        </ul>
                        <div className="logo visible-lg visible-md"></div>
                        <ul className="nav navbar-nav navbar-right">
                            <li><a href="#">猫粮</a></li>
                            <li><a href="#">领养</a></li>
                            <li><a href="#">公益</a></li>
                            <li><a href="#">购物车</a></li>
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
                <div className="image1 jumbotron">
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
var Thumbnail = React.createClass({
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
                               <h3>Thumbnail label</h3>
                               <p>...</p>
                               <p><a href="#" className="cat-btn btn btn-block" role="button">Button</a></p>
                           </div>
                       </div>
                   </div>
                   <div className="col-md-3 col-sm-4 col-xs-12">
                       <div className="thumbnail">
                           <img src="image/Scottish-Fold.jpg"/>
                           <div className="caption">
                               <h3>Thumbnail label</h3>
                               <p>...</p>
                               <p><a href="#" className="cat-btn btn btn-block" role="button">Button</a></p>
                           </div>
                       </div>
                   </div>
                   <div className="col-md-3 col-sm-4 col-xs-12">
                       <div className="thumbnail">
                           <img src="image/Scottish-Fold.jpg"/>
                           <div className="caption">
                               <h3>Thumbnail label</h3>
                               <p>...</p>
                               <p><a href="#" className="cat-btn btn btn-block" role="button">Button</a></p>
                           </div>
                       </div>
                   </div>
                   <div className="col-md-3 col-sm-4 col-xs-12">
                       <div className="thumbnail">
                           <img src="image/Scottish-Fold.jpg"/>
                           <div className="caption">
                               <h3>Thumbnail label</h3>
                               <p>...</p>
                               <p><a href="#" className="cat-btn btn btn-block" role="button">Button</a></p>
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
                            <p>。。。。</p>
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
                            <p>...</p>
                        </div>
                    </div>
                    <div className="col-md-4 col-sm-4">
                        <div className="services">
                            <div className="photos">
                                <span className="glyphicon glyphicon-heart-empty" aria-hidden="true"></span>
                            </div>
                            <h3>爱心捐赠</h3>
                            <p>...</p>
                        </div>
                    </div>
                    <div className="col-md-4 col-sm-4">
                        <div className="services">
                            <div className="photos">
                                <span className="glyphicon glyphicon-home" aria-hidden="true"></span>
                            </div>
                            <h3>流浪猫之家</h3>
                            <p>...</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
});
var Footer = React.createClass({
    render:function(){
        return (
            <div id="footer" className="center-block">
                <h3>逗猫会</h3>
                <p>......</p>
            </div>
        )
    }
});
var Cart = React.createClass({
    render:function(){
        return (
            <div id="cart" className="center-block">
                <div className="row">
                    <div className="col-md-8 col-sm-12">
                        <div className="cat-list">
                            <table className="table table-striped">
                                <caption><h3><span className="glyphicon glyphicon-shopping-cart" aria-hidden="true"></span>全部商品</h3></caption>
                                <tr>
                                    <th>商品图片</th>
                                    <th>详细信息</th>
                                    <th>单价(元)</th>
                                    <th>数量</th>
                                    <th>金额(元)</th>
                                    <th>操作</th>
                                </tr>
                                <tr>
                                    <td><img src="image/Scottish-Fold.jpg"/></td>
                                    <td>苏格兰折耳猫</td>
                                    <td>1000</td>
                                    <td>
                                        <button className="cat-btn btn btn-default"><span className="glyphicon glyphicon-plus add" aria-hidden="true"></span></button>
                                        <input type="text">
                                            <button className="cat-btn btn btn-default"><span className="glyphicon glyphicon-minus minus" aria-hidden="true"></span></button>
                                        </input>
                                    </td>
                                    <td>1000</td>
                                    <td><button className="cat-btn btn btn-default">删除</button></td>
                                </tr>
                            </table>
                        </div>
                        <div className="cat-list-footer">
                            <a className="btn btn-lg cat-btn" href="shopping.html" role="button">继续购物</a>
                            <button className="btn btn-lg cat-btn pull-right">刷新购物车</button>
                        </div>
                    </div>
                    <div className="col-md-4 col-sm-4">
                        <div className="cat-receipt">
                            <table className="table table-striped">
                                <caption><h3><span className="glyphicon glyphicon-yen" aria-hidden="true"></span>价格清单</h3></caption>
                                <tr>
                                    <td>商品合计</td>
                                    <td>￥1000</td>
                                </tr>
                                <tr>
                                    <td>优惠金额</td>
                                    <td>￥0</td>
                                </tr>
                                <tr>
                                    <td>付款金额</td>
                                    <td>￥1000</td>
                                </tr>
                            </table>
                            <div className="cat-pay">
                                <a className="btn btn-lg cat-btn " href="shopping.html" role="button">去付款</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
});
var Adopt = React.createClass({
    render:function(){
        return (
            <div id="adopt-info" className="center-block">
                <div className="row">
                    <div className="col-md-12">
                        <div className="heading-title">
                            <h2>流浪猫之家</h2>
                            <p>给流浪的猫咪一个家</p>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="adopt-detail center-block">
                            <div className="home-icon">
                                <span className="glyphicon glyphicon-home"></span>
                            </div>
                            <div className="adopt-photo">
                                <img src="image/adopt1.png" />
                            </div>
                            <div className="adopt-cat">
                                <p>......</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="adopt-detail center-block">
                            <div className="home-icon">
                                <span className="glyphicon glyphicon-home"></span>
                            </div>
                            <div className="adopt-photo">
                                <img src="image/adopt1.png" />
                            </div>
                            <div className="adopt-cat">
                                <p>......</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="adopt-detail center-block">
                            <div className="home-icon">
                                <span className="glyphicon glyphicon-home"></span>
                            </div>
                            <div className="adopt-photo">
                                <img src="image/adopt1.png" />
                            </div>
                            <div className="adopt-cat">
                                <p>......</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
});
var Charity = React.createClass({
    render:function(){
        return (
            <div id="charity-info" className="row center-block">
                <div className="col-md-4 col-sm-4">
                    <div className="wrap-charity">
                        <div className="photos">
                            <span className="glyphicon glyphicon-heart-empty" aria-hidden="true"></span>
                        </div>
                        <h3>选择公益项目</h3>
                        <div className="photos">
                            <span className="glyphicon glyphicon-heart-empty" aria-hidden="true"></span>
                        </div>
                        <h3>填写基本信息</h3>
                        <div className="photos">
                            <span className="glyphicon glyphicon-heart-empty" aria-hidden="true"></span>
                        </div>
                        <h3>等待逗猫联系</h3>
                    </div>
                </div>
                <div className="col-md-8 col-sm-8">
                    <div className="wrap-charity center-block">
                        <h3>STEP1 选择您要参加的公益项目</h3>
                        <div className="wrap-step1 center-block">
                            <div className="row">
                                <div className="col-md-4 col-sm-4">
                                    <div className="wrap-info">
                                        <span className="glyphicon glyphicon-plus"></span>
                                        <p>流浪猫救助</p>
                                    </div>
                                </div>
                                <div className="col-md-4 col-sm-4">
                                    <div className="wrap-info">
                                        <span className="glyphicon glyphicon-send"></span>
                                        <p>猫用品捐赠</p>
                                    </div>
                                </div>
                                <div className="col-md-4 col-sm-4">
                                    <div className="wrap-info">
                                        <span className="glyphicon glyphicon-yen"></span>
                                        <p>逗猫基金捐款</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <h3>STEP2 填写您的基本信息</h3>
                        <div className="wrap-step2 center-block">
                            <div className="input-group">
                                <span className="input-group-addon">真实姓名</span>
                                <input type="text" className="form-control" placeholder="请输入您的真实姓名" aria-describedby="basic-addon1"/>
                            </div>
                            <div className="input-group">
                                <span className="input-group-addon">电子邮箱</span>
                                <input type="text" className="form-control" placeholder="请输入您的电子邮箱" aria-describedby="basic-addon1"/>
                            </div>
                            <div className="input-group">
                                <span className="input-group-addon">联系电话</span>
                                <input type="text" className="form-control" placeholder="请输入您的联系电话" aria-describedby="basic-addon1"/>
                            </div>
                            <div className="submit-button center-block">
                                <button className="cat-btn btn btn-block">提交</button>
                            </div>
                        </div>
                        <h3>STEP3 查收逗猫会给您发送的邮件</h3>
                        <div className="wrap-step3 center-block">
                            <p>请查收逗猫会给您发送的邮件，按照邮件内容进行下一步操作。</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
});
var StyleGuide = React.createClass({
    render:function(){
        return (
            <div>
                <Narbar/>
                <HomeSlider/>
                <Thumbnail/>
                <AboutUs/>
                <Footer/>
                <Cart/>
                <Adopt/>
                <Charity/>
            </div>
        )
    }
});


ReactDOM.render(
    <StyleGuide/>,
    document.getElementsByTagName("BODY")[0]
);
