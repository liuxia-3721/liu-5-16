import React from "react"
import "./product.css"
import G2 from "@antv/g2"
import Store from "../../store/index"
import { observer } from "mobx-react"
const mobx = require("mobx")
@observer
class Product extends React.Component{

    render(){
        return (
            <div id="product">
                商品信息页
            </div>
        )
    }

    componentDidMount(){

        // window.axios(
        //     "/msg.json"
        // ).then(
        //     res=>{
        //         Store.change(res.data)
                
        //         chart.source(Store.arr) 
        //         chart.interval().position('genre*sold').color('genre')
        //         chart.render()
        //     }
        // )

        // const chart = new G2.Chart({
        //     container: 'product', // 指定图表容器 ID
        //     width: 770, // 指定图表宽度
        //     height: 340 // 指定图表高度
        // });

        // /////////////////////////////////////////////////////////

        // var chart = new G2.Chart({
        //     container: 'product',
        //     forceFit: true,
        //     height:300,
        //     background: {
        //         // fill: {string}, // 图表背景色
        //         // fillOpacity: {number}, // 图表背景透明度 0-1
        //         // stroke: {string}, // 图表边框颜色
        //         // strokeOpacity: {number}, // 图表边框透明度
        //         // opacity: {number}, // 图表整体透明度
        //         // lineWidth: {number}, // 图表边框粗度
        //         // radius: {number} // 图表圆角大小
        //       },
        //       animate:true
        //   });

        //   chart.source(Store.arr,{
        //     type: {
        //         type: 'cat', // 声明 type 字段为分类类型
        //         values: [ 'A', 'B', 'C' ] ,// 重新显示的值
        //         alias: '小七' // 设置属性的别名
        //       }
        //   });

        //   chart.scale('type', {
        //     min: 0
        //   });
        //   chart.scale('value', {
        //     range: [0, 1]
        //   });
        //   chart.tooltip({
        //     crosshairs: {
        //       type: 'line'
        //     }
        //   });
        //   chart.line().position('type*value');
        //   chart.point().position('type*value').size(4).shape('circle').style({
        //     stroke: '#fff',
        //     lineWidth: 1
        //   });
        //   chart.render();
        //---------------------------------------------------------------

        let chart = new G2.Chart({
            container: 'product',
            forceFit: true,
            height: window.innerHeight
          });
          chart.source(Store.arr);
          chart.coord('polar');
          chart.legend({
            position: 'right',
            offsetY: -window.innerHeight / 2 + 180,
            offsetX: -140
          });
          chart.axis(false);
          chart.interval().position('year*population').color('year', G2.Global.colors_pie_16).style({
            lineWidth: 1,
            stroke: '#fff'
          });
          chart.render();
    }
}
export default  Product