/* 
create by Xiao Zhewei https://github.com/xiaozhewei/weixin.d.ts
*/

declare module wx {
    interface RequestOptions {

    	/**
		* 开发者服务器接口地址
		**/
        url: string;

    	/**
		* 请求的参数
		**/
        data?: string | any;

    	/**
		* 设置请求的header , header中不能设置Referer
		**/
        header?: { [key: string]: any };

    	/**
		* 默认为GET，有效值：OPTIONS,GET,HEAD,POST,PUT,DELETE,TRACE,CONNECT
		**/
        method?: 'OPTIONS' | 'GET' | 'HEAD | POST' | 'PUT' | 'DELETE' | 'TRACE' | 'CONNECT';

    	/**
		* 收到开发者服务成功返回的回调函数，res = {data:"开发者服务器返回的内容"}
		**/
        success?: (res: {data: string}) => void;

    	/**
		* 接口调用失败的回调函数
		**/
        fail?: (res: any) => void;

    	/**
		* 接口调用结束的回调函数（调用成功、失败都会执行）
		**/
        complete?: (res: any) => void;
    }

    interface UploadOptions {

        /**
		* 开发者服务器url
		**/
        url: string;

        /**
		* 要上传文件资源的路径
		**/
        filePath: string;

        /**
		* 文件对应的key , 开发者在服务器端通过这个key可以获取到文件二进制内容
		**/
        name: string;
        
        /**
		* HTTP 请求 Header
		**/
        header?: { [key: string]: any };

        /**
		* HTTP 请求中其他额外的form data
		**/
        formData?: { [key: string]: any };

        /**
		* 接口调用成功的回调函数
		**/
        success?: (res: any) => void;

        /**
		* 接口调用失败的回调函数
		**/
        fail?: (res: any) => void;

        /**
		* 接口调用结束的回调函数（调用成功、失败都会执行）
		**/
        complete?: (res: any) => void;
    }

    interface DownloadOptions {

        /**
		* 下载资源的 url
		**/
        url: string;

        /**
		* 下载资源的类型，用于客户端识别处理，有效值：image/audio/video
		**/
        type?: 'image' | 'audio' | 'video';
        
        /**
		* HTTP 请求 Header
		**/
        header?: { [key: string]: any };

        /**
		* 下载成功后以 tempFilePath 的形式传给页面，res={tempFilePath:"文件的临时路径"}
		**/
        success?: (res: {tempFilePath: string}) => void;

        /**
		* 接口调用失败的回调函数
		**/
        fail?: (res: any) => void;

        /**
		* 接口调用结束的回调函数（调用成功、失败都会执行）
		**/
        complete?: (res: any) => void;
    }

    interface ConnectSocketOptions {

        /**
		* 开发者服务器接口地址，必须是HTTPS协议，且域名必须是后台配置的合法域名
		**/
        url: string;

        /**
		* 请求的数据
		**/
        data?: any;

        /**
		* HTTP 请求 Header
		**/
        header?: { [key: string]: any };

    	/**
		* 默认为GET，有效值：OPTIONS,GET,HEAD,POST,PUT,DELETE,TRACE,CONNECT
		**/
        method?: 'OPTIONS' | 'GET' | 'HEAD | POST' | 'PUT' | 'DELETE' | 'TRACE' | 'CONNECT';
        
        /**
		* 接口调用成功的回调函数
		**/
        success?: (res: any) => void;

        /**
		* 接口调用失败的回调函数
		**/
        fail?: (res: any) => void;

        /**
		* 接口调用结束的回调函数（调用成功、失败都会执行）
		**/
        complete?: (res: any) => void;
    }

    interface ChooseImageOptions {

        /**
		* 最多可以选择的图片张数，默认9
		**/
        count?: number;

        /**
		* "original"原图，"compressed"压缩图，默认二者都有
		**/
        sizeType?: ('original' | 'compressed')[];

        /**
		* "album"从相册选图，"camera"使用相机，默认二者都由
		**/
        sourceType?: ('album' | 'camera')[];

        /**
		* 最多可以选择的图片张数，默认9
        * debug
		**/
        success: (res: {tempFilePaths: string[]}) => void;

        /**
		* 接口调用失败的回调函数
		**/
        fail?: (res: any) => void;

        /**
		* 接口调用结束的回调函数（调用成功、失败都会执行）
		**/
        complete?: (res: any) => void;
    }

    interface PreviewImageOptions {

        /**
		* 当前显示图片的链接，不填则默认为urls的第一张
		**/
        current?: string;

        /**
		* 需要预览的图片链接列表
		**/
        urls: string[];

        /**
		* 最多可以选择的图片张数，默认9
        * debug
		**/
        success?: (res: any) => void;

        /**
		* 接口调用失败的回调函数
		**/
        fail?: (res: any) => void;

        /**
		* 接口调用结束的回调函数（调用成功、失败都会执行）
		**/
        complete?: (res: any) => void;
    }

    interface StartRecordOptions {

        /**
        * 录音成功后调用，返回录音文件的临时文件路径，res={tempFilePath:"录音文件的临时路径"}
		**/
        success?: (res: {tempFilePath: string}) => void;

        /**
		* 接口调用失败的回调函数
		**/
        fail?: (res: any) => void;

        /**
		* 接口调用结束的回调函数（调用成功、失败都会执行）
		**/
        complete?: (res: any) => void;
    }

    interface PlayVoiceOptions {

        /**
		* 需要播放的语音文件的文件路径
		**/
        filePath: string;

        /**
        * 接口调用成功的回调函数
		**/
        success?: (res: any) => void;

        /**
		* 接口调用失败的回调函数
		**/
        fail?: (res: any) => void;

        /**
		* 接口调用结束的回调函数（调用成功、失败都会执行）
		**/
        complete?: (res: any) => void;
    }

    interface GetBackgroundAudioPlayerStateResult {

        /**
		* 选定音频的长度（单位：s），只有在当前有音乐播放时返回
		**/
        duration: number;
            
        /**
		* 选定音频的播放位置（单位：s），只有在当前有音乐播放时返回
		**/
        currentPosition: number;
            
        /**
		* 播放状态（2：没有音乐在播放，1：播放中，0：暂停中）
		**/
        status: number;
            
        /**
		* 音频的下载进度（整数，80 代表 80%），只有在当前有音乐播放时返回
		**/
        downloadPercent: number;

        /**
		* 歌曲数据链接，只有在当前有音乐播放时返回
		**/
        dataUrl: string;
    }

    interface GetBackgroundAudioPlayerStateOptions {
        /**
        * 接口调用成功的回调函数
		**/
        success: (res: GetBackgroundAudioPlayerStateResult) => void;
    }

    interface PlayBackgroundAudioOptions {

        /**
        * 音乐链接
		**/
        dataUrl: string;

        /**
        * 音乐标题
		**/
        title?: string;

        /**
        * 封面URL
		**/
        coverImgUrl?: string;
    }

    interface SeekBackgroundAudioOptions {

        /**
        * 音乐位置，单位：秒
		**/
        position: number;
    }

    interface SaveFileOptions {
        
        /**
        * 需要保存的文件的临时路径
		**/
        tempFilePath: string;
        
        /**
        * 返回文件的保存路径，res={savedFilePath:"文件的保存路径"}
		**/
        success?: (res: {savedFilePath: string}) => void;
        
        /**
        * 接口调用失败的回调函数
		**/
        fail?: (res: any) => void;
        
        /**
        * 接口调用结束的回调函数（调用成功、失败都会执行）
		**/
        complete?: (res: any) => void;
    }

    interface ChooseVideoResult {
        
        /**
        * 选定视频的临时文件路径
		**/
        tempFilePath: string;
        
        /**
        * 选定视频的时间长度
		**/
        duration: number;
        
        /**
        * 选定视频的数据量大小
		**/
        size: number;
        
        /**
        * 返回选定视频的长
		**/
        height: number;
        
        /**
        * 返回选定视频的宽
		**/
        width: number;
    }

    interface ChooseVideoOptions {
        
        /**
        * "album"从相册选视频，"camera"使用相机拍摄，默认为：['album', 'camera']
		**/
        sourceType?: ('album' | 'camera')[];
        
        /**
        * 拍摄视频最长拍摄时间，单位秒。最长支持60秒
		**/
        maxDuration?: number;
        
        /**
        * 前置或者后置摄像头，默认为前后都有，即：['front', 'back']
		**/
        camera?: ('front' | 'back')[];

        /**
        * 接口调用成功，返回视频文件的临时文件路径，res={tempFilePath:"视频文件的临时路径"}
		**/
        success?: (res: ChooseVideoResult) => void;
        
        /**
        * 接口调用失败的回调函数
		**/
        fail?: (res: any) => void;
        
        /**
        * 接口调用结束的回调函数（调用成功、失败都会执行）
		**/
        complete?: (res: any) => void;
    }

    interface SetStorageOptions {

        /**
        * 本地缓存中的指定的key
		**/
        key: string;

        /**
        * 需要存储的内容
		**/
        data: string | any;
    }

    interface GetStorageOptions {

        /**
        * 本地缓存中的指定的key
		**/
        key: string;

        /**
        * 接口调用的回调函数,res={data:"key对应的内容"}
		**/
        success: (res: {data: string | any}) => void;
    }

    interface GetLocationOptions {

        /**
        * 默认为"wgs84"返回gps坐标，"gcj02"返回可用于wx.openLocation的坐标
		**/
        type?: 'wgs84' | 'gcj02';

        /**
        * 成功获取地理位置的回调
		**/
        success: (res: GetLocationResult) => void;
        
        /**
        * 接口调用失败的回调函数
		**/
        fail?: (res: any) => void;
        
        /**
        * 接口调用结束的回调函数（调用成功、失败都会执行）
		**/
        complete?: (res: any) => void;
    }

    interface GetLocationResult {
        
        /**
        * 纬度，浮点数，范围为-90~90，负数表示南纬
		**/
        latitude: string;
        
        /**
        * 经度，浮点数，范围为-180~180，负数表示西经
		**/
        longitude: string;
        
        /**
        * 速度，浮点数，单位m/s
		**/
        speed: string;
        
        /**
        * 位置的精确度
		**/
        accuracy: string;
        
        /**
        * Function
		**/
        success: (res: any) => void;
        
        /**
        * Function
		**/
        fail?: (res: any) => void;
        
        /**
        * Function
		**/
        complete?: (res: any) => void;
    }

    interface OpenLocationOptions {

        /**
        * 纬度，范围为-90~90，负数表示南纬
		**/
        latitude: number;
        
        /**
        * 经度，范围为-180~180，负数表示西经
		**/
        longitude: number;
        
        /**
        * 缩放比例，范围1~28，默认为28
		**/
        scale?: number;
        
        /**
        * 在查看位置界面底部显示的超链接,可点击跳转
		**/
        infoUrl?: string;
            
        /**
        * 位置名
		**/
        name?: string;
            
        /**
        * 地址的详细说明
		**/
        address?: string;
            
        /**
        * 接口调用成功的回调函数
		**/
        success: (res: any) => void;
        
        /**
        * 接口调用失败的回调函数
		**/
        fail?: (res: any) => void;
        
        /**
        * 接口调用结束的回调函数（调用成功、失败都会执行）
		**/
        complete?: (res: any) => void;
    }

    interface GetNetworkTypeOptions {

        /**
        * 返回网络类型networkType
		**/
        success: (res: {networkType: '2g' | '3g' | '4g' | 'wifi'}) => void;
        
        /**
        * 接口调用失败的回调函数
		**/
        fail?: (res: any) => void;
        
        /**
        * 接口调用结束的回调函数（调用成功、失败都会执行）
		**/
        complete?: (res: any) => void;
    }

    interface GetSystemInfoResult {
        /**
        * 手机型号
		**/
        model: string;
        
        /**
        * 设备像素比
		**/
        pixelRatio: number;
        
        /**
        * 窗口宽度
		**/
        windowWidth: number;
        
        /**
        * 窗口高度
		**/
        windowHeight: number;
        
        /**
        * 微信设置的语言
		**/
        language: string;
        
        /**
        * 微信版本号
		**/
        version: any; //?
    }

    interface GetSystemInfoOptions {

        /**
        * 接口调用成功的回调函数
		**/
        success: (res: GetSystemInfoResult) => void;
    }

    interface OnAccelerometerChangeResult {
        
        /**
        * X 轴
		**/
        x: number;
        
        /**
        * Y 轴
		**/
        y: number;
        
        /**
        * Z 轴
		**/
        z: number;
    }

    interface OnCompassChangeResult {

        /**
        * 面对的方向度数
		**/
        direction: number;
    }

    interface SetNavigationBarTitleOptions {
        
        /**
        * 页面标题
		**/
        title?: string;

        /**
        * 接口调用成功的回调函数
		**/
        success?: (res: any) => void;
        
        /**
        * 接口调用失败的回调函数
		**/
        fail?: (res: any) => void;
        
        /**
        * 接口调用结束的回调函数（调用成功、失败都会执行）
		**/
        complete?: (res: any) => void;
    }

    interface NavigateToOptions {

        /**
        * 需要跳转的应用内页面的路径
		**/
        url: string;

        /**
        * 接口调用成功的回调函数
		**/
        success?: (res: any) => void;
        
        /**
        * 接口调用失败的回调函数
		**/
        fail?: (res: any) => void;
        
        /**
        * 接口调用结束的回调函数（调用成功、失败都会执行）
		**/
        complete?: (res: any) => void;
    }

    interface RedirectToOptions {

        /**
        * 需要跳转的应用内页面的路径
		**/
        url: string;

        /**
        * 接口调用成功的回调函数
		**/
        success?: (res: any) => void;
        
        /**
        * 接口调用失败的回调函数
		**/
        fail?: (res: any) => void;
        
        /**
        * 接口调用结束的回调函数（调用成功、失败都会执行）
		**/
        complete?: (res: any) => void;
    }

    interface CreateAnimationOptions {
        
        /**
        * 动画持续时间，单位ms，默认值 400
		**/
        duration?: number;

        /**
        * 定义动画的效果，默认值"linear"，有效值："linear","ease","ease-in","ease-in-out","ease-out","step-start","step-end"
		**/
        timingFunction?: 'linear' | 'ease' | 'ease-in'| 'ease-in-out' | 'ease-out' | 'step-start' | 'step-end';

        /**
        * 动画持续时间，单位 ms，默认值 0
		**/
        delay?: number;

        /**
        * 设置transform-origin，默认为"50% 50% 0"
		**/
        transformOrigin?: string;
    }

    interface Animation {
    
        /**
        * 透明度，参数范围 0~1
		**/
        opacity(value: number): Animation;
        
        /**
        * 颜色值
        * @param color ??
		**/
        backgroundColor(color: string): Animation;
        
        /**
        * 长度值，如果传入 Number 则默认使用 px，可传入其他自定义单位的长度值
		**/
        width(length: number): Animation;
        
        /**
        * 长度值，如果传入 Number 则默认使用 px，可传入其他自定义单位的长度值
		**/
        height(length: number): Animation;
        
        /**
        * 长度值，如果传入 Number 则默认使用 px，可传入其他自定义单位的长度值
		**/
        top(length: number): Animation;
        
        /**
        * 长度值，如果传入 Number 则默认使用 px，可传入其他自定义单位的长度值
		**/
        left(length: number): Animation;
        
        /**
        * 长度值，如果传入 Number 则默认使用 px，可传入其他自定义单位的长度值
		**/
        bottom(length: number): Animation;
        
        /**
        * 长度值，如果传入 Number 则默认使用 px，可传入其他自定义单位的长度值
		**/
        right(color: number): Animation;

        /**
        * deg的范围-180~180，从原点顺时针旋转一个deg角度
		**/
        rotate(deg: number): Animation;
        
        /**
        * deg的范围-180~180，在X轴旋转一个deg角度
		**/
        rotateX(deg: number): Animation;
        
        /**
        * deg的范围-180~180，在Y轴旋转一个deg角度
		**/
        rotateY(deg: number): Animation;
        
        /**
        * deg的范围-180~180，在Z轴旋转一个deg角度
		**/
        rotateZ(deg: number): Animation;
        
        /**
        * 同transform-function rotate3d
		**/
        rotate3d(x: number, y: number, z: number, deg: number): Animation;

        /**
        * 一个参数时，表示在X轴偏移tx，单位px；两个参数时，表示在X轴偏移tx，在Y轴偏移ty，单位px。
		**/
        translate(tx: number, ty?: number): Animation;
        
        /**
        * 在X轴偏移tx，单位px
		**/
        translateX(tx: number): Animation;
        
        /**
        * 在Y轴偏移tx，单位px
		**/
        translateY(ty: number): Animation;
        
        /**
        * 在Z轴偏移tx，单位px
		**/
        translateZ(tz: number): Animation;
        
        /**
        * 	在X轴偏移tx，在Y轴偏移ty，在Z轴偏移tz，单位px
		**/
        translate3d(tx: number, ty: number, tz: number): Animation;

        /**
        * 参数范围-180~180；一个参数时，Y轴坐标不变，X轴坐标延顺时针倾斜ax度；两个参数时，分别在X轴倾斜ax度，在Y轴倾斜ay度
		**/
        skew(ax: number, ay?: number): Animation;
        
        /**
        * 参数范围-180~180；Y轴坐标不变，X轴坐标延顺时针倾斜ax度
		**/
        skewX(ax: number): Animation;
        
        /**
        * 参数范围-180~180；X轴坐标不变，Y轴坐标延顺时针倾斜ay度
		**/
        skewY(ay: number): Animation;

        /**
        * 同transform-function matrix
		**/
        matrix(a: number, b: number, c: number, d: number, tx: number, ty: number): Animation;

        /**
        * 同transform-function matrix3d
		**/
        matrix3d(a1: number, b1: number, c1: number, d1: number, a2: number, b2: number, c2: number, d2: number, a3: number, b3: number, cs: number, d3: number, a4: number, b4: number, c4: number, d4: number): Animation;

        /**
        * export方法导出动画数据传递给组件的animation属性 注意: export 方法每次调用后会清掉之前的动画操作
		**/
        export(): any;

        /**
        * 调用动画操作方法后要调用 step() 来表示一组动画完成，可以在一组动画中调用任意多个动画方法，一组动画中的所有动画会同时开始，一组动画完成后才会进行下一组动画。step 可以传入一个跟 wx.createAnimation() 一样的配置参数用于指定当前组动画的配置
        * return type ??
		**/
        step(options: CreateAnimationOptions): void;
    }

    interface Context {
        
        /**
        * 获取当前context上存储的绘图动作
		**/
        getActions() : any;
        
        /**
        * 清空当前的存储绘图动作
		**/
        clearActions();
        
        /**
        * 在调用scale()方法后，之后创建的路径其横纵坐标会被缩放。多次调用scale，倍数会相乘。
        * @param scaleWidth 横坐标缩放的倍数, 1=100%，0.5=50%，2=200%，依次类推
        * @param scaleHeight 纵坐标轴缩放的倍数 1=100%，0.5=50%，2=200%，依次类推
		**/
        scale(scaleWidth: number, scaleHeight: number);
        
        /**
        * 以原点为中心，原点可以用translate方法修改。顺时针旋转当前坐标轴。多次调用rotate，旋转的角度会叠加
        * @param rad=degrees * Math.PI/180；degrees范围为0~360	旋转角度，以弧度计
		**/
        rotate(rad: number);
        
        /**
        * 对当前坐标系的原点(0, 0)进行变换，默认的坐标系原点为页面左上角
        * @param x 水平坐标平移量
        * @param y 竖直坐标平移量
		**/
        translate(x: number, y: number);
        
        /**
        * 保存当前坐标轴的缩放、旋转、平移信息
		**/
        save();
        
        /**
        * 恢复之前保存过的坐标轴的缩放、旋转、平移信息
		**/
        restore();
        
        /**
        * 清除画布上在该矩形区域内的内容
        * @param x 矩形区域左上角的x坐标
        * @param y 矩形区域左上角的y坐标
        * @param width 矩形区域的宽度
        * @param height 矩形区域的高度
		**/
        clearRect(x: number, y: number, width: number, height: number);
        
        /**
        * 在画布上绘制被填充的文本
        * @param text 在画布上输出的文本
        * @param x 绘制文本的左上角x坐标位置
        * @param y 绘制文本的左上角y坐标位置
		**/
        fillText(text: string, x: number, y: number);
        
        /**
        * 在画布上绘制图像, 图像保持原始尺寸
        * @param imageResource 所要绘制的图片资源, 通过chooseImage得到一个文件路径或者一个项目目录内的图片
        * @param x 图像左上角的x坐标
        * @param y 图像左上角的y坐标
		**/
        drawImage(imageResource: string, x: number, y: number);
        
        /**
        * 对当前路径进行填充
		**/
        fill();
        
        /**
        * 对当前路径进行描边
		**/
        stroke();
        
        /**
        * 开始创建一个路径，需要调用fill或者stroke才会使用路径进行填充或描边。同一个路径内的多次setFillStyle、setStrokeStyle、setLineWidth等设置，以最后一次设置为准。
		**/
        beginPath();
        
        /**
        * 关闭一个路径
		**/
        closePath();
        
        /**
        * 把路径移动到画布中的指定点，但不创建线条
        * @param x 目标位置的x坐标
        * @param y 目标位置的y坐标
		**/
        moveTo(x: number, y: number);
        
        /**
        * 在当前位置添加一个新点，然后在画布中创建从该点到最后指定点的路径
        * @param x 目标位置的x坐标
        * @param y 目标位置的y坐标
		**/
        lineTo(x: number, y: number);
        
        /**
        * 添加一个矩形路径到当前路径
        * @param x 矩形路径左上角的x坐标
        * @param y 矩形路径左上角的y坐标
        * @param width 矩形路径的宽度
        * @param height 矩形路径的高度
		**/
        rect(x: number, y: number, width: number, height: number);
        
        /**
        * 添加一个弧形路径到当前路径，顺时针绘制
        * @param x 矩形路径左上角的x坐标
        * @param y 矩形路径左上角的y坐标
        * @param radius 矩形路径的宽度
        * @param startAngle 起始弧度, 范围0到2pi
        * @param sweepAngle 从起始弧度开始，扫过的弧度, 范围0到2pi
		**/
        arc(x: number, y: number, radius: number, startAngle: number, sweepAngle: number);
        
        /**
        * 创建二次方贝塞尔曲线
        * @param cpx 贝塞尔控制点的x坐标
        * @param cpy 贝塞尔控制点的y坐标
        * @param x 结束点的x坐标
        * @param y 结束点的y坐标
		**/
        quadraticCurveTo(cpx: number, cpy: number, x: number, y: number);
        
        /**
        * 创建三次方贝塞尔曲线
        * @param cp1x 第一个贝塞尔控制点的 x 坐标
        * @param cp1y 第一个贝塞尔控制点的 y 坐标
        * @param cp2x 第二个贝塞尔控制点的 x 坐标
        * @param cp2y 第二个贝塞尔控制点的 y 坐标
        * @param x 结束点的x坐标
        * @param y 结束点的y坐标
		**/
        bezierCurveTo(cp1x: number, cp1y: number, cp2x: number, cp2y: number, x: number, y: number);
        
        /**
        * 设置填充样式
        * @param color 设置为填充样式的颜色, 为'rgb(255, 0, 0)'或'rgba(255, 0, 0, 0.6)'或'#ff0000'格式的颜色字符串
		**/
        setFillStyle(color: string);
        
        /**
        * 设置线条样式
        * @param color 设置为线条样式的颜色, 为'rgb(255, 0, 0)'或'rgba(255, 0, 0, 0.6)'或'#ff0000'格式的颜色字符串
		**/
        setStrokeStyle(color: string);
        
        /**
        * 设置阴影样式
        * @param offsetX 阴影相对于形状在水平方向的偏移
        * @param offsetY 阴影相对于形状在竖直方向的偏移
        * @param blur 阴影的模糊级别，数值越大越模糊, 范围：0~100
        * @param color 阴影的颜色，为'rgb(255, 0, 0)'或'rgba(255, 0, 0, 0.6)'或'#ff0000'格式的颜色字符串
		**/
        setShadow(offsetX: number, offsetY: number, blur: number, color: string);
        
        /**
        * 设置字体大小
        * @param fontSize 字体的字号
		**/
        setFontSize(fontSize: number);
        
        /**
        * 设置线条端点的样式
        * @param lineCap 线条的结束端点样式
		**/
        setLineCap(lineCap: 'butt' | 'round' | 'square');
        
        /**
        * 设置两条线相交时，所创建的拐角类型
        * @param lineJoin 两条线相交时，所创建的拐角类型
		**/
        setLineJoin(lineJoin: 'bevel' | 'round' | 'miter');
        
        /**
        * 设置线条宽度
        * @param lineWidth 线条的宽度
		**/
        setLineWidth(lineWidth: number);
        
        /**
        * 设置最大斜接长度，斜接长度指的是在两条线交汇处内角和外角之间的距离。 当setLineJoin为'miter'时才有效。超过最大倾斜长度的，连接处将以lineJoin为bevel来显示
        * @param miterLimit 最大斜接长度
		**/
        setMiterLimit(miterLimit: number);
    }

    interface LoginOptions {
        
        /**
        * 接口调用成功的回调函数
		**/
        success: (res: loginResult) => void;
        
        /**
        * 接口调用失败的回调函数
		**/
        fail?: (res: any) => void;
        
        /**
        * 接口调用结束的回调函数（调用成功、失败都会执行）
		**/
        complete?: (res: any) => void;   
    }

    interface loginResult {

        /**
        * 调用结果
		**/
        errMsg: string;

        /**
        * 用户允许登录后，回调内容会带上code（有效期五分钟），开发者需要将code发送到开发者服务器后台，使用code换取session_key api，将code换成openid和session_key
		**/
        code: string;
    }

    /**
    * code换取session_key, 这是一个HTTP接口，开发者服务器使用登录凭证code获取session_key和openid。其中session_key是对用户数据进行加密签名的密钥。为了自身应用安全，开发者不应该允许session_key在网络上传输。
    * https://api.weixin.qq.com/sns/jscode2session?appid=APPID&secret=SECRET&js_code=JSCODE&grant_type=authorization_code 
    **/
    interface GetSessionOptions {
        
        /**
        * 公众号唯一标识
		**/
        appid: string;
        
        /**
        * 公众号的app secret
		**/
        secret: string;
        
        /**
        * 登录时获取的code
		**/
        js_code: string;
        
        /**
        * 填写为authorization_code
		**/
        grant_type: string;
    }

    interface GetSessionResult {
        
        /**
        * 用户唯一标识
		**/
        openid: string;
        
        /**
        * 会话密钥
		**/
        session_key: string;
        
        /**
        * 会话有效期, 以秒为单位, 例如2592000代表会话有效期为30天
		**/
        expires_in: number;

        /**
        * 错误时返回的错误号
		**/
        errcode: number;

        /**
        * 错误时返回的错误消息
		**/
        errmsg: string;
    }

    interface UserInfo {

        /**
        * 错误时返回的错误消息
		**/
        openId: string;
        
        /**
        * 错误时返回的错误消息
		**/
        nickName: string;
        
        /**
        * 错误时返回的错误消息
		**/
        gender: number;
        
        /**
        * 错误时返回的错误消息
		**/
        city: string;
        
        /**
        * 错误时返回的错误消息
		**/
        province: string;
        
        /**
        * 错误时返回的错误消息
		**/
        country: string;
        
        /**
        * 错误时返回的错误消息
		**/
        avatarUrl: string;
        
        /**
        * 错误时返回的错误消息
		**/
        unionId: string;
    }

    interface GetUserInfoResult {
        
        /**
        * 错误时返回的错误消息
		**/
        userInfo: UserInfo;
        
        /**
        * 错误时返回的错误消息
		**/
        rawData: string;
        
        /**
        * 错误时返回的错误消息
		**/
        signature: string;
        
        /**
        * 错误时返回的错误消息
		**/
        encryptData: string;
    }

    interface GetUserInfoOptions {

        /**
        * 接口调用成功的回调函数
		**/
        success: (res: GetUserInfoResult) => void;
    }

    interface RequestPaymentOptions {
        
        /**
        * 时间戳从1970年1月1日00:00:00至今的秒数,即当前的时间
		**/
        timeStamp: number;
        
        /**
        * 随机字符串，长度为32个字符以下
		**/
        nonceStr: string;
        
        /**
        * 统一下单接口返回的prepay_id参数值，提交格式如：prepay_id=*
		**/
        package: string;
        
        /**
        * 签名算法，暂支持MD5
		**/
        signType: 'MD5';
        
        /**
        * 签名,具体签名方案参见微信公众号支付帮助文档;
        * https://pay.weixin.qq.com/wiki/doc/api/jsapi.php?chapter=4_3&t=1474537654457
		**/
        paySign: string;

        /**
        * 接口调用成功的回调函数
		**/
        success?: (res: any) => void;
        
        /**
        * 接口调用失败的回调函数
		**/
        fail?: (res: any) => void;
        
        /**
        * 接口调用结束的回调函数（调用成功、失败都会执行）
		**/
        complete?: (res: any) => void;
    }
}

interface WeixinStatic {

	/**
     * wx.request发起的是https请求。一个微信小程序，同时只能有5个网络请求连接
	**/
    request(options: wx.RequestOptions);

    /**
     * ​将本地资源上传到开发者服务器。如页面通过 wx.chooseImage 等接口获取到一个本地资源的临时文件路径后，可通过此接口将本地资源上传到指定服务器。客户端发起一个HTTPS POST请求，其中 Content-Type 为 multipart/form-data
	**/
    uploadFile(options: wx.UploadOptions);

    /**
     * 下载文件资源到本地。客户端直接发起一个HTTP GET请求，把下载到的资源根据 type 进行处理，并返回文件的本地临时路径。
	**/
    downloadFile(options: wx.UploadOptions);

    /**
     * 创建一个 WebSocket 连接；一个微信小程序同时只能有一个WebSocket连接，如果当前已存在一个WebSocket连接，会自动关闭该连接，并重新创建一个WebSocket连接
	**/
    connectSocket(options: wx.ConnectSocketOptions);

	/**
     * ​监听WebSocket连接打开事件
	**/
    onSocketOpen(callback: (res: any) => void);

	/**
     * 监听WebSocket错误
	**/
    onSocketError(callback: (res: any) => void);

	/**
     * 通过WebSocket连接发送数据，需要先wx.connectSocket，并在wx.onSocketOpen回调之后才能发送
     * @param data 需要发送的内容
	**/
    sendSocketMessage(message: {data: string});

	/**
     * ​监听WebSocket接受到服务器的消息事件
     * @param data 服务器返回的消息
	**/
    onSocketMessage(callback: (res: {data: string}) => void);

	/**
     * 关闭WebSocket连接
	**/
    closeSocket();

	/**
     * ​监听WebSocket关闭
	**/
    onSocketClose(callback: (res: any) => void);

	/**
     * 从本地相册选择图片或使用相机拍照
	**/
    chooseImage(options: wx.ChooseImageOptions);

	/**
     * 预览图片
	**/
    previewImage(options: wx.PreviewImageOptions);

	/**
     * 开始录音。当主动调用wx.stopRecord，或者录音超过1分钟时自动结束录音，返回录音文件的临时文件路径
	**/
    startRecord(options: wx.StartRecordOptions);

	/**
     * 主动调用停止录音。
	**/
    stopRecord();

	/**
     * ​开始播放语音，同时只允许一个语音文件正在播放，如果前一个语音文件还没播放完，将中断前一个语音播放
	**/
    playVoice(options: wx.PlayVoiceOptions);

	/**
     * ​暂停正在播放的语音。再次调用wx.playVoice播放同一个文件时，会从暂停处开始播放。如果想从头开始播放，需要先调用wx.stopVoice
	**/
    pauseVoice();

	/**
     * 结束播放语音
	**/
    stopVoice();

	/**
     * 获取音乐播放状态
	**/
    getBackgroundAudioPlayerState(options: wx.GetBackgroundAudioPlayerStateOptions);

    /**
     * 播放音乐，同时只能有一首音乐正在播放。
	**/
    playBackgroundAudio(options: wx.PlayBackgroundAudioOptions);

    /**
     * 暂停播放音乐
	**/
    pauseBackgroundAudio();

    /**
     * 控制音乐播放进度
	**/
    seekBackgroundAudio(options: wx.SeekBackgroundAudioOptions);

    /**
     * 停止播放音乐
	**/
    stopBackgroundAudio();

    /**
     * 监听音乐播放
	**/
    onBackgroundAudioPlay(callback: (res: any) => void);

    /**
     * 监听音乐暂停
	**/
    onBackgroundAudioPause(callback: (res: any) => void);

    /**
     * 监听音乐停止
	**/
    onBackgroundAudioStop(callback: (res: any) => void);

    /**
     * ​保存文件到本地
	**/
    saveFile(options: wx.SaveFileOptions);

    /**
     * ​拍摄视频或从手机相册中选视频，返回视频的临时文件路径
	**/
    chooseVideo(options: wx.ChooseVideoOptions);
    
    /**
     * 将数据存储在本地缓存中指定的key中，会覆盖掉原来该key对应的内容，这是一个异步接口
	**/
    setStorage(options: wx.SetStorageOptions);
    
    /**
     * ​将DATA存储在本地缓存中指定的KEY中，会覆盖掉原来该KEY对应的内容，这是一个同步接口
     * @param key 本地缓存中的指定的key
     * @param data 需要存储的内容
	**/
    setStorageSync(key: string, data: string | any);
    
    /**
     * ​从本地缓存中异步获取指定key对应的内容
	**/
    getStorage(options: wx.GetStorageOptions);
    
    /**
     * 从本地缓存中同步获取指定key对应的内容
	**/
    getStorageSync(key: string): string | any;
    
    /**
     * 清理本地数据缓存
	**/
    clearStorage();
    
    /**
     * 同步清理本地数据缓存
	**/
    clearStorageSync();

    /**
     * 获取当前的地理位置、速度
	**/
    getLocation(options: wx.GetLocationOptions);

    /**
     * ​使用微信内置地图查看位置
	**/
    openLocation(options: wx.OpenLocationOptions);

    /**
     * 获取网络类型
	**/
    getNetworkType(options: wx.GetNetworkTypeOptions);

    /**
     * 获取系统信息
	**/
    getSystemInfo(options: wx.GetSystemInfoOptions);

    /**
     * 监听重力感应数据，频率：50次/秒
	**/
    onAccelerometerChange(res: wx.OnAccelerometerChangeResult);

    /**
     * 监听罗盘数据，频率：50次/秒
	**/
    onCompassChange(res: wx.OnCompassChangeResult);

    /**
     * 动态设置当前页面的标题
	**/
    setNavigationBarTitle(options: wx.SetNavigationBarTitleOptions);

    /**
     * 在当前页面显示导航条加载动画
	**/
    showNavigationBarLoading();

    /**
     * 隐藏导航条加载动画
	**/
    hideNavigationBarLoading();

    /**
     * 保留当前页面，跳转到应用内的某个页面，使用wx.navigateBack可以返回到原页面
	**/
    navigateTo(options: wx.NavigateToOptions);

    /**
     * 关闭当前页面，跳转到应用内的某个页面
	**/
    redirectTo(options: wx.RedirectToOptions);

    /**
     * 关闭当前页面，回退前一页面
	**/
    navigateBack();

    /**
     * 创建一个动画实例animation。调用实例的方法来描述动画。最后通过动画实例的export方法导出动画数据传递给组件的animation属性。
	**/
    createAnimation(options: wx.CreateAnimationOptions): wx.Animation;

    /**
     * 创建并返回绘图上下文context对象
     * context只是一个记录方法调用的容器，用于生成记录绘制行为的actions数组。context跟<canvas/>不存在对应关系，一个context生成画布的绘制动作数组可以应用于多个<canvas/>
	**/
    createContext(): wx.Context;

    /**
     * 收起键盘
	**/
    hideKeyboard();

    /**
     * 停止当前页面下拉刷新
	**/
    stopPullDownRefresh();

    /**
     * 调用接口获取登录凭证(code)进而换取用户登录态信息，包括用户的唯一标识(openid) 及本次登录的 会话密钥(session_key)。用户数据的加解密通讯需要依赖会话密钥完成。
	**/
    login(options: wx.LoginOptions);

    /**
     * ​获取用户信息，需要先调用wx.login接口
	**/
    getUserInfo(options: wx.GetUserInfoOptions);

    /**
     * ​发起微信支付
	**/
    requestPayment(options: wx.RequestPaymentOptions);
}

declare var wx: WeixinStatic;